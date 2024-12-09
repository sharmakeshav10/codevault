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
      {/* <div className="text-center mb-2">
        <p className="text-sm">Built with love for developers</p>
      </div> */}
      <div className="flex justify-center mb-2">
        <CiTwitter className="mr-4" size={25} />
        <LuGithub className="mr-4" size={25} />
        <FiLinkedin size={25} />
      </div>
      <div className="flex justify-center">
        <p>© {new Date().getFullYear()} CodeVault. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
