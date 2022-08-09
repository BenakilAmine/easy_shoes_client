import React from "react";
import { useHistory } from "react-router";
import Carousel from "react-material-ui-carousel";
import JordanBlack from "../../../assets/jordanNightBlue.png";
import JordanRed from "../../../assets/jordanDarkRedWhite.png";
import JordanGreen from "../../../assets/greenJordan.png";
import "../../../styles/carouselStyle.scss";

function Item({ item }: { item: { src: string } }) {
  return (
    <img
      src={item.src}
      style={{
        width: "50%",
        height: "50%",
        textAlign: "end",
      }}
    />
  );
}

function CarouselCustom() {
  const { replace } = useHistory();
  const images = [
    {
      id: 1,
      src: JordanGreen,
      text: "New  Arrivals",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan arcu tempus, sollicitudin erat vitae, semper diam.Ut rhoncus sem sit ame.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan arcu tempus",
      alt: "Air Jordan Orange ",
      link: "View Collections",
    },
    {
      id: 2,
      src: JordanGreen,
      text: "New  Arrivals",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan arcu tempus, sollicitudin erat vitae, semper diam.Ut rhoncus sem sit ame.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan arcu tempus",
      alt: "Air Jordan Orange ",
      link: "View Collections",
    },
    {
      id: 3,
      src: JordanGreen,
      text: "New  Arrivals",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan arcu tempus, sollicitudin erat vitae, semper diam.Ut rhoncus sem sit ame.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan arcu tempus",
      alt: "Air Jordan Orange ",
      link: "View Collections",
    },
  ];

  return (
    <Carousel
    animation="slide"
    interval={7000}
    swipe={true}
    >
      {images.map((item, i) => (
        <div className="innerCarousel">
          <Item key={i} item={item} />
          <div className="descriptionCarousel">
            <h1>{item.text}</h1>
            <p>{item.description}</p>
            <a href="/">{item.link}</a>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselCustom;
