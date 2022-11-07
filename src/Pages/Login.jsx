import { Link } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
// import { addUser } from '../Redux/actions';
import { useRef } from "react"; 
import {auth} from '../firebase.config';


export default function Login (){
  // const [email,setEmail]=useState();
  // const [password,setPassword]=useState();
  // const dispatch =useDispatch();

  // const handleEmail =(event)=>{
  //     setEmail(event.target.value)
  // }

  // const Password = (event)=>{
  //   setPassword(event.target.value)
  // }

  // const Connexion = ()=>{
  //   dispatch(addUser({
  //     email
  // }))
  // }

  const loginEmail = useRef();
  const loginPassword = useRef();

  const Connexion= (e)=>{
    e.preventDefault();
    try {
        auth.signInWithEmailAndPassword(
        loginEmail.current.value,
        loginPassword.current.value
      );
    }
        catch(error){
      console.log(error.message);
    } 
  };



    return (
              <div>
                  <div className='login--content'>
                  <h1 className='login--content--header'>Se connecter</h1>
                      <form>
                      <div className="form-floating mb-3">
                          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required ref={loginEmail}/>
                          <label for="floatingInput">Email </label>
                        </div>
                        <div className="form-floating">
                          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required ref={loginPassword}/>
                          <label for="floatingPassword">Mot de pqsse</label>
                        </div>
                        <Link to='/Accueil'><button type="submit" className="btn btn-primary btn-block shadow" onSubmit={Connexion}>Connexion</button></Link>
                      </form>
                  </div>

            </div>
    )
}