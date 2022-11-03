import { useState } from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AddQuestion } from "../Redux/actions";





export default function Question (){
    const dispatch = useDispatch()

    const [title,setTitle]=useState();
    const [content,setContent]=useState()

    const handleAdd =()=>{
        dispatch(AddQuestion({
            title,
            content
        }))
        setTitle(" ");
        setContent("");
    }
    const handleform = (event)=>{
        setTitle(event.target.value)
    }
    const handleContent = (event)=>{
        setContent(event.target.value)
    }

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
                                    <form class="col-12 row" id="quizForm">
                                        <div class="col-12 form-group mt-4">
                                            <label for="title" class="questions__form-label">Titre de la question</label>
                                            <input type="text" class="form-control" id="title" name="title" onChange={handleform} value={title}/>
                                                </div>
                                                <div class="col-12 form-group">
                                                    <label for="content" class="questions__form-label">Contenu de la question</label>
                                                    <textarea name="content" id="content" cols="30" rows="10" class="form-control" onChange={handleContent} value={content}></textarea>
                                                </div>
                                                
                                                    <div class="col-12 form-group">
                                                        <label for="content" class="questions__form-label">Technologies / Categories</label>
                                                        <div class="form-group">
                                                            <label for="field-undefined"></label>
                                                            <div class="tags-input">
                                                                {/* <tags class="tagify tagify--noTags tagify--empty" tabindex="-1">
                                                                    <span contenteditable="" tabindex="0" data-placeholder="type something" aria-placeholder="type something" class="tagify__input" role="textbox" aria-autocomplete="both" aria-multiline="false"></span>
                                                                </tags> */}
                                                                <input type='text' placeholder=""/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                        <div class="col-12 form-group">
                                                       <Link to='/Accueil'><button type="submit" class="btn btn-primary d-block shadow-md w-100 btn-lg" onClick={handleAdd}>Poser ma question <i class="fa-solid fa-arrow-right"></i></button></Link>
                                                        </div>
                                        </form>
                                                        </div>
                                                        </div>
                                                        </div>
        </div>
    )
}