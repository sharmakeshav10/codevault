import { CiTwitter } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="p-4 border-t border-gray-200">
      <Link to={"/"}>
        <h1 className="text-lg font-medium">CodeVault.</h1>
      </Link>
      <div className="flex justify-center mb-2 ">
        <CiTwitter
          onClick={() => window.open("https://x.com/sharma_keshav07")}
          className="mr-4 cursor-pointer"
          size={25}
        />
        <LuGithub
          onClick={() =>
            window.open("https://github.com/sharmakeshav10/codevault")
          }
          className="mr-4 cursor-pointer"
          size={25}
        />
        <FiLinkedin
          onClick={() =>
            window.open("https://www.linkedin.com/in/keshav-sharma-3baa72181/")
          }
          size={25}
          className="cursor-pointer"
        />
      </div>
      <div className="flex justify-center">
        <p>© {new Date().getFullYear()} CodeVault. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
