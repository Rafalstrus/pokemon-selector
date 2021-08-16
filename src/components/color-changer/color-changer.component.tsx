
import {useState} from 'react'
import {Button} from '@material-ui/core/';

import './color-changer.styles.css';
import { useEffect } from 'react';

interface Colors {
    colorMain : number[],
    colorNav : number[],
    colorCard : number[]
}
//wymysl jakis algorytm do tworzenia motywow kolorow

let color = (max :number) =>(Math.floor(Math.random() * (max - 0 + 1)) + 0)

let colorSet = () => [color(12),color(12),color(12)]

export const ColorChangerButton = () => {
    const [colorArray ,setColorArray] = useState<Colors>() 

    useEffect(()=>{
        setColorArray({
            colorMain :[color(255),color(255),color(225)],
            colorNav :[color(255),color(255),color(255)],
            colorCard :[color(255),color(255),color(255)]
        })
    },[])
    useEffect(()=>{
        document.getElementById('nav')!.style.backgroundColor = "rgb("+colorArray?.colorNav+")";
        var x = document.querySelector<HTMLElement>('.App')!
        x.style.backgroundColor = "rgb("+colorArray?.colorMain+")"
        document.getElementById('poke-card')!.style.backgroundColor = "rgb("+colorArray?.colorCard+")"
        //here change background and nav background
    },[colorArray])
    return(
    <div id="color-change-button">
        <Button 
        variant="contained"
        onClick={() => {
            var mainColor :number[] = [color(255),color(255),color(255)]
            var navColorAround :number = color(255)
            var cardColorAround :number = color(255)
            setColorArray({
                colorMain :mainColor,
                colorNav :[mainColor[0]+color(navColorAround),
                mainColor[1]+color(navColorAround),
                mainColor[2]+color(navColorAround)],
                colorCard :[mainColor[0]+color(cardColorAround),
                mainColor[1]+color(cardColorAround),
                mainColor[2]+color(cardColorAround)]
            })
        }}></Button>
    </div>
    )
}