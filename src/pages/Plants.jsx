import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { FaStar, FaFilter } from 'react-icons/fa'

const Plants = () => {
  const [plants, setPlants] = useState([])
  const [filteredPlants, setFilteredPlants] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('/plants.json')
      .then(res => res.json())
      .then(data => {
        setPlants(data)
        setFilteredPlants(data)
        
        const uniqueCategories = ['All', ...new Set(data.map(plant => plant.category))]
        setCategories(uniqueCategories)
      })
  }, [])

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category)
    if (category === 'All') {
      setFilteredPlants(plants)
    } else {
      const filtered = plants.filter(plant => plant.category === category)
      setFilteredPlants(filtered)
    }
  }

  return (
    <div className="bg-[#DDEEDF] min-h-screen">
      <div className="container mx-auto px-4 lg:px-20 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#3A7D44] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Plant Collection
          </h1>
          <p className="text-[#2B2B2B] max-w-2xl mx-auto text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
            Browse through our carefully curated selection of indoor plants perfect for every space and skill level
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
          <div className="flex items-center gap-2 text-[#3A7D44] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
            <FaFilter />
            <span>Filter by Category:</span>
          </div>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryFilter(category)}
              className={`btn btn-sm rounded-2xl transition-all duration-300 ${
                selectedCategory === category 
                  ? 'bg-[#3A7D44] text-white border-none hover:bg-[#6FBF73]' 
                  : 'border-[#3A7D44] text-[#3A7D44] bg-transparent hover:bg-[#DDEEDF]'
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredPlants.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-[#2B2B2B]" style={{ fontFamily: 'Inter, sans-serif' }}>
              No plants found in this category
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlants.map(plant => (
              <div 
                key={plant.plantId} 
                className="card bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300 rounded-2xl"
              >
                <figure className="h-64 overflow-hidden rounded-t-2xl">
                  <img 
                    src={plant.image} 
                    alt={plant.plantName}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl text-[#3A7D44]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {plant.plantName}
                    <div className="badge bg-[#6FBF73] text-white border-none">{plant.category}</div>
                  </h2>
                  
                  <p className="text-[#2B2B2B]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {plant.description.slice(0, 100)}...
                  </p>
                  
                  <div className="flex items-center gap-4 mt-2">
                    <div className="badge border-[#6FBF73] text-[#6FBF73] bg-transparent badge-lg">
                      {plant.careLevel}
                    </div>
                    <span className="text-sm text-[#2B2B2B]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Stock: {plant.availableStock}
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-[#D4AF37]" />
                      <span className="font-semibold text-[#2B2B2B]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {plant.rating}
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-[#3A7D44]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      ${plant.price}
                    </span>
                  </div>

                  <div className="text-sm text-[#2B2B2B] mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Provider: <span className="font-semibold">{plant.providerName}</span>
                  </div>

                  <div className="card-actions justify-end mt-4">
                    <Link 
                      to={`/plant/${plant.plantId}`} 
                      className="btn bg-[#3A7D44] text-white border-none hover:bg-[#6FBF73] rounded-2xl btn-block transition-all duration-300"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Plants