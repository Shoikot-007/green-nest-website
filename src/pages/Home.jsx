import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaStar, FaLeaf, FaSeedling, FaWater, FaSun } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  const [plants, setPlants] = useState([]);
  const [topRatedPlants, setTopRatedPlants] = useState([]);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        const topRated = data
          .filter((plant) => plant.rating >= 4.5)
          .slice(0, 6);
        setTopRatedPlants(topRated);
      });
  }, []);

  const careTips = [
    {
      icon: <FaWater className="text-4xl text-blue-500" />,
      title: "Watering",
      tip: "Most indoor plants prefer soil that's moist but not waterlogged. Check the top inch of soil before watering.",
    },
    {
      icon: <FaSun className="text-4xl text-yellow-500" />,
      title: "Sunlight",
      tip: "Place plants near windows for bright, indirect light. Avoid direct harsh sunlight which can burn leaves.",
    },
    {
      icon: <FaSeedling className="text-4xl text-green-600" />,
      title: "Fertilizing",
      tip: "Feed your plants during growing season (spring/summer) with balanced liquid fertilizer once a month.",
    },
  ];

  const experts = [
    {
      name: "Sarah Mitchell",
      specialization: "Tropical Plants Expert",
      image: "expert1.jpg",
    },
    {
      name: "James Chen",
      specialization: "Succulent Specialist",
      image: "expert2.jpg",
    },
    {
      name: "Emily Rodriguez",
      specialization: "Indoor Garden Designer",
      image: "expert3.jpg",
    },
    {
      name: "Michael Park",
      specialization: "Plant Health Consultant",
      image: "expert4.jpg",
    },
  ];

  return (
    <div>
      <section className="hero-gradient text-white">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="hero min-h-[500px]">
              <div className="hero-content text-center">
                <div className="max-w-2xl">
                  <FaLeaf className="text-6xl mx-auto mb-4 text-accent" />
                  <h1 className="text-5xl font-bold mb-6">
                    Welcome to GreenNest
                  </h1>
                  <p className="text-xl mb-8">
                    Transform your home into a lush paradise with our premium
                    indoor plants and expert care guidance
                  </p>
                  <Link
                    to="/plants"
                    className="btn btn-accent btn-lg text-primary"
                  >
                    Explore Plants
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero min-h-[500px] bg-linear-to-r from-secondary to-primary">
              <div className="hero-content text-center">
                <div className="max-w-2xl">
                  <FaSeedling className="text-6xl mx-auto mb-4 text-accent" />
                  <h1 className="text-5xl font-bold mb-6">
                    Grow with Confidence
                  </h1>
                  <p className="text-xl mb-8">
                    Get personalized care tips and consultations from our
                    certified plant experts
                  </p>
                  <Link
                    to="/plants"
                    className="btn btn-accent btn-lg text-primary"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero min-h-[500px] bg-linear-to-br from-primary via-secondary to-accent">
              <div className="hero-content text-center">
                <div className="max-w-2xl">
                  <FaWater className="text-6xl mx-auto mb-4 text-white" />
                  <h1 className="text-5xl font-bold mb-6">Easy Plant Care</h1>
                  <p className="text-xl mb-8">
                    Discover low-maintenance plants perfect for beginners and
                    busy lifestyles
                  </p>
                  <Link
                    to="/plants"
                    className="btn btn-accent btn-lg text-primary"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="container mx-auto px-4 lg:px-20 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Top Rated Indoor Plants
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most loved plants, carefully selected for their beauty
            and easy care requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topRatedPlants.map((plant) => (
            <div
              key={plant.plantId}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all"
            >
              <figure className="h-72 overflow-hidden">
                <img
                  src={plant.image}
                  alt={plant.plantName}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-2xl text-primary">
                  {plant.plantName}
                  <div className="badge badge-secondary">{plant.category}</div>
                </h3>
                <p className="text-gray-600">
                  {plant.description.slice(0, 80)}...
                </p>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span className="font-semibold">{plant.rating}</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">
                    ${plant.price}
                  </span>
                </div>

                <div className="card-actions justify-end mt-4">
                  <Link
                    to={`/plant/${plant.plantId}`}
                    className="btn btn-primary btn-block text-white"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-accent bg-opacity-20 py-16">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Essential Plant Care Tips
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Master the basics of plant care with these essential tips for
              healthy, thriving indoor plants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careTips.map((tip, index) => (
              <div key={index} className="card bg-white shadow-lg">
                <div className="card-body items-center text-center">
                  <div className="mb-4">{tip.icon}</div>
                  <h3 className="card-title text-2xl text-primary mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600">{tip.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-20 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Meet Our Green Experts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our certified plant specialists are here to help you grow and
            maintain beautiful indoor gardens
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all"
            >
              <figure className="h-76 bg-linear-to-br from-primary to-secondary">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="card-title justify-center text-xl text-primary">
                  {expert.name}
                </h3>
                <p className="text-secondary font-semibold">
                  {expert.specialization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="hero-gradient text-white py-16">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">
              <div className="lg:w-1/2">
                <img
                  src="plant-of-week.jpg"
                  alt="Plant of the Week"
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="badge badge-accent badge-lg mb-4">
                  Plant of the Week
                </div>
                <h2 className="text-5xl font-bold mb-6">Monstera Deliciosa</h2>
                <p className="text-xl mb-4">
                  Also known as the Swiss Cheese Plant, this stunning tropical
                  beauty features large, glossy leaves with natural holes that
                  develop as the plant matures.
                </p>
                <p className="text-lg mb-6">
                  Perfect for adding a bold, architectural element to any room.
                  Easy to care for and grows quickly in the right conditions.
                </p>
                <div className="flex gap-4 mb-6">
                  <div className="badge badge-outline badge-lg">Easy Care</div>
                  <div className="badge badge-outline badge-lg">
                    Air Purifier
                  </div>
                  <div className="badge badge-outline badge-lg">
                    Pet-Friendly
                  </div>
                </div>
                <Link
                  to="/plants"
                  className="btn btn-accent btn-lg text-primary"
                >
                  Shop Now - $35
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;