import { useState} from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useDispatch  } from "react-redux";
import { AddQuestion } from "../Redux/actions";
// import { TagsInput } from "react-tag-input-component";
import Footer from "./Footer";
import Navbar from "./Navbar";





export default function Question (){
    const dispatch = useDispatch()

    const [title,setTitle]=useState();
    const [content,setContent]=useState();
    const navigate = useNavigate();
    // const [selected, setSelected] = useState([]);


     const handleAdd = ()=>{
        const data = {
            title,
            content,
            // selected
        }
        fetch('http://127.0.0.1:4000/questions',{
            method:"POST",
            headers :{'Content-Type':"application/json"},
            body: JSON.stringify(data)
        }).then((res)=>res.json())
         .then((dataQuestion)=> dispatch(AddQuestion(dataQuestion)))    
        navigate('/Accueil')
    }

    const handleform = (event)=>{
        setTitle(event.target.value)
    }
    const handleContent = (event)=>{
        setContent(event.target.value)
    }
    

    return (

        <div>
            <Navbar/>
            <div className="container mt-4 pb-4">
                <div className="col-md-12 col-lg-8 mx-auto">
                <nav  aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to='/Accueil'>Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Question</li>
                </ol>
                </nav>
                    <div className="bg-white shadow-md p-4 row">
                        <div className="col-12">
                            <h2 className="question__title mb-0">Poser une question</h2>
                            <span>Notre communauté de développeurs est là pour vous aider!</span>
                                </div>
                                    <form className="col-12 row" id="quizForm">
                                        <div className="col-12 form-group mt-4">
                                            <label htmlFor="title" className="questions__form-label">Titre de la question</label>
                                            <input type="text" className="form-control" id="title" name="title" onChange={handleform}/>
                                                </div>
                                                <div className="col-12 form-group">
                                                    <label htmlFor="content" className="questions__form-label">Contenu de la question</label>
                                                    <textarea name="content" id="content" cols="30" rows="10" className="form-control" onChange={handleContent}></textarea>
                                                </div>
                                                
                                                    <div className="col-12 form-group">
                                                        <label htmlFor="content" className="questions__form-label">Technologies / Categories</label>     
                                                    </div>
                                                    {/* <label for="exampleDataList" class="form-label">Datalist example</label>
                                                        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
                                                        <datalist class="datalistOptions">
                                                            <option value="San Francisco">
                                                            <option value="New York">
                                                            <option value="Seattle">
                                                            <option value="Los Angeles">
                                                            <option value="Chicago">
                                                        <datalist/> */}

                                                <div className="col-12 form-group">
                                                    <button type="submit" className="btn btn-primary d-block shadow-md w-100 btn-lg" onClick={handleAdd}>Poser ma question <i className="fa-solid fa-arrow-right"></i></button>
                                                </div>
                                        </form>
                                        </div>
                                    </div>
                                </div>
                                <Footer/>
        </div>
    )
}