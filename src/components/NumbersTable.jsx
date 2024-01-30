import "../NumbersTable.css";

const NumbersTable = ({ limit }) => {
  const generateNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= limit; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  return (
    <div className="numbers-table">
      {generateNumbers().map((number) => (
        <div key={number} className={number % 2 === 0 ? "even" : "odd"}>
          {number}
        </div>
      ))}
    </div>
  );
};

export default NumbersTable;
