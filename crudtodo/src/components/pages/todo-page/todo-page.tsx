import React from 'react';
import addIcon from './../../../assets/icons/add.svg'

interface TodoPageProps {

}

export const TodoPage: React.FC<TodoPageProps> = props => {
    return (
        <>
            <div className="h-full w-full shrink py-16">
                <div className="w-full h-full flex flex-row gap-8">
                    <div className="py-8 px-10 bg-sky-400 rounded-lg w-1/4 h-full flex flex-col gap-4 shadow-md">
                        <p className={'text-xl'}>GroupList</p>
                        <ul className={''}>

                        </ul>
                    </div>
                    <div className="w-3/4 h-full rounded-lg p-8 flex flex-col gap-4">
                        <div className="flex flex-row items-center justify-between">
                            <p className={'text-xl'}>SelectedGroup</p>
                            <div className="">
                                <button>
                                    <img className={'w-8 h-8 rounded-full bg-sky-100'} src={addIcon} alt="addIcon"/>
                                </button>
                            </div>

                        </div>
                        <ul className={'w-full h-full  rounded-lg flex flex-col gap-4'}>
                            <li className={'rounded-md bg-white shadow-md'}>
                                <div className="flex items-center gap-4 p-2 justify-between">
                                    <div className="flex items-center gap-4">
                                        <input
                                            type="checkbox"
                                            name="checked-demo"
                                            className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-emerald-300 checked:border-transparent focus:outline-none"
                                        />
                                        <div className="">
                                            <p className={'text-xs font-light text-gray-300'}>{'20.20.2020'}</p>
                                            <p className="font-normal">Gray</p>
                                        </div>
                                    </div>
                                    <div className="">context</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};