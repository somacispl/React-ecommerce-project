import logoIcon from '../../../public/images/logoIcon.png'
const About = () => {
 return (
  <>
   <div className="aboutHolder py-5">
    <div className="container">
      <div className="aboutSec pb-5">
       <h3 className='pb-3 aboutTitle'><img className='logo-icon' src={logoIcon} alt='Banner' />Brand Overview</h3>
       <h6>PureBloom offers a range of natural and organic hair and skincare products that are:</h6>
       <p>Cruelty‑free, free from sulfates, parabens, silicones, and harsh synthetics fullbloombeauty.com+5ubuy.co.in+5purebloom.store+5
      Often vegan, handcrafted, and plastic‑free (e.g., shampoo bars) purebloom.gr+1purebloom.gr+1
        Focused on sustainability and eco-friendly practices</p>
       <p>Their haircare line may include bar shampoos, conditioners, treatments, and masks—emphasizing clean formulations and effective nourishment</p>
      </div>
      <div className="aboutSec pb-5">
       <h3 className='pb-3 aboutTitle'>✅  Pros & Considerations</h3>
       <h5 className='pb-2'>👍 Pros</h5>
       <ul>
        <li>Effective oil-control, shine boost, and scalp cleanliness</li>
        <li>Eco-conscious, chemical-free formulation</li>
        <li>Vegan, cruelty-free, handling diverse hair textures</li>
       </ul>
       <h5 className='pb-2 pt-3'>⚠️ Considerations</h5>
       <ul>
        <li>Performance may vary: some report dryness or brittleness, especially on high-porosity hair</li>
        <li>For optimal results, pairing with hydrating conditioner or mask is recommended</li>
       </ul>
      </div>
      <div className="aboutSec pb-5">
       <h3 className='pb-3 aboutTitle'>🧴 Ideal For</h3>
       <ul>
        <li>People seeking clean, natural, sustainable haircare</li>
        <li>Those with oily scalp or low-porosity hair types</li>
        <li>Anyone looking to reduce plastic usage with bar shampoo options</li>
       </ul>
      </div>
      <div className="aboutSec pb-5">
       <h3 className='pb-3 aboutTitle'>🛠️ Pro Tips</h3>
       <ul>
        <li>Patch-test & personalize: especially if your hair is high-porosity or prone to dryness.</li>
        <li>Use conditioner/mask after shampooing to maintain moisture.</li>
        <li>Try sample sizes first, as formula responses differ per hair type.</li>
       </ul>
      </div>
      <div className="aboutSec pb-5">
       <h3 className='pb-3 aboutTitle'>🔍 Final Take</h3>
       <p>Purebloom stands out as a clean, eco‑friendly haircare brand with many positive reviews on shine, oil control, and natural scent. Bear in mind that results vary—especially if your hair is prone to dryness. With the right routine (shampoo + conditioner/mask combo), it can be a strong pick for those prioritizing natural ingredients and sustainability.</p>
       </div>
     </div>
   </div>
  </>
 )
}

export default About