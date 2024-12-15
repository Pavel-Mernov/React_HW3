
import { Button, Dialog, Stack, SxProps, Typography } from "@mui/material";
import Product from "./interface/product";
import ProductImage from "./productImage";

interface ProductModalProps {
    product : Product,
    onClose : () => void,
}

const ProductModal : React.FC<ProductModalProps> = ({ product, onClose }) => {
    const DialogSx : SxProps = {
        background : 'transparent', // I didn't manage to specify the background color, so I made the Dialog transparent
        // width : '850px',
        // height : '500px',
    }

    const ContentOuterStackSx : SxProps = {
        width : '560px',
        height : '480px',
        padding : '20px',
        background : '#F9F9F9',
        overflowY : 'auto',
        overflowX : 'auto'
    }

    const ContentInnerStackSx : SxProps = {
        overflowY : 'scroll',
        height : '420px',
        width: '540px'
    }

    return <Dialog sx={DialogSx}  open={true} onClose={onClose}>
        
        <Stack component="div" sx={ContentOuterStackSx} spacing={'20px'}>
            
            <Stack component="div" sx={ContentInnerStackSx} spacing={'20px'}>
                <Typography variant="h4">{product.name}</Typography>
                <ProductImage width='320px' height='150px' />

                <Stack component='div' direction='row' spacing='20px'>
                    <Typography variant="h5">Количество товара:</Typography>
                    <Typography variant="h6">{product.count} {product.unit}</Typography>
                </Stack>

                <Stack component='div' direction='row' spacing='20px'>
                    <Typography variant="h5">Категория:</Typography>
                    <Typography variant="h6">{product.category}</Typography>
                </Stack>

                {product.description != undefined && <Typography variant="h5">Описание:</Typography>}
                {product.description != undefined && 
                    <Typography variant="h6">{product.description}</Typography>}
            </Stack>
            
            <Button variant="outlined" onClick={onClose}>Закрыть</Button>
        </Stack>
    </Dialog>
}

export default ProductModal