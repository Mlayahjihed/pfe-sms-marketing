import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {

    return (



        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark ">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2  text-white min-vh-100">
                
                <br></br>
                <ul class="nav nav-pills flex-column mb-sm-auto  mb-0 align-items-center align-items-sm-start" >
                    <li>
                        <Link to="" data-bs-toggle="collapse" class="btn btn-outline-light rounded-pill px-4 py-2 ">
                            <i class="fa  fa-line-chart"></i> <h5 class="ms-1 d-none d-sm-inline">Statistique</h5> </Link>

                    </li>
                    <br></br>
                    <li>
                        <Link to="profiles" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                            <i class="fa fa-users"></i> <h5 class="ms-1 d-none d-sm-inline">Consulter Clients</h5> </Link>

                    </li>
                    <br></br>
                    <li>
                        <Link to="reclamation" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white ">
                            <i class="fa fa-envelope"></i> <h5 class="ms-1 d-none d-sm-inline ">Consulter Reclamations</h5> </Link>

                    </li>
                    <br></br>
                    <li>
                        <Link to="Profile" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                            <i class="fa fa-cogs"></i> <h5 class="ms-1 d-none d-sm-inline">profil</h5> </Link>

                    </li>
                    <br></br>
                    <li>
                    <Link to="ajoutforfait" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                        <i class="fa fa-plus" aria-hidden="true"></i> <h5 class="ms-1 d-none d-sm-inline">Ajouter Forfait</h5> </Link>
                        </li>
                        <br></br>
                         <li>
                    <Link to="allforfait" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                        <i class="fa fa-gift" aria-hidden="true"></i> <h5 class="ms-1 d-none d-sm-inline">Consulter  Forfaits</h5> </Link>
                        </li> 
                        <br></br>
                        <li>
                    <Link to="alldem" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-white">
                        <i class="fa fa-list" aria-hidden="true"></i> <h5 class="ms-1 d-none d-sm-inline"> Consulter Demandes D'achats</h5> </Link>

                        </li>


                </ul>




            </div>
        </div>

    );
}

export default Nav;

