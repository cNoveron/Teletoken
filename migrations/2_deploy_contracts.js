var TokenTeleton = artifacts.require("TokenTeleton");
//var RecaudacionTeleton = artifacts.require("RecaudacionTeleton");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(TokenTeleton);
  //deployer.deploy(RecaudacionTeleton,{gas: 99999999999999, from: accounts[0]});
};
