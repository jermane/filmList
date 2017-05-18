import React, { Component } from 'react';
import './App.css';
import FormContainer from './components/Form';
import SearchBox from './components/SearchBox';
import Search from './components/Search';
import Films from './components/Films';
import {listenFor} from 'react-global-events';


class App extends Component {
  render() {
    return (
      
        <div className="App" {...listenFor('onsubmit')}>
          <div className="App-header">
            <h1>Movie Lister</h1>
          </div>
            <div>
                <FormContainer />
            </div>
            <div className="ListContainer">
              <SearchBox onSearchChange={this.onSearchChange} />
              <Films />
            </div>
        </div>
    
    );
  }
}

export default App;
