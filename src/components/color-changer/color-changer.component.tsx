
import {useState} from 'react'
import {Button} from '@material-ui/core/';

import './color-changer.styles.css';
import { useEffect } from 'react';

interface Colors {
    colorMain : number[],
    colorNav : number[]
}

let color = () =>(Math.floor(Math.random() * (255 - 0 + 1)) + 0)

export const ColorChangerButton = () => {
    const [colorArray ,setColorArray] = useState<Colors>() 

    useEffect(()=>{
        setColorArray({
            colorMain :[color(),color(),color()],
            colorNav :[color(),color(),color()]
        })
    },[])
    useEffect(()=>{
        //here change background and nav background
    },[colorArray])
    return(
    <div id="color-change-button">
        <Button 
        variant="contained"
        onClick={() => {
            setColorArray({
                colorMain :[color(),color(),color()],
                colorNav :[color(),color(),color()]
            })
        }}></Button>
        <p>{            
            colorArray?.colorMain
            }</p>
    </div>
    )
}