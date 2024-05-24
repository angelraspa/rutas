import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {

    
  return (
    
    productos.map((producto) => (

        <div style={{"display": "flex","justifyContent": "center"}} key={producto.id}>
            <Item  producto={producto}/>
        </div>
            
        )
    )
  )
}

export default ItemList