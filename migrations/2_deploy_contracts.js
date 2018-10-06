var TokenTeleton = artifacts.require("TokenTeleton");
var RecaudacionTeleton = artifacts.require("RecaudacionTeleton");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(TokenTeleton)
  .then(function(TokenTeleton_deployed){
    return deployer.deploy(
      RecaudacionTeleton,
      1,
      accounts[0],
      TokenTeleton_deployed.address,
    )
  })
  
};
