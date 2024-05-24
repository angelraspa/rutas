import {useState,useEffect} from "react"
import "./itemListContainer.css"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";




const ItemListContainer = () => {
const [products, setProducts] = useState ([])
const {id} = useParams ()

useEffect (()=> {
if (!id){
    fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(results => setProducts (results.products));
  return } 


  fetch(`https://dummyjson.com/products/category/${id}`)
  .then(res => res.json())
  .then(results => setProducts (results.products));

},[id])



return (

  <div>
    <ItemList productos= {products}/>
  </div>
)

}

export default ItemListContainer