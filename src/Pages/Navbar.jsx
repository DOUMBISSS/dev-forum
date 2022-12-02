import React, { useEffect } from 'react';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Navbar ({searchQuestion,setSearchQuestion}) {

  const navigate = useNavigate();
  const [user,setUser] = useState("");
  const [display,setDisplay]=useState(false);

  const handleSearch = (e)=>{
    setSearchQuestion(e.target.value);
  }
  const showProfil =()=>{
    setDisplay(true)
  }
  const closeProfil =()=>{
    setDisplay(false)
  }

  const logout =()=>{
    localStorage.clear();
    navigate('/');

  }

useEffect(() => {
  setUser(JSON.parse(localStorage.getItem("user"))) 
  }, [])

    return (
      <div>
      <header>
      <div className="navbar--left">
            <div className="navbar--logo">
              <div className ="navbar--logo--box" >
              <Link to="/Accueil">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Circle-icons-dev.svg/1024px-Circle-icons-dev.svg.png" alt="" />
                </Link>
              </div>
            </div>
          </div>

            <div className='navbar--center'>
                 <h1 className='title'>Dev Forum</h1>
            </div>
          <div className="navbar--right">
            <div className="navbar--right--content">
              <div className='profil'>
                <i className="fa-solid fa-user" onClick={showProfil}></i>
              </div>
                <div className= {display ? "user--part display--user--part" : "user--part" }>
                  <div className="user--name--content">
                      <div className="user--name">
                            <h6><i className="fa-solid fa-user" onClick={showProfil}></i> {user.name}</h6>
                            <h6 className='user--email'> {user.email}</h6>
                        </div>
                      <div className='btn--close--login'>
                        <i className="fa-solid fa-xmark" onClick={closeProfil}></i>
                      </div>
                  </div>
                  <button className="logout--btn" onClick={logout}> <i className="fa-solid fa-right-from-bracket"></i> Déconnexion</button>
                  <ToastContainer position="top-right" autoClose={3001} hideProgressBar={true} newestOnTop={false} closeOnClick rtl={false}  pauseOnFocusLoss draggable  pauseOnHover theme="colored"  />
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
                        <input type="text" className="form-control form-control-lg w-100" placeholder="Rechercher des questions" onChange={handleSearch} value={searchQuestion}/>
                    </div>
                </div>
             </div>
      </div>

     </div>
    );
}

