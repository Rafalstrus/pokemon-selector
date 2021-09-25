import './loader.styles.css'

import { useEffect, useRef } from 'react'

interface LoaderProps {
    loading: boolean,
}

let color = (max: number = 255, min: number = 0) => (Math.floor(Math.random() * (max - min + 1)) + min)


export const Loader = ({loading} :LoaderProps) => {
    useEffect(() => {
        document.getElementById("loading-pokeball")!.style.backgroundColor = "rgb(" + pokeballColor + ")"// eslint-disable-next-line
    }, [])
    var pokeballColor: number[] = [color(), color(), color()]
    const loadingRef: any = useRef();
    if (loadingRef!.current !== undefined) {
        (loading)? loadingRef!.current.style.display="none": loadingRef!.current.style.display="none"
    }
    return (
        <div id="loader"
        ref={loadingRef}>
            <img
                id="loading-pokeball"
                alt=""
                src="/loading-pokeball.svg"
                draggable="false"></img>
        </div>
    )
}