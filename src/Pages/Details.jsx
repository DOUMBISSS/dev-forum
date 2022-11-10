import {Link,useParams} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { addComment } from '../Redux/actions';
// import { uid } from "uid";


export default function Details () {

    let id = useParams().id;
    const questions = useSelector(state=>state.questionReducer.questions);
    const comments = useSelector(state=>state.questionReducer.comments);
    const dispatch = useDispatch ()

    const [commentUser,setCommentUser]=useState();

    const handleText =(event)=>{
        setCommentUser(event.target.value);
    }


    const handleComment =()=>{
        dispatch(addComment({
            commentUser
        }))
        setCommentUser(" ");
    }

    
    return (
        <div>
            <div className="w-100 h-100 bg-white">
                <div className="container">
                    <div className="row">
                        <div  key={id}className="col-md-12 col-lg-9">
                            <span className="question-detail__head">{questions.title}</span>
                            <div className="question-detail__title">
                                <a href="#empty" className="d-flex flex-column align-items-center no-underline ">
                                    <i className="fa-solid fa-heart"></i>
                                    <span>10</span></a>
                                    <h1>{questions.title}</h1>
                            </div>

                            <div className="question--detail--content">
                                    <pre>{questions.content}</pre>
                            </div>

                                    <hr/>
                                    <div className="mb-4 answers-count ">
                                        <span className="text-dark-blue font-weight-bold">{comments.length} reponses</span>
                                        <span className="d-flex align-items-center">
                                            <img src="https://baroland.netlify.app/img/avatar.png" alt="" width="20" height="20"/>
                                                <span className="text-black ml-2">Kouyate Karim</span>
                                                </span>
                                    </div>

                                                {comments.map((comment, i) => <div key={i} className="comment">
                                                    <div className="comment__likes-count no-underline">
                                                    <i className="fa-solid fa-heart"></i>
                                                    <span>7</span></div>
                                                    <div className="comment--content">
                                                        <div className="comment--author">
                                                            <div className="comment--author--info">
                                                                <img src="https://baroland.netlify.app/img/avatar.png" alt="" width="25" height="25"/>
                                                                <span className="comment--author--name">{comment.author}</span>
                                                            </div>
                                                                
                                                                <div className="comment--ago"> <i className="fa-solid fa-clock"></i> il y'a 1min</div>
                                                            </div>
                                                                <div className="comment--text">
                                                                    <p>{comment.commentUser}</p>
                                                                </div>
                                                        </div>
                                                    </div>
                                                    )}

                        <div className="mt-3">
                            <form>
                                <textarea name="content" id="commentInput" cols="30" rows="3" className="form-control" placeholder="Ajouter un commentaire..." onChange={handleText} value={commentUser}></textarea>
                                    <div className="d-flex justify-content-end mt-3">
                                        <button className="btn btn-primary text-white text-right shadow-sm" type="submit" onClick={handleComment}>Commenter </button>
                                    </div>
                            </form>
                        </div>
                    </div>
                                                                                                                        
                         <div className="col-md-12 col-lg-3">
                            <Link to='/Accueil'>
                                <button className="btn--back">Retour <i className="fa-solid fa-arrow-left"></i></button>
                            </Link>
                        </div>

                    </div>
                    </div>
                    </div>     
                                                                                                                                                     
                                                                                                                    
                                                                                                                                                                                                   
                    </div>
    )
}