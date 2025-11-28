interface InfoRowProps {
    label: string;
    value: string | number;
}

const InfoRow = ({ label, value }: InfoRowProps) => (
    <div className="flex justify-between items-center p-1.5 rounded-md hover:bg-gray-800/50 transition-colors">
        <span className="font-medium text-gray-500">{label}</span>
        <span className="font-semibold text-gray-300 truncate max-w-[50%] text-right" title={value.toString()}> {value}</span>
    </div>
);

export default InfoRow;
