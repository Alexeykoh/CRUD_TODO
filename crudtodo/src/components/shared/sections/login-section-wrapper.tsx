import React from 'react';

interface LoginSectionWrapperProps {
    children: string | JSX.Element | JSX.Element[]
    title: string
}

export const LoginSectionWrapper: React.FC<LoginSectionWrapperProps> = props => {
    return (
        <>
            <div className={'LoginSectionWrapper flex flex-col gap-4 w-2/4 h-fit bg-gray-200 rounded-md shadow-md p-6 mx-auto my-auto'}>
                <h3 className={'text-lg font-semibold'}>{props.title}</h3>
                <div className="flex flex-col gap-4 w-full h-full shrink justify-center items-center">
                    {props.children}
                </div>
            </div>
        </>
    );
};