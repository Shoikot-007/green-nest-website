import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { FaStar, FaLeaf, FaSeedling, FaWater, FaSun } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Home = () => {
  const [plants, setPlants] = useState([])
  const [topRatedPlants, setTopRatedPlants] = useState([])

  useEffect(() => {
    fetch('/plants.json')
      .then(res => res.json())
      .then(data => {
        setPlants(data)
        const topRated = data.filter(plant => plant.rating >= 4.5).slice(0, 6)
        setTopRatedPlants(topRated)
      })
  }, [])

  const careTips = [
    {
      icon: <FaWater className="text-5xl text-[#A3C6C4]" />,
      title: "Watering",
      tip: "Most indoor plants prefer soil that's moist but not waterlogged. Check the top inch of soil before watering."
    },
    {
      icon: <FaSun className="text-5xl text-[#D4AF37]" />,
      title: "Sunlight",
      tip: "Place plants near windows for bright, indirect light. Avoid direct harsh sunlight which can burn leaves."
    },
    {
      icon: <FaSeedling className="text-5xl text-[#6FBF73]" />,
      title: "Fertilizing",
      tip: "Feed your plants during growing season (spring/summer) with balanced liquid fertilizer once a month."
    }
  ]

  const experts = [
    { name: "Sarah Mitchell", specialization: "Tropical Plants Expert", image: "expert1.jpg" },
    { name: "James Chen", specialization: "Succulent Specialist", image: "expert2.jpg" },
    { name: "Emily Rodriguez", specialization: "Indoor Garden Designer", image: "expert3.jpg" },
    { name: "Michael Park", specialization: "Plant Health Consultant", image: "expert4.jpg" }
  ]

  return (
    <div className="bg-[#F9F8F4]">
      <section className="bg-linear-to-br from-[#3A7D44] to-[#6FBF73] text-white">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="hero min-h-[500px]">
              <div className="hero-content text-center">
                <div className="max-w-2xl py-12">
                  <FaLeaf className="text-7xl mx-auto mb-6 text-[#DDEEDF]" />
                  <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Welcome to GreenNest
                  </h1>
                  <p className="text-xl mb-8 text-[#DDEEDF]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Transform your home into a lush paradise with our premium indoor plants and expert care guidance
                  </p>
                  <Link 
                    to="/plants" 
                    className="btn bg-[#DDEEDF] text-[#3A7D44] border-none hover:bg-white rounded-2xl btn-lg"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Explore Plants
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero min-h-[500px] bg-linear-to-r from-[#6FBF73] to-[#3A7D44]">
              <div className="hero-content text-center">
                <div className="max-w-2xl py-12">
                  <FaSeedling className="text-7xl mx-auto mb-6 text-[#DDEEDF]" />
                  <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Grow with Confidence
                  </h1>
                  <p className="text-xl mb-8 text-[#DDEEDF]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Get personalized care tips and consultations from our certified plant experts
                  </p>
                  <Link 
                    to="/plants" 
                    className="btn bg-[#DDEEDF] text-[#3A7D44] border-none hover:bg-white rounded-2xl btn-lg"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero min-h-[500px] bg-linear-to-br from-[#3A7D44] via-[#6FBF73] to-[#DDEEDF]">
              <div className="hero-content text-center">
                <div className="max-w-2xl py-12">
                  <FaWater className="text-7xl mx-auto mb-6 text-white" />
                  <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Easy Plant Care
                  </h1>
                  <p className="text-xl mb-8 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Discover low-maintenance plants perfect for beginners and busy lifestyles
                  </p>
                  <Link 
                    to="/plants" 
                    className="btn bg-[#DDEEDF] text-[#3A7D44] border-none hover:bg-white rounded-2xl btn-lg"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="container mx-auto px-4 lg:px-20 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3A7D44] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Top Rated Indoor Plants
          </h2>
          <p className="text-[#2B2B2B] max-w-2xl mx-auto text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            Discover our most loved plants, carefully selected for their beauty and easy care requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topRatedPlants.map(plant => (
            <div key={plant.plantId} className="card bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300 rounded-2xl">
              <figure className="h-64 overflow-hidden rounded-t-2xl">
                <img 
                  src={plant.image} 
                  alt={plant.plantName}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-2xl text-[#3A7D44]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {plant.plantName}
                  <div className="badge bg-[#6FBF73] text-white border-none">{plant.category}</div>
                </h3>
                <p className="text-[#2B2B2B]" style={{ fontFamily: 'Inter, sans-serif' }}>{plant.description.slice(0, 80)}...</p>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-1">
                    <FaStar className="text-[#D4AF37]" />
                    <span className="font-semibold text-[#2B2B2B]" style={{ fontFamily: 'Inter, sans-serif' }}>{plant.rating}</span>
                  </div>
                  <span className="text-2xl font-bold text-[#3A7D44]" style={{ fontFamily: 'Poppins, sans-serif' }}>${plant.price}</span>
                </div>

                <div className="card-actions justify-end mt-4">
                  <Link 
                    to={`/plant/${plant.plantId}`} 
                    className="btn bg-[#3A7D44] text-white border-none hover:bg-[#6FBF73] rounded-2xl btn-block"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#DDEEDF] bg-opacity-40 py-20">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3A7D44] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Essential Plant Care Tips
            </h2>
            <p className="text-[#2B2B2B] max-w-2xl mx-auto text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
              Master the basics of plant care with these essential tips for healthy, thriving indoor plants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careTips.map((tip, index) => (
              <div key={index} className="card bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300 rounded-2xl">
                <div className="card-body items-center text-center">
                  <div className="mb-4">{tip.icon}</div>
                  <h3 className="card-title text-2xl text-[#3A7D44] mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {tip.title}
                  </h3>
                  <p className="text-[#2B2B2B]" style={{ fontFamily: 'Inter, sans-serif' }}>{tip.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-20 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3A7D44] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Meet Our Green Experts
          </h2>
          <p className="text-[#2B2B2B] max-w-2xl mx-auto text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            Our certified plant specialists are here to help you grow and maintain beautiful indoor gardens
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert, index) => (
            <div key={index} className="card bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300 rounded-2xl">
              <figure className="h-64 bg-linear-to-br from-[#3A7D44] to-[#6FBF73] rounded-t-2xl">
                <img src={expert.image} alt={expert.name} className="w-full h-full object-cover" />
              </figure>
              <div className="card-body text-center">
                <h3 className="card-title justify-center text-xl text-[#3A7D44]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {expert.name}
                </h3>
                <p className="text-[#6FBF73] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>{expert.specialization}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-linear-to-br from-[#3A7D44] to-[#6FBF73] text-white py-20">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse gap-12">
              <div className="lg:w-1/2">
                <img src="plant-of-week.jpg" alt="Plant of the Week" className="rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.2)] w-full" />
              </div>
              <div className="lg:w-1/2">
                <div className="badge bg-[#DDEEDF] text-[#3A7D44] border-none badge-lg mb-4">Plant of the Week</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>Monstera Deliciosa</h2>
                <p className="text-xl mb-4 text-[#DDEEDF]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Also known as the Swiss Cheese Plant, this stunning tropical beauty features 
                  large, glossy leaves with natural holes that develop as the plant matures.
                </p>
                <p className="text-lg mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Perfect for adding a bold, architectural element to any room. Easy to care for 
                  and grows quickly in the right conditions.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="badge badge-lg border-[#DDEEDF] text-[#DDEEDF] bg-transparent">Easy Care</div>
                  <div className="badge badge-lg border-[#DDEEDF] text-[#DDEEDF] bg-transparent">Air Purifier</div>
                  <div className="badge badge-lg border-[#DDEEDF] text-[#DDEEDF] bg-transparent">Pet-Friendly</div>
                </div>
                <Link 
                  to="/plants" 
                  className="btn bg-[#DDEEDF] text-[#3A7D44] border-none hover:bg-white rounded-2xl btn-lg"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Shop Now - $35
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home