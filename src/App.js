import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import Header from './components/header/';
import Table from './components/table';
import Hero from './components/hero/';
import Info from './components/info';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Hero/>
        <Container className="sec">
          <Table/>
        </Container>
        <Info/>
      </div>
    );
  }
}

export default App;
