import React from 'react';
import {Logo} from "./logo";
import iconLogo from './../../../assets/icons/logo/todoIcon.svg'

interface GreetingFeaturesLabelProps {
    
}

export const GreetingFeaturesLabel: React.FC<GreetingFeaturesLabelProps> = props => {
    return (
        <>
            <div className="md:py-16 rounded-lg w-full md:w-1/3 h-full flex flex-col my-auto">
                <div className="flex flex-col gap-32">
                    <h2 className={'text-2xl md:text-5xl '}>Планируй свой день вместе с ToDo</h2>
                    <p className={'font-light hidden md:block'}>Ты можешь создавать задачи и добавлять их в список, а также устанавливать напоминания о них. Если ты хочешь, чтобы задача была выполнена, то ты можешь установить срок ее выполнения и следить за тем, сколько времени осталось до ее завершения.</p>
                </div>
            </div>
        </>
    );
};