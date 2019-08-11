import React from 'react';

class CowItem extends React.Component {
    constructor(props){
      super(props);
    }
  
  render() { 
    return (
    <li>
      {this.props.name + ": " + this.props.description}
    </li>
    )
  } 

};

export default CowItem;