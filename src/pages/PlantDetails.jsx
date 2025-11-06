import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { FaStar, FaLeaf, FaBoxOpen, FaUserTie } from "react-icons/fa";
import toast from "react-hot-toast";

const PlantDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        const foundPlant = data.find((p) => p.plantId === parseInt(id));
        if (foundPlant) {
          setPlant(foundPlant);
        } else {
          toast.error("Plant not found");
          navigate("/plants");
        }
      })
      .catch((error) => {
        toast.error("Error loading plant details");
        navigate("/plants");
      });
  }, [id, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast.error("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    toast.success(
      `Consultation booked successfully! We'll contact you at ${formData.email}`
    );
    setFormData({ name: "", email: "" });
  };

  if (!plant) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#F9F8F4]">
        <span className="loading loading-spinner loading-lg text-[#3A7D44]"></span>
      </div>
    );
  }

  return (
    <div className="bg-[#DDEEDF] min-h-screen">
      <div className="container mx-auto px-4 lg:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="flex justify-center items-center">
            <div className="w-full max-w-lg">
              <img
                src={plant.image}
                alt={plant.plantName}
                className="w-full rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
              />
            </div>
          </div>

          <div>
            <div className="badge bg-[#6FBF73] text-white border-none badge-lg mb-4">
              {plant.category}
            </div>
            <h1
              className="text-5xl font-bold text-[#3A7D44] mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {plant.plantName}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-xl">
                <FaStar className="text-[#D4AF37]" />
                <span
                  className="font-semibold text-[#2B2B2B]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {plant.rating}
                </span>
                <span
                  className="text-[#2B2B2B] opacity-70"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  (4.5/5)
                </span>
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="badge border-[#6FBF73] text-[#6FBF73] bg-transparent badge-lg">
                {plant.careLevel} Care
              </div>
            </div>

            <p
              className="text-xl text-[#2B2B2B] mb-8 leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {plant.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                <FaBoxOpen className="text-3xl text-[#3A7D44]" />
                <div>
                  <p
                    className="text-sm text-[#2B2B2B] opacity-70"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Available Stock
                  </p>
                  <p
                    className="text-lg font-semibold text-[#2B2B2B]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {plant.availableStock} units
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                <FaUserTie className="text-3xl text-[#3A7D44]" />
                <div>
                  <p
                    className="text-sm text-[#2B2B2B] opacity-70"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Provider
                  </p>
                  <p
                    className="text-lg font-semibold text-[#2B2B2B]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {plant.providerName}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <span
                className="text-5xl font-bold text-[#3A7D44]"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                ${plant.price}
              </span>
              <span
                className="text-[#2B2B2B] opacity-70 text-lg"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                per plant
              </span>
            </div>

            <div className="bg-[#FFFFFF] bg-opacity-40 p-6 rounded-2xl">
              <h3
                className="text-xl font-semibold text-[#3A7D44] mb-3 flex items-center gap-2"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <FaLeaf />
                Care Tips
              </h3>
              <ul
                className="space-y-2 text-[#2B2B2B]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <li>
                  • <strong>Light:</strong> Bright, indirect sunlight preferred
                </li>
                <li>
                  • <strong>Water:</strong> Keep soil moist but not waterlogged
                </li>
                <li>
                  • <strong>Temperature:</strong> 65-75°F (18-24°C)
                </li>
                <li>
                  • <strong>Humidity:</strong> Moderate to high humidity
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="card bg-white shadow-[0_8px_24px_rgba(0,0,0,0.1)] rounded-2xl">
            <div className="card-body p-8">
              <h2
                className="card-title text-3xl text-[#3A7D44] mb-4 justify-center text-center"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Book a Plant Care Consultation
              </h2>
              <p
                className="text-center text-[#2B2B2B] mb-6"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Get expert advice on caring for your {plant.plantName}. Our
                specialists will guide you through every step.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-control">
                  <label className="label mb-2">
                    <span
                      className="label-text font-semibold text-[#2B2B2B]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Your Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="input input-bordered border-[#3A7D44] focus:border-[#6FBF73] focus:outline-none rounded-lg w-full"
                    style={{ fontFamily: "Inter, sans-serif" }}
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label mb-2">
                    <span
                      className="label-text font-semibold text-[#2B2B2B]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Email Address
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="input input-bordered border-[#3A7D44] focus:border-[#6FBF73] focus:outline-none rounded-lg w-full"
                    style={{ fontFamily: "Inter, sans-serif" }}
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label mb-2">
                    <span
                      className="label-text font-semibold text-[#2B2B2B]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Selected Plant
                    </span>
                  </label>
                  <input
                    type="text"
                    value={plant.plantName}
                    className="input input-bordered bg-[#DDEEDF] bg-opacity-30 rounded-lg w-full"
                    style={{ fontFamily: "Inter, sans-serif" }}
                    disabled
                  />
                </div>

                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn bg-[#3A7D44] text-white border-none hover:bg-[#6FBF73] rounded-lg btn-lg w-full transition-all duration-300"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;