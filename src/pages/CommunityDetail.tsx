import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Home, MapPin, Briefcase } from 'lucide-react'

interface Community {
  id: string
  name: string
  city: string
  projectCount: number
  activeProjects: string[]
  completedProjects: string[]
  population: number
}

const mockCommunities: Community[] = [
  { 
    id: '1', 
    name: 'Oakwood Heights', 
    city: 'Springfield', 
    projectCount: 5,
    activeProjects: ['Residential Foundation A', 'Commercial Waterproofing B'],
    completedProjects: ['Flatwork Project C', 'Excavation Project D', 'Residential Foundation E'],
    population: 5000
  },
  // ... other mock communities
]

export const CommunityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const community = mockCommunities.find(c => c.id === id)

  if (!community) {
    return <div>Community not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/communities" className="flex items-center text-blue-500 hover:text-blue-600 mb-6">
        <ArrowLeft size={20} className="mr-2" />
        Back to Communities
      </Link>
      <h1 className="text-3xl font-bold mb-6">{community.name}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Community Details</h2>
            <p className="mb-2"><span className="font-semibold">City:</span> {community.city}</p>
            <p className="mb-2"><span className="font-semibold">Population:</span> {community.population}</p>
            <p className="mb-2"><span className="font-semibold">Total Projects:</span> {community.projectCount}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Active Projects</h2>
            <ul className="list-disc list-inside">
              {community.activeProjects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Completed Projects</h2>
          <ul className="list-disc list-inside">
            {community.completedProjects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex space-x-4">
            <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <Home size={20} className="mr-2" />
              View Properties
            </button>
            <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              <MapPin size={20} className="mr-2" />
              Open in Maps
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