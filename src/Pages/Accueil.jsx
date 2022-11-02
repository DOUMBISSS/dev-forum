import Navbar from "./Navbar";
import {Link} from 'react-router-dom';



export default function Accueil (){
    return (
        <div>
            <Navbar/>
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
                            <span>7 questions</span>
                            <Link to="/question">
                                <button className="btn--question">Poser une question <i class="fa-solid fa-arrow-right"></i></button>
                            </Link>
                        </div>
                        <div className="card no-border p-3 my-3">
                            <div className="question ">
                                <h2 className="question__title">
                                    <Link to='/details' className="question__link">Comment Gerer les users firebase ?</Link></h2>
                                    <p className="question__time">05/26/2022</p>
                                    <p className="question__description my-2">Comment gérer sa liaison avec d'autres collection</p>
                                    <div className="d-flex justify-content-between">
                                      <span className="numbers--question--answers">4 reponses</span>
                                        <div><a href="#empty" className="question__tags">React</a></div>
                                    </div>
                            </div>
                            </div>
                                        
                                <div className="card no-border p-3 my-3">
                                    <div className="question ">
                                                <h2 className="question__title">
                                                <Link className="question__link"> mlkjh</Link></h2>
                                        <div className="question__time">05/26/2022</div>
                                        <p className="question__description my-2">kljh</p>
                                        <div className="d-flex justify-content-between">
                                            <span className="numbers--question--answers">0 reponses</span>
                                            <div><a href="#empty" className="question__tags">PHP</a></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card no-border p-3 my-3">
                                    <div className="question ">
                                        <h2 className="question__title">
                                            <Link className="question__link"> Regex.test</Link></h2>
                                            <div className="question__time">05/31/2022</div>
                                            <p className="question__description my-2">comment utriliser un regex.test()</p>
                                            <div className="d-flex justify-content-between">
                                                <span className="numbers--question--answers">0 reponses</span>
                                                <div><a href="#empty" className="question__tags">React</a></div>
                                            </div>
                                    </div>
                                </div>
                                                
                                    <div className="card no-border p-3 my-3">
                                        <div className="question "><h2 className="question__title">
                                            <a className="question__link" href="/question/m3hgxiYOjryZ6kE48dTo/details">ml;kjh</a></h2>
                                            <div className="question__time">Today at 11:48 AM</div>
                                            <p className="question__description my-2">;,njh</p>
                                            <div className="d-flex justify-content-between">
                                                <span className="numbers--question--answers">0 reponses</span>
                                                <div><a href="#empty" className="question__tags">PHP</a>
                                                <a href="#empty" className="question__tags">Nosql</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                 </div>

            </div>
        </div>
    </div>
    )
}