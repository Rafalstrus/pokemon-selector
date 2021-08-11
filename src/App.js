import {useEffect,useState} from 'react'
import './App.css';


import { PokeSelect } from './components/pokemon-select/pokemon-select.component';
import { PokeCard } from './components/pokemon-card/pokemon-card-container.component';
import {Loader} from "./components/loader/loader.component";

import ACTIONS from "./store-redux/action";
import { connect } from "react-redux";


function App({createItem, deleteItem}) {
  const [pokemon,setPokemon] = useState({})
  useEffect( ()=>{
    async function fetchData(){
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then((res)=>res.json())
      setPokemon(response)
    }
    fetchData()
  },[])
  return (
    <div className="App">
      <Loader/>
      <div>
      <PokeSelect 
      setPokemon={setPokemon}
      />
      <PokeCard 
      pokemon={pokemon}
      />
    <button onClick={() => {
      createItem("#");
    }}>
add
    </button>
    <button onClick={() => {
      deleteItem("#");
    }}>
delete
    </button>
    </div>
    </div>
  );
}

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  createItem: item => dispatch(ACTIONS.createItem(item)),
  deleteItem: id => dispatch(ACTIONS.deleteItem(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)((App));
