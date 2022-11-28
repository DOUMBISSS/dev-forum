import React, { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

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
    navigate('/')

  }

useEffect(() => {
  setUser(JSON.parse(localStorage.getItem("user"))) 
  }, [])

    return (
      <div>
      <header>
      <div className="navbar--left">
            <div className="navbar--logo">
              {/* <Link className ="logo" to="/Accueil"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Circle-icons-dev.svg/1024px-Circle-icons-dev.svg.png" alt="" /></Link> */}
              <h4>Dev Forum</h4>
            </div>
          </div>
          <div className="navbar--right">
            <div className="navbar--right--content">
              <div className='profil'>
                <i className="fa-solid fa-user" onClick={showProfil}></i>
              </div>
                <div className= {display ? "user--part display--user--part" : "user--part" }>
                  <div className="user--name">
                    <h6><i className="fa-solid fa-user" onClick={showProfil}></i> {user.email}</h6>
                    <div className='btn--close--login'>
                      <i className="fa-solid fa-xmark" onClick={closeProfil}></i>
                    </div>
                  </div>
                  <button className="logout--btn" onClick={logout}> <i className="fa-solid fa-right-from-bracket"></i> Déconnexion</button>
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

