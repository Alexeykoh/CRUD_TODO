import React from 'react';

interface FlexSectionProps {
    children: string | JSX.Element | JSX.Element[]
}

export const FlexSection: React.FC<FlexSectionProps> = props => {
    return (
        <>
            <div className={'flex flex-col w-full py-2 bg-white rounded-md'}>
                {props.children}
            </div>
        </>
    );
};