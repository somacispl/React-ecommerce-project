import model from '../../../public/images/model.png'

const Testimonial = () => {
 return (
  <>
   <div className="testimonial py-5">
    <div className="container">
      <h2 className='pageTitle text-center mb-4'>Customer Testimonials</h2>
     <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
           <div className="carousel-item active">
            <div className='carousel-item-inr d-flex align-items-center flex-wrap'>
             <div className='model'>
              <img src={model} className="d-block w-100" alt="..." />
             </div>
             <div className='testimonial-content'>
              <h2>For Curly or Textured Hair</h2>
          <h5>“My curls have never looked this defined and hydrated. No frizz, no flakes—just bounce and shine. Total game-changer!”</h5>
          <h6>— Rhea M., Mumbai</h6>
             </div>
            </div>
        </div>
        <div className="carousel-item">
         <div className='carousel-item-inr d-flex align-items-center flex-wrap'>
          <div className='model'>
           <img src={model} className="d-block w-100" alt="..." />
          </div>
          <div className='testimonial-content'>
           <h2>For Curly or Textured Hair</h2>
          <h5>“My curls have never looked this defined and hydrated. No frizz, no flakes—just bounce and shine. Total game-changer!”</h5>
          <h6>— Rhea M., Mumbai</h6>
          </div>
         </div>
        </div>
        <div className="carousel-item">
         <div className='carousel-item-inr d-flex align-items-center flex-wrap'>
          <div className='model'>
           <img src={model} className="d-block w-100" alt="..." />
          </div>
          <div className='testimonial-content'>
           <h2>For Curly or Textured Hair</h2>
          <h5>“My curls have never looked this defined and hydrated. No frizz, no flakes—just bounce and shine. Total game-changer!”</h5>
          <h6>— Rhea M., Mumbai</h6>
          </div>
         </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
     </div>
    </div>
   </div>
  </>
 )
}

export default Testimonial