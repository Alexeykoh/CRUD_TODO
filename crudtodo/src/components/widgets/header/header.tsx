import React from 'react';
import {Logo} from "../../shared/labels/logo";
import iconLogo from './../../../assets/icons/logo/logo.png'


interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = props => {
    return (
        <>
            <div className={'w-full py-2 px-4 bg-black/75 justify-between items-center'}>
                <div className="flex items-center gap-2 ">
                    <Logo logo={iconLogo}/>
                </div>
            </div>
        </>
    );
};