import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";
import ProductSingle from "./ProductSingle";

const Products = () =>{
    const dispatch = useDispatch();

    const { products } = useSelector((state)=> state.product) // distructuring products from state.products (product is store.js)
    
//the above line cam be understand as: 
//const products = useSelector((state)=>store.product.products)

//where store is the state
// where product is the reducer
//and where products is inside the initial state of the reducer
    useEffect(()=>{
        dispatch(getProducts())
    }, [dispatch])

    return (
        <div>
            {products.map((product)=>(
                <ProductSingle key={product.id} {...product}/>
            ))}
            
        </div>
    )
};
export default Products;
//() it is a direct return. 
//{} return key word and return something