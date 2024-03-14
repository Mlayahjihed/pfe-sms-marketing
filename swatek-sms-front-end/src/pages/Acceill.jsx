import React from 'react';
import Img from "./images/12.jpg"
import Img2 from "./images/14.jpg"
import Carousel from 'react-bootstrap/Carousel';
import Servises from './Servises'
import Forfait from './forfait'
import Hero from './hero1';
import ContactNous from './contactnous';

const Acceill = () => {
    
    return (
        <div>
  <div>
            <div>
            <section id="Acceill">
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-md-8 mt-5">
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white">Swatek SMS </h1>
                            <br></br>
                            
                            <p className="load fs-4 mb-5 text-center text-white">La messagerie SMS peut vous aider à attirer de nouveaux clients et à renforcer
les relations avec vos clients tout au long de l'expérience utilisateur.
Grâce à des campagnes de marketing par SMS spécialement conçues, vous pouvez
Susciter l'engagement et inciter à l'action en proposant de nouvelles offres, des mises à
Jour des commandes et des informations sur les dernières fonctionnalités des produits.</p>
                            <div className="buttons justify-content-center">
                    
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </div>
     <Hero/>
   
  
    
   
    <ContactNous/>
    </div>
    );
    
}

export default Acceill;
 