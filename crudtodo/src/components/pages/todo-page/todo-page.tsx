import React from 'react';
import addIcon from './../../../assets/icons/add.svg'
import contextIcon from './../../../assets/icons/context.svg'

interface TodoPageProps {

}

export const TodoPage: React.FC<TodoPageProps> = props => {
    return (
        <>
            <div className="h-full w-full shrink py-16 px-2">
                <div className="w-full h-full flex flex-col md:flex-row gap-8">
                    <div className="py-8 px-10 bg-sky-400 rounded-lg w-full md:w-1/4 h-full flex flex-col gap-4 shadow-md">
                        <p className={'text-xl'}>GroupList</p>
                        <ul className={''}>

                        </ul>
                    </div>
                    <div className="w-full md:w-3/4 h-full rounded-lg md:p-8 flex flex-col gap-4">
                        <div className="flex flex-row items-center justify-between">
                            <p className={'text-xl'}>SelectedGroup</p>
                            <div className="">
                                <button>
                                    <img className={'w-8 h-8 rounded-full bg-sky-100'} src={addIcon} alt="addIcon"/>
                                </button>
                            </div>

                        </div>
                        <ul className={'w-full h-full  rounded-lg flex flex-col gap-4'}>
                            <li className={'rounded-md bg-white shadow-md w-full'}>
                                <div className="flex items-center md:gap-4 p-2 justify-between w-full">
                                    <div className="flex items-center gap-4 w-10/12 md:w-11/12">
                                        <input
                                            type="checkbox"
                                            name="checked-demo"
                                            className="w-[30px] h-[30px] form-tick appearance-none bg-white bg-check border border-gray-300 rounded-md checked:bg-emerald-300 checked:border-transparent focus:outline-none"
                                        />
                                        <div className="flex flex-col w-full max-h-32 overflow-y-auto">
                                            <p className={'text-xs font-light text-gray-300'}>{'20.20.2020'}</p>
                                            <p className="text-sm md:font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deserunt eum fugit itaque rerum soluta. Ab alias cum fugiat labore magnam perspiciatis, quae recusandae repudiandae saepe tempore? Officiis, perspiciatis, porro.</p>
                                        </div>
                                    </div>
                                    <div className="flex h-full w-2/12 md:w-1/12 self-start justify-center">
                                        <img
                                            className={'w-8 h-8'}
                                            src={contextIcon}
                                            alt="contextIcon"
                                        />
                                    </div>
                                </div>
                            </li>
                            <li className={'rounded-md bg-white shadow-md w-full'}>
                                <div className="flex items-center md:gap-4 p-2 justify-between w-full">
                                    <div className="flex items-center gap-4 w-10/12 md:w-11/12">
                                        <input
                                            type="checkbox"
                                            name="checked-demo"
                                            className="w-[30px] h-[30px] form-tick appearance-none bg-white bg-check border border-gray-300 rounded-md checked:bg-emerald-300 checked:border-transparent focus:outline-none"
                                        />
                                        <div className="flex flex-col w-full max-h-32 overflow-y-auto">
                                            <p className={'text-xs font-light text-gray-300'}>{'20.20.2020'}</p>
                                            <p className="text-sm md:font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deserunt eum fugit itaque rerum soluta. Ab alias cum fugiat labore magnam perspiciatis, quae recusandae repudiandae saepe tempore? Officiis, perspiciatis, porro.</p>
                                        </div>
                                    </div>
                                    <div className="flex h-full w-2/12 md:w-1/12 self-start justify-center">
                                        <img
                                            className={'w-8 h-8'}
                                            src={contextIcon}
                                            alt="contextIcon"
                                        />
                                    </div>
                                </div>
                            </li>
                            <li className={'rounded-md bg-white shadow-md w-full'}>
                                <div className="flex items-center md:gap-4 p-2 justify-between w-full">
                                    <div className="flex items-center gap-4 w-10/12 md:w-11/12">
                                        <input
                                            type="checkbox"
                                            name="checked-demo"
                                            className="w-[30px] h-[30px] form-tick appearance-none bg-white bg-check border border-gray-300 rounded-md checked:bg-emerald-300 checked:border-transparent focus:outline-none"
                                        />
                                        <div className="flex flex-col w-full max-h-32 overflow-y-auto">
                                            <p className={'text-xs font-light text-gray-300'}>{'20.20.2020'}</p>
                                            <p className="text-sm md:font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deserunt eum fugit itaque rerum soluta. Ab alias cum fugiat labore magnam perspiciatis, quae recusandae repudiandae saepe tempore? Officiis, perspiciatis, porro.</p>
                                        </div>
                                    </div>
                                    <div className="flex h-full w-2/12 md:w-1/12 self-start justify-center">
                                        <img
                                            className={'w-8 h-8'}
                                            src={contextIcon}
                                            alt="contextIcon"
                                        />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};