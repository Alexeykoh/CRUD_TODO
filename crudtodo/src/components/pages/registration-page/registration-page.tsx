import axios from "axios";
import React, {useState} from 'react';
import {useNavigate} from "react-router";
import {InputWrapper} from "../../entities/inputs/input-wrapper";
import {SubmitButton} from "../../shared/buttons/submit-button";
import {FlexSection} from "../../shared/sections/flex-section";
import {LoginSectionWrapper} from "../../shared/sections/login-section-wrapper";

interface RegistrationPageProps {

}

export interface iRegisterData {
    login: string
    password: string
    mail: string
}

export const RegistrationPage: React.FC<RegistrationPageProps> = props => {
    const navigate = useNavigate();
    //
    const [mail, setMail] = useState<string>('');
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
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


    return (
        <>
            <LoginSectionWrapper callbackFn={() => {}} title={'Создайте учетную запись'}>
                <FlexSection>
                    <InputWrapper
                        title={'Login'}
                        inputValue={login}
                        changeValue={setLogin}
                        placeholder={'Придумайте логин'}
                    />
                    <InputWrapper
                        title={'Email'}
                        inputValue={mail}
                        changeValue={setMail}
                        placeholder={'введите почту'}
                        type={'email'}
                    />
                </FlexSection>
                <FlexSection>
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
                    addClass={'bg-sky-200 '}
                />
            </LoginSectionWrapper>
        </>
    );
};