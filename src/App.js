import './App.css';


import PokeSelect from './components/pokemon-select/pokemon-select.component';
import { PokeCard } from './components/pokemon-card/pokemon-card-container.component';
import { Loader } from "./components/loader/loader.component";
import { ColorChangerButton } from './components/color-changer/color-changer.component';

import { mapStateToProps, mapDispatchToProps } from './store-redux/operations';
import { connect, useSelector } from "react-redux";


function App({ changeID }) {
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
          <button onClick={() => {
            changeID(pokeid - 1);
          }}>
            {'<'}
          </button>
        </div>
        <PokeCard
        />
        <div className="id-change-button">
          <button onClick={() => {
            changeID(pokeid + 1);
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
