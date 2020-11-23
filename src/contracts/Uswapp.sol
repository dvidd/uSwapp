pragma solidity >=0.5.0;

contract uSwapp {
    string public name = "uSwapp";
    uint256 public swapsCount = 0;

    address payable public owner;
    address payable public recipient; // The account receiving the payments.

    // Set user
    mapping(address => User) public users;

    address[] public addresses;

    mapping(uint256 => Swap) public swaps;

    constructor(address payable _recipient) public {
        owner = msg.sender;
    }

    // Get contract balance
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    // Deposit into the contract
    function deposit(uint256 amount) public payable {
        require(msg.value == amount);
        // nothing else to do!
    }

    function withdraw(uint256 ammount) public {
        recipient.transfer(ammount);
    }

    // Creat user
    function createUser(string memory _username) public {
        require(bytes(_username).length != 0);
        // Make sure uploader address exists
        require(msg.sender != address(0));
        User storage user = users[msg.sender];
        // Check that the user did not already exist:
        require(!user.set);
        //Store the user
        users[msg.sender] = User({username: _username, set: true});
        emit userCreated(msg.sender, _username);
    }

    event userCreated(address userAddress, string username);

    struct User {
        string username;
        bool set; // This boolean is used to differentiate between unset and zero struct values
    }

    struct Swap {
        uint256 id;
        string title;
        string description;
        uint256 ammount;
        address contractor;
        address creator;
        bool doneContractor;
        bool doneCreator;
        bool done;
    }

    event SwapCreated(
        uint256 id,
        string title,
        string description,
        uint256 ammount,
        address contractor,
        address creator,
        bool doneContractor,
        bool doneCreator,
        bool done
    );

    // Create a new contract
    // Todo Widhtdraw the ammount for the contract
    function storeETH() public payable {}

    // Think obout how is making the contract and how we could do it so it works
    // In boths ways
    function createNewSwap(
        string memory _title,
        string memory _description,
        uint256 _amount,
        address _contractor
    ) public payable {
        require(_amount > 0, "amount cannot be 0");
        // check validity of swap info
        require(bytes(_title).length != 0);
        require(bytes(_description).length != 0);
        // Check that contract address exists
        require(_contractor != address(0));
        // Make sure uploader address exists
        require(msg.sender != address(0));

        swapsCount++;
        swaps[swapsCount] = Swap(
            swapsCount,
            _title,
            _description,
            _amount,
            _contractor,
            msg.sender,
            false,
            false,
            false
        );
        // emit event
        emit SwapCreated(
            swapsCount,
            _title,
            _description,
            _amount,
            _contractor,
            msg.sender,
            false,
            false,
            false
        );
    }

    // Both parties check the list on done
    function checkValidity(uint256 _swapId) public {
        // Check that the sender belong two the contract
        require(
            msg.sender == swaps[_swapId].contractor ||
                msg.sender == swaps[_swapId].creator
        );
        // check if is the contractor
        if (msg.sender == swaps[_swapId].contractor) {
            swaps[_swapId].doneContractor = true;
        }
        // Check if is the creator
        if (msg.sender == swaps[_swapId].creator) {
            swaps[_swapId].doneCreator = true;
        }
        // If both are check are check mark done the contract
        if (
            swaps[_swapId].doneCreator == true &&
            swaps[_swapId].doneContractor == true
        ) {
            swaps[_swapId].done == true;
            // Withdraw the ammount to the reciver wich is specify in the constructor of the contract
            withdraw(swaps[_swapId].ammount);
        }
    }

    // Introduce tokens to the contract
    // Set other user contract

    // Transfer token if the job is done
}
