import React, { Component } from 'react';
import axios from 'axios';
import './table.css';

const CRYPTOCOMPARE_API_URI = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD';
const BaseImageUrl = "https://www.cryptocompare.com";

class Table extends Component {
     constructor(props) {
         super(props);
         this.state = {
                coinsData: [],
         };
        this.loadData = this.loadData.bind(this);
     }
//Get Data from API and set state
      async loadData() {
          const coinsData = await axios.get(CRYPTOCOMPARE_API_URI);
          this.setState({
              coinsData: coinsData.data.Data,
          });

      }
      async componentDidMount() {
          await this.loadData();
          setInterval(this.loadData, 4000);
      }

    render() {
                 return (
            <div className="card main-table table-responsive table-hover">
                <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Logo</th>
                                <th scope="col">Symbol</th>
                                <th scope="col">Price</th>
                                <th scope="col">Volume(24)</th>
                                <th scope="col">Market Cap</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.coinsData.map((coin, index) => (
                                            <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{coin.CoinInfo.FullName}</td>
                                            <td><img id="coin-image" src={BaseImageUrl + coin.CoinInfo.ImageUrl} alt="logo"></img></td>
                                            <td>{coin.CoinInfo.Name}</td>
                                            <td>{coin.DISPLAY.USD.PRICE}</td>
                                            <td>{coin.DISPLAY.USD.VOLUME24HOURTO}</td>
                                            <td>{coin.DISPLAY.USD.MKTCAP}</td>
                                            </tr>      
                                ))}
                                </tbody>

                        </table>
            </div>
        );

    }
}

export default Table;
