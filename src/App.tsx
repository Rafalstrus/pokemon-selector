import './App.css';

import { useEffect,useRef,useState } from 'react'

import { Button, Box } from '@material-ui/core/';

import PokeSelect from './components/pokemon-select/pokemon-select.component';
import { PokeCard } from './components/pokemon-card/pokemon-card-container.component';
import { Loader } from "./components/loader/loader.component";
import { ColorChangerButton } from './components/color-changer/color-changer.component';

import { mapStateToProps, mapDispatchToProps } from './store-redux/operations';
import { connect, useSelector } from "react-redux";

import { fetchPokeInfo } from './fetches'

function App({ setDataFromApi }:any ) {
  useEffect(() => {
    async function getData() {// eslint-disable-next-line react-hooks/exhaustive-deps
      var pokeInfoFetched = await fetchPokeInfo(1)// eslint-disable-next-line react-hooks/exhaustive-deps
      setDataFromApi(pokeInfoFetched)// eslint-disable-next-line react-hooks/exhaustive-deps
    }
    getData()// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // eslint-disable-next-line react-hooks/exhaustive-deps
  const pokeid = useSelector((state :any) => state.pokemonid)
  const leftButtonRef = useRef<HTMLButtonElement>(null)
  const rightButtonRef = useRef<HTMLButtonElement>(null)
  const [canClick,setCanClick] = useState(true)
  return(
    <div className="App"
    onKeyDown={
      (event)=>{
      if(event.key==="ArrowRight" && canClick){
        if (null !== rightButtonRef.current) {
          rightButtonRef.current.click();
          setCanClick(false)
          setTimeout(()=>(setCanClick(true)),100)
          }
      }
        else if(event.key==="ArrowLeft" && canClick){
          if (null !== leftButtonRef.current) {
          leftButtonRef.current.click();
          }
        }
    }
  }
    tabIndex={0}
    >
      <Loader 
      loading={true}
      />
      <div id="nav">
        <PokeSelect
        />
        <ColorChangerButton
        />
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
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
