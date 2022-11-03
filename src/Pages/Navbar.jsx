import React from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { addUser } from '../Redux/actions';

export default function Navbar () {

  const email =useSelector(state=>state.connexionReducer.email)

  console.log(email)


    return (
      <div>
      <header>
      <div className="navbar--left">
            <div className="navbar--logo">
              <Link className = "logo" to="/Accueil"><h4>Baroland</h4></Link>
            </div>
          </div>
          <div className="navbar--right">
            <div className="navbar--right--content">
              <div className='profil'>
                  <h6>{email.email}</h6>
              </div>
              <div className='login--part'>
                  <h6>Logout</h6>
              </div>
            </div>   
          </div>  
    </header>
      
    <div className="main--header--part">
            <div className="d-flex justify-content-center align-items-center h-100 flex-column">
                <div className="container banner__container">
                    <h1 className="text-white font-weight-bold">Questions</h1>
                        <p className="text-white font-weight-bold">Ce forum est ouvert à toutes les questions liées à la programmation.<br/>
                        (PHP, Javascript, Java, C++, Ruby, Firebase, C, React, Dart, Julia...)</p>
                    <div className="w-100">
                        <input type="text" className="form-control form-control-lg w-100" placeholder="Rechercher des questions"/>
                    </div>
                </div>
             </div>
      </div>

     </div>
    );
}

