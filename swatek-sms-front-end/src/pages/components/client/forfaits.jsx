import React, { useEffect ,useState} from 'react';
import Rowfor3 from '../Rowfor3';
import { useDispatch, useSelector } from 'react-redux'
import { allforfaits } from '../../../redux/action/forfait'
 
const Forfaits = () => {
    
    const forfaits = useSelector(state => state.forfaits);
    const dispatch = useDispatch();

    useEffect(async () => {
        await dispatch(allforfaits())
    }, []);
    return (
        
        <div className='col py-3'>

        <div class="">
        <section id="service">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">

                        <h1 className="display-6 text-center mb4">Notre<b> Super</b> Forfaits</h1>
                        <hr className='w-25 mx-auto'></hr>
                    </div>
                </div>
                <div className="row mt-5  ">
                    {
                        forfaits.forfaits.map(({ _id, nompack, prix, nbrsms, nbrentet, validite,dateD,dateF }) => (
                            <Rowfor3 id={_id} nompack={nompack} prix={prix} nbrsms={nbrsms} nbrentet={nbrentet} validite={validite}  dateD={dateD} dateF={dateF}
                            />
                        ))
                    }</div></div>
        </section>
        </div>

    </div>
    );
}

export default Forfaits;
