type SortByProps = {
  options: string[];
  onSort?: (option: string) => void; // Make onSort optional
};

const SortBy: React.FC<SortByProps> = ({ options, onSort }) => {
  return (
    <div>
      {options.map((option) => (
        <button key={option} onClick={() => onSort && onSort(option)}>
          {`Sort by ${option}`}
        </button>
      ))}
    </div>
  );
};

export default SortBy;
