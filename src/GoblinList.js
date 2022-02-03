import React from 'react';
import Goblin from './Goblin';

export default function GoblinList(props) {
  console.log(props);
  return (
    <div className='goblin-list quarter'>

      {
        props.goblins.map((goblin, i) => <div key={`${goblin.id}${i}`} >
          <Goblin goblin={goblin} handleDeleteGoblin={props.handleDeleteGoblin}/>
        </div>)
      }
      
      {/* map over your goblins and render out a Goblin component for each goblin. You've seen this before. The only difference here is that you need to pass handleDeleteGoblin (a prop that is a function), as well */}
    </div>
  );
}
