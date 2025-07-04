import { useState } from 'react'
import time from '../../../public/images/time.png'
import { NavLink } from 'react-router'
import { useShopContext } from '../../context/ShopContext'


const Cart = ({minValue = 0, maxValue = 20}) => {
 const [count, setCount] = useState(minValue)

  const handleIncrementCounter = () => {
   if (count < maxValue) {
   setCount(count + 1)
  }
 }
  const handleDecrementCounter = () => {
   if (count > minValue) {
   setCount(count - 1)
  }
  }

 const { cartProducts } = useShopContext()



 return (
  <>
   <div className="shoppingBagHolder">
    <div className="container">
     <div className="shoppingBag d-flex flex-wrap py-5">
      <div className="shoppingBagLeft px-sm-1 px-md-4 px-lx-5">
       <h4 className='bagTitle'>My Cart</h4>
       {cartProducts.length > 0 ?
        cartProducts.map(product => {
         return (
           <div className="bagProduct d-flex align-items-center py-4">
            <div className="bagProductImg"><img src={product.productImg} alt='Serum' /></div>
            <div className="bagProductContent">
             <h5>{ product.productTitle}</h5>
             <div className='bagPrice'>{ product.productPrice}</div>
            </div>
           </div>
         )
        })
        : 'No Data found'}

      </div>
      <div className="shoppingBagRight px-sm-1 px-md-4 px-lx-5">
       <h4 className='bagTitle'>Order Summary</h4>
       <div className='my-3'>
        <div className='timeWrapper d-flex justify-content-center align-items-center'><img src={time} alt='Serum' />Hurry! Your cart is reserved for 00:00 minutes.</div>
       </div>
       <div className='productPriceSec mb-3'>
        <div className='d-flex justify-content-between align-items-center py-1'><span>Subtotal</span><span>$ 59</span></div>
        <div className='d-flex justify-content-between align-items-center py-1'><span>Shipping</span><span>FREE</span></div>
        <div className='d-flex justify-content-between align-items-center py-1'><span>Total</span><span>$ 59</span></div>
       </div>
       <div className='checkoutBtn pb-2'>
        <NavLink to="/checkout" className="custom-button w-100">Checkout</NavLink>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 )
}

export default Cart