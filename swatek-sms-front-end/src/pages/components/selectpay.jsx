import React from 'react';
import Classnames from 'classnames';

const Selectpay = ({name,label,onChangeHandler,errors }) => {
    return (
        <div class="mb-3">
        <label for="add" class="form-label"><h3>{label}:</h3></label>
        <select name={name}  className={Classnames("form-control", {"is-invalid": errors})} class="form-control form-select" onChange={onChangeHandler}>
         <option selected value="">Select Mode De Paiement</option>
         <option value="Virement ">Virement</option>
         <option value="Carte Bancaire">Carte Bancaire</option>
         </select>
        {   
            errors && (<div  className="invalid-feedback">
            {errors}
          </div>)
        }
        </div>
    );
}

export default Selectpay;
