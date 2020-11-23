const uSwapp = artifacts.require("uSwapp");
module.exports = async function(callback) {
  let uswapp = await uSwapp.deployed();
  balance = await uswapp.getBalance();
  console.log("Balance of the contract");
  console.log(balance);
  callback();
};
