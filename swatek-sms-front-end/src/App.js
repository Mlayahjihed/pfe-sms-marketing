
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './pages/components/Navbar';
import Demande from './pages/demande';
import Acceill from './pages/Acceill';
import Login from './pages/login';
import Services from './pages/Servises';
import Contact from './pages/contact';

import Admin from './pages/admin';
import Client from './pages/client';
import Footer from './pages/components/footer';
import Resetpass from './pages/resetPassword';
import Notf from './pages/notf';
import Nota from './pages/nota';
import Forget from './pages/forget';
import Priveterouter from './pages/components/Priveterouter';
import Adminrouter from './pages/components/adminrouter';
import Forceredirect from './pages/components/forceredirect';
import store from "./redux/store";
import jwtdecode from "jwt-decode";
import { setUser } from './redux/action/authaction';
import { useSelector } from 'react-redux';
import {setAuth} from'./pages/setauth';
import Forfait from './pages/forfait';
if(window.localStorage.jwt){
  const decode = jwtdecode(window.localStorage.jwt);
  store.dispatch(setUser(decode));
 setAuth(window.localStorage.jwt);
  
}
function App() {
  const auth =useSelector(state=>state.auth)
  const user ={
    isConnected : auth.isConnected,
    role : auth.user.role
  }
  return (
    <BrowserRouter>
    <div >
      <Navbar user={user}/>
    <Routes>
          <Route path="/" element={
          <Forceredirect user={user}>
          <Acceill />
          </Forceredirect>}/>

          <Route path="/Services" element={<Forceredirect user={user}><Services/></Forceredirect>} />
          <Route path="/Demande" element={<Forceredirect user={user}><Demande /></Forceredirect>} />
          <Route path="/Login" element={<Forceredirect user={user}><Login /></Forceredirect>} />
          <Route path="/forget" element={<Forceredirect user={user}><Forget /></Forceredirect>} />
          <Route path="/passwordreset/:passwordreset" element={<Forceredirect user={user}><Resetpass /></Forceredirect>} />
          <Route path="/contact" element={<Forceredirect user={user}><Contact /></Forceredirect>} />
          <Route path="/forfait" element={<Forceredirect user={user}><Forfait /></Forceredirect>} />

          <Route path="/Admin//*" element={
          <Adminrouter user={user}>
          <Admin />
        </Adminrouter>
          } />
          <Route path="/Client//*" element={
          <Priveterouter user={user}>
            <Client />
          </Priveterouter>
          } />
          <Route path="*" element={<Notf />} />
          <Route path="/Nota" element={<Nota />} />
    
      </Routes>
      <Footer/>
      </div>
  </BrowserRouter>
    
  );
}

export default App;
