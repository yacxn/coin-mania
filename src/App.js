import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/header';
import Table from './components/table';
import Section from './components/section';
import Hero from './components/hero';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Hero/>
      <Container className="sec">
        <Table/>
      </Container>
      </div>
    );
  }
}

export default App;
