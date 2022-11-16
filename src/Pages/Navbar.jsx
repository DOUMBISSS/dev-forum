// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {Link} from 'react-router-dom';
// import { addNewUser } from '../Redux/actions';
// import { useState } from 'react';
// import { addUser } from '../Redux/actions';

export default function Navbar ({searchQuestion,setSearchQuestion}) {

  // const user =useSelector(state=>state.connexionReducer.user)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   fetch('http://127.0.0.1:4000/register')
  //   .then((res)=>res.json())
  //   .then((user)=>{dispatch(addNewUser(user))}
  //   )
  //   .catch(e => { console.log(e)})
  //   }, [])

    

  const handleSearch = (e)=>{
    setSearchQuestion(e.target.value);
  }

  const [display,setDisplay]=useState(false);

  const showProfil =()=>{
    setDisplay(true)
  }
  const closeProfil =()=>{
    setDisplay(false)
  }

    return (
      <div>
      <header>
      <div className="navbar--left">
            <div className="navbar--logo">
              <Link className ="logo" to="/Accueil"><h4>Baroland</h4></Link>
            </div>
          </div>
          <div className="navbar--right">
            <div className="navbar--right--content">
              <div className='profil'>
                <i className="fa-solid fa-user" onClick={showProfil}></i>
              </div>
                <div className= {display ? "user--part display--user--part" : "user--part" }>
                  <div className="user--name">
                    <h6> {/* {user.name} */} <i className="fa-solid fa-user" onClick={showProfil}></i> Doumbia Fode</h6>
                    <div className='btn--close--login'>
                      <i className="fa-solid fa-xmark" onClick={closeProfil}></i>
                    </div>
                  </div>
                  <button className="logout--btn"> <i className="fa-solid fa-right-from-bracket"></i> Déconnexion</button>
                </div>
              </div>
            </div>    
    </header>
         {/* <div className='login--part'>
                  <h6><i className="fa-solid fa-right-from-bracket"></i>Logout</h6>
              </div> */}
      
    <div className="main--header--part">
            <div className="d-flex justify-content-center align-items-center h-100 flex-column">
                <div className="container banner__container">
                    <h1 className="text-white font-weight-bold">Questions</h1>
                        <p className="text-white font-weight-bold">Ce forum est ouvert à toutes les questions liées à la programmation.<br/>
                        (PHP, Javascript, Java, C++, Ruby, Firebase, C, React, Dart, Julia...)</p>
                    <div className="w-100">
                        <input type="text" className="form-control form-control-lg w-100" placeholder="Rechercher des questions" onChange={handleSearch} value={searchQuestion}/>
                    </div>
                </div>
             </div>
      </div>

     </div>
    );
}

