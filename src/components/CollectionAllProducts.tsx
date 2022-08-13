import React, { FC } from "react";
import ShoesCard, { Article } from "./ShoesCard";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import "../styles/AllProducts.scss";

const CollectionAllProducts = ({ articles }: {articles :any}) => {

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div
        style={{
            border: "1px solid black",
            textAlign: "center",
        }}
    >
        <div>
        </div>
      <h1>All Products</h1>
      <div className="informations_filter">
            <p className="showing_number">Showing 10-20 of 50 results</p>
            <Box sx={{ width: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filtrer</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Par ordre croissant</MenuItem>
          <MenuItem value={20}>Par ordre décroissant</MenuItem>
          <MenuItem value={30}>Par note</MenuItem>
        </Select>
      </FormControl>
    </Box>
        </div>
      <div
        style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            width: "60%",
            margin: "0 auto",
          }}
      >
        {articles.map((article:any) => (
          <ShoesCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default CollectionAllProducts;