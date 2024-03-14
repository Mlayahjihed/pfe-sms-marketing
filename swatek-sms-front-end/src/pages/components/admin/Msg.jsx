import React , { useEffect }from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Getmsgs} from '../../../redux/action/msg'
import Rowmsg from '../Rowmsg'
const Msg = () => {
    const msgs = useSelector(state => state.msgs);
    const dispatch = useDispatch();
    useEffect(async () => {
        await dispatch(Getmsgs())
    }, []);
    return (
        <div class="col py-3">
             {msgs.msgs.length!==0?
             <div>
            {
                msgs.msgs.map(({ _id,nomprenom,email,msg }) => (
                    <Rowmsg _id={_id}  nomprenom={nomprenom} email={email} msg2={msg}/>
                ))
            } </div>:<h1>Aucune Réclamation Résu</h1> }
        </div>
    );
} 

export default Msg;