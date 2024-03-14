import React from 'react';
import { Link } from "react-router-dom";
const Nav = () => {
    return (
        
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div class="d-flex flex-column text-white align-items-center align-items-sm-start px-3 pt-2  min-vh-100">
               

                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <br></br>
                        <li>
                            <Link to="" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                                <i class="fa fa-home"></i> <h5 class="ms-1 d-none d-sm-inline">Accueil</h5> </Link>
                           
                        </li>
                        <br></br>
                        <li>
                            <Link to="profile" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                                <i class="fa fa-cogs"></i> <h5 class="ms-1 d-none d-sm-inline">Profil</h5> </Link>
                           
                        </li>
                        <br></br>
                        <li>
                            <Link to="allforfaits" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                                <i class="fa fa-gift"></i> <h5 class="ms-1 d-none d-sm-inline"> Forfaits</h5> </Link>
                           
                        </li>
                        <br></br>
                        <li>
                            <Link to="ajoutcon" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                            <i class="fa fa-address-book-o" aria-hidden="true"></i> <h5 class="ms-1 d-none d-sm-inline">Ajouter Contact</h5> </Link>
                           
                        </li>
                        <br></br>
                        <li>
                            <Link to="allcontact" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                            <i class="fa fa-users" aria-hidden="true"></i> <h5 class="ms-1 d-none d-sm-inline"> Contact</h5> </Link>
                           
                        </li>
                        <br></br>
                        <li>
                            <Link to="groupe" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                            <i class="fa fa-plus" aria-hidden="true"></i> <h5 class="ms-1 d-none d-sm-inline">Groupe</h5> </Link>
                           
                        </li>
                        <br></br>
                        <li>
                            <Link to="sms" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                            <i class="fa fa-commenting-o" aria-hidden="true"></i> <h5 class="ms-1 d-none d-sm-inline">Sms</h5> </Link>
                           
                        </li>
                       
                        <br></br>
                        <li>
                            <Link to="planifie" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                            <i class="fa fa-calendar" aria-hidden="true"></i> <h5 class="ms-1 d-none d-sm-inline"> Planifier SMS</h5> </Link>
                           
                        </li>
                        <br></br>
                        <li>
                            <Link to="Historique" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                            <i class="fa fa-history" aria-hidden="true"></i> <h5 class="ms-1 d-none d-sm-inline"> Historique </h5> </Link>
                           
                        </li>
                        <br></br>
                        <li>
                            <Link to="reclamtion" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                            <i class="fa fa-envelope-o" aria-hidden="true"></i> <h5 class="ms-1 d-none d-sm-inline"> Contactez-nous</h5> </Link>
                           
                        </li>
                        
                       
                        <br></br>
                        <li>
                            <Link to="dash" data-bs-toggle="collapse" class="btn btn-outline-light rounded-pill px-4 py-2 ">
                            <i class="fa fa-bar-chart" aria-hidden="true"></i> <h5 class="ms-1 d-none d-sm-inline">Statistiques</h5> </Link>
                           
                        </li>
                       
                       
                  
                  
                    </ul>
                    
                   
                </div>
            </div>
    
    );
}

export default Nav;
