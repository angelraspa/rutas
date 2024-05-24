import {useState,useEffect} from "react"
import "./itemDetailContainer.css"
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
  const [products, setProducts] = useState ({

    id: 1,
    title:'Prueba',
    description: 'Texto',
    category: 'beauty',
    price: 9.99,
    stock: 10

  }
        
  )
  const {id} = useParams ()
  
  useEffect (()=> {
   
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then(products => setProducts (products));
  
  },[id])
  
  
  
  return (
    

              <ItemDetail producto = {products}/>
    
      )
  }

export default ItemDetailContainer