import { useNavigate } from "react-router-dom";
import { useState } from "react"; 



export default function Login (){
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const navigate = useNavigate();

  const handleEmail =(event)=>{
      setEmail(event.target.value)
  }

  const handlePassword = (event)=>{
    setPassword(event.target.value)
  }


  const Connexion= (e)=>{
    e.preventDefault();
    const dataLogin = {
      email,
      password
    }
    fetch('http://127.0.0.1:4000/login',{
          method:"POST",
          headers :{'Content-Type':"application/json"},
          body: JSON.stringify(dataLogin)
      }).then((res)=>res.json())
       .then((userData)=> {
        localStorage.clear();
        localStorage.setItem("user",JSON.stringify(userData));
        navigate('/Accueil')
      })
  };



    return (
              <div>
                  <div className='login--content'>
                  <h2 className='login--content--header'>Se connecter</h2>
                      <form>
                      <div className="form-floating mb-3">
                          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required  onChange={handleEmail}/>
                          <label htmlFor="floatingInput">Email </label>
                        </div>
                        <div className="form-floating">
                          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required  onChange={handlePassword}/>
                          <label htmlFor="floatingPassword">Mot de passe</label>
                        </div>
                          <button type="submit" className="btn btn-primary btn-block shadow" onClick={Connexion}>Connexion</button>
                      </form>
                  </div>

            </div>
    )
}