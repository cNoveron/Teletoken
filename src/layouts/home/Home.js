import React, { Component } from 'react'
import { AccountData, ContractData } from 'drizzle-react-components'
//import ContractForm from 'drizzle-react-components'
import logo from '../../logo.png'

class Home extends Component {
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
            <AccountData accountIndex="0" units="ether" precision="3" />

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
                methodArgs={['0xC7e76e5f1D33BE441E890a7F2aCE9468f40345C7']}
                />
            </p>
            {/*<ContractForm 
              contract="RecaudacionTeleton" 
              method="AsignarTeletokens" 
            />*/}
            <br/><br/>
          </div>

        </div>
      </main>
    )
  }
}

export default Home
