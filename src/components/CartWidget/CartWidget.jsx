import { useState } from "react"

const CartWidget = () => {

  const [total] = useState(0)
  return (
    <div>
        <p>CART</p>
        <p>{total}</p>
    </div>
  )
}

export default CartWidget