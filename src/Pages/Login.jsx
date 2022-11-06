import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addUser } from '../Redux/actions';


export default function Login (){
    const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const dispatch =useDispatch();

  const handleEmail =(event)=>{
      setEmail(event.target.value)
  }

  const Password = (event)=>{
    setPassword(event.target.value)
  }

  const Connexion = ()=>{
    dispatch(addUser({
      email
  }))
  }



    return (
        <div>
                  <div className='login--content'>
                  <h1 className='login--content--header'>Se connecter</h1>
                      <form>
                      <div className="form-floating mb-3">
                          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={handleEmail}/>
                          <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onClick={Password}/>
                          <label for="floatingPassword">Password</label>
                        </div>
                        <Link to='/Accueil'><button type="submit" className="btn btn-primary btn-block shadow" onClick={Connexion}>Connexion</button></Link>
                      </form>
                  </div>

            </div>
    )
}