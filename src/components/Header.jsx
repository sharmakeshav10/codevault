import { IoSunnyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur">
      <div className=" p-4 flex items-center justify-between">
        <Link to={"/"}>
          <h1 className="text-lg font-medium">CodeVault.</h1>
        </Link>
        <div>
          <IoSunnyOutline />
        </div>
      </div>
    </header>
  );
};

export default Header;
