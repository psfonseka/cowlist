import React from 'react';
const axios = require('axios');

class App extends React.Component {

  constructor(props) {
    super(props);
    this.title = props.title;
  }

  componentDidMount() {
    console.log("Successful Mount!");
    axios.get(`localhost:3000`)
    .then(res => {
      console.log(res);
    });
  }

  render() {
    return (
    <h1>{this.title}</h1>

    );
  }

  fetchCows() {
    console.log("test");
  }

}



export default App;