import { IoSunnyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useTheme } from "../themeContext";
import { GoMoon } from "react-icons/go";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 backdrop-blur z-50">
      <div className=" p-4 flex items-center justify-between">
        <Link to={"/"}>
          <h1 className="text-lg font-medium">CodeVault.</h1>
        </Link>
        <div className="cursor-pointer">
          {theme === "dark" ? (
            <IoSunnyOutline
              size={20}
              onClick={toggleTheme}
              className="text-yellow-500 dark:text-yellow-300"
            />
          ) : (
            <GoMoon size={20} onClick={toggleTheme} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
