import { SxProps, Tooltip, Typography } from "@mui/material"

interface ProductInfoTooltipProps {
    productDescription : string,
    setMouseEntered: (state: boolean) => void,
}

const ProductInfoTooltip : React.FC<ProductInfoTooltipProps> = 
    ({ productDescription, setMouseEntered }) => {
        const TooltipStyles : SxProps = {
            position : 'absolute' as const,
            // maxWidth: '1000px',
            maxHeight : '200px',
            top : '50%',
            left : '50%',
            backgroundColor : '#F0F0B0',
            padding : '10px',
            transform : 'translate(-20%, -40%)',
            zIndex : 1,
            overflowX: 'scroll',
        }
        
        return <Tooltip sx={TooltipStyles} 
              onMouseEnter={() => setMouseEntered(true)}
              onMouseLeave={() => setMouseEntered(false)}
              title='Описание'>
              <Typography variant="h6">{productDescription}</Typography>
            </Tooltip>
}

export default ProductInfoTooltip