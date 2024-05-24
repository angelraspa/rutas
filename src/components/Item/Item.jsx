import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div className="divl">
        <h3>{producto.title}</h3>
        <img style={{"width": "75px"}} src={producto.images[0]}></img>
        <p>{producto.category}</p>
        <h5>{producto.price}</h5>
        <Link to ={`/item/${producto.id}`} > Detalle</Link>
      
    </div>
  )
}

export default Item