import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="landing min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white">
      {/* Hero Section */}
      <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg text-center">
        Welcome to <span className="text-yellow-300">Advice App</span>
      </h1>
      <p className="text-lg mb-12 max-w-2xl text-center leading-relaxed">
        Your one-stop platform to seek advice on{" "}
        <span className="font-semibold">
          Food, Travel, Emotional Support, Financial Guidance
        </span>{" "}
        and more.  
        Connect with advisors and get personalized recommendations!
      </p>

      {/* Auth Buttons */}
      <div className="flex space-x-6 mb-12">
        <Link to="/login">
          <button className="px-8 py-3 rounded-full bg-white text-indigo-600 font-bold hover:bg-gray-100 transition duration-200 shadow-lg">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-8 py-3 rounded-full bg-yellow-400 text-gray-800 font-bold hover:bg-yellow-300 transition duration-200 shadow-lg">
            Sign Up
          </button>
        </Link>
      </div>

      {/* Categories Section */}
      <div className="flex flex-wrap justify-center gap-8">
        <Link to="/food">
          <div className="flex flex-col items-center justify-center w-40 h-40 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-2xl shadow-xl hover:scale-105 transform transition">
            🍔
            <h2 className="text-xl font-bold mt-2">Food</h2>
          </div>
        </Link>
        <Link to="/travel">
          <div className="flex flex-col items-center justify-center w-40 h-40 bg-gradient-to-br from-blue-400 to-indigo-500 text-white rounded-2xl shadow-xl hover:scale-105 transform transition">
            ✈️
            <h2 className="text-xl font-bold mt-2">Travel</h2>
          </div>
        </Link>
        <Link to="/emotional">
          <div className="flex flex-col items-center justify-center w-40 h-40 bg-gradient-to-br from-pink-400 to-purple-500 text-white rounded-2xl shadow-xl hover:scale-105 transform transition">
            💬
            <h2 className="text-xl font-bold mt-2">Emotional</h2>
          </div>
        </Link>
        <Link to="/financial">
          <div className="flex flex-col items-center justify-center w-40 h-40 bg-gradient-to-br from-green-400 to-emerald-600 text-white rounded-2xl shadow-xl hover:scale-105 transform transition">
            💰
            <h2 className="text-xl font-bold mt-2">Financial</h2>
          </div>
        </Link>
        <Link to="/transport">
          <div className="flex flex-col items-center justify-center w-40 h-40 bg-gradient-to-br from-gray-400 to-gray-600 text-white rounded-2xl shadow-xl hover:scale-105 transform transition">
            🚗
            <h2 className="text-xl font-bold mt-2">Transport</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
