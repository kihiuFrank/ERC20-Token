pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BlockToken is ERC20 {
    constructor(uint256 initialSupply) public ERC20Detailed("Block", "BLK") {
        _mint(msg.sender, initialSupply);
    }
}
