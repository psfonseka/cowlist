import React from 'react';

const CowItem = (props) => {
    return (
    <li>
      {props.cow.Name + ": " + props.cow.Description + " Time: " + props.cow.Time}
    </li>
    )

};

export default CowItem;