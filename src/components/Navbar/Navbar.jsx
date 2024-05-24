import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './navbar.css'

const Navbar = () => {

  return (
    <nav className="navContainer">
        <div>
          <Link to='/'>
            <h1>My Store</h1>
          </Link>
        </div>
          <div>
            <ul className="navLinks">
                <li className="li">
                <Link to='/'>Productos </Link></li>
                <li className="li"><Link to='/category/groceries'>Comida</Link></li>
                <li className="li"><Link to='/category/furniture'>Oficina </Link></li>
                <li className="li"><Link to='/category/beauty'>Belleza </Link></li>
                <li className="li"><Link to='/category/fragrances'>Perfumes </Link></li>
            </ul>
          </div>

        <CartWidget/>
            
    </nav>
  )
}

export default Navbar