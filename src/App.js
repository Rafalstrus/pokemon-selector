import { useEffect, useState } from 'react'
import './App.css';


import { PokeSelect } from './components/pokemon-select/pokemon-select.component';
import { PokeCard } from './components/pokemon-card/pokemon-card-container.component';
import { Loader } from "./components/loader/loader.component";

import ACTIONS from "./store-redux/action";
import { connect } from "react-redux";
import store from './store-redux/store';


function App({ changeID, deleteItem }) {
  const [pokemoninfo, setPokemonInfo] = useState({})
  const [pokemonid,setPokemonId] = useState("1")
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then((res) => res.json())
      setPokemonInfo(response)
    }
    fetchData()
  }, [])

  store.subscribe(() => {
    setPokemonId(store.getState().pokemonid)
  })

  return (
    <div className="App">
      <Loader />
      <div>
        <PokeSelect
          changeID={changeID}
        />
        <PokeCard
          pokemoninfo={pokemoninfo}
        />
        <button onClick={() => {
          changeID(5);
        }}>
          previous
        </button>
        <button onClick={() => {
          changeID(6);
        }}>
          next
        </button>
      </div>
      <p>{pokemonid}</p>
    </div>
  );
}

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  changeID: item => dispatch(ACTIONS.changeID(item)),
  deleteItem: id => dispatch(ACTIONS.deleteItem(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)((App));
