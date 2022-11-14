import Navbar from "./Navbar";
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { useState ,useEffect } from "react";
import {getAllQuestions } from "../Redux/actions";


export default function Accueil (){

    const questions = useSelector(state=>state.questionReducer.questions);
    const [searchQuestion, setSearchQuestion] = useState();
    const todayDate = new Date(Date.now()).toISOString().slice(0, 10);
    const dispatch = useDispatch(); 


        // useEffect (()=>{
        //             console.log(questions)
        // },[questions])

    
    useEffect(() => {
        fetch('http://127.0.0.1:4000/api/questions')
        .then((res)=>res.json())
        .then((questions)=>{dispatch(getAllQuestions(questions))})
        .catch(e => { console.log(e)})
        }, [])

    return (
        <div>
            <Navbar setSearchQuestion={setSearchQuestion} searchQuestion={searchQuestion}/>
            <div className="container">
                <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">
                                                    <Link className="category--link">React</Link>
                                                </div>
                                            </div>
                                            <span className="badge bg-primary rounded-pill">14</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold"><Link className="category--link">PHP</Link></div>
                                            </div>
                                            <span className="badge bg-primary rounded-pill">14</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold"><Link className="category--link">MongoDB</Link></div>
                                                    </div>
                                            <span className="badge bg-primary rounded-pill">14</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold"><Link className="category--link">Nosql</Link></div>
                                                    </div>
                                            <span className="badge bg-primary rounded-pill">14</span>
                                        </li>
                                </ul>
                        </div>

                <div className="col-lg-9 col-md-12">
                        <div className="main--part--question">
                            <span>{questions.length} questions</span>
                            <Link to="/question">
                                <button className="btn--question">Poser une question <i className="fa-solid fa-arrow-right"></i></button>
                            </Link>
                        </div>
            {questions && questions.map((question,id)=> <div key={id} className="card no-border p-3 my-3">
                            <div className="question">
                                <h2 className="question__title">
                                    <Link to={`/details/${question._id}`} className="question__link">{question.title}</Link></h2>
                                    <p className="question__time">{todayDate}</p>
                                    <p className="question__description my-2">{question.content}</p>
                                    <div className="d-flex justify-content-between">
                                      <span className="numbers--question--answers">0 reponses</span>
                                        <div className="question__tags"> React</div>
                                    </div>
                            </div>
                    </div>

                        )}
                    </div>

                                {/* {questions.filter(question => {
              if (searchQuestion === ""){
                return question;
              }
              else if (question.title?.toLocaleLowerCase().includes(searchQuestion?.toLocaleLowerCase())){
                return question;
              }
              return 0;
              
            }
            ) */}

            </div>
        </div>
    </div>
    )
}