import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {allcontacts } from '../../../redux/action/contact'
import {allgroupes } from '../../../redux/action/contact'
import {Getach } from '../../../redux/action/forfait'
import { Link } from "react-router-dom";
import { Gethis } from '../../../redux/action/sms';
import Historique from './Historique ';
const Accueil = () => {
    const sms = useSelector(state => state.sms);
   
    useEffect(async () => {
        await dispatch(Gethis())
    }, []);
    const achats = useSelector(state => state.achats);
    useEffect(async () => {
        await dispatch(Getach())
    }, []);
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();
    useEffect(async () => {
        await dispatch(allcontacts())
    }, []);
    const groupes = useSelector(state => state.groupes);
   
    useEffect(async () => {
        await dispatch(allgroupes())
    }, []);
    return (
        <div className='col py-3 '>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <section >
                <div className="container my-5 py-5">
                    <div className="row mt-5">
                        <div className="col-md-3">
                            <Link to='allforfaits'class="card text-center nav-link text-white bg-dark " >
                                <div class="card-header">FORFAIT</div>
                                <br></br>
                                <h1>{achats.achat2.nbrsms} SMS</h1>
                                <div class="card-body">
                                   
                                </div>
                            </Link>

                        </div>
                        <div className="col-md-3">
                            <Link to='allcontact'class="card nav-link text-center  text-white bg-dark " >
                                <div class="card-header">CONTACT</div>
                                <br></br>
                                <h1>{contacts.contacts.length}</h1>
                                <div class="card-body">
                                   
                                </div>
                            </Link>

                        </div>
                        <div className="col-md-3">
                            <Link to="groupe"class="card text-center nav-link text-white bg-dark " >
                                <div class="card-header">GROUPE</div>
                                <br></br>
                                <h1>{groupes.groupes.length}</h1>
                                <div class="card-body">
                                   
                                </div>
                            </Link>

                        </div>
                        <div className="col-md-3">
                            <Link to="Sms"class="card text-center nav-link text-white bg-dark " >
                                <div class="card-header">SMS</div>
                                <br></br>
                                <h1>{sms.sms.length}</h1>
                                <div class="card-body">
                                   
                                </div>
                            </Link>

                        </div>
                        
                       

                    </div>
                </div>
            </section>
        </div>

    );
}

export default Accueil;
