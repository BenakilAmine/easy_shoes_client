import React from 'react';
import Collection from '../components/Collection';
import CollectionAllProducts from "../components/CollectionAllProducts";
import { Article } from '../components/ShoesCard';

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
        id: 5,
        name: "Green Iguana",
        price: "€10",
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        rating: 2
      },
      {
        id: 6,
        name: "Green Iguana",
        price: "€10",
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        rating: 2
      },
      {
        id: 7,
        name: "Green Iguana",
        price: "€10",
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        rating: 2
      },
      {
        id: 8,
        name: "Green Iguana",
        price: "€10",
        image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        rating: 2
      },
  ]

function AllProducts() {
    return (
      <>
        <CollectionAllProducts articles={data} />
      </>
    );
  }
  
  export default AllProducts;
