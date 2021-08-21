import './App.css';

import { useEffect, useRef, useState } from 'react'

import { Button, Box } from '@material-ui/core/';

import PokeSelect from './components/pokemon-select/pokemon-select.component';
import { PokeCard } from './components/pokemon-card/pokemon-card-container.component';
import { Loader } from "./components/loader/loader.component";
import { ColorChangerButton } from './components/color-changer/color-changer.component';

import { mapStateToProps, mapDispatchToProps } from './store-redux/operations';
import { connect, useSelector } from "react-redux";

import { fetchPokeInfo } from './fetches'

//on mobile view types images are very small, images of pokemons either, and buttons in nav has too low width
function App({ setDataFromApi }: any) {
  useEffect(() => {
    async function getData() {
      var pokeInfoFetched = await fetchPokeInfo(1)
      setDataFromApi(pokeInfoFetched)
      
    }
    getData()// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const pokeid = useSelector((state: any) => state.pokemonid)
  const leftButtonRef = useRef<HTMLButtonElement>(null)
  const rightButtonRef = useRef<HTMLButtonElement>(null)
  const [canClick, setCanClick] = useState(true)
  const [loading, setLoading] = useState(true)
  return (
    <div className="App"
      onKeyDown={
        (event) => {
          var input = event.nativeEvent.target as HTMLInputElement
          if (event.key === "ArrowRight" && canClick && input.id !== "input-search") {
            if (null !== rightButtonRef.current) {
              setCanClick(false)
              rightButtonRef.current.click();
              setTimeout(() => (setCanClick(true)), 300)
            }
          }
          else if (event.key === "ArrowLeft" && canClick && input.id !== "input-search") {
            if (null !== leftButtonRef.current) {
              setCanClick(false)
              leftButtonRef.current.click();
              setTimeout(() => (setCanClick(true)), 300)
            }
          }
        }
      }
      tabIndex={0}
    >
          <Loader
            loading={loading}
          />
          <div>
      <div id="nav">
        <PokeSelect
        />
        <ColorChangerButton />

      </div>
      <Box id="content">

        <div className="id-change-button-div">
          <Button
            ref={leftButtonRef}
            className="id-change-button"
            onClick={async () => {
              var pokeInfoFetched = await fetchPokeInfo(pokeid - 1)
              setDataFromApi(pokeInfoFetched);
            }}>
            {'<'}
          </Button>
        </div>

          <PokeCard
          setLoading={setLoading}
          />
        <div className="id-change-button-div">
          <Button
            ref={rightButtonRef}
            className="id-change-button"
            onClick={async () => {
              var pokeInfoFetched = await fetchPokeInfo(pokeid + 1)
              setDataFromApi(pokeInfoFetched);
            }}>
            {'>'}
          </Button>
        </div>
      </Box>
    </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
