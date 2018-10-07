import React, { Component } from 'react'
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components'
import logo from '../../logo.png'

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
    if(event.target.value < 10)
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
          <br/><br/>
          <strong>approve</strong>: <br/>
          <ContractForm 
            contract="TokenTeleton" 
            method="approve"
          />
          <br/><br/>
          <strong>transferFrom</strong>: <br/>
          <ContractForm 
            contract="TokenTeleton" 
            method="transferFrom"
          />
          <p>
            <strong>balanceOf</strong>: {this.state.currentAccount.address}<br/>
            <ContractData 
              contract="TokenTeleton" 
              method="balanceOf" 
              methodArgs={[this.state.currentAccount.address]}
            />
            <ContractData 
              contract="TokenTeleton" 
              method="denominacion"
            />
          </p>
        <br/><br/>
        </div>

        <div className="pure-u-1-1">
            <strong>buyTokens</strong>: <br/>
            <ContractForm 
              contract="RecaudacionTeleton" 
              method="buyTokens"
              sendArgs={{from:this.state.currentAccount.address,value:100}}
            />
            <p>
              <strong>balanceOf</strong>: <br/>
              <ContractData 
                contract="TokenTeleton" 
                method="balanceOf" 
                methodArgs={[this.state.currentAccount.address]}
              />
              <ContractData 
                contract="TokenTeleton" 
                method="denominacion"
              />
            </p>
          </div>
        
      </div>
    )
  }
}

export default Home
