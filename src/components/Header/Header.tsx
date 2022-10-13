import { PlusCircle } from "react-bootstrap-icons";

const Header: React.FC = () => {
  return (
    <div className="header-wrapper w-full flex items-start justify-between">
      <div className="header-title">
        <h1 className="text-4xl font-semibold text-eerie-black">Overview</h1>
        <h3 className="text-xl text-dark-pastel-blue">Welcome back, User!</h3>
      </div>
      <div className="header-actions">
        <button className="flex items-center text-base rounded-md bg-neon-dark-blue text-white px-4 py-2 shadow-lg hover:shadow-none">
          <PlusCircle className="text-xl mr-2" />
          Add Transaction
        </button>
      </div>
    </div>
  );
};

export default Header;
