import React, { FC, ReactElement } from "react";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
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
import { MenuItem } from "@material-ui/core";
import Select, { SelectChangeEvent } from '@mui/material/Select';

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

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1500,
  height: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ShoesCard: FC<Props> = ({ article }): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [size, setSize] = React.useState('');
  const [quantity, setQuantity] = React.useState('');

  const handleSize = (event: SelectChangeEvent) => {
    setSize(event.target.value as string);
  };

  const handleQuantity = (event: SelectChangeEvent) => {
    setQuantity(event.target.value as string);
  };

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
          <ButtonCustom color="primary">
          <a href="/shoesdetails">View</a>
          </ButtonCustom>
          <ButtonCustom  color="secondary">
            <a href="/allproducts">Add to cart</a>
          </ButtonCustom>
      </CardCustom>
    </>
  );
};

export default ShoesCard;
