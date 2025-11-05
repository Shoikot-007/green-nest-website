import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { FaGoogle, FaEye, FaEyeSlash, FaLeaf } from "react-icons/fa";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser, signInWithGoogle, resetPassword } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        if (error.code === "auth/user-not-found") {
          toast.error("No account found with this email");
        } else if (error.code === "auth/wrong-password") {
          toast.error("Incorrect password");
        } else if (error.code === "auth/invalid-credential") {
          toast.error("Invalid email or password");
        } else {
          toast.error("Login failed. Please try again.");
        }
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Logged in with Google successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Google sign-in failed");
      });
  };

  const handleForgotPassword = () => {
    if (!email) {
      toast.error("Please enter your email address first");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
      })
      .catch((error) => {
        console.error(error);
        if (error.code === "auth/user-not-found") {
          toast.error("No account found with this email");
        } else {
          toast.error("Failed to send reset email");
        }
      });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#3A7D44] via-[#6FBF73] to-[#DDEEDF] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left text-white order-2 lg:order-1">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <FaLeaf className="text-6xl" />
            <h1
              className="text-5xl font-bold"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              GreenNest
            </h1>
          </div>
          <p
            className="text-2xl mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Welcome back to your green sanctuary!
          </p>
          <p
            className="text-lg opacity-90"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Sign in to access your plant collection, book expert consultations,
            and continue your journey to a greener home.
          </p>
        </div>

        <div className="card bg-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] rounded-2xl order-1 lg:order-2">
          <div className="card-body p-8">
            <h2
              className="text-4xl font-bold text-center text-[#3A7D44] mb-8"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Login
            </h2>

            <form onSubmit={handleLogin}>
              <div className="form-control mb-4">
                <label className="label">
                  <span
                    className="label-text font-semibold text-[#2B2B2B]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="input input-bordered border-[#3A7D44] focus:border-[#6FBF73] focus:outline-none rounded-lg"
                  style={{ fontFamily: "Inter, sans-serif" }}
                  required
                />
              </div>

              <div className="form-control mb-2">
                <label className="label">
                  <span
                    className="label-text font-semibold text-[#2B2B2B]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Password
                  </span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    className="input input-bordered border-[#3A7D44] focus:border-[#6FBF73] focus:outline-none rounded-lg w-full pr-12"
                    style={{ fontFamily: "Inter, sans-serif" }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2B2B2B] hover:text-[#3A7D44] transition-colors"
                  >
                    {showPassword ? (
                      <FaEyeSlash size={20} />
                    ) : (
                      <FaEye size={20} />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex justify-end mb-6">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-[#3A7D44] hover:text-[#6FBF73] font-semibold transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Forgot password?
                </button>
              </div>

              <div className="form-control">
                <button
                  type="submit"
                  className="btn bg-[#3A7D44] text-white border-none hover:bg-[#6FBF73] rounded-lg transition-all duration-300"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Login
                </button>
              </div>
            </form>

            <div
              className="divider text-[#2B2B2B]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              OR
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="btn border-[#3A7D44] text-[#3A7D44] bg-transparent hover:bg-[#DDEEDF] rounded-lg w-full transition-all duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <FaGoogle className="mr-2" />
              Continue with Google
            </button>

            <p
              className="text-center mt-6 text-[#2B2B2B]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-[#3A7D44] font-bold hover:text-[#6FBF73] transition-colors"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;