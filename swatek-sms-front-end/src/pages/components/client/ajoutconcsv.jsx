import React ,{useState} from 'react';

import * as XLSX from 'xlsx';
import  {addcsv}  from '../../../redux/action/contact';
import {useDispatch } from 'react-redux';
const Ajoutconcsv = () => {
  const [form,setForm]= useState([]);
  const dispatch = useDispatch();
  
    const onChange = (e) => {
        const [file] = e.target.files;
        const reader = new FileReader();
    
        reader.onload = (evt) => {
          const bstr = evt.target.result;
          const wb = XLSX.read(bstr, { type: "binary" });
          const ws = wb.Sheets[wb.SheetNames[0]];
          const data = XLSX.utils.sheet_to_json(ws, { header: 2 });
          setForm([
            ...form,
            data
          ])
        };
        reader.readAsBinaryString(file);
      };
      const onSubmit =(e)=>{
        e.preventDefault();
        dispatch(addcsv(form));
    }


    return (
        <div class=" col py-3 " >
          <form class="mb-3 card container ">
          <br></br>
            <label class="form-label"><h1>Importer Ficher CSV</h1></label>
            <br></br>
            <input type="file" onChange={onChange}  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"   class="form-control form-control-lg"
            /><br></br>
            <button type='submit' onClick={onSubmit} className='btn btn-outline-dark'><i className="fa fa-download"></i>  Importer</button>
            <br></br>
            </form>
      </div>
    );
}

export default Ajoutconcsv;
