pragma solidity ^0.4.0;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract TokenTeleton is StandardToken, Ownable {
  string public nombre = "TeleToken";
  string public denominacion = "MXN donados al Teleton";
  uint public decimales = 2;
  uint public oferta_total = 456013739 * 10**uint(decimales);
  
  constructor() public {
    totalSupply_ = oferta_total;
    balances[msg.sender] = oferta_total;
  }
}
