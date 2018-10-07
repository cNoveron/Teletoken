import React, { Component } from 'react'
import { AccountData, ContractData } from 'drizzle-react-components'
//import ContractForm from 'drizzle-react-components'

import TopBar from '../components/TopBar'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import MainContent from '../components/MainContent'
import BackToTop from '../components/BackToTop'
import Footer from '../components/Footer'

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
    console.log(event.target)
    this.setState({
      currentAccount: {
        index: event.target.value,
        address: '',
      }
    })
  }
  
  updateAddress(event) {
    console.log(event.target)
    this.setState(prevState => ({
      currentAccount: {
        ...prevState,
        address: event.target.value,
      }
    }))
  }

  render() {
    console.log(AccountData)
    return (
      <div>
        <TopBar />
        <Header />
        <Carousel />
        <MainContent />
        <Footer />
        <BackToTop />

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
            {/*<ContractForm 
              contract="TokenTeleton" 
              method="transfer" 
            />*/}
            <br/><br/>
          </div>
      </div>
    )
  }
}

export default Home
