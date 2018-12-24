import React, { Component } from 'react';
import axios from 'axios';
let NumberFormat = require('react-number-format');

class Table extends Component {


     constructor(props) {
         super(props);
         this.state = {
             cryptos: []
         };
     }
     componentDidMount() {
         axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,XRP,LTC,EOS,ADA,XLM,ETH,IOT&tsyms=USD')
             .then(res => {
                 const cryptos = res.data;
                 this.setState({
                     cryptos: cryptos
                 })
             })
     }
    render() {
        return (
            <div>
    <table class="table">
    <div id="container">
    <tbody>
        {
            Object.keys(this.state.cryptos).map((key) => (
                    <tr>
                      <th scope="row">{key}</th>
                      <td>{this.state.cryptos[key].symbol}</td>
                      <td><NumberFormat value={this.state.cryptos[key].USD} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'$'}/></td>
                    </tr>      
          ))}
          </tbody>
          </div>
          </table>
            </div>
        );
    }
}

export default Table;
