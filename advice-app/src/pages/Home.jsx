import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="landing">
      <h1>Welcome to Advice App</h1>
      <div className="auth-buttons">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
