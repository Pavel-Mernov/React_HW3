import Stack from "@mui/material/Stack";
import Product from "./interface/product";
import { useState } from "react";
import ProductCard from "./productCard";
import { Pagination } from "@mui/material";
import ProductModal from "./productModal";

interface ProductListProps {
    products : Product[]
}

const ProductList : React.FC<ProductListProps> = ({ products }) => {
    const [isSelected, setSelected] = useState(false) // is open modal

    const [page, setPage] = useState(1)

    const OpenModal = () => {
        if (isSelected) {
            return;
        }
        setSelected(true)
    } 

    const CloseModal = () => {
        setSelected(false)       
    }

    return <Stack marginTop={'70px'} spacing={'20px'} marginLeft={'10%'} marginRight={'10%'}>
        <ProductCard product={products[page - 1]} onClick={OpenModal} />
        <Pagination 
            
            count={products.length}
            defaultPage={1}
            onChange={(e, newPage) => setPage(newPage)}
            >
        </Pagination>
        {
            isSelected && <ProductModal product={products[page - 1]} onClose={CloseModal} />
        }
    </Stack>
}

export default ProductList