import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import 'animate.css';
import Accueil from './Pages/Accueil';
import Question from './Pages/Question';
import Details from './Pages/Details';
import AuthMiddleware from './middlewares/AuthMiddleware';
import LoginMiddleware from './middlewares/LoginMiddleware';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<LoginMiddleware><Home/></LoginMiddleware>}/>
    <Route path='/Accueil' element={<AuthMiddleware><Accueil/> </AuthMiddleware>}/>
    <Route path='/question' element={<AuthMiddleware><Question/></AuthMiddleware>}/>
    <Route path='/details/:id' element={<AuthMiddleware><Details/></AuthMiddleware>}/>
  </Routes>
  <ToastContainer position="top-right" autoClose={3001} hideProgressBar={true} newestOnTop={false} closeOnClick rtl={false}  pauseOnFocusLoss draggable  pauseOnHover theme="light"  />
    </>
  );
}

