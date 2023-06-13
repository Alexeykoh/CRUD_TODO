import axios from "axios";
import React, {useState} from 'react';
import {useNavigate} from "react-router";
import {InputWrapper} from "../../entities/inputs/input-wrapper";
import {SubmitButton} from "../../shared/buttons/submit-button";
import {LoginSectionWrapper} from "../../shared/sections/login-section-wrapper";

interface AuthPageProps {

}

export const AuthPage: React.FC<AuthPageProps> = props => {
    const navigate = useNavigate();
    //
    const [mail, setMail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function login(login: string, password: string) {
        const url = `https://25.68.227.83:7127/LOGIN?login=${login}&password=${password}`
        axios.get(url)
            .then((resp) => {
                console.log(resp)
                navigate("/user")
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <>
            <LoginSectionWrapper title={'Вход в учетную запись'}>
                <InputWrapper title={'Email'} inputValue={mail} changeValue={setMail} placeholder={'введите почту'}/>
                <InputWrapper
                    title={'Пароль'}
                    inputValue={password}
                    changeValue={setPassword}
                    placeholder={'введите пароль'}
                />
                <SubmitButton
                    onClick={() => {

                        // console.log('eklelel')
                        login(mail, password)
                    }}
                    title={'Войти'}
                    addClass={'bg-sky-200 '}
                />
            </LoginSectionWrapper>
        </>
    );
};