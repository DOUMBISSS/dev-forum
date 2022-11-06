import { Link } from "react-router-dom";




export default function Register (){
    return (
        <div>
                  <div className='login--content'>
                  <h1 className='login--content--header'>Créer mon compte</h1>
                      <form>
                      <div class="form-floating mb-3">
                          <input type="text" class="form-control" id="floatingInput" placeholder="Name"/>
                          <label for="floatingInput">Nom</label>
                        </div>
                      <div class="form-floating mb-3">
                          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                          <label for="floatingInput">Email</label>
                        </div>
                        <div class="form-floating">
                          <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                          <label for="floatingPassword">Mot de passe </label>
                        </div>
                        <div class="form-floating ">
                          <input type="password" class="form-control" id="floatingPassword" placeholder="Confirm Password"/>
                          <label for="floatingPassword">Mot de passe (confirmation)</label>
                        </div>
                        <Link to='/Accueil'><button type="submit" class="btn btn-primary btn-block shadow">Inscription</button></Link>
                      </form>
                  </div>
            </div>
    )
}