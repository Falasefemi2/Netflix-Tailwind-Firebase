import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("")
  const { logIn } = useAuth();

  const navigate = useNavigate()

  // Handles the form submission when the user clicks the "Sign Up" button.
  const handleLogIn = async (e) => {
    e.preventDefault();
    setErr("")
    try {
      await logIn(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
      setErr(error.message)
    }
  };
  return (
    <>
    <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/82e53bb2-68b3-47d0-9e0c-d9d8fd06a81a/NG-en-20230227-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              {err ? <p className="p-3 bg-red-700 my-3">{err}</p> : null}
              <form onSubmit={handleLogIn} className="w-full flex flex-col py-4">
                <input
                onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rouded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rouded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign In
                </button>
                <div className="flex justify-between items-center cursor-pointer text-sm text-gray-600">
                    <p><input className="mr-2" type="checkbox" />Remember Me</p>
                    <p>Need Help?</p>
                </div>
                <p className="py-8"><span className="text-gray-600">New to Netflix</span>{" "}
                <Link to="/signup">
                Sign Up
                </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login