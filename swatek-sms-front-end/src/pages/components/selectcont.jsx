import React from 'react';
import { MultiSelect } from "react-multi-select-component";
const Selectcont = ({options , selected , setSelected}) => {
    
    return (
        <div>
             <MultiSelect
          
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy=" selection"
      />
        </div>
    );
}

export default Selectcont;
