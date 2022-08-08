import React from 'react';
import { useHistory } from "react-router";
import { Paper, Button } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import JordanBlack from '../assets/jordanNightBlue.png'
import JordanRed from '../assets/jordanDarkRedWhite.png'

function Item({ item }: { item: { src: string } }) {
    return (
      <img src={item.src} style={{ width: "50%", height: "50%",textAlign:"end",border:'1px solid black' }} />
    );
  }

function Accueil() {
    const { replace } = useHistory();
    const images = [{
        id: 1,
        src: JordanBlack,
        alt: "Air Jordan Grape"
    },
    {
        id: 2,
        src: JordanRed,
        alt: "Air Jordan Orange "
    },
    {
        id: 3,
        src: "assets/Air_jordan_red.jpg",
        alt: "Air Jordan Red"
    }
];
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel
        >
            {
                images.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

export default Accueil;