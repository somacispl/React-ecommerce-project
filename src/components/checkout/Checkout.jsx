import logo from '../../../public/images/logo.png'
import { useState } from 'react'
import serum from '../../../public/images/serum.png'
import upi from '../../../public/images/upi.png'
import paymentMethod from '../../../public/images/onlinePay.png'
import { CitySelect, CountrySelect, StateSelect } from 'react-country-state-city'
import 'react-country-state-city/dist/react-country-state-city.css'
import { NavLink, Link } from 'react-router'

const Checkout = () => {

 const [countryid, setCountryid] = useState(0)
 const [stateid, setStateid] = useState(0)

 return (
  <>

   <div className="checkoutHolder">
    <div className="wrapper">
     <div className="checkoutInr d-flex flex-wrap">
       <div className="checkoutLeft py-5 px-5">
       <div className='checkoutLogo'><Link to="/"><img src={logo} alt='Serum' /></Link></div>
       <form>
        <h3 className='checkoutTitle mb-3 mt-5'>Contact</h3>
        <div className="mb-3">
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Email address' />
        </div>
        <h3 className='checkoutTitle mb-3 mt-5'>Delivery</h3>
        <div className="mb-3">
         <CountrySelect
          onChange={(e) => {
           setCountryid(e.id);
           console.log(e)
          }}
          placeHolder='Select Country'
         />
        </div>
        <div className="row mb-3">
          <div className="col">
            <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
          </div>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="address" placeholder='Full Address (House no., Area,etc)' />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="Landmark" placeholder='Landmark (optional)' />
        </div>
        <div className="row mb-3">
         <div className="col">
          <StateSelect
          disabled={!countryid}
          countryid={countryid}
          onChange={(e) => {
           setStateid(e.id);
           console.log(e)
          }}
          placeHolder='Select State'
         />
          </div>
         <div className="col">
          <CitySelect
          disabled={!stateid}
          countryid={countryid}
          stateid={stateid}
          onChange={(e) => {
           console.log(e)
          }}
          placeHolder='Select City'
         />
         </div>
         <div className="col">
            <input type="text" className="form-control" placeholder="Pincode" aria-label="Pincode"/>
          </div>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id="Phone" placeholder='Phone' />
        </div>
        <h5 className='checkoutTitle-sm mb-3 mt-5'>Billing address</h5>
        <div className='sameAddress mb-3'>
         <div className='checkHolder'>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" defaultChecked />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Same as delivery address
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
            <label className="form-check-label" htmlFor="exampleRadios2">
              Use a different billing address
            </label>
          </div>
         </div>
        </div>
       </form>
      </div>

      <div className="checkoutRight py-5">
       <div className='px-5'>
        <div className="d-flex align-items-center pb-4">
         <div className="bagProductImg"><img src={serum} alt='Serum' /></div>
         <div className="bagProductContent">
          <h5>PureBloom Advanced Hair Growth Serum</h5>
          <div className='bagPrice'>$ 59</div>
         </div>
        </div>
        <div className="row g-3 mb-4">
          <div className="col-sm-9">
            <input type="text" className="form-control" placeholder="Discount code or gift card" aria-label="Discount code or gift card" />
          </div>
          <div className="col-sm">
            <button type="submit" className="btn grayBtn w-100">Apply</button>
          </div>
        </div>
       </div>
       <div className='productPriceSec pb-4'>
        <div className='px-5'>
         <div className='d-flex justify-content-between align-items-center py-2'><span>Subtotal</span><span>$ 59</span></div>
         <div className='d-flex justify-content-between align-items-center py-2'><span>Shipping</span><span>FREE</span></div>
         <div className='d-flex justify-content-between align-items-center py-2'><span>Total</span><span>$ 59</span></div>
        </div>
       </div>


       <div className="px-5">
        <h3 className='checkoutTitle mb-3 mt-5'>Payment</h3>
        <p>All transactions are secure and encrypted.</p>
        <div className='mb-3 payment-method'>
         <div className='checkHolder'>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios2" id="upi" value="option1" defaultChecked />
            <label className="form-check-label d-flex align-items-center" htmlFor="upi">
            <span>Pay Now - via UPI, Cards, Wallets, NetBanking and more</span>
              <b><img src={paymentMethod} alt='payment' /></b>
            </label>
          </div>
          <div><img src={upi} alt='payment' /></div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios2" id="cash" value="option2" />
            <label className="form-check-label" htmlFor="cash">
              Cash on Delivery
            </label>
          </div>
         </div>
        </div>
        <div className='checkoutBtn mb-2'>
        <NavLink to="javascript:void(0)" className="custom-button w-100">Pay Now</NavLink>
       </div>
       </div>
      </div>
    </div>
   </div>
   </div>
  </>
 )
}

export default Checkout;