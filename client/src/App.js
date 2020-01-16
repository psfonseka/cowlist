import React from 'react';
import CowItem from './CowItem.js';
const axios = require('axios');

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      list: [],
      nameEntry: "",
      descriptionEntry: ""
    };

    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log("Successful Mount!");
    this.getCows()
  }

  handleChange(event) {
    let property = event.target.name;
    this.setState({[property]: event.target.value});
  }

  handleSubmission(event) {
    console.log("Click!");
    let newDescription = this.state.descriptionEntry;
    let newName = this.state.nameEntry;
    this.postCow(newName, newDescription);

  }

  render() {
    return (
    <div>
      <h1>{this.state.title}</h1>
      <form>
        <label>
          Name:
          <input type="text" name="nameEntry" value={this.state.nameEntry} onChange={this.handleChange}/>
        </label>
        <label>
          Description:
          <input type="text" name="descriptionEntry" value={this.state.descriptionEntry} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" onClick={this.handleSubmission}/>
      </form>
      <ul>{
        this.state.list.map((item, i) => {
          //return <li key={i}>{item.Name + ": " + item.Description} </li>
          return <CowItem key={i} cow={item} />
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

  postCow(name, description) {
    axios.post('/cows', {
      cow: {
        name: name, description: description
      }
    });
  }

}



export default App;