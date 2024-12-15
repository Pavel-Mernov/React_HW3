import { createTheme, Stack, ThemeProvider, Typography } from "@mui/material"
import LocalAppBar from "./component/appbar"
import { useRef, useState } from "react"
import DefaultProducts from "./assets/defaultProducts"
import ProductList from "./component/productList"
import SideMenu from "./component/sideMenu"
import Product from "./component/interface/product"
import ProductCard from "./component/productCard"
import { ProductCategory } from "./component/interface/productCategory"

const greenTheme = createTheme({
  palette:  {
    primary : {main: '#7FAF7F'},
    secondary : {main: '#CFFFCF'},
  }
})

function App() {
  const [toggled, setToggled] = useState(false)

  const toggle = () => {
    setToggled(!toggled)
  }

  const closeSideMenu = () => {
    setToggled(false)
  }

  const [products, setProducts] = useState(DefaultProducts)

  const [nameText, setNameText] = useState<string>('') // state for input text in filter

  const [isChecked, setChecked] = useState<boolean>(false) // for checked in filter

  const [selectedCategory, setCategory] = useState<ProductCategory | undefined>(undefined) // for product category in filter

  const filterProducts = (nameText : String, isChecked : Boolean, selectedCategory ?: ProductCategory) => {
    const newProducts = DefaultProducts.filter((product : Product) => {
        const regexPattern : string = nameText.toLowerCase()
        return (nameText == "" || product.name.toLowerCase().match(regexPattern)) &&
            (isChecked == false || product.count != 0) &&
            (selectedCategory == undefined || product.category == selectedCategory)
    })

    

    setProducts(newProducts)
    closeSideMenu()
  }

  return (
    <ThemeProvider theme={greenTheme}>
      <LocalAppBar toggle={toggle}/>
      <Stack 
        component="div"
        direction="row"
      >
        <ProductList products={products}   /> 
        
        {toggled && 
          <SideMenu 
            onSearch={filterProducts} 
            nameText={nameText} 
            setNameText={setNameText} 
            isChecked={isChecked} 
            setChecked={setChecked} 
            selectedCategory={selectedCategory} 
            setCategory={setCategory}/>}
        
      </Stack>
    </ThemeProvider>
  )
}

export default App
