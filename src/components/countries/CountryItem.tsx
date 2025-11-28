import { memo } from 'react';
import type { Country } from '../../types';
import CountryFlag from './CountryFlag';
import InfoRow from './InfoRow';

interface CountryItemProps {
    country: Country;
}

const CountryItem = memo(({ country }: CountryItemProps) => (
    <div
        className="group bg-gray-900 rounded-xl shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 overflow-hidden border border-gray-800 hover:border-gray-700 flex flex-col hover:-translate-y-1"
    >
        <CountryFlag
            src={country.flags.png}
            alt={`${country.name.common} flag`}
        />

        <div className="p-4 flex-1 flex flex-col">
            <h3 className="text-lg font-bold text-gray-100 mb-3 group-hover:text-blue-400 transition-colors truncate">{country.name.common}</h3>

            <div className="space-y-2 text-xs text-gray-400">
                <InfoRow label="Capital" value={country.capital?.[0] || 'N/A'} />
                <InfoRow label="Population" value={country.population.toLocaleString()} />
            </div>
        </div>
    </div>
));

export default CountryItem;
