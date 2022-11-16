import { Link } from "react-router-dom";
import { useState } from 'react';
import { addNewUser } from "../Redux/actions";
import { useDispatch } from "react-redux";




export default function Register (){
  const [name,setName]= useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [password2,setPassword2]=useState();

  const dispatch = useDispatch();

  const handleEmail =(event)=>{
      setEmail(event.target.value)
  }

  const handlePassword = (event)=>{
    setPassword(event.target.value)
  }
  const handlePassword2 = (event)=>{
    setPassword2(event.target.value)
  }

  const handleName = (event)=>{
    setName(event.target.value)
  }

  console.log(email,name,password,password2)

  const handleRegister = (e)=>{
    e.preventDefault();
    const registerData ={
      name,
      email,
      password,
      password2
    }
    fetch('http://127.0.0.1:4000/register',{
          method:"POST",
          headers :{'Content-Type':"application/json"},
          body: JSON.stringify(registerData)
      }).then((res)=>res.json())
       .then((registerData)=> dispatch(addNewUser(registerData)))    
       console.log(registerData)  
  }

  // const handleRegister = (e)=>{
  //   e.preventDefault();

  //   try {
  //     auth.createUserWithEmailAndPassword(
  //       registerEmail.current.value,
  //       registerPassword.current.value
  //     );
  //   }
  //       catch(error){
  //     console.log(error.message);
  //   } 
  // };
    return (
        <div>
                  <div className='login--content'>
                  <h2 className='login--content--header'>Créer mon compte</h2>
                      <form>
                      <div class="form-floating mb-3">
                          <input type="text" className="form-control" id="floatingInput" placeholder="Name" value={name} onChange={handleName}/>
                          <label htmlFor="floatingInput">Nom complets</label>
                        </div>
                      <div class="form-floating mb-3">
                          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required value={email} onChange={handleEmail}/>
                          <label htmlFor="floatingInput">Email</label>
                        </div>
                        <div class="form-floating">
                          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required value={password} onChange={handlePassword}/>
                          <label htmlFor="floatingPassword">Mot de passe </label>
                        </div>
                        <div class="form-floating ">
                          <input type="password" className="form-control" id="floatingPassword" placeholder="Confirm Password" required value={password2} onChange={handlePassword2}/>
                          <label htmlFor="floatingPassword">Mot de passe (confirmation)</label>
                        </div>
                        <Link to='/Accueil'>
                          {/* <button type="submit" className="btn btn-primary btn-block shadow" onClick={handleRegister}>Inscription</button> */}
                          <button type="submit" className="btn btn-primary btn-block shadow" onSubmit={handleRegister}>Inscription</button>
                        </Link>
                      </form>
                  </div>
            </div>
    )
}