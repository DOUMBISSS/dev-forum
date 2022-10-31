import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar () {

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
                  <h6>doumbia77fode@gmail.com</h6>
              </div>
              <div className='login--part'>
                  <h6>Logout</h6>
              </div>
            </div>   
          </div>  
    </header>
      
    <div className="main--header--part">
            <div class="d-flex justify-content-center align-items-center h-100 flex-column">
                <div class="container banner__container">
                    <h1 class="text-white font-weight-bold">Questions</h1>
                        <p class="text-white font-weight-bold">Ce forum est ouvert à toutes les questions liées à la programmation.<br/>
                        (PHP, Javascript, Java, C++, Ruby, Firebase, C, React, Dart, Julia...)</p>
                    <div class="w-100">
                        <input type="text" class="form-control form-control-lg w-100" placeholder="Rechercher des questions"/>
                    </div>
                </div>
             </div>
      </div>

     </div>
    );
}

