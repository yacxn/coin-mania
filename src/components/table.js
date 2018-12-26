import React, { Component } from 'react';
import axios from 'axios';
import './table.css';
let NumberFormat = require('react-number-format');




const CRYPTOCOMPARE_API_URI = 'https://www.cryptocompare.com/api/data/coinlist/';
const COINMARKETCAP_API_URI = 'https://api.coinmarketcap.com/v1/ticker/?limit=20'; 
const CRYPTOLEXT = 'https://www.cryptocompare.com/';


class Table extends Component {


     constructor(props) {
         super(props);
         this.state = {
                coinsData: [],
                coinsMetaData: {},
                cryptoCompareOk: false,
         };
        this.loadData = this.loadData.bind(this);
     }

      async loadData() {
          const coinsData = await axios.get(COINMARKETCAP_API_URI);
          this.setState({
              coinsData: coinsData.data,
          });

          const coinsMetaData = await axios.get(CRYPTOCOMPARE_API_URI);
          this.setState({
              coinsMetaData: coinsMetaData.data.Data,
              cryptoCompareOk: true,
          });
      }

      async componentDidMount() {
          await this.loadData();
          setInterval(this.loadData, 4000);
      }

      getCoinImage(symbol) {
          if (!this.state.cryptoCompareOk) return "";
          return CRYPTOLEXT + this.state.coinsMetaData[symbol];
      }
    render() {
                 return (
            <div class="card main-table">
                    <table class="table">
                    <div id="container">
                            <tbody>
                                {
                                    this.state.coinsData.map((coin, index) => (
                                            <tr>
                                            <th scope="row">{coin.name}</th>
                                            <td>{coin.symbol}</td>
                                            <td><NumberFormat value={coin.price_usd} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'$'}/></td>
                                            <td>{coin.percent_change_1h}</td>
                                            <td>{coin.percent_change_24h}</td>
                                            <td>{coin.percent_change_7d}</td>
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
