import React from 'react';
import JordanGreen from "../assets/greenJordan.png";
import Rating from "../components/Rating";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import "../styles/ShoesDetails.scss";

function ShoesDetails(): JSX.Element {

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
        <div className='main_div'>
            <div className='main_image'>
        <img src={JordanGreen} alt="jordan_green" />
        </div>
        <div className='informations_shoes'>
            <div className='title'>
            <p className='shoes_name'>Nike Roshe LD 1000</p>
            <p>Collaboration with fragement</p>
            <div className='rating'>
            <Rating rating={2} />
            </div>
            </div>
            <div className='price_and_style'>
                <p className='price'>$120</p>
                <p className='style'>Style #</p>
            </div>
            <div className='buttons_and_fields'>
                <InputLabel>Size: </InputLabel>
            <Select
            sx={{ width: 150, marginLeft: 2, marginRight: 3}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          label="Size"
          onChange={handleSize}
        >
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={42}>42</MenuItem>
          <MenuItem value={44}>44</MenuItem>
        </Select>
        <InputLabel>Quantity: </InputLabel>
        <Select
        sx={{ width: 150, marginLeft: 2, marginRight: 3}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={quantity}
          label="Quantity"
          onChange={handleQuantity}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
        <Button
        sx={{ width: 150, height: 50, marginLeft: 2, marginRight: 3}}
        variant="contained">Add to Cart</Button>
            </div>
            <div>
                <p className='informations_shipping'>Free shippings from 75$</p>
            </div>
        </div>
        </div>
        </>
    )
}

export default ShoesDetails;