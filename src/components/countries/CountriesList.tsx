import CountryItem from './CountryItem';
import { SortOrder, type Country } from '../../types';
import { useDebounce } from '../../hooks/useDebounce';
import { useMemo } from 'react';

interface CountriesListProps {
    countries: Country[];
    searchQuery: string;
    sortOrder: SortOrder;
}

const CountriesList = ({ countries, searchQuery, sortOrder }: CountriesListProps) => {
    const debouncedSearchQuery = useDebounce(searchQuery, 300);

    const filteredCountries = useMemo(() => countries.filter((country) =>
        country.name.common.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    ), [countries, debouncedSearchQuery]);

    const sortedCountries = useMemo(() => [...filteredCountries].sort((a, b) => {
        if (sortOrder === SortOrder.NameAsc) {
            return a.name.common.localeCompare(b.name.common);
        } else if (sortOrder === SortOrder.NameDesc) {
            return b.name.common.localeCompare(a.name.common);
        } else if (sortOrder === SortOrder.PopAsc) {
            return a.population - b.population;
        } else if (sortOrder === SortOrder.PopDesc) {
            return b.population - a.population;
        }
        return 0;
    }), [filteredCountries, sortOrder]);

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {sortedCountries.map((country) => (
                <CountryItem key={country.name.common} country={country} />
            ))}
        </div>
    );
};

export default CountriesList;
