import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Logout } from "../../redux/action/authaction";
import Img from "../images/logo.png"
const Navbar = ({user}) => {
    const dispatch = useDispatch();
    const logout =({user})=>{
        dispatch(Logout());

    }
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow " >
                <div className="container">
                    <nav className=" navbar navbar-light bg-dark">
                            <Link className="navbar-brandw" to="/">
                                <img src={Img} alt="" width="150" height="90"/>
                            </Link>
                        
                    </nav>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        
                        
                        { user.isConnected === true ?<ul className="navbar-nav me-auto mb-2 mb-lg-0 "> <li className="nav-item">
                                <Link className="nav-link active text-light " aria-current="page" to="/"></Link>
                            </li> </ul>: <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                             <li className="nav-item">
                                <Link className="nav-link active text-light " aria-current="page" to="/">Acceuil</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/Services" > Servises</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link text-light " to="/forfait">Forfaits</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light " to="/Demande">S'inscrire</Link >
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light " to="/contact">Contact</Link>
                            </li> </ul>}

                            
                        
                            { user.isConnected === true ?<Link to="#" onClick={logout} className="btn btn-outline-light ms-auto px-auto">
                            <i className="fa fa-sign-in ms-2 rounded-pill"></i> Déconnexion</Link>
                            :
                        <Link to="/login"className="btn btn-outline-light ms-auto px-auto">
                            <i className="fa fa-sign-in ms-2 rounded-pill"></i>  Espace Utilisateur</Link>
}
                            


                    </div>

                </div>
            </nav>

        </div>
    );

}
export default Navbar;