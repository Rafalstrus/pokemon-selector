import { useEffect, useState } from 'react'
import './App.css';


import PokeSelect from './components/pokemon-select/pokemon-select.component';
import { PokeCard } from './components/pokemon-card/pokemon-card-container.component';
import { Loader } from "./components/loader/loader.component";
import { ColorChangerButton } from './components/color-changer/color-changer.component';

import store,
{
  mapStateToProps, mapDispatchToProps,
  getDataFromApi
} from './store-redux/operations';
import { connect } from "react-redux";


function App({ changeID, }) {
  const [pokemonid, setPokemonId] = useState(store.getState().pokemonid)
  useEffect(() => {
    async function fetchData() {

      getDataFromApi(1)

    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <Loader />
      <div>
        <PokeSelect
        />
        <ColorChangerButton
        />

        <button onClick={() => {
          changeID(pokemonid - 1);
        }}>
          {'<'}
        </button>
        <PokeCard
        />
        <button onClick={() => {
          changeID(pokemonid + 1);
        }}>
          {'>'}
        </button>
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
