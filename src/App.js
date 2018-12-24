import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Button } from 'reactstrap';
let NumberFormat = require('react-number-format');
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      cryptos:[]
    };
  }

  componentDidMount(){
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,XRP,ETH,BCH,EOS,XLM,LTC,BSV,USDT,TRX&tsyms=USD')
    .then( res => {
      const cryptos = res.data;
      console.log(cryptos);
      this.setState({cryptos:cryptos})
    })
  }

  render() {
    return (
      <div className="App">
              {Object.keys(this.state.cryptos).map((key)=> (
                <div id="container">
                <table class="table">
                <tbody>
                    <tr>
                      <th scope="row">{key}</th>
                      <td><NumberFormat value={this.state.cryptos[key].USD} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'$'}/></td>
                    </tr>
                  </tbody>
                  </table>
                </div>
          ))} 
      </div>
    );
  }
}

export default App;
