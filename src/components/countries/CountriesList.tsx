import CountryItem from './CountryItem';
import { type Country } from '../../types';

interface CountriesListProps {
    countries: Country[];
}

const CountriesList = ({ countries }: CountriesListProps) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {countries.map((country) => (
                <CountryItem key={country.name.common} country={country} />
            ))}
        </div>
    );
};

export default CountriesList;
