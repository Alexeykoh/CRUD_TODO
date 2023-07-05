import React from 'react';
import addIcon from './../../../assets/icons/add.svg'

interface TodoPageProps {

}

export const TodoPage: React.FC<TodoPageProps> = props => {


    return (
        <>
            <div className="h-full w-full shrink py-16">
                <div className="w-full h-full flex flex-col md:flex-row gap-8">
                    <div className="py-8 rounded-lg w-full md:w-1/6 h-full flex flex-col gap-8">
                        <p className={'text-3xl'}>GroupList</p>
                        <ul className={'flex flex-col gap-4'}>
                            <li>today</li>
                            <li>hot!</li>
                            <li>shop</li>
                            <li>work</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-5/6 h-full rounded-lg md:p-8 flex flex-col gap-4">
                        <div className="flex flex-row items-center justify-between">
                            <p className={'text-3xl'}>SelectedGroup</p>
                            <button>
                                <img className={'w-7 h-7 rounded-full '} src={addIcon} alt="addIcon"/>
                            </button>

                        </div>
                        <ul className={'w-full h-full  rounded-lg flex flex-col gap-4'}>
                            <li className={'rounded-md w-full'}>
                                <div className="flex items-center md:gap-4 p-2 justify-between w-full">
                                    <div className="flex items-center gap-8 w-10/12 md:w-11/12">
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
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/6"></div>
                </div>
            </div>
        </>
    );
};