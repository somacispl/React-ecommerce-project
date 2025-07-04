import { useContext, useState } from 'react'
import oil from '../../../public/images/product3.png'
import whiteStar from '../../../public/images/white-star.png'
import Tabs from './Tabs'
import { useShopContext } from '../../context/ShopContext'
import { useParams } from 'react-router-dom';



const Shop = ({ minValue = 0, maxValue = 20 }) => {
 const { items, clickHandler} = useShopContext()
 const { id } = useParams();
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
 const { ProductData, addCart, cartProducts } = useShopContext()

 const currentData = ProductData.filter(product => product.id == id)

const [product] = currentData

 console.log(currentData, cartProducts)


 return (
  <>

   <div className="shopSection" >
    <div className="container">
     <div className="shopContent d-flex flex-wrap align-items-center">
      <div className="shopProduct"><img src={product.productImg} alt='Oil' /></div>
      <div className='productContent'>
       <h2 className='pageTitle'>{product.productTitle }</h2>
       <p>{product.productDesc }</p>
       <div>{product.productPrice } <del>₹790</del></div>
       <div className='rating mt-4'><span className='px-2 py-1'><img src={whiteStar} alt='Oil' />4.8</span></div>
       <div className='my-4'>
        <div className='counter'>
         <button onClick={handleDecrementCounter}>-</button>
         <span>{count}</span>
         <button onClick={handleIncrementCounter}>+</button>
        </div>
       </div>
       <div className='addToCart'><a href="javascript:void(0)" className='custom-button w-100 ' onClick={()=>addCart(product)}>Add To Cart</a></div>
      </div>
     </div>
    </div>
   </div>
   <Tabs />
  </>
 )
}

export default Shop