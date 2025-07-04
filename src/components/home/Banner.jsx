import banner from '../../../public/images/banner.png'
import { NavLink } from 'react-router';


const Banner = () => {
 return (
  <>
   <div className='banner-holder position-relative'>
     <img className='banner' src={banner} alt='Banner' />
     <div className="container">
       <div className='bannerContent d-sm-flex flex-column justify-content-center align-items-start h-100 top-0 position-absolute'>
         <h1 className='fst-italic'>Crafted for Crown-Worthy Hair.</h1>
         <h1 className='fst-italic'>Buy 1 Get 1 Free</h1>
         <p className='fst-italic'>Shop Any 2 Products and Get Lowest-Priced Product Free</p>
         <NavLink className='custom-button' to="/product">SHOP NOW</NavLink>
       </div>
     </div>
   </div>
  </>
 )
}

export default Banner;