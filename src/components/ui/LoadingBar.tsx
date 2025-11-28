const LoadingBar = () => {
    return (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800/50 overflow-hidden rounded-b-xl">
            <div className="animate-scan"></div>
        </div>
    );
};

export default LoadingBar;
