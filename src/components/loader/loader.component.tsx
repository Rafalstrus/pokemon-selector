import './loader.styles.css'


interface LoaderProps {
    loading: boolean,
}

let color = (max: number = 255, min: number = 0) => (Math.floor(Math.random() * (max - min + 1)) + min)


export const Loader = (props :LoaderProps) =>{
    var pokeballColor :number[] = [color(),color(),color()]
    return(
    <div id="loader">
        <img
        id="loading-pokeball"
        alt=""
        src="/loading-pokeball.svg"></img>
    </div>
    )
}