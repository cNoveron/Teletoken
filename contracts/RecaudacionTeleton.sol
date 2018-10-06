pragma solidity ^0.4.0;

import "openzeppelin-solidity/contracts/crowdsale/Crowdsale.sol";

contract RecaudacionTeleton is Crowdsale {

    function AsignarTeletokens(address beneficiario) public payable {
        buyTokens(beneficiario);
    }

    function DonarTeletokens(uint256 cuantosTokens) public payable {
        token.approve(msg.sender,cuantosTokens);
    }
}
