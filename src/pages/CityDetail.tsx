import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Building, MapPin, Users } from 'lucide-react'

interface City {
  id: string
  name: string
  county: string
  population: number
  projectCount: number
  activeProjects: string[]
  completedProjects: string[]
  majorCommunities: string[]
}

const mockCities: City[] = [
  { 
    id: '1', 
    name: 'Springfield', 
    county: 'Greene County', 
    population: 150000, 
    projectCount: 15,
    activeProjects: ['Residential Foundation A', 'Commercial Waterproofing B', 'Flatwork Project C'],
    completedProjects: ['Excavation Project D', 'Residential Foundation E'],
    majorCommunities: ['Oakwood Heights', 'Evergreen Terrace', 'Downtown District']
  },
  // ... other mock cities
]

export const CityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const city = mockCities.find(c => c.id === id)

  if (!city) {
    return <div>City not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/cities" className="flex items-center text-blue-500 hover:text-blue-600 mb-6">
        <ArrowLeft size={20} className="mr-2" />
        Back to Cities
      </Link>
      <h1 className="text-3xl font-bold mb-6">{city.name}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">City Details</h2>
            <p className="mb-2"><span className="font-semibold">County:</span> {city.county}</p>
            <p className="mb-2"><span className="font-semibold">Population:</span> {city.population}</p>
            <p className="mb-2"><span className="font-semibold">Total Projects:</span> {city.projectCount}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Major Communities</h2>
            <ul className="list-disc list-inside">
              {city.majorCommunities.map((community, index) => (
                <li key={index}>{community}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Active Projects</h2>
          <ul className="list-disc list-inside">
            {city.activeProjects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Completed Projects</h2>
          <ul className="list-disc list-inside">
            {city.completedProjects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex space-x-4">
            <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <Building size={20} className="mr-2" />
              View Communities
            </button>
            <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              <MapPin size={20} className="mr-2" />
              Open in Maps
            </button>
            <button className="flex items-center bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
              <Users size={20} className="mr-2" />
              View Demographics
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}