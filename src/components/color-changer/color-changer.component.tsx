
import { useState } from 'react'
import { Button } from '@material-ui/core/';

import './color-changer.styles.css';
import { useEffect } from 'react';

interface Colors {
    colorMain: number[],
    colorNav: number[],
    colorCard: number[]
}
//wymysl jakis algorytm do tworzenia motywow kolorow

let color = (max: number = 255, min: number = 0) => (Math.floor(Math.random() * (max - min + 1)) + min)

let colorSet = (numbers: number[] = [255, 255, 255], difference: number = 0) => (
    [color(numbers[0] + difference, difference),
    color(numbers[1] + difference, difference),
    color(numbers[2] + difference, difference)]
)

export const ColorChangerButton = () => {
    const [colorArray, setColorArray] = useState<Colors>()

    useEffect(() => {
        setColorArray({
            colorMain: [27, 123, 19],
            colorNav: [1, 187, 76],
            colorCard: [102, 184, 22]
        })
    }, [])
    useEffect(() => {
        document.getElementById('nav')!.style.backgroundColor = "rgb(" + colorArray?.colorNav + ")";
        var x = document.querySelector<HTMLElement>('.App')!
        x.style.backgroundColor = "rgb(" + colorArray?.colorMain + ")"
        document.getElementById('poke-card')!.style.backgroundColor = "rgb(" + colorArray?.colorCard + ")"

    }, [colorArray])
    return (
        <div id="color-change-button-container">
            <Button
                id="color-change-button"
                variant="contained"
                onClick={() => {
                    var cardColorAround: number[] = colorSet()
                    var navColorAround: number = color(5, 1)
                    var mainColor: number = color(30, 20)
                    setColorArray({
                        colorCard: cardColorAround,
                        colorNav: colorSet(cardColorAround, -navColorAround),
                        colorMain: colorSet(cardColorAround, +mainColor)
                    })
                }}></Button>
        </div>
    )
}