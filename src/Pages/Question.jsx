import { useState} from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useDispatch  } from "react-redux";
import { AddQuestion } from "../Redux/actions";
import { TagsInput } from "react-tag-input-component";





export default function Question (){
    const dispatch = useDispatch()

    const [title,setTitle]=useState();
    const [content,setContent]=useState();
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
         .then((data)=> dispatch(AddQuestion(data)))    
        //  console.log(data)  
    }

    const handleform = (event)=>{
        setTitle(event.target.value)
    }
    const handleContent = (event)=>{
        setContent(event.target.value)
    }
    

    return (

        <div>
            <div className="container mt-4 pb-4">
                <div className="col-md-12 col-lg-8 mx-auto">
                    <div className="bg-white shadow-md p-4 row">
                        <div className="col-10">
                            <h1 className="question__title mb-0">Poser une question</h1>
                            <span>Vous rencontrez des problèmes? Notre communauté de développeurs est là pour vous aider!</span>
                            <div className="Toastify">
                                </div>
                                </div>
                                <div className="col-2">
                                    <Link to='/Accueil'>
                                        <button className="btn--back">Retour <i className="fa-solid fa-arrow-left"></i></button>
                                    </Link>
                                    </div>
                                    <form className="col-12 row" id="quizForm">
                                        <div className="col-12 form-group mt-4">
                                            <label for="title" className="questions__form-label">Titre de la question</label>
                                            <input type="text" className="form-control" id="title" name="title" onChange={handleform} value={title}/>
                                                </div>
                                                <div className="col-12 form-group">
                                                    <label for="content" className="questions__form-label">Contenu de la question</label>
                                                    <textarea name="content" id="content" cols="30" rows="10" className="form-control" onChange={handleContent} value={content}></textarea>
                                                </div>
                                                
                                                    <div className="col-12 form-group">
                                                        <label for="content" className="questions__form-label">Technologies / Categories</label>
                                                        <div className="form-group">
                                                            <label htmlFor="field-undefined"></label>
                                                            <div className="tags-input">
                                                                {/* <TagsInput value={selected} onChange={setSelected} name=""  placeHolder="Type Something"/> */}
                                                            </div>
                                                        </div>
                                                    </div>

                                                <div className="col-12 form-group">
                                                <Link to='/Accueil'>
                                                    <button type="submit" className="btn btn-primary d-block shadow-md w-100 btn-lg" onClick={handleAdd}>Poser ma question <i className="fa-solid fa-arrow-right"></i></button>
                                                </Link>
                                                </div>
                                        </form>
                                        </div>
                                    </div>
                                </div>
        </div>
    )
}