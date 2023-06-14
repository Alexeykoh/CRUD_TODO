import React from 'react';

interface SubmitButtonProps {
    onClick: any
    title: string
    addClass: string
}

export const SubmitButton: React.FC<SubmitButtonProps> = props => {
    return (
        <>
            <button
                onClick={() => {
                    props.onClick()
                }}
                className={props.addClass + ' ' + ' px-4 py-2 rounded-md hover:scale-105 duration-75 shadow-md w-fit lowercase font-light'}
            >{props.title}</button>
        </>
    );
};