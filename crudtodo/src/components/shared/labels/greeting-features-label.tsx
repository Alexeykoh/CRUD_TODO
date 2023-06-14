import React from 'react';
import {Logo} from "./logo";
import iconLogo from './../../../assets/icons/logo/logo.png'

interface GreetingFeaturesLabelProps {
    
}

export const GreetingFeaturesLabel: React.FC<GreetingFeaturesLabelProps> = props => {
    return (
        <>
            <div className="py-16 px-10 bg-sky-300 rounded-lg w-1/3 h-full flex flex-col">
                <Logo logo={iconLogo}/>
                <div className="flex flex-col gap-8 pt-32 text-white ">
                    <h2 className={'text-5xl font-semibold'}>Планируй свой день вместе с ToDo</h2>
                    <p className={'font-light text-gray-50'}>Ты можешь создавать задачи и добавлять их в список, а также устанавливать напоминания о них. Если ты хочешь, чтобы задача была выполнена, то ты можешь установить срок ее выполнения и следить за тем, сколько времени осталось до ее завершения.</p>
                </div>
            </div>
        </>
    );
};