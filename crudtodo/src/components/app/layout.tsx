import React from 'react';
import {Outlet} from "react-router";
import {Header} from "../widgets/header/header";

interface LayoutProps {

}

export const Layout: React.FC<LayoutProps> = props => {
    return (
        <>
            <div className={'h-screen flex flex-col'}>
                <Header/>
                <main className="main container mx-auto h-full flex shrink">
                    <Outlet/>
                </main>
            </div>
        </>
    );
};