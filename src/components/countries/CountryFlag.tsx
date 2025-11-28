import LazyImage from '../ui/LazyImage';

interface CountryFlagProps {
    src: string;
    alt: string;
}

const CountryFlag = ({ src, alt }: CountryFlagProps) => (
    <div className="h-32 w-full overflow-hidden relative bg-gray-800">
        <LazyImage
            src={src}
            alt={alt}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
);

export default CountryFlag;
