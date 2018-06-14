import React from "react";
import {Select,MenuItem} from '@material-ui/core';
const SelectMenu = ({type,onSelect,rating}) => (
  <div>
    Campus : <Select
    value={type}
    onChange={onSelect}
    inputProps={{ name: "type" }}>
    <MenuItem value={1}>Chiangmai</MenuItem>
    <MenuItem value={2}>Pitsanulok</MenuItem>
  </Select>
    Rating : <Select
    value={rating}
    onChange={onSelect}
    inputProps={{ name: "rating" }}>
    <MenuItem value={10}>Top 10</MenuItem>
    <MenuItem value={50}>Top 50</MenuItem>
    <MenuItem value={100}>Top 100</MenuItem>
  </Select>
  </div>
);

export default SelectMenu;
