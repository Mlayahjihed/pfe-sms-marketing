import React from 'react';
import Classnames from 'classnames';
const Select = ({name,label,onChangeHandler,errors }) => {
    return (
        <div class="mb-3 ">
            <label for="add" class="form-label">{label}</label>
            <select name={name}  className={Classnames("form-control", {"is-invalid": errors})} class="form-control form-select" onChange={onChangeHandler}>
             <option selected value="">sexe</option>
             <option value="Homme">Homme</option>
             <option value="Femme">Femme</option>
             </select>
            {   
                errors && (<div  className="invalid-feedback">
                {errors}
              </div>)
            }
        </div>
    );
}

export default Select;
