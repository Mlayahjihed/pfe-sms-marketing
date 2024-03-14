import React from 'react';
import Classnames from 'classnames';

const Textarea = ({name,label,onChangeHandler,errors}) => {
    return (
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">{label}</label>
        <textarea required  className={Classnames("form-control", {"is-invalid": errors})} name={name} class="form-control" onChange={onChangeHandler} ></textarea>
        {

errors && (<div  className="invalid-feedback">
{errors}
</div>)
}
    </div>
    );
}

export default Textarea;
