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
            <div className="flex flex-col w-full md:w-64">
                <h4 className={'px-2 text-xs font-light text-gray-300'}>{title}</h4>
                <input
                    className={(inputValue ? ' border-black/50 ' : ' border-black/25 ') + ' focus:outline-none focus:border-0 px-2 rounded-md duration-150 w-full bg-transparent'}
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