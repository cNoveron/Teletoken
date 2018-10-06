pragma solidity ^0.4.0;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract TokenTeleton is StandardToken {
  string public nombre = "TeleToken";
  string public denominacion = "MXN para Teleton";
  uint public decimales = 2;
  uint public oferta_total = 456013739;

  constructor() public {
    totalSupply_ = oferta_total;
    balances[msg.sender] = oferta_total;
  }
}
