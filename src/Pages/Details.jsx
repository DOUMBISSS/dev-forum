import {Link} from 'react-router-dom';


export default function Details () {
    return (
        <div>
            <div class="w-100 h-100 bg-white">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-lg-9">
                            <span class="question-detail__head">Comment Gerer les users firebase ?</span>
                            <div class="question-detail__title">
                                <a href="#empty" class="d-flex flex-column align-items-center no-underline ">
                                <i class="fa-solid fa-heart"></i>
                                <span>10</span></a>
                                <div>
                                    <h1>Comment Gerer les users firebase ?</h1>
                                <div>
                                </div>
                                </div>
                                </div>
                                <div class="question-detail__content">
                                    <pre>Comment gérer sa liaison avec d'autres collection</pre>
                                    </div><hr/>
                                    <div class="mb-4 answers-count ">
                                        <span class="text-dark-blue font-weight-bold">8 reponses</span>
                                        <span class="d-flex align-items-center">
                                            <img src="https://baroland.netlify.app/img/avatar.png" alt="" width="20" height="20"/>
                                                <span class="text-black ml-2">Kouyate Karim</span>
                                                </span>
                                                </div>
                                                <div class="comment ">
                                                    <a href="#empty" class="comment__likes-count no-underline">
                                                    <i class="fa-solid fa-heart"></i>
                                                    <span>7</span></a><div class="comment__content">
                                                        <div class="comment__author"><div class="comment__author-info">
                                                            <img src="https://baroland.netlify.app/img/avatar.png" alt="" width="25" height="25"/>
                                                                <span class="comment__author-name">Alou coulibaly</span>
                                                                </div>
                                                                <div class="comment__ago"><i class="la la-clock-o"></i>il y'a 1min</div>
                                                                </div>
                                                                <div class="comment__text"><p>ekjd</p>
                                                                </div>
                                                                </div>
                                                                </div>
                                                                <div class="comment ">
                                                                    <a href="#empty" class="comment__likes-count no-underline"><i class="fa-solid fa-heart"></i>
                                                                    <span>7</span></a>
                                                                    <div class="comment__content">
                                                                        <div class="comment__author">
                                                                        <div class="comment__author-info">
                                                                            <img src="https://baroland.netlify.app/img/avatar.png" alt="" width="25" height="25"/>
                                                                            <span class="comment__author-name">Kouyate mou</span>
                                                                            </div>
                                                                            <div class="comment__ago"><i class="la la-clock-o"></i>il y'a 1min</div>
                                                                            </div><div class="comment__text"><p>coucou</p>
                                                                            </div>
                                                                            </div>
                                                                            </div>
                                                                            <div class="comment ">
                                                                                <a href="#empty" class="comment__likes-count no-underline">
                                                                                <i class="fa-solid fa-heart"></i>
                                                                                <span>7</span></a>
                                                                                <div class="comment__content">
                                                                                    <div class="comment__author">
                                                                                        <div class="comment__author-info">
                                                                                        <img src="https://baroland.netlify.app/img/avatar.png" alt="" width="25" height="25"/>
                                                                                            <span class="comment__author-name">Kouyate Karim</span>
                                                                                            </div>
                                                                                            <div class="comment__ago"><i class="la la-clock-o"></i>il y'a 1min</div>
                                                                                            </div>
                                                                                            <div class="comment__text"><p>my friend</p>
                                                                                            </div>
                                                                                            </div>
                                                                                            </div>
                                                                                            <div class="comment ">
                                                                                                <a href="#empty" class="comment__likes-count no-underline">
                                                                                                <i class="fa-solid fa-heart"></i>
                                                                                                <span>7</span></a><div class="comment__content">
                                                                                                    <div class="comment__author">
                                                                                                    <div class="comment__author-info">
                                                                                                        <img src="https://baroland.netlify.app/img/avatar.png" alt="" width="25" height="25"/>
                                                                                                        <span class="comment__author-name">Kouyate mou</span>
                                                                                                        </div>
                                                                                                        <div class="comment__ago"><i class="la la-clock-o"></i>il y'a 1min</div>
                                                                                                        </div>
                                                                                                        <div class="comment__text">
                                                                                                            <p>kjh</p>
                                                                                                            </div>
                                                                                                            </div>
                                                                                                            </div>
                                                                                                            <div class="mt-3">
                                                                                                                 <form>
                                                                                                                    <textarea name="content" id="commentInput" cols="30" rows="3" class="form-control" placeholder="Ajouter un commentaire..."></textarea>
                                                                                                                        <div class="d-flex justify-content-end mt-3">
                                                                                                                            <button class="btn btn-primary text-white text-right shadow-sm" type="submit">Commenter </button>
                                                                                                                                </div>
                                                                                                                                </form>
                                                                                                                                </div>
                                                                                                                                </div>
                                                                                                                        <div class="col-md-12 col-lg-3">
                                                                                                                        <Link to='/Accueil'><button className="btn--back">Retour <i class="fa-solid fa-arrow-left"></i></button></Link>
                                                                                                                        </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                 </div>     
                                                                                                                                                     
                                                                                                                    
                                                                                                                                                                                                   
                                                                                </div>
    )
}