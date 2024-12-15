import { Card, CardMedia, createTheme, ThemeProvider, Typography } from "@mui/material"

import noPhoto from "../assets/noPhoto.png"

interface ProductImageProps {
    imgSource? : string | null,
    width? : string | number,
    height ? : string | number
  }
  
  const ProductImage : React.FC<ProductImageProps> = ({ imgSource, width, height }) => {
  
    return <CardMedia 
        component="img"
        height={height}
        width={width}
        image={imgSource == undefined ? noPhoto : imgSource}
        sx={{ left : 0, padding: "1em 1em 0 1em", objectFit: "contain" }}
      />
      
  }

export default ProductImage