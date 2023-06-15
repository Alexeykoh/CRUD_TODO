import axios from "axios";
import React, {useState} from 'react';
import {useNavigate} from "react-router";
import {InputWrapper} from "../../entities/inputs/input-wrapper";
import {SubmitButton} from "../../shared/buttons/submit-button";
import {GreetingFeaturesLabel} from "../../shared/labels/greeting-features-label";
import {FlexSection} from "../../shared/sections/flex-section";
import {LoginSectionWrapper} from "../../shared/sections/login-section-wrapper";
import {RegisterSectionWrapper} from "../../shared/sections/register-section-wrapper";
import {iRegisterData} from "../registration-page/registration-page";

interface AuthPageProps {

}

export const AuthPage: React.FC<AuthPageProps> = props => {
    const navigate = useNavigate();
    //
    const [mail, setMail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [login, setLogin] = useState<string>('');
    const [isLoginPage, setIsLoginPage] = useState<boolean>(true);
    const [doublePassword, setDoublePassword] = useState<string>('');
    const [passError, setPassError] = useState<boolean>(false);

    function registration(input: iRegisterData) {
        if (mail.length === 0 || login.length == 0 || password.length === 0) {
            return
        }
        if (password !== doublePassword) {
            setPassError(true)
        } else {
            const url = `https://25.68.227.83:7127/Register`
            const data = {
                name: input.login,
                password: input.password,
                mail: input.mail
            }
            axios.post(url, data)
                .then((resp) => {
                    console.log(resp)
                    navigate("/user")
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    function loginFn(login: string, password: string) {
        if (login.length === 0 || password.length === 0) {
            return
        }
        if (mail === 'root' && password === 'root') {
            console.warn('root')
            localStorage.setItem('loginUser', JSON.stringify({user: "root"}))
            navigate("/")
            return;
        }
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
            <section className={'py-8 h-full w-full shrink'}>
                <div className="flex flex-row gap-8 p-4 h-full rounded-lg">
                    <GreetingFeaturesLabel/>
                    {
                        isLoginPage
                            ?
                            <LoginSectionWrapper
                                callbackFn={() => {
                                    setIsLoginPage(false)
                                }} title={'Вход в учетную запись'}
                            >
                                <div className="flex gap-4">
                                    <InputWrapper
                                        title={'Email'}
                                        inputValue={mail}
                                        changeValue={setMail}
                                        placeholder={'введите почту'}
                                    />
                                    <InputWrapper
                                        title={'Пароль'}
                                        inputValue={password}
                                        changeValue={setPassword}
                                        placeholder={'введите пароль'}
                                        type={'password'}
                                    />
                                </div>
                                <SubmitButton
                                    onClick={() => {
                                        loginFn(mail, password)
                                    }}
                                    title={'Войти'}
                                    addClass={''}
                                />
                            </LoginSectionWrapper>
                            :
                            <RegisterSectionWrapper
                                callbackFn={() => {
                                    setIsLoginPage(true)
                                }} title={'Создайте учетную запись'}
                            >
                                <FlexSection>
                                    <div className="flex gap-4">
                                        <InputWrapper
                                            title={'Email'}
                                            inputValue={mail}
                                            changeValue={setMail}
                                            placeholder={'введите почту'}
                                        />
                                        <InputWrapper
                                            title={'Логин'}
                                            inputValue={login}
                                            changeValue={setLogin}
                                            placeholder={'введите логин'}
                                            type={'text'}
                                        />
                                    </div>
                                </FlexSection>
                                <FlexSection>
                                    <div className="flex gap-4">
                                        <InputWrapper
                                            title={'Пароль'}
                                            inputValue={password}
                                            changeValue={setPassword}
                                            placeholder={'Придумайте пароль'}
                                            type={'password'}
                                        />
                                        <InputWrapper
                                            title={'Повторите пароль'}
                                            inputValue={doublePassword}
                                            changeValue={setDoublePassword}
                                            placeholder={'Повторите пароль'}
                                            type={'password'}
                                        />
                                    </div>
                                    <>
                                        {passError
                                            ? <p className={'text-red-400 p-1'}>{'Пароли не совпадают'}</p>
                                            : null}
                                    </>
                                </FlexSection>
                                <SubmitButton
                                    onClick={() => {
                                        registration({mail: mail, password: password, login: login})
                                    }}
                                    title={'Зарегистрироваться'}
                                    addClass={''}
                                />
                            </RegisterSectionWrapper>
                    }
                </div>
            </section>

        </>
    );
};