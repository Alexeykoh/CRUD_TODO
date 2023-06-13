import React from 'react';

interface LogoProps {
    logo:string
}

export const Logo: React.FC<LogoProps> = props => {
    return (
        <>
            <img className={'h-8 w-auto'} src={props.logo} alt="logo-image"/>
        </>
    );
};