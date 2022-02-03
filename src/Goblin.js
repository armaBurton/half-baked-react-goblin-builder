import React from 'react';

export default function Goblin(props) {
  console.log(props);
  return (
    // be sure you take a look at this component i'm handing you and figure out what props it will need to work correctly.
    <div 
      className='goblin' 
      onClick={() => props.handleDeleteGoblin && props.handleDeleteGoblin(props.goblin.id)}>
      <h3>{props.goblin.names}</h3>  
      <img src="goblin.png" style={{ backgroundColor: props.goblin.color }} />
      <p>{props.goblin.hitPoints} HP</p>
    </div>
  );
}
