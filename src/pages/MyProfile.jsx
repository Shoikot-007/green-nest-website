import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { FaUser, FaEnvelope, FaCamera, FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    photoURL: user?.photoURL || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    if (!formData.displayName || !formData.photoURL) {
      toast.error("Please fill in all fields");
      return;
    }

    updateUserProfile(formData.displayName, formData.photoURL)
      .then(() => {
        toast.success("Profile updated successfully!");
        setIsEditing(false);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to update profile");
      });
  };

  return (
    <div className="bg-[#DDEEDF] min-h-screen">
      <div className="container mx-auto px-4 lg:px-20 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1
              className="text-4xl md:text-5xl font-bold text-[#3A7D44] mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              My Profile
            </h1>
            <p
              className="text-[#2B2B2B] text-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Manage your account information
            </p>
          </div>

          <div className="card bg-white shadow-[0_8px_24px_rgba(0,0,0,0.1)] rounded-2xl">
            <div className="card-body p-8">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="avatar">
                    <div className="w-32 rounded-full ring ring-[#6FBF73] ring-offset-base-100 ring-offset-4">
                      {user?.photoURL ? (
                        <img src={user.photoURL} alt={user.displayName} />
                      ) : (
                        <div className="bg-[#3A7D44] flex items-center justify-center h-full">
                          <FaUser className="text-white text-5xl" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 bg-[#3A7D44] text-white p-3 rounded-full">
                    <FaCamera />
                  </div>
                </div>
              </div>

              {!isEditing ? (
                <div className="space-y-6">
                  <div className="form-control">
                    <label className="label mb-2">
                      <span
                        className="label-text font-semibold flex items-center gap-2 text-[#2B2B2B]"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        <FaUser className="text-[#3A7D44]" />
                        Name
                      </span>
                    </label>
                    <div className="p-4 bg-[#DDEEDF] bg-opacity-30 rounded-lg">
                      <p
                        className="text-lg text-[#2B2B2B]"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {user?.displayName || "Not provided"}
                      </p>
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label mb-2">
                      <span
                        className="label-text font-semibold flex items-center gap-2 text-[#2B2B2B]"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        <FaEnvelope className="text-[#3A7D44]" />
                        Email
                      </span>
                    </label>
                    <div className="p-4 bg-[#DDEEDF] bg-opacity-30 rounded-lg">
                      <p
                        className="text-lg text-[#2B2B2B]"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {user?.email}
                      </p>
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label mb-2">
                      <span
                        className="label-text font-semibold flex items-center gap-2 text-[#2B2B2B]"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        <FaCamera className="text-[#3A7D44]" />
                        Photo URL
                      </span>
                    </label>
                    <div className="p-4 bg-[#DDEEDF] bg-opacity-30 rounded-lg break-all">
                      <p
                        className="text-sm text-[#2B2B2B]"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {user?.photoURL || "Not provided"}
                      </p>
                    </div>
                  </div>

                  <div className="form-control mt-8">
                    <button
                      onClick={() => setIsEditing(true)}
                      className="btn bg-[#3A7D44] text-white border-none hover:bg-[#6FBF73] rounded-lg btn-lg transition-all duration-300"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      <FaEdit className="mr-2" />
                      Update Profile
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleUpdateProfile} className="space-y-6">
                  <div className="form-control">
                    <label className="label mb-2">
                      <span
                        className="label-text font-semibold flex items-center gap-2 text-[#2B2B2B]"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        <FaUser className="text-[#3A7D44]" />
                        Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="displayName"
                      value={formData.displayName}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="input input-bordered border-[#3A7D44] focus:border-[#6FBF73] focus:outline-none rounded-lg w-full"
                      style={{ fontFamily: "Inter, sans-serif" }}
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label mb-2">
                      <span
                        className="label-text font-semibold flex items-center gap-2 text-[#2B2B2B]"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        <FaEnvelope className="text-[#3A7D44]" />
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      value={user?.email}
                      className="input input-bordered bg-[#DDEEDF] bg-opacity-30 rounded-lg w-full"
                      style={{ fontFamily: "Inter, sans-serif" }}
                      disabled
                    />
                    <label className="label">
                      <span
                        className="label-text-alt text-[#2B2B2B] mt-2"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        Email cannot be changed
                      </span>
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label mb-2">
                      <span
                        className="label-text font-semibold flex items-center gap-2 text-[#2B2B2B]"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        <FaCamera className="text-[#3A7D44]" />
                        Photo URL
                      </span>
                    </label>
                    <input
                      type="url"
                      name="photoURL"
                      value={formData.photoURL}
                      onChange={handleInputChange}
                      placeholder="Enter photo URL"
                      className="input input-bordered border-[#3A7D44] focus:border-[#6FBF73] focus:outline-none rounded-lg w-full"
                      style={{ fontFamily: "Inter, sans-serif" }}
                      required
                    />
                  </div>

                  <div className="flex gap-4 mt-8">
                    <button
                      type="submit"
                      className="btn bg-[#3A7D44] text-white border-none hover:bg-[#6FBF73] rounded-lg flex-1 transition-all duration-300"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditing(false);
                        setFormData({
                          displayName: user?.displayName || "",
                          photoURL: user?.photoURL || "",
                        });
                      }}
                      className="btn border-[#3A7D44] text-[#3A7D44] bg-transparent hover:bg-[#DDEEDF] rounded-lg flex-1 transition-all duration-300"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="card bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] mt-8 rounded-2xl">
            <div className="card-body p-6">
              <h3
                className="card-title text-[#3A7D44] text-xl"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Account Information
              </h3>
              <div
                className="space-y-2 text-[#2B2B2B]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <p>
                  <strong>Account Created:</strong>{" "}
                  {user?.metadata?.creationTime}
                </p>
                <p>
                  <strong>Last Sign In:</strong>{" "}
                  {user?.metadata?.lastSignInTime}
                </p>
                <p>
                  <strong>Email Verified:</strong>{" "}
                  {user?.emailVerified ? "Yes" : "No"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;