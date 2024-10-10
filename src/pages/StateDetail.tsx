import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Building, BarChart2 } from 'lucide-react'

interface State {
  id: string
  name: string
  abbreviation: string
  population: number
  projectCount: number
  majorCities: string[]
  activeProjects: string[]
  completedProjects: string[]
}

const mockStates: State[] = [
  { 
    id: '1', 
    name: 'Missouri', 
    abbreviation: 'MO', 
    population: 6000000, 
    projectCount: 150,
    majorCities: ['St. Louis', 'Kansas City', 'Springfield', 'Columbia'],
    activeProjects: ['Residential Foundation A', 'Commercial Waterproofing B', 'Flatwork Project C'],
    completedProjects: ['Excavation Project D', 'Residential Foundation E']
  },
  // ... other mock states
]

export const StateDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const state = mockStates.find(s => s.id === id)

  if (!state) {
    return <div>State not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/states" className="flex items-center text-blue-500 hover:text-blue-600 mb-6">
        <ArrowLeft size={20} className="mr-2" />
        Back to States
      </Link>
      <h1 className="text-3xl font-bold mb-6">{state.name}</h1>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">State Details</h2>
            <p className="mb-2"><span className="font-semibold">Abbreviation:</span> {state.abbreviation}</p>
            <p className="mb-2"><span className="font-semibold">Population:</span> {state.population.toLocaleString()}</p>
            <p className="mb-2"><span className="font-semibold">Total Projects:</span> {state.projectCount}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Major Cities</h2>
            <ul className="list-disc list-inside">
              {state.majorCities.map((city, index) => (
                <li key={index}>{city}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Active Projects</h2>
          <ul className="list-disc list-inside">
            {state.activeProjects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Completed Projects</h2>
          <ul className="list-disc list-inside">
            {state.completedProjects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex space-x-4">
            <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <MapPin size={20} className="mr-2" />
              View State Map
            </button>
            <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              <Building size={20} className="mr-2" />
              Explore Cities
            </button>
            <button className="flex items-center bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
              <BarChart2 size={20} className="mr-2" />
              State Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}