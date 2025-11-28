interface InfoRowProps {
    label: string;
    value: string | number;
    link?: string;
}

const InfoRow = ({ label, value, link }: InfoRowProps) => {
    const valueElement = <span className="font-semibold text-gray-300 truncate max-w-[50%] text-right" title={value.toString()}> {value}</span>

    return (<div className="flex justify-between items-center p-1.5 rounded-md hover:bg-gray-800/50 transition-colors">
        <span className="font-medium text-gray-500">{label}</span>
        {link ? <a href={link} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-400 hover:text-blue-600">{valueElement}</a> : valueElement}
    </div>)
}

export default InfoRow;
