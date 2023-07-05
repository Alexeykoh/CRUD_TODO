import React from 'react';

interface LogoProps {
    logo:string
}

export const Logo: React.FC<LogoProps> = props => {
    return (
        <div className={'flex gap-2 items-center px-2 p-1 rounded-md w-fit text-white'}>
            <img className={'h-24 w-auto'} src={props.logo} alt="logo-image"/>
            {/*<p>ToDo</p>*/}
        </div>
    );
};