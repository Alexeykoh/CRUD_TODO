import React, { useEffect } from 'react';
import '../../App.css';
import {Route, Routes, useNavigate} from "react-router";
import {AuthPage} from "../pages/auth-page/auth-page";
import {ErrorPage} from "../pages/error-page/error-page";
import {RegistrationPage} from "../pages/registration-page/registration-page";
import {TodoPage} from "../pages/todo-page/todo-page";
import {UserPage} from "../pages/user-page/user-page";
import {Layout} from "./layout";

function App() {
    const navigate = useNavigate();

    function checkIsLogin(){
        const localLoginData = localStorage.getItem('loginUser')
        if(localLoginData===null){
            navigate('/auth')
        }
    }

    useEffect(() => {
        checkIsLogin()
    }, []);


    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<TodoPage/>}/>
                <Route path="auth" element={<AuthPage/>}/>
                <Route path="user" element={<UserPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
