interface ErrorMessageProps {
    message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => (
    <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center p-8 bg-red-900/20 border border-red-800 rounded-xl max-w-md mx-auto">
            <h3 className="text-xl font-bold text-red-400 mb-2">Error</h3>
            <p className="text-gray-300">{message}</p>
        </div>
    </div>
);

export default ErrorMessage;
