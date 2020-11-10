import React, { Component } from 'react';
import Header from './component/header';
import Headline from './component/headline';
import './app.scss';

//We have a temp array with some data that we will pass to the Headline class
//This is an array [] which contains one object {}
const tempArr = [{
  fName: 'Joe',
  lName: 'Biden',
  email: 'winner@gmail.com',
  age: 77,
  onlineStatus: true
}]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to remder posts" tempArr = {tempArr}/>
        </section>
      </div>
    )
  }
}

export default App;
