// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./YourToken.sol";

// Learn more about the ERC20 implementation 
// on OpenZeppelin docs: https://docs.openzeppelin.com/contracts/4.x/api/access#Ownable
import "@openzeppelin/contracts/access/Ownable.sol";


contract Vendor is Ownable {

    // ------------------------------------------------------------------------
    // Fields required for the referendum
    // ------------------------------------------------------------------------
    Description public description;
    Props public props;
    Reward public reward;
    bool public open;
    
    struct Description {
        string question;
        string firstProp;
        string secondProp;
    }

    struct Props {
        address firstPropAddress;
        address secondPropAddress;
        address blankVoteAddress;
    }

    struct Reward {
        address tokenAddress;
        address refundWalletAddress; 
    }

    event VoteRewarded(address indexed to, uint amount);
    event Finish(string question, 
        string firstProp, uint firstPropCount, 
        string secondProp, uint secondPropCount, uint blankVoteCount);


  // Our Token Contract
  YourToken yourToken;

  // token price for ETH
  uint256 public tokensPerEth = 100;

  // Event that log buy operation
  event BuyTokens(address buyer, uint256 amountOfETH, uint256 amountOfTokens);

  constructor() {
    yourToken = new YourToken();
  }


  /**
  * @notice Allow users to buy token for ETH
  */
  function buyTokens() public payable returns (uint256 tokenAmount) {
    require(msg.value > 0, "Send ETH to buy some tokens");

    uint256 amountToBuy = msg.value * tokensPerEth;

    // check if the Vendor Contract has enough amount of tokens for the transaction
    uint256 vendorBalance = yourToken.balanceOf(address(this));
    require(vendorBalance >= amountToBuy, "Vendor contract has not enough tokens in its balance");

    // Transfer token to the msg.sender
    (bool sent) = yourToken.transfer(msg.sender, amountToBuy);
    require(sent, "Failed to transfer token to user");

    // emit the event
    emit BuyTokens(msg.sender, msg.value, amountToBuy);

    return amountToBuy;
  }

  /**
  * @notice Allow the owner of the contract to withdraw ETH
  */
  function withdraw() public onlyOwner {
    uint256 ownerBalance = address(this).balance;
    require(ownerBalance > 0, "Owner has not balance to withdraw");

    (bool sent,) = msg.sender.call{value: address(this).balance}("");
    require(sent, "Failed to send user balance back to the owner");
  }

    // ------------------------------------------------------------------------
    // Codes required for the voting
    // ------------------------------------------------------------------------
    function setReferendum(string memory _question, string memory _firstProp, string memory _secondProp,address _firstPropAddress, address _secondPropAddress, address _blankVoteAddress) public {
        description = Description(_question, _firstProp, _secondProp);
        props = Props(_firstPropAddress, _secondPropAddress, _blankVoteAddress);
        open = true;
                                          }



    function getResults() public view returns (uint firstPropCount, uint secondPropCount, uint blankVoteCount) {
          return (yourToken.balanceOf(props.firstPropAddress) ,yourToken.balanceOf(props.secondPropAddress),yourToken.balanceOf(props.blankVoteAddress)) ;
    }

    function close() public onlyOwner returns (bool success) {
        require(open);
        open = false;
        emit Finish(description.question, 
            description.firstProp, props.firstPropAddress.balance, 
            description.firstProp, props.secondPropAddress.balance, 
            props.blankVoteAddress.balance);

        return true;
    }