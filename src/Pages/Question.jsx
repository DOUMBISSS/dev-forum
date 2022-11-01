import { Link } from "react-router-dom";





export default function Question (){
    return (

        <div>
            <div class="container mt-4 pb-4">
                <div class="col-md-12 col-lg-8 mx-auto">
                    <div class="bg-white shadow-md p-4 row">
                        <div class="col-10">
                            <h1 class="question__title mb-0">Poser une question</h1>
                            <span>Vous rencontrez des problèmes? Notre communauté de développeurs est là pour vous aider!</span>
                            <div class="Toastify">
                                </div>
                                </div>
                                <div class="col-2">
                                    <Link to='/Accueil'><button className="btn--back">Retour <i class="fa-solid fa-arrow-left"></i></button></Link>
                                    </div>
                                    <form method="POST" class="col-12 row" id="quizForm">
                                        <div class="col-12 form-group mt-4">
                                            <label for="title" class="questions__form-label">Titre de la question</label>
                                            <input type="text" class="form-control" id="title" name="title"/>
                                                </div>
                                                <div class="col-12 form-group">
                                                    <label for="content" class="questions__form-label">Contenu de la question</label>
                                                    <textarea name="content" id="content" cols="30" rows="10" class="form-control"></textarea>
                                                </div>
                                                
                                                    <div class="col-12 form-group">
                                                        <label for="content" class="questions__form-label">Technologies / Categories</label>
                                                        <div class="form-group">
                                                            <label for="field-undefined"></label>
                                                            <div class="tags-input">
                                                                <tags class="tagify tagify--noTags tagify--empty" tabindex="-1">
                                                                    <span contenteditable="" tabindex="0" data-placeholder="type something" aria-placeholder="type something" class="tagify__input" role="textbox" aria-autocomplete="both" aria-multiline="false"></span>
                                                                </tags>
                                                                <input placeholder="" value="" tabindex="-1"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                        <div class="col-12 form-group">
                                                        <button type="submit" class="btn btn-primary d-block shadow-md w-100 btn-lg">Poser ma question <i class="la la-arrow-right"></i></button>
                                                        </div>
                                                        </form>
                                                        </div>
                                                        </div>
                                                        </div>
        </div>
    )
}