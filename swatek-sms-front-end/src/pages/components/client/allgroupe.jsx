import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Rowgroupe from '../rowgroupe';
import {allgroupes } from '../../../redux/action/contact'
const Allgroupe = () => {
    const groupes = useSelector(state => state.groupes);
    const dispatch = useDispatch();
    useEffect(async () => {
        await dispatch(allgroupes())
    }, []);
    return (
        <div className='col py-3 row mt-5 '>


{          
          groupes.groupes.map(({_id ,nomgroupe,list }) => (
           <Rowgroupe id={_id} nomgroupe={nomgroupe}list={list.length}  />
                ))
            }



    </div>
    );
}

export default Allgroupe;
