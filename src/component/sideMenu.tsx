import { Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Stack, SxProps, TextField, Typography } from "@mui/material";
import Product from "./interface/product";
import { SetStateAction, useState } from "react";
import { CategoryOptions, ProductCategory } from "./interface/productCategory";

interface SideMenuProps {
    onSearch : (name : String, checked : boolean, category ?: ProductCategory) => void,
    nameText : string,
    setNameText : (newText : string) => void,
    isChecked : boolean,
    setChecked : (newValue : boolean) => void,
    selectedCategory ?: ProductCategory
    setCategory : (category ?: ProductCategory) => void,
}


const SideMenu : React.FC<SideMenuProps> = 
    ({ onSearch, 
        nameText, 
        setNameText, 
        isChecked, 
        setChecked,
        selectedCategory,
        setCategory
     }) => {
    /*
    const SideMenuStyle : SxProps = {
        position: 'fixed',
        top: '110px',
        padding: '15px',
        left: 0,
        width: '200px',
        bottom: 0,
        backgroundColor: 'white',
        border: 2px solid black;
        transition: transform 0.3s;
        z-index: 0;
      }
    */

    const SidePanelStyle : SxProps = {
        position : 'fixed' as const,
        top: '40px',
        height : '100%',
        padding : '15px',
        width : '300px',
        right : 0,
        zIndex : 0,
        background : '#DFDFDF'
    }

    const clearAll = () => {
        setNameText('')
        setChecked(false)
        setCategory(undefined)
    }

    

    return <Stack sx={SidePanelStyle}>
    <Typography variant="h4">Фильтр:</Typography>
    <TextField sx={{marginTop: '20px', background : 'white'}} 
        variant="filled" value={nameText} onChange={(e) => setNameText(e.target.value)} 
        label="Введите название товара" />
    <Button variant="text" sx={{left: 0, width: '100px'}} onClick={() => setNameText('')}>Очистить</Button>

    <FormControlLabel 
        sx={{marginTop: '20px'}} 
        label="В наличии"
        onChange={() => setChecked(!isChecked)} 
        control={<Checkbox checked={isChecked} />}/>

    <FormControl fullWidth sx={{marginTop : '20px'}}>
    <InputLabel>Категория</InputLabel>
    <Select
        labelId="category-label"
        value={selectedCategory }
        key={selectedCategory}
        label="Категория"
        onChange={(e) => setCategory(e.target.value as ProductCategory)}
    >
        <MenuItem key={undefined} value={undefined}>Не выбрано</MenuItem>
        {
            CategoryOptions.map(opt => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)
        }
    </Select>
    </FormControl>
    <Button variant="text" sx={{left: 0, width: '100px'}} onClick={() => setCategory(undefined)}>Очистить</Button>

    <Button variant="outlined" onClick={clearAll} sx={{marginTop : '20px'}}>Очистить всё</Button>

    <Button variant="contained" onClick={() => onSearch(nameText, isChecked, selectedCategory)} sx={{marginTop : '10px'}}>Поиск</Button>

    
</Stack>
}

export default SideMenu