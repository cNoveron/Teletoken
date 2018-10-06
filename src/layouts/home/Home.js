import React, { Component } from 'react'
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components'
import logo from '../../logo.png'

class Home extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      currentAccount: {
        index: 0,
        address: '',
      }
    }
    this.changeIndex = this.changeIndex.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
  }
  
  changeIndex(event) {
    this.setState({
      currentAccount: {
        index: event.target.value,
        address: '',
      }
    })
  }
  
  updateAddress(event) {
    this.setState(prevState => ({
      currentAccount: {
        ...prevState,
        address: event.target.value,
      }
    }))
  }

  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1 header">
            <img src={logo} alt="drizzle-logo" />
            <h1>Teletoken</h1>
            <p>Cómo rastrear donaciones con Tokens ERC20 de Ethereum.</p>

            <br/><br/>
          </div>

          <div className="pure-u-1-1">
            <h2>Cuenta actual</h2>
            <AccountData 
              accountIndex={""+this.state.currentAccount.index}  
              units="ether" 
              precision="3"
              onChange={this.updateAddress} 
            />
            <input 
              type="text" 
              value={this.state.currentAccount.index} 
              onChange={this.changeIndex} 
            />
            <br/><br/>
          </div>

          <div className="pure-u-1-1">
            <h2>Smart Contract</h2>
            <p>Funciones principales.</p>
            <p>
              <strong>totalSupply</strong>: 
              <ContractData 
                contract="TokenTeleton" 
                method="totalSupply"
                />
            </p>
            <p>
              <strong>balanceOf</strong>: 
              <ContractData 
                contract="TokenTeleton" 
                method="balanceOf" 
                methodArgs={[this.state.currentAccount.address]}
                />
            </p>
            <ContractForm 
              contract="TokenTeleton" 
              method="transfer"
            />
            <br/><br/>
          </div>

        </div>
      </main>
    )
  }
}

export default Home
