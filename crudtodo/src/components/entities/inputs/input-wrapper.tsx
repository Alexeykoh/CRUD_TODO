import React from 'react';

interface InputWrapperProps {
    inputValue: string
    changeValue: any
    placeholder: string
    title: string
    type?: string
}

export const InputWrapper: React.FC<InputWrapperProps> = ({placeholder, inputValue, changeValue, title, type}) => {
    return (
        <>
            <div className="flex flex-col w-full">
                <h4 className={'text-sm'}>{title}</h4>
                <input
                    className={(inputValue ? ' border-emerald-400 ' : ' border-red-400 ') + ' border-2 p-2 rounded-md duration-150'}
                    placeholder={placeholder}
                    type={type || "text"}
                    value={inputValue}
                    onChange={(e: any) => {
                        changeValue(e.target.value)
                    }}
                />
            </div>
        </>
    );
};