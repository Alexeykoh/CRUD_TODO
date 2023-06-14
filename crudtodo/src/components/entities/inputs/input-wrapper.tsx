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
            <div className="flex flex-col w-64 gap-1">
                <h4 className={'text-sm'}>{title}</h4>
                <input
                    className={(inputValue ? ' border-sky-300 ' : ' border-sky-100 ') + ' border-2 p-2 rounded-md duration-150 w-full'}
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