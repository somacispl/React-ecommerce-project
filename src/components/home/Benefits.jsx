import icon1 from '../../../public/images/icon1.png'
import icon2 from '../../../public/images/icon2.png'
import icon3 from '../../../public/images/icon3.png'
import icon4 from '../../../public/images/icon4.png'
import icon5 from '../../../public/images/icon5.png'


const Benefits = () => {
 return (
  <>
   <div className='benefitsHolder py-5'>
     <div className='container'>
       <h2 className='pageTitle text-center'>Shop by Hair Benefits</h2>
       <div className='benefits row flex-wrap justify-content-center justify-content-md-between mt-4'>
         <div className='benefit'>
           <img src={icon1} />
           <span className='text-center py-3 d-block'>Clarifying</span>
         </div>
         <div className='benefit'>
           <img src={icon2} />
           <span className='text-center py-3 d-block'>shinning</span>
         </div>
         <div className='benefit'>
           <img src={icon3} />
           <span className='text-center py-3 d-block'>Moisturizing</span>
         </div>
         <div className='benefit'>
           <img src={icon4} />
           <span className='text-center py-3 d-block'>Calming</span>
         </div>
         <div className='benefit'>
           <img src={icon5} />
           <span className='text-center py-3 d-block'>Healthy Aging</span>
         </div>
       </div>
     </div>
   </div>
  </>
 )
}
export default Benefits;