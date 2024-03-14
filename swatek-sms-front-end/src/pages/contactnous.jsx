import  React from 'react' 
import './contactnous.css';
import { Link } from 'react-router-dom';
const ContactNous = () => {
    return (

   
       
           <div className='main'>
            <div className='content'>
            <p className='pargg'>
                <h1>Nous Contacter</h1>
                <br></br>
                <h4>N'hésitez pas à nous contacter pour passer</h4>
                <h4 className='h'>votre commande ou pour demander des</h4>
                <h4 className='r'>informations suplémentaires</h4>
                <br></br>
                <br></br>
                <br></br>
                <div className='btnn'>
                <Link to="/contact"className="btn btn-outline-light rounded-pill ms-auto px-auto">
                             Contactez-nous</Link>
           </div>
           </p>
           
           </div>
           </div> 
      
                 
                             
    );
}

export default ContactNous;


