import React, { Component } from 'react';
import { Container, Col } from 'reactstrap';
import logo from './logo.svg';
import Paginations from './components/paginations';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Container>
          <Col>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>            
          </Col>
          <Col xs={12}>
            <Paginations 
              size="sm" 
              lastPage={4} 
              perPage={10}
              total={200}
              maxPage={8}
              path='#'
              currentPage={1} 
              prevPageUrl='#' 
              nextPageUrl='#' 
            />  

          </Col>
        </Container>
      </div>
    );
  }
}

export default App;
