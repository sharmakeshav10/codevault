import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to={"/create-paste"}>
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default HomePage;
