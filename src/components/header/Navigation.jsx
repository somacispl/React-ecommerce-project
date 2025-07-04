import logo from '../../../public/images/logo.png'
import cartIcon from '../../../public/images/cart.png'
import userIcon from '../../../public/images/user.png'
import { NavLink, Link } from 'react-router'
import { useShopContext } from '../../context/ShopContext'

const Navigation = () => {

   const { cartProducts} = useShopContext()

 return (
  <>
   <div className='top_bar'>
     <div className='container'>
       <div className='text-center'>Complimentary Shipping on Domestic Orders</div>
     </div>
   </div>
   <nav className='navbar'>
     <div className='container-lg px-md-4'>
       <div className='logo'>
         <Link to="/"><img src={logo} alt="Logo" /></Link>
       </div>
       <ul className='navbar-nav flex-row gap-5 headLink'>
         <li className='nav-item'><NavLink className={(e)=>{return e.isActive ? "nav-link active" : "nav-link" }} to="/">Home</NavLink></li>
         <li className='nav-item'><NavLink className={(e)=>{return e.isActive ? "nav-link active" : "nav-link" }} to="/about">About</NavLink></li>
         <li className='nav-item'><NavLink className={(e)=>{return e.isActive ? "nav-link active" : "nav-link" }} to="/product/1">Shop</NavLink></li>
       </ul>
       <div className='header-right'>
         <ul className='d-flex align-items-center gap-3'>
             <li><Link to="/cart"><img src={cartIcon} alt="" /><span className='cart-total'>{ cartProducts.length > 0 ? cartProducts.length : '0' }</span></Link></li>
           <li><Link to="javascript:void(0)"><img src={userIcon} alt="" /></Link></li>
         </ul>
       </div>
     </div>
   </nav>
  </>
 )
}

export default Navigation