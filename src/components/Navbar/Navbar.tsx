import { HouseDoor } from "react-bootstrap-icons";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-white w-80 h-screen">
      <div className="logo-wrapper">
        <a href="" className="logo-link">
          <img src="" alt="" />
        </a>
      </div>
      <ul className="navbar-list mt-40">
        <li className="navbar-item">
          <a href="" className="navbar-link flex items-center text-xl">
            <HouseDoor className="mr-2" />
            Overview
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
