import React from 'react'
import "./ItemDetail.css"
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({producto}) => {
  return  (
    

       <div className="divl">
        <h3>{producto.title}</h3>
        <img style={{"width": "75px"}} src={producto.images}></img>
        <p>{producto.category}</p>
        <h5>{producto.price}</h5>
        <p>{producto.description}</p>
       <Link to={`/category/${producto.category}`}>Volver</Link>
       
       <ItemCount initial={0} stock ={producto.stock}/>

       </div>
            
        )
   
}
export default ItemDetail