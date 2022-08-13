import React, { FC, ReactElement } from "react";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "../Rating";
import JordanGreen from "../../assets/greenJordan.png";
import {
  CardCustom,
  Content,
  ButtonCustom,
  // NavLink,
  //   Bars,
  // NavMenu,
  // NavBtn,
  // NavBtnLink
} from "./CardStyle";

export interface Article {
  id?: number;
  name?: string;
  price?: string;
  image?: string;
  rating?: number;
}

interface Props {
  article: Article;
}
const ShoesCard: FC<Props> = ({ article }): JSX.Element => {
  return (
    <>
      <CardCustom sx={{ maxWidth: 345 }}>
        <Content>
          <CardMedia
            component="img"
            height="100%"
            width="100%"
            image={JordanGreen}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {article.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {article.price}
            </Typography>
            <Rating rating={2} />
          </CardContent>
        </Content>
          <ButtonCustom variant="contained" color="primary">
            <a href="/allproducts">View</a>
          </ButtonCustom>
          <ButtonCustom  color="secondary">
            <a href="/allproducts">Add to cart</a>
          </ButtonCustom>
      </CardCustom>
    </>
  );
};

export default ShoesCard;
