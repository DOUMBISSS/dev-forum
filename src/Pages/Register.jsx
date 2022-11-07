import { Link } from "react-router-dom";
// import { useState } from 'react';
import {auth} from '../firebase.config';
import { useRef } from "react"; 




export default function Register (){
  // const [name,setName]= useState();
  // const [email,setEmail]=useState();
  // const [password,setPassword]=useState();

  // const handleEmail =(event)=>{
  //     setEmail(event.target.value)
  // }

  // const handlePassword = (event)=>{
  //   setPassword(event.target.value)
  // }

  // const handleName = (event)=>{
  //   setName(event.target.value)
  // }

  const registerEmail = useRef();
  const registerPassword = useRef();

  const handleRegister = (e)=>{
    e.preventDefault();

    try {
      auth.createUserWithEmailAndPassword(
        registerEmail.current.value,
        registerPassword.current.value
      );
    }
        catch(error){
      console.log(error.message);
    } 
  };
    return (
        <div>
                  <div className='login--content'>
                  <h2 className='login--content--header'>Créer mon compte</h2>
                      <form onSubmit={handleRegister}>
                      <div class="form-floating mb-3">
                          <input type="text" class="form-control" id="floatingInput" placeholder="Name"/>
                          <label for="floatingInput">Nom</label>
                        </div>
                      <div class="form-floating mb-3">
                          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required ref={registerEmail}/>
                          <label for="floatingInput">Email</label>
                        </div>
                        <div class="form-floating">
                          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required ref={registerPassword}/>
                          <label for="floatingPassword">Mot de passe </label>
                        </div>
                        <div class="form-floating ">
                          <input type="password" class="form-control" id="floatingPassword" placeholder="Confirm Password" />
                          <label for="floatingPassword">Mot de passe (confirmation)</label>
                        </div>
                        <Link to='/Accueil'>
                          <button type="submit" class="btn btn-primary btn-block shadow">Inscription</button>
                          </Link>
                      </form>
                  </div>
            </div>
    )
}