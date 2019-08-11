import React from 'react';
const axios = require('axios');

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      list: []
    };
  }

  componentDidMount() {
    console.log("Successful Mount!");
    this.getCows();
  }

  render() {
    return (
    <h1>{this.state.title}</h1>

    );
  }

  getCows() {
    axios.get(`/cows`)
    .then(res => {
      this.setState({list: res.data.results});
    });
  }

}



export default App;