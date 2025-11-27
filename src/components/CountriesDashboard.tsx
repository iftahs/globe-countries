import { Search, Globe, ChevronDown } from 'lucide-react'; // Assuming usage of icons, can be replaced with standard SVG

// Mock Data for visualization purposes
const mockCountries = [
    { name: 'Israel', capital: 'Jerusalem', population: 9364000, flag: 'https://flagcdn.com/w320/il.png' },
    { name: 'United States', capital: 'Washington, D.C.', population: 331002651, flag: 'https://flagcdn.com/w320/us.png' },
    { name: 'Japan', capital: 'Tokyo', population: 126476461, flag: 'https://flagcdn.com/w320/jp.png' },
    { name: 'France', capital: 'Paris', population: 67391582, flag: 'https://flagcdn.com/w320/fr.png' },
    { name: 'Brazil', capital: 'Brasília', population: 212559417, flag: 'https://flagcdn.com/w320/br.png' },
    { name: 'Australia', capital: 'Canberra', population: 25687041, flag: 'https://flagcdn.com/w320/au.png' },
];

const CountriesDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
            {/* Header Section */}
            <header className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Globe className="text-blue-600 w-6 h-6" />
                        <h1 className="text-xl font-bold text-gray-900 tracking-tight">Agora Countries</h1>
                    </div>
                    <div className="text-sm text-gray-500 hidden sm:block">
                        Home Assignment
                    </div>
                </div>
            </header>

            {/* Controls Section (Search & Sort) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">

                    {/* Search Input */}
                    <div className="relative w-full md:w-96">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                            placeholder="Search for a country..."
                        />
                    </div>

                    {/* Sort Dropdown */}
                    <div className="relative w-full md:w-48">
                        <select
                            className="appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2.5 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm cursor-pointer"
                        >
                            <option value="name_asc">Name (A-Z)</option>
                            <option value="name_desc">Name (Z-A)</option>
                            <option value="pop_asc">Population (Lowest)</option>
                            <option value="pop_desc">Population (Highest)</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <ChevronDown className="h-4 w-4" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Grid Section  */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                {/* Loading State Mockup (Uncomment to view) */}
                {/* <div className="flex justify-center items-center h-64">
           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div> 
        */}

                {/* Error State Mockup (Uncomment to view) */}
                {/* <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">
                Failed to fetch countries data. Please try again later.
              </p>
            </div>
          </div>
        </div> 
        */}

                {/* Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {mockCountries.map((country, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col hover:-translate-y-1"
                        >
                            {/* Flag Image */}
                            <div className="h-48 w-full overflow-hidden relative bg-gray-50">
                                <img
                                    src={country.flag}
                                    alt={`${country.name} flag`}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{country.name}</h3>

                                <div className="space-y-3 text-sm text-gray-600">
                                    <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition-colors">
                                        <span className="font-medium text-gray-500">Capital</span>
                                        <span className="font-semibold text-gray-900">{country.capital}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition-colors">
                                        <span className="font-medium text-gray-500">Population</span>
                                        <span className="font-semibold text-gray-900">{country.population.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default CountriesDashboard;