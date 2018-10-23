import React from "react";
import {Select, MenuItem,FormControl} from '@material-ui/core';

const SelectMenu = ({type, onSelect, rating}) => (
    <div>
        {/*Campus : <Select*/}
        {/*value={type}*/}
        {/*onChange={onSelect}*/}
        {/*inputProps={{ name: "type" }}>*/}
        {/*<MenuItem value={6}>Chiangmai</MenuItem>*/}
        {/*<MenuItem value={2}>Pitsanulok</MenuItem>*/}
        {/*</Select>*/}
        อันดับวิชา : <Select
        value={rating}
        onChange={onSelect}
        inputProps={{name: "rating"}}>
        <MenuItem value={10}>10 อันดับ</MenuItem>
        <MenuItem value={50}>50 อันดับ</MenuItem>
        <MenuItem value={100}>100 อันดับ</MenuItem>
    </Select>
    </div>
);

export default SelectMenu;
