import React, {useState} from 'react';

interface TaskItemProps {
    children?: string | JSX.Element | JSX.Element[]
}

export const TaskItem: React.FC<TaskItemProps> = props => {

    const [isChecked, setIsChecked] = useState<boolean>(false);

    return (
        <>
            <li className={'rounded-md w-full'}>
                <div className="flex items-center md:gap-4 p-2 justify-between w-full">
                    <input
                        type="checkbox"
                        name="checked-demo"
                        className="w-[30px] h-[30px] duration-150 form-tick appearance-none  bg-check border border-gray-300 rounded-md checked:bg-emerald-300 checked:border-transparent focus:outline-none"
                    />
                    <div className="flex flex-col w-full max-h-32 overflow-y-auto">
                        <p className={'text-xs font-light text-gray-300'}>{'20.20.2020'}</p>
                        <p className="text-sm md:font-normal">Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Architecto deserunt eum fugit itaque rerum
                            soluta. Ab alias cum fugiat labore magnam perspiciatis, quae recusandae
                            repudiandae saepe tempore? Officiis, perspiciatis, porro.</p>
                    </div>
                </div>
            </li>
        </>
    );
};