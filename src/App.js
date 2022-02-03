import { useState } from 'react';
import './App.css';
import GoblinForm from './GoblinForm';
import GoblinList from './GoblinList';
import Goblin from './Goblin';

function App() {
  /* 
    track: 
      x allGoblins, an array of all goblins
      x filteredGoblins, a second array of goblins: this one is the filtered version of the above allGoblins array
      x goblinFormName, which is how we track the user input for the current name of the goblin in the form
      x goblinFormHP, which is how we track the user input for the current HP of the goblin in the form
      x goblinFormColor, which is how we track the user input for the current color of the goblin in the form
*/
  const [allGoblinsArr, setAllGoblinsArr] = useState([]);
  const [filteredGoblinsArr, setFilteredGoblinsArr] = useState([]);
  const [goblinFormName, setGoblinFormName] = useState(``);
  const [goblinFormHP, setGoblinFormHP] = useState(0);
  const [goblinFormColor, setGoblinFormColor] = useState(`pink`);

  
  function submitGoblin(newGoblin) {
    // on submit, make a new goblin object with a random id, a name that comes from the form state, an hp that comes from the form state, and a color that comes from the form state
    const updateGoblins = [...allGoblinsArr, newGoblin];
    setAllGoblinsArr([...updateGoblins]);
    // console.log(updateGoblins);
    // update the allGoblins array. Add the new goblin to the allGoblins array immutably.




    // clear out the goblin form state items by setting them to empty strings. This will cause the form to reset in the UI.
    setGoblinFormName(``);
    setGoblinFormHP(0);
    setGoblinFormColor(`pink`);
  }

  function handleDeleteGoblin(id) {
    // find the index of the goblin in allGoblins with this id
    const index = allGoblinsArr.findIndex(goblin => goblin.id === id);
    // use splice to delete the goblin object at this index
    allGoblinsArr.splice(index, 1);
    // update the allGoblins array immutably to this new, smaller array
    setAllGoblinsArr([...allGoblinsArr]);
  }

  function handleFilterGoblins(search) {
    // use the filter method to get an array of goblins whose name includes this search argument
    const filteredGoblins = allGoblinsArr.filter(goblin => goblin.names.includes(search));

    setFilteredGoblinsArr(filteredGoblins);
    // if there is a search argument, set the filtered goblins to the filtered goblins
    // if the search argument is undefined, set the filtered goblins in state to just be the array of all goblins
  }


  return (
    <div className="App">
      <div className='current-goblin quarter'>
        <Goblin goblin={{
          /* 
            use the goblin form state to make a goblin object and to display it. 
            This will let the user see the current form state 
          */
          names: goblinFormName,
          hitPoints: goblinFormHP,
          color: goblinFormColor

        }} />
      </div>
      <div className='goblin-filter quarter'>
        Filter Goblins
        {/* note that handleFilterGoblins is defined upstairs. This is where the allGoblins array gets filtered */}
        <input onChange={(e) => handleFilterGoblins(e.target.value)} />
      </div>
      <GoblinForm 
        goblinFormName={goblinFormName} 
        setGoblinFormName={setGoblinFormName}
        goblinFormColor={goblinFormColor} 
        setGoblinFormColor={setGoblinFormColor}
        goblinFormHP={goblinFormHP} 
        setGoblinFormHP={setGoblinFormHP}
        submitGoblin={submitGoblin}
        /*
        This component takes in a ton of props! 
        Here is the list of props to pass:
          submitGoblin,
          goblinFormName, 
          setGoblinFormName,
          goblinFormColor, 
          setGoblinFormColor,
          goblinFormHP, 
          setGoblinFormHP,
        */
      />
      <GoblinList goblins={
        filteredGoblinsArr.length ? filteredGoblinsArr : allGoblinsArr
      }
      handleDeleteGoblin={handleDeleteGoblin}
      />
    </div>
  );
}

export default App;
