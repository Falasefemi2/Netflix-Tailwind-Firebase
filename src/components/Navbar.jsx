import { useNavigate } from "react-router";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  // console.log(user.email);

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
        <Link to="/">
          <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
            NETFLIX
          </h1>
        </Link>
        {user?.email ? (
          <div>
            <Link to="/account">
              <button className="text-white p-4">Account</button>
            </Link>
            
              <button onClick={handleLogOut} className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
                Logout
              </button>
            
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button className="text-white p-4">Sign In</button>
            </Link>
            <Link to="/signup">
              <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
