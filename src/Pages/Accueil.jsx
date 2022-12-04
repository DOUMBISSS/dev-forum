import Navbar from "./Navbar";
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { useState ,useEffect } from "react";
import {getAllQuestions } from "../Redux/actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Footer";


export default function Accueil (){

    const questions = useSelector(state=>state.questionReducer.questions);
    const [searchQuestion, setSearchQuestion] = useState();
    // const todayDate = new Date(Date.now()).toISOString().slice(0, 10);
    const dispatch = useDispatch();
    const handleSearch = (e)=>{
        setSearchQuestion(e.target.value);
      }


        // useEffect (()=>{
        //             console.log(questions)
        // },[questions])
    
    useEffect(() => {
        fetch('http://127.0.0.1:4000/questions')
        .then((res)=>res.json())
        .then((questions)=>{dispatch(getAllQuestions(questions))})
        .catch(e => { console.log(e)})
        }, [])


    return (
        <div>
            <Navbar setSearchQuestion={setSearchQuestion} searchQuestion={searchQuestion}/>
            <div className="main--header--part">
                <div className="d-flex justify-content-center align-items-center h-100 flex-column">
                    <div className="container banner__container">
                        <h1 className="text-white font-weight-bold">Questions</h1>
                            <p className="text-white font-weight-bold">Ce forum est ouvert à toutes les questions liées à la programmation.<br/>
                            (PHP, Javascript, Java, C++, Firebase, C,Ruby, React...)</p>
                        <div className="w-100">
                            <input type="text" className="form-control form-control-lg w-100" placeholder="Rechercher des questions" onChange={handleSearch} value={searchQuestion}/>
                        </div>
                    </div>
                </div>
        </div>

            <div className="container">
                <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <h5 className="categories">Categories</h5>
                            <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">
                                                    <Link className="category--link">React</Link>
                                                </div>
                                            </div>
                                            <span className="badge bg-primary rounded-pill">0</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold"><Link className="category--link">PHP</Link></div>
                                            </div>
                                            <span className="badge bg-primary rounded-pill">0</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold"><Link className="category--link">MongoDB</Link></div>
                                                    </div>
                                            <span className="badge bg-primary rounded-pill">0</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">
                                                    <Link className="category--link">Nosql</Link>
                                                    </div>
                                                </div>
                                            <span className="badge bg-primary rounded-pill">0</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">
                                                    <Link className="category--link">Javascript</Link>
                                                    </div>
                                                </div>
                                            <span className="badge bg-primary rounded-pill">0</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">
                                                    <Link className="category--link">Java</Link>
                                                    </div>
                                                </div>
                                            <span className="badge bg-primary rounded-pill">0</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">
                                                    <Link className="category--link">C++</Link>
                                                    </div>
                                                </div>
                                            <span className="badge bg-primary rounded-pill">0</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">
                                                    <Link className="category--link">C</Link>
                                                    </div>
                                                </div>
                                            <span className="badge bg-primary rounded-pill">0</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">
                                                    <Link className="category--link">Ruby</Link>
                                                    </div>
                                                </div>
                                            <span className="badge bg-primary rounded-pill">0</span>
                                        </li>
                            </ul>
                        </div>

                <div className="col-lg-9 col-md-12">
                        <div className="main--part--question">
                            <span><i className="fa-solid fa-earth-africa"></i> {questions.length} questions</span>
                            <Link to="/question" className="link__question">
                                <button className="btn--question">Poser une question <i className="fa-solid fa-arrow-right"></i></button>
                            </Link>
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
                    {questions && questions.map((question,id)=> <div key={id} className="card no-border p-3 my-3">
                            <div className="question">
                                <h2 className="question__title">
                                    <Link to={`/details/${question._id}`} className="question__link">{question.title}</Link></h2>
                                    <p className="question__time">{question.date}</p>
                                    <p className="question__description my-2">{question.content}</p>
                                    <div className="d-flex justify-content-between">
                                      <span className="numbers--question--answers"> <i className="fa-regular fa-comment"></i> {question.comments && question.comments.length} commentaire(s)</span>
                                        <div className="question__tags"> {question.selected}</div>
                                    </div>
                                    <div className="questions__likes">
                                        <p className="number__likes"><i class="fa-regular fa-thumbs-up"></i> 0 </p>
                                    </div>
                            </div>
                    </div>
                        )}
                    </div>
            </div>
        </div>
        <Footer/>
    </div>
    )
}