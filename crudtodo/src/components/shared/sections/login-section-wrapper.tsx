import React from 'react';

interface LoginSectionWrapperProps {
    children: string | JSX.Element | JSX.Element[]
    title: string
    callbackFn:any
}

export const LoginSectionWrapper: React.FC<LoginSectionWrapperProps> = props => {
    return (
        <>
            <div className={'LoginSectionWrapper flex flex-col gap-12 w-2/3 h-full rounded-md px-6 pt-32'}>
                <h3 className={'text-lg font-semibold'}>{props.title}</h3>
                <div className="flex flex-col gap-4 w-full h-full shrink">
                    {props.children}
                    <div className="pt-24">
                        <p>{'Если у вас нет Логина, то вы можете '}
                            <span
                                onClick={() => {props.callbackFn()}}
                                className={'underline underline-offset-1 cursor-pointer text-sky-600'}>{'зарегистрироваться'}</span>{'.'}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};