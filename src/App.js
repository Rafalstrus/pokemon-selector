import { useEffect, useState } from 'react'
import './App.css';


import { PokeSelect } from './components/pokemon-select/pokemon-select.component';
import { PokeCard } from './components/pokemon-card/pokemon-card-container.component';
import { Loader } from "./components/loader/loader.component";

import store, {mapStateToProps, mapDispatchToProps} from './store-redux/operations';
import { connect } from "react-redux";


function App({ changeID, deleteItem }) {
  const [pokemoninfo, setPokemonInfo] = useState({})
  const [pokemonid,setPokemonId] = useState(store.getState().pokemonid)
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
        />
        <PokeCard
          pokemoninfo={pokemoninfo}
        />
        <button onClick={() => {
          changeID(pokemonid-1);
        }}>
          previous
        </button>
        <button onClick={() => {
          changeID(pokemonid+1);
        }}>
          next
        </button>
      </div>
      <p>{pokemonid}</p>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
