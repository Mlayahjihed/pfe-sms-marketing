import React from 'react';
import Classnames from 'classnames';
const Select2 = ({name,label,onChangeHandler,errors }) => {
    return (
        <div class="mb-3">
            <label for="add" class="form-label">{label}</label>
            <select name={name}  className={Classnames("form-control", {"is-invalid": errors})} class="form-control form-select" onChange={onChangeHandler}>
             <option selected value="">région</option>
             <option value="Monastir">Monastir</option>
             <option value="Sousse">Sousse</option>
             <option value="Mehdia">Mehdia</option>
             <option value="Sfax">Sfax</option>
             <option value="Ariana">Ariana</option>
             <option value="Béja">Béja</option>
             <option value="Ben Arous">Ben Arous</option>
             <option value="Gabés">Gabés</option>
             <option value="Gafsa">Gafsa</option>
             <option value="Jandouba">Jandouba</option>
             <option value="Kairouan">Kairouan</option>
             <option value="Kef">Kef</option>
             <option value="Kasserine">Kasserine</option>
             <option value="Kebili">Kebili</option>
             <option value="Manouba">Manouba</option>
             <option value="Mednine">Mednine</option>
             <option value="Nabeul">Nabeul</option>
             <option value="Tataouine">Tataouine</option>
             <option value="Siliana">Siliana</option>
             <option value="Sidi Bouzide">Sidi Bouzide</option>
             <option value="Touzer">Touzer</option>
             <option value="Zaghouan">Zaghouan</option>
             <option value="Tunis">Tunis</option>
             <option value="Bizerte">Bizerte</option>


             </select>
            {   
                errors && (<div  className="invalid-feedback">
                {errors}
              </div>)
            }
        </div>
    );
}

export default Select2;
