import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Map, Building, Briefcase } from 'lucide-react'

interface County {
  id: string
  name: string
  state: string
  population: number
  projectCount: number
  majorCities: string[]
  activeProjects: string[]
  completedProjects: string[]
}

const mockCounties: County[] = [
  { 
    id: '1', 
    name: 'Greene County', 
    state: 'Missouri', 
    population: 250000, 
    projectCount: 25,
    majorCities: ['Springfield', 'Republic', 'Willard'],
    activeProjects: ['Residential Foundation A', 'Commercial Waterproofing B', 'Flatwork Project C'],
    completedProjects: ['Excavation Project D', 'Residential Foundation E']
  },
  // ... other mock counties
]

export const CountyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const county = mockCounties.find(c => c.id === id)

  if (!county) {
    return <div>County not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/counties" className="flex items-center text-blue-500 hover:text-blue-600 mb-6">
        <ArrowLeft size={20} className="mr-2" />
        Back to Counties
      </Link>
      <h1 className="text-3xl font-bold mb-6">{county.name}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">County Details</h2>
            <p className="mb-2"><span className="font-semibold">State:</span> {county.state}</p>
            <p className="mb-2"><span className="font-semibold">Population:</span> {county.population}</p>
            <p className="mb-2"><span className="font-semibold">Total Projects:</span> {county.projectCount}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Major Cities</h2>
            <ul className="list-disc list-inside">
              {county.majorCities.map((city, index) => (
                <li key={index}>{city}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Active Projects</h2>
          <ul className="list-disc list-inside">
            {county.activeProjects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Completed Projects</h2>
          <ul className="list-disc list-inside">
            {county.completedProjects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex space-x-4">
            <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <Map size={20} className="mr-2" />
              View County Map
            </button>
            <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              <Building size={20} className="mr-2" />
              Explore Cities
            </button>
            <button className="flex items-center bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
              <Briefcase size={20} className="mr-2" />
              Start New Project
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}