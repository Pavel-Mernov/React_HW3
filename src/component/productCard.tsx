import { Card, createTheme, Stack, SxProps, ThemeProvider, Tooltip, Typography } from "@mui/material"
import Product from "./interface/product"
import ProductImage from "./productImage"
import { useState } from "react"
import ProductInfoTooltip from "./productInfoTooltip"


interface ProductCardProps {
    product : Product,
    onClick : () => void
}


const ProductCard : React.FC<ProductCardProps> = ({ product, onClick }) => {
    
    const cardTheme = createTheme({
        palette:  {
          primary : {main: '#7F7F7F'},
          background : {paper: '#CFCFCF'},
        }
      })

    const [isMouseEntered, setMouseEntered] = useState(false) // to detect whether the card should transform



    const cardStyles : SxProps = { 
      zIndex : 0,
      position : 'relative' as const,
      padding : '20px', 
      maxHeight : window.innerHeight - 180,
      width : '750px',
      transform : isMouseEntered ? 'scale(1.05)' : 'scale(1)', // scale(1.1) is too big
      //overflowY : 'scroll',
    }

    return <ThemeProvider theme={cardTheme}>
      <Stack>
      <Card 
        component='div'
        sx={cardStyles}  
        onClick={onClick}
        onMouseEnter={() => setMouseEntered(true)}
        onMouseLeave={() => setMouseEntered(false)}
        >
          <Typography fontStyle={'bold'} variant="h2">{product.name.length > 25 ? product.name.slice(0, 22) + "..." : product.name}</Typography>
          
          <ProductImage width={'320px'} height={'150px'} imgSource={product.imgSrc} /> 
          
          <Typography variant="h4">Количество товара:</Typography>
          
          <Typography variant="h6">{product.count} {product.unit}</Typography>

          <Typography variant="h4">Категория:</Typography>
          
          <Typography variant="h6">{product.category.toString()}</Typography>
  
      </Card>
      {isMouseEntered && (product.description != undefined) && 
            <ProductInfoTooltip 
              productDescription={product.description} 
              setMouseEntered={setMouseEntered}  />}
      
      
      </Stack>
      </ThemeProvider>
}

export default ProductCard