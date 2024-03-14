import  React from 'react' 
import { Link } from 'react-router-dom';
import './hero.css';
const Hero = () => {
    return (
        <div className="flex-container">             
      
     
     <div className='image-container'>

    
     </div>
        <div><p className='parg'>Quelque soit la taille de votre entreprise, Swatek SMS vous propose une panoplie de services SMS   
        </p>
            <div className='btnn'>
            
            <Link to="/services"className="btn btn-outline-dark rounded-pill ms-auto px-auto">
                             Consulter Nos Servises</Link>
        </div>
        </div> 
   
      </div>
    );
}
export default Hero;


