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
                                                <div className="fw-bold"><Link className="category--link">React</Link></div>
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
                        <div className="d-flex justify-content-between">
                            <span>7 questions</span>
                            <button className="btn btn-primary">Poser une question <i className="la la-arrow-right"></i></button>
                        </div>
                        <div className="card no-border p-3 my-3">
                            <div className="question ">
                                <h2 className="question__title">
                                    <a className="question__link" href="/question/Fvme3flUzXrFxkTU4kgh/details">Comment Gerer les users firebase ?</a></h2>
                                    <div className="question__time">05/26/2022</div>
                                    <p className="question__description my-2">Comment gérer sa liaison avec d'autres collection</p>
                                    <div className="d-flex justify-content-between">
                                      <span className="question__answers-count">4 reponses</span>
                                        <div><a href="#empty" className="question__tags">React</a></div>
                                    </div>
                            </div>
                            </div>
                                        
                                <div className="card no-border p-3 my-3">
                                    <div className="question ">
                                                <h2 className="question__title">
                                                    <a className="question__link" href="/question/OkqVFoF7SxLQmjPzR5fW/details">mlkjh</a></h2>
                                        <div className="question__time">05/26/2022</div>
                                        <p className="question__description my-2">kljh</p>
                                        <div className="d-flex justify-content-between">
                                            <span className="question__answers-count">0 reponses</span>
                                            <div><a href="#empty" className="question__tags">PHP</a></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card no-border p-3 my-3">
                                    <div className="question ">
                                        <h2 className="question__title">
                                            <a className="question__link" href="/question/byjlwoxTxAoOcCx1aw5h/details">Regex.test</a></h2>
                                            <div className="question__time">05/31/2022</div>
                                            <p className="question__description my-2">comment utriliser un regex.test()</p>
                                            <div className="d-flex justify-content-between">
                                                <span className="question__answers-count">0 reponses</span>
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
                                                <span className="question__answers-count">0 reponses</span>
                                                <div><a href="#empty" className="question__tags">PHP</a>
                                                <a href="#empty" className="question__tags">Nosql</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                                <div className="card no-border p-3 my-3">
                                                    <div className="question "><h2 className="question__title">
                                                        <a className="question__link" href="/question/mPqSKrAUmw4ad6wgrGv4/details">ZRFG</a>
                                                        </h2><div className="question__time">05/31/2022</div>
                                                        <p className="question__description my-2">ZVBTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTGght</p>
                                                        <div className="d-flex justify-content-between">
                                                            <span className="question__answers-count">0 reponses</span>
                                                            <div><a href="#empty" className="question__tags">MongoDB</a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                            <div className="card no-border p-3 my-3">
                                                                <div className="question "><h2 className="question__title">
                                                                    <a className="question__link" href="/question/rej9BxwB9di4ch5WrLnd/details">test</a></h2>
                                                                    <div className="question__time">05/26/2022</div>
                                                                    <p className="question__description my-2">d,jh</p>
                                                                    <div className="d-flex justify-content-between">
                                                                        <span className="question__answers-count">3 reponses</span>
                                                                        <div><a href="#empty" className="question__tags">Nosql</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                                        <div className="card no-border p-3 my-3">
                                                                            <div className="question ">
                                                                                <h2 className="question__title">
                                                                                    <a className="question__link" href="/question/wcObJOzcfOkC7Y14xv0P/details">, jl:tr</a></h2>
                                                                                    <div className="question__time">06/02/2022</div>
                                                                                    <p className="question__description my-2">'rhtu</p>
                                                                                    <div className="d-flex justify-content-between">
                                                                                        <span className="question__answers-count">0 reponses</span>
                                                                                        <div><a href="#empty" className="question__tags">MongoDB</a>
                                                                                        <a href="#empty" className="question__tags">PHP</a>
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