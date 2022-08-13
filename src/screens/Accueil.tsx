import React,{FC} from "react";
import { useHistory } from "react-router";
import Collection from "../components/Collection";
import CarouselCustom from "../components/Header/Carousel";
import { Article } from "../components/ShoesCard";



const data: Article[]= [
  {
    id: 1,
    name: "Green Iguana",
    price: "€10",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    rating: 2
  },
  {
    id: 2,
    name: "Green Iguana",
    price: "€10",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    rating: 2
  },
  {
    id: 3,
    name: "Green Iguana",
    price: "€10",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    rating: 2
  },
  {
    id: 4,
    name: "Green Iguana",
    price: "€10",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    rating: 2
  },
  {
    id: 1,
    name: "Green Iguana",
    price: "€10",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    rating: 2
  },
  {
    id: 2,
    name: "Green Iguana",
    price: "€10",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    rating: 2
  },
  {
    id: 1,
    name: "Green Iguana",
    price: "€10",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    rating: 2
  },
  {
    id: 2,
    name: "Green Iguana",
    price: "€10",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    rating: 2
  },
]

function Accueil() {
  const acc = 'accueil';
  return (
    <>
      <CarouselCustom />
      <Collection  articles={data} />
    </>
  );
}

export default Accueil;
