import React, {useState} from 'react'
import "./itemCount.css"


const initial=0
//const stock =10


const ItemCount = ({initial,stock}) => {
// Por ahora HardCode Como para arrancar. 
    //DEFINIMOS EL ESTADO DEL COMPONENTE CON VALOR INICIAL DEL initial RECIBIDO COMO PROPS
    const [count, setCount] = useState(initial)

    //DEFINIMOS LA FUNCIÓN QUE EJECUTARÁ PARA DECREMENTAR EL CONTADOR
    const decrement = () => {
        if(count > initial){
            setCount(count-1)
        }
    }

    //DEFINIMOS LA FUNCIÓN QUE EJECUTARÁ PARA INCREMENTAR EL CONTADOR
    const increment = () => {
        if(count < stock){
            setCount(count+1)
        }
    }

  return (
    <div className='countContainer'>

        <button onClick={decrement}>-</button>
        <span className='count'>{count}</span>
        <button onClick={increment}>+</button>

    </div>
  )
}

export default ItemCount