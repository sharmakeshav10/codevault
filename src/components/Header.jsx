import { IoSunnyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-4 border border-black flex items-center justify-between">
      <Link to={"/"}>
        <h1 className="text-lg font-medium">CodeVault.</h1>
      </Link>
      <div>
        <IoSunnyOutline />
      </div>
    </div>
  );
};

export default Header;
