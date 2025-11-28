import { Globe } from 'lucide-react';

const Header = () => {
    return (
        <header className="bg-gray-900/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-600/10 rounded-lg">
                        <Globe className="text-blue-500 w-6 h-6" />
                    </div>
                    <h1 className="text-xl font-bold text-white tracking-tight">Globe Countries</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
