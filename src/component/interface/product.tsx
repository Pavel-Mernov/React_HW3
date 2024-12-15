import { ProductCategory } from "./productCategory"

interface Product {
    id: number,
    name : string,
    description? : string,
    imgSrc? : string
    count : number,
    unit : string,
    category : ProductCategory
}

export default Product