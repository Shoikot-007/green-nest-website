import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { FaGoogle, FaEye, FaEyeSlash, FaLeaf } from "react-icons/fa";
import toast from "react-hot-toast";

const Signup = () => {
  const { createUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLengthValid = password.length >= 6;

    if (!hasUppercase) {
      return "Password must contain at least one uppercase letter";
    }
    if (!hasLowercase) {
      return "Password must contain at least one lowercase letter";
    }
    if (!isLengthValid) {
      return "Password must be at least 6 characters long";
    }
    return "";
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    // Validate password
    const error = validatePassword(password);
    if (error) {
      setPasswordError(error);
      toast.error(error);
      return;
    }
    setPasswordError("");

    createUser(email, password)
      .then((result) => {
        updateUserProfile(name, photoURL)
          .then(() => {
            toast.success("Account created successfully!");
            navigate("/");
          })
          .catch((error) => {
            console.error(error);
            toast.error("Failed to update profile");
          });
      })
      .catch((error) => {
        console.error(error);
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email already in use");
        } else if (error.code === "auth/weak-password") {
          toast.error("Password is too weak");
        } else {
          toast.error("Signup failed. Please try again.");
        }
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Account created with Google successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Google sign-in failed");
      });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#DDEEDF] via-[#6FBF73] to-[#3A7D44] flex items-center justify-center py-12 px-4">
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
            Join our growing community of plant lovers!
          </p>
          <p
            className="text-lg opacity-90"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Create your account to explore our plant collection, get
            personalized care tips, and transform your space into a lush green
            paradise.
          </p>
        </div>

        <div className="card bg-white shadow-[0_8px_24px_rgba(0,0,0,0.2)] rounded-2xl order-1 lg:order-2">
          <div className="card-body p-8">
            <h2
              className="text-4xl font-bold text-center text-[#3A7D44] mb-8"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Sign Up
            </h2>

            <form onSubmit={handleSignup}>
              <div className="form-control mb-4">
                <label className="label">
                  <span
                    className="label-text font-semibold text-[#2B2B2B]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="input input-bordered border-[#3A7D44] focus:border-[#6FBF73] focus:outline-none rounded-lg"
                  style={{ fontFamily: "Inter, sans-serif" }}
                  required
                />
              </div>

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
                  placeholder="Enter your email"
                  className="input input-bordered border-[#3A7D44] focus:border-[#6FBF73] focus:outline-none rounded-lg"
                  style={{ fontFamily: "Inter, sans-serif" }}
                  required
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span
                    className="label-text font-semibold text-[#2B2B2B]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Photo URL
                  </span>
                </label>
                <input
                  type="url"
                  name="photoURL"
                  placeholder="Enter your photo URL"
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
                    placeholder="Create a password"
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
                {passwordError && (
                  <label className="label">
                    <span
                      className="label-text-alt text-[#C47E5A]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {passwordError}
                    </span>
                  </label>
                )}
                <label className="label">
                  <span
                    className="label-text-alt text-[#2B2B2B]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Password must contain uppercase, lowercase, and be at least
                    6 characters
                  </span>
                </label>
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-[#3A7D44] text-white border-none hover:bg-[#6FBF73] rounded-lg transition-all duration-300"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Register
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
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#3A7D44] font-bold hover:text-[#6FBF73] transition-colors"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;