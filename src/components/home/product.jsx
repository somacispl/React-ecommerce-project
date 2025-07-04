import React from 'react'
import { NavLink } from 'react-router'

export default function Product({ product }) {
 // const { product } = data
 console.log(product)

 const outPutId = (id) => {
  if (id == 1) {
   return "shampoo"
  } else if(id == 2) {
   return "serum"
  } else {
   return "oil"
  }
 }

 return (
   <>
   <div id={outPutId(product.id)} className="py-4">
      <div className="bounceContent">
       <div className='productImg'><img src={product.productImg} alt='shampoo' /></div>
       <div className='productContent'>
        <div className="productContentInr">
         <h6>Just Launched</h6>
       <h3>{ product.productTitle}</h3>
         <p>{ product.productDesc}e</p>
       <div><NavLink className='custom-button' to={`/product/${product.id}`}>Shop Now</NavLink></div>
        </div>
       </div>
      </div>
     </div>
   </>
  )
}
