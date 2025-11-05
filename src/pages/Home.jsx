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
        // Get top rated plants (rating >= 4.5)
        const topRated = data
          .filter((plant) => plant.rating >= 4.5)
          .slice(0, 6);
        setTopRatedPlants(topRated);
      });
  }, []);

  const careTips = [
    {
      icon: <FaWater className="text-5xl text-dustyBlue" />,
      title: "Watering",
      tip: "Most indoor plants prefer soil that's moist but not waterlogged. Check the top inch of soil before watering.",
    },
    {
      icon: <FaSun className="text-5xl text-mutedYellow" />,
      title: "Sunlight",
      tip: "Place plants near windows for bright, indirect light. Avoid direct harsh sunlight which can burn leaves.",
    },
    {
      icon: <FaSeedling className="text-5xl text-secondary" />,
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
    <div className="bg-cream">
      {/* Hero Section with Swiper */}
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
                <div className="max-w-2xl py-12">
                  <FaLeaf className="text-7xl mx-auto mb-6 text-accent" />
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">
                    Welcome to GreenNest
                  </h1>
                  <p className="text-xl mb-8 font-body text-accent">
                    Transform your home into a lush paradise with our premium
                    indoor plants and expert care guidance
                  </p>
                  <Link
                    to="/plants"
                    className="btn btn-accent btn-lg text-primary hover:bg-white rounded-card font-body"
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
                <div className="max-w-2xl py-12">
                  <FaSeedling className="text-7xl mx-auto mb-6 text-accent" />
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">
                    Grow with Confidence
                  </h1>
                  <p className="text-xl mb-8 font-body text-accent">
                    Get personalized care tips and consultations from our
                    certified plant experts
                  </p>
                  <Link
                    to="/plants"
                    className="btn btn-accent btn-lg text-primary hover:bg-white rounded-card font-body"
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
                <div className="max-w-2xl py-12">
                  <FaWater className="text-7xl mx-auto mb-6 text-white" />
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">
                    Easy Plant Care
                  </h1>
                  <p className="text-xl mb-8 font-body text-white">
                    Discover low-maintenance plants perfect for beginners and
                    busy lifestyles
                  </p>
                  <Link
                    to="/plants"
                    className="btn btn-accent btn-lg text-primary hover:bg-white rounded-card font-body"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Top Rated Indoor Plants */}
      <section className="container mx-auto px-4 lg:px-20 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">
            Top Rated Indoor Plants
          </h2>
          <p className="text-charcoal max-w-2xl mx-auto text-lg font-body">
            Discover our most loved plants, carefully selected for their beauty
            and easy care requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topRatedPlants.map((plant) => (
            <div
              key={plant.plantId}
              className="card bg-white shadow-soft hover:shadow-xl transition-all rounded-card"
            >
              <figure className="h-64 overflow-hidden">
                <img
                  src={plant.image}
                  alt={plant.plantName}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-2xl text-primary font-heading">
                  {plant.plantName}
                  <div className="badge badge-secondary text-white border-none">
                    {plant.category}
                  </div>
                </h3>
                <p className="text-charcoal font-body">
                  {plant.description.slice(0, 80)}...
                </p>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-1">
                    <FaStar className="text-mutedYellow" />
                    <span className="font-semibold text-charcoal font-body">
                      {plant.rating}
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-primary font-heading">
                    ${plant.price}
                  </span>
                </div>

                <div className="card-actions justify-end mt-4">
                  <Link
                    to={`/plant/${plant.plantId}`}
                    className="btn btn-primary btn-block text-white rounded-card font-body hover:bg-secondary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Plant Care Tips Section */}
      <section className="bg-accent bg-opacity-40 py-20">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">
              Essential Plant Care Tips
            </h2>
            <p className="text-charcoal max-w-2xl mx-auto text-lg font-body">
              Master the basics of plant care with these essential tips for
              healthy, thriving indoor plants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careTips.map((tip, index) => (
              <div
                key={index}
                className="card bg-white shadow-soft hover:shadow-xl transition-all rounded-card"
              >
                <div className="card-body items-center text-center">
                  <div className="mb-4">{tip.icon}</div>
                  <h3 className="card-title text-2xl text-primary mb-3 font-heading">
                    {tip.title}
                  </h3>
                  <p className="text-charcoal font-body">{tip.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Green Experts */}
      <section className="container mx-auto px-4 lg:px-20 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading">
            Meet Our Green Experts
          </h2>
          <p className="text-charcoal max-w-2xl mx-auto text-lg font-body">
            Our certified plant specialists are here to help you grow and
            maintain beautiful indoor gardens
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="card bg-white shadow-soft hover:shadow-xl transition-all rounded-card"
            >
              <figure className="h-64 bg-linear-to-br from-primary to-secondary">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="card-title justify-center text-xl text-primary font-heading">
                  {expert.name}
                </h3>
                <p className="text-secondary font-semibold font-body">
                  {expert.specialization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Extra Section - Plant of the Week */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">
              <div className="lg:w-1/2">
                <img
                  src="plant-of-week.jpg"
                  alt="Plant of the Week"
                  className="rounded-card shadow-xl w-full"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="badge badge-accent badge-lg mb-4 text-primary border-none">
                  Plant of the Week
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                  Monstera Deliciosa
                </h2>
                <p className="text-xl mb-4 font-body text-accent">
                  Also known as the Swiss Cheese Plant, this stunning tropical
                  beauty features large, glossy leaves with natural holes that
                  develop as the plant matures.
                </p>
                <p className="text-lg mb-6 font-body">
                  Perfect for adding a bold, architectural element to any room.
                  Easy to care for and grows quickly in the right conditions.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="badge badge-outline badge-lg border-accent text-accent">
                    Easy Care
                  </div>
                  <div className="badge badge-outline badge-lg border-accent text-accent">
                    Air Purifier
                  </div>
                  <div className="badge badge-outline badge-lg border-accent text-accent">
                    Pet-Friendly
                  </div>
                </div>
                <Link
                  to="/plants"
                  className="btn btn-accent btn-lg text-primary hover:bg-white rounded-card font-body"
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