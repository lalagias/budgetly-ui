import TransactionItem from "./TransactionItem";

const TransactionsWrapper: React.FC = () => {
  return (
    <div className="transactions-card bg-white mt-40 w-4/6 p-4">
      <div className="transactions-card-header rounded-md flex item-start justify-between">
        <h2 className="text-lg font-semibold text-neon-dark-blue">
          Transactions
        </h2>
        <div className="transactions-card-header-actions">
          <button className="flex items-center text-base rounded-md bg-neon-dark-blue text-white px-4 py-2 shadow-lg hover:shadow-none">
            Add Transaction
          </button>
        </div>
      </div>
      <div className="transactions-card-content mt-4">
        <ul>
          <TransactionItem />
        </ul>
      </div>
    </div>
  );
};

export default TransactionsWrapper;
