import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import 'animate.css';
import Accueil from './Pages/Accueil';


export default function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/Accueil' element={<Accueil/>}/>
  </Routes>
  );
}

