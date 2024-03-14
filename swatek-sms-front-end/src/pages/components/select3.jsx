import React from 'react';
import Classnames from 'classnames';
const Select3 = ({name,label,onChangeHandler,errors }) => {
    return (
        <div class="mb-3">
            <label for="add" class="form-label">{label}</label>
            <select name={name}  className={Classnames("form-control", {"is-invalid": errors})} class="form-control form-select" onChange={onChangeHandler}>
             <option selected value="">Age</option>
             <option value="15 99">touts</option>
             <option value="15 25">Adolescents</option>
             <option value="26 50">Adultes</option>
             <option value="51 99">Aînés</option>
             </select>
            {   
                errors && (<div  className="invalid-feedback">
                {errors}
              </div>)
            }
            </div>
    );
}

export default Select3;
