import React, { Component } from 'react'
import { AccountData, ContractData } from 'drizzle-react-components'
//import ContractForm from 'drizzle-react-components'
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
      </div>
    )
  }
}

export default Home
