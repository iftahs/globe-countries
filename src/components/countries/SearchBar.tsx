import { Search, ChevronDown } from 'lucide-react';
import { SortOrder } from '../../types';

import LoadingBar from '../ui/LoadingBar';

interface ISearchBarProps {
    onSearch: (query: string) => void;
    onSort: (order: SortOrder) => void;
    isPending?: boolean;
}

const SearchBar = ({ onSearch, onSort, isPending }: ISearchBarProps) => {
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };

    const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onSort(e.target.value as SortOrder);
    };

    return (
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-900/50 p-4 rounded-xl shadow-sm border border-gray-800 backdrop-blur-sm overflow-hidden">
            {/* Loading Bar */}
            {isPending && <LoadingBar />}

            {/* Search Input */}
            <div className="relative w-full md:w-96 group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-500 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg leading-5 bg-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 sm:text-sm transition-all duration-200"
                    placeholder="Search for a country..."
                    onChange={handleSearch}
                />
            </div>

            {/* Sort Dropdown */}
            <div className="relative w-full md:w-56">
                <select
                    className="appearance-none w-full bg-gray-800 border border-gray-700 hover:border-gray-600 text-gray-200 px-4 py-3 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-sm cursor-pointer transition-all duration-200"
                    onChange={handleSort}
                >
                    <option value={SortOrder.NameAsc}>Name (A-Z)</option>
                    <option value={SortOrder.NameDesc}>Name (Z-A)</option>
                    <option value={SortOrder.PopAsc}>Population (Lowest)</option>
                    <option value={SortOrder.PopDesc}>Population (Highest)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                    <ChevronDown className="h-4 w-4" />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
