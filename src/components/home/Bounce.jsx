import shampoo from '../../../public/images/product1.png'
import serum from '../../../public/images/product2.png'
import oil from '../../../public/images/product3.png'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router'
import { ProductData } from './ProductData'
import Product from './Product'


const Bounce = () => {
 return (
  <>
   <div className='bounce'>
     <div className="container"><h2 className='pageTitle text-center fw-normal mb-4'>Bounce To</h2></div>
    <ul className='d-flex justify-content-center mb-4 px-3'>
      <li><Link to="shampoo" smooth={true} duration={500}>The Shampoo</Link></li>
      <li><Link to="oil" smooth={true} duration={500}>The Hair Oil</Link></li>
      <li><Link to="serum" smooth={true} duration={500}>The Hair Serum</Link></li>
    </ul>
    <div className="container">
     <div className='mb-5'>
       {ProductData.map((product, i) => {
          return(
            <Product product={product}  />
        )
       })}
     </div>
    </div>
  </div>
  </>
 )
}

export default Bounce;