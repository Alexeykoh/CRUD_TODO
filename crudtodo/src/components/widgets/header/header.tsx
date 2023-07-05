import React from 'react';
import {Logo} from "../../shared/labels/logo";
import iconLogo from './../../../assets/icons/logo/todoIcon.svg'


interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = props => {
    return (
        <>
            <div className={'w-full py-2 px-4 justify-between items-center '}>
                <div className="flex items-center gap-2 container mx-auto">
                    <Logo logo={iconLogo}/>
                </div>
            </div>
        </>
    );
};