import './App.css';

import {useEffect} from 'react'

import PokeSelect from './components/pokemon-select/pokemon-select.component';
import { PokeCard } from './components/pokemon-card/pokemon-card-container.component';
import { Loader } from "./components/loader/loader.component";
import { ColorChangerButton } from './components/color-changer/color-changer.component';

import { mapStateToProps, mapDispatchToProps } from './store-redux/operations';
import { connect, useSelector } from "react-redux";

import {fetchPokeInfo} from './fetches'

function App({ setDataFromApi }) {
  useEffect( () => {
    async function getData(){// eslint-disable-next-line react-hooks/exhaustive-deps
    var pokeInfoFetched = await fetchPokeInfo(1)// eslint-disable-next-line react-hooks/exhaustive-deps
    setDataFromApi(pokeInfoFetched)// eslint-disable-next-line react-hooks/exhaustive-deps
    }
    getData()// eslint-disable-next-line react-hooks/exhaustive-deps
  },[]) // eslint-disable-next-line react-hooks/exhaustive-deps
  const pokeid = useSelector((state) => state.pokemonid)
  return (
    <div className="App">
      <Loader />
      <div id="nav">
        <PokeSelect
        />
        <ColorChangerButton
        />
      </div>
      <div id="content">
        <div className="id-change-button">
          <button onClick={async () => {
            var pokeInfoFetched = await fetchPokeInfo(pokeid - 1)
            setDataFromApi(pokeInfoFetched);
          }}>
            {'<'}
          </button>
        </div>
        <PokeCard
        />
        <div className="id-change-button">
          <button onClick={async () => {
            var pokeInfoFetched = await fetchPokeInfo(pokeid + 1)
            setDataFromApi(pokeInfoFetched);
          }}>
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
