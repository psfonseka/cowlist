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
    this.getCows()
  }

  render() {
    return (
    <div>
      <h1>{this.state.title}</h1>
      <ul>{
        this.state.list.map((item, i) => {
          return <li key={i}>{item.Name + ": " + item.Description}</li>
        })
      }</ul>
    </div>
 
    );
  }

  getCows() {
    axios.get(`/cows`)
    .then(res => {
      this.setState({list: res.data.results});
      this.render();
    });
  }

}



export default App;