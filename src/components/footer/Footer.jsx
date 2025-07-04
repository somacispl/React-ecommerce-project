import rightArrow from '../../../public/images/right-arrow.png'
import facebook from '../../../public/images/facebook.png'
import linkedIn from '../../../public/images/linked-in.png'
import twitter from '../../../public/images/twitter.png'
import facebookHover from '../../../public/images/facebook-hover.png'
import linkedInHover from '../../../public/images/linkedin-hover.png'
import twitterHover from '../../../public/images/twitter-hover.png'
import { NavLink } from 'react-router'

const Footer = () => {
 return (
  <>
   <div className="footer py-5">
    <div className="container">
     <div className="ftrInr d-flex justify-content-between flex-wrap align-items-center">
      <div className="footer1">
       <h4>Keep in Touch</h4>
       <p>Signup for access to special offers, new products, tips, and more.</p>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Recipient’s username" aria-label="Recipient’s username" aria-describedby="basic-addon2" />
          <span className="input-group-text" id="basic-addon2"><img src={rightArrow} alt="arrow" /></span>
        </div>
       <div className='socialIcon'>
        <ul className='d-flex gap-4 mt-4'>
         <li><a href="javascript:void(0)"><img className='socialNormal' src={facebook} alt="Facebook" /><img className='socialHover' src={facebookHover} alt="Facebook" /></a></li>
         <li><a href="javascript:void(0)"><img className='socialNormal' src={linkedIn} alt="linked in" /><img className='socialHover' src={linkedInHover} alt="linked in" /></a></li>
         <li><a href="javascript:void(0)"><img className='socialNormal' src={twitter} alt="Twitter" /><img className='socialHover' src={twitterHover} alt="Twitter" /></a></li>
        </ul>
       </div>
      </div>
      <div className="footer2 ftrLink">
       <ul>
        <li><NavLink to="/product">Shop</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="javascript:void(0)">Search</NavLink></li>
       </ul>
      </div>
      <div className="footer3 ftrLink">
       <ul>
        <li><NavLink to="javascript:void(0)">Refund Policy</NavLink></li>
        <li><NavLink to="javascript:void(0)">Privacy Policy</NavLink></li>
        <li><NavLink to="javascript:void(0)">Terms of Service</NavLink></li>
       </ul>
      </div>
     </div>
    </div>
   </div>
  </>
 )
}

export default Footer