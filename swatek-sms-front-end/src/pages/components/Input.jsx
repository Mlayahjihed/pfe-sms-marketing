import React from 'react';
import Classnames from 'classnames';
const Input = ({id,name,label,value,type,onChangeHandler,min,errors,accept}) => {
    return (
        <div class="mb-3">
            <label for="add" class="form-label">{label}</label>
            <input type={type}  id={id} accept={accept} value={value}  min={min} className={Classnames("form-control", {"is-invalid": errors})} name={name} class="form-control" onChange={onChangeHandler} 
            />
            {
               
                errors && (<div  className="invalid-feedback">
                {errors}
              </div>)
            }
        </div>
    );
}

export default Input;
