import React, { Component } from 'react';

import Header from './header';
import InputForm from './inputForm';
import './app.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <React.Fragment>
        <h1>it works</h1>
        <Header />
        <InputForm />
      </React.Fragment>  
     );
  }
}
 
export default Main;