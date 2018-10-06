import TokenTeleton from './../build/contracts/TokenTeleton.json'
//import RecaudacionTeleton from './../build/contracts/RecaudacionTeleton.json'

const drizzleOptions = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:8545'
    }
  },
  contracts: [
    TokenTeleton,
    //RecaudacionTeleton
  ],
  events: {
    SimpleStorage: ['StorageSet']
  },
  polls: {
    accounts: 1500
  }
}

export default drizzleOptions