import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";



const LoginMiddleware = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const logout = () => {
    const userToken = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null;
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(true);
            return navigate('/');
        }
        else{
            setIsLoggedIn(false);
            return navigate('/Accueil')
        }
    }
    useEffect(() => {
        logout();
    }, [isLoggedIn]);

    return (
        <React.Fragment>
            {
                isLoggedIn ? props.children : null
            }
        </React.Fragment>
    );
}
export default LoginMiddleware;