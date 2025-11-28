import React from 'react';
import Header from './Header';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-blue-500/30">
            <Header />
            {children}
            <div className="text-center text-gray-400 mt-12">All rights reserved to Iftah Saar &copy; {new Date().getFullYear()}</div>
        </div>
    );
};

export default Layout;
