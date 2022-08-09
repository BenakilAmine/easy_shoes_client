import React from "react";
import { useHistory } from "react-router";
import CarouselCustom from "../components/Header/Carousel";
import PromotionsBanner from "../components/PromotionsBanner";


function Accueil() {
  return (
    <>
  <CarouselCustom />
  <PromotionsBanner />
  </>
  )
}

export default Accueil;
