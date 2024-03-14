import React from 'react';

const Rowfor2 = ({id, nompack ,prix ,nbrsms , validite,dateD,dateF}) => {
    return (
        <div className="col-md-4">
            <div class="card  border-dark p-3 text-center">
                        <div class="card-body">
                            <h1 class="card-title  ">Nom de Pack </h1>
                            <h5 >{nompack}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Prix :{prix} Dt</li>
                            <li class="list-group-item">Nombre SMS :{nbrsms}</li>
                            <li class="list-group-item">Validité :{validite} Mois</li>
                            <li class="list-group-item">date debut :{dateD} </li>
                            <li class="list-group-item">date fin :{dateF} </li>
                        </ul>
                        </div>
                        <br></br>
                    </div>
                    
        
    );
}

export default Rowfor2;
