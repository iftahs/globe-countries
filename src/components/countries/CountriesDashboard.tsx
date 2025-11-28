import SearchBar from './SearchBar';
import CountriesList from './CountriesList';
import Loader from '../ui/Loader';
import ErrorMessage from '../ui/ErrorMessage';
import { Suspense, useEffect, useState, useTransition } from 'react';
import { SortOrder, type Country } from '../../types';

const COUNTRY_API_URL = 'https://restcountries.com/v3.1/all?fields=name,flags,population,capital';

const CountriesDashboard = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.NameAsc);

  const [isPending, startTransition] = useTransition();

  const handleSort = (order: SortOrder) => {
    startTransition(() => {
      setSortOrder(order);
    });
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(COUNTRY_API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch countries');
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        setError('Failed to load countries. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 pt-20">
        <ErrorMessage message={error} />
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar onSearch={setSearchQuery} onSort={handleSort} isPending={isPending} />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Suspense fallback={<Loader />}>
          <CountriesList countries={countries} searchQuery={searchQuery} sortOrder={sortOrder} />
        </Suspense>
      </main>
    </>
  );
};

export default CountriesDashboard;