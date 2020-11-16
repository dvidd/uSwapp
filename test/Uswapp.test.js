const uSwapp = artifacts.require("uSwapp");

require("chai")
  .use(require("chai-as-promised"))
  .should();

contract("uSwapp", ([deployer, contractor]) => {
  let uswapp;

  before(async () => {
    uswapp = await uSwapp.deployed();
  });

  describe("deployment", async () => {
    it("deploys successfully", async () => {
      const address = await uswapp.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });

    it("has a name", async () => {
      const name = await uswapp.name();
      assert.equal(name, "uSwapp");
    });
  });
  // create a new swap contract
  describe("swaps", async () => {
    let result, swapsCount;

    const title = "Trade of work";
    const description = "Trade work to do a contracting for working on project";
    const ammount = 100;

    before(async () => {
      result = await uswapp.createNewSwap(
        title,
        description,
        ammount,
        contractor
      );
      swapsCount = await uswapp.swapsCount();
    });

    //check event
    it("check event of creation new swap", async () => {
      // SUCESS
      assert.equal(swapsCount, 1);
      const event = result.logs[0].args;
      // check num
      assert.equal(event.id.toNumber(), swapsCount.toNumber(), "id is correct");

      // data of the function
      assert.equal(event.title, title, "Title is correct");
      assert.equal(event.description, description, "Description is correct");
      assert.equal(event.ammount, ammount, "Ammont is correct");
      assert.equal(event.contractor, contractor, "Contractor is correct");

      // other data of the swap
      assert.equal(event.creator, deployer, "creator is correct");
      assert.equal(event.doneContractor, false, "doneContractor is correct");
      assert.equal(event.doneCreator, false, "doneCreator is correct");
      assert.equal(event.done, false, "done is correct");

      // Must have title
      await uswapp.createNewSwap("", description, ammount, contractor).should.be
        .rejected;

      // Must have description
      await uswapp.createNewSwap(title, "", ammount, contractor).should.be
        .rejected;
    });

    //check from Struct
    it("Get a swapp", async () => {
      const swap = await uswapp.swaps(swapsCount);
      assert.equal(swap.id.toNumber(), swapsCount.toNumber(), "id is correct");

      // data of the function
      assert.equal(swap.title, title, "Title is correct");
      assert.equal(swap.description, description, "Description is correct");
      assert.equal(swap.ammount, ammount, "Ammont is correct");
      assert.equal(swap.contractor, contractor, "Contractor is correct");

      // other data of the swap
      assert.equal(swap.creator, deployer, "creator is correct");
      assert.equal(swap.doneContractor, false, "doneContractor is correct");
      assert.equal(swap.doneCreator, false, "doneCreator is correct");
      assert.equal(swap.done, false, "done is correct");
    });
  });

  // Add username by address
  describe("Username", async () => {
    let result;
    before(async () => {
      result = await uswapp.createUser("dvidd");
    });

    //check event
    it("check event of creation new user", async () => {
      const event = result.logs[0].args;

      // data of the function
      assert.equal(event.userAddress, deployer, "User Address is correct");
      assert.equal(event.username, "dvidd", "Username is correct");

      assert.equal(event.username, "dvidd", "Username is correct");

      // Must be a valid addreess
      await uswapp.createUser("").should.be.rejected;
    });

    //check from Struct
    it("Get the user", async () => {
      const user = await uswapp.users(deployer);

      // data of the function
      assert.equal(user.username, "dvidd", "Username is correct");
      assert.equal(user.set, true, "Set user is correct");
    });
  });
  // check user name

  // check validity of the work

  // Aprove transaction and send tokens
});
