import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Users, Briefcase, Calendar } from 'lucide-react'

interface Crew {
  id: string
  name: string
  foreman: string
  size: number
  currentProject: string
  members: string[]
  upcomingProjects: string[]
}

const mockCrews: Crew[] = [
  { 
    id: '1', 
    name: 'Alpha Team', 
    foreman: 'John Doe', 
    size: 5, 
    currentProject: 'Residential Foundation A',
    members: ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Brown', 'Charlie Wilson'],
    upcomingProjects: ['Commercial Waterproofing B', 'Flatwork Project C']
  },
  // ... other mock crews
]

export const CrewDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const crew = mockCrews.find(c => c.id === id)

  if (!crew) {
    return <div>Crew not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/crews" className="flex items-center text-blue-500 hover:text-blue-600 mb-6">
        <ArrowLeft size={20} className="mr-2" />
        Back to Crews
      </Link>
      <h1 className="text-3xl font-bold mb-6">{crew.name}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Crew Details</h2>
            <p className="mb-2"><span className="font-semibold">Foreman:</span> {crew.foreman}</p>
            <p className="mb-2"><span className="font-semibold">Size:</span> {crew.size}</p>
            <p className="mb-2"><span className="font-semibold">Current Project:</span> {crew.currentProject}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Crew Members</h2>
            <ul className="list-disc list-inside">
              {crew.members.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Upcoming Projects</h2>
          <ul className="list-disc list-inside">
            {crew.upcomingProjects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex space-x-4">
            <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <Users size={20} className="mr-2" />
              Manage Crew Members
            </button>
            <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              <Briefcase size={20} className="mr-2" />
              Assign to Project
            </button>
            <button className="flex items-center bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
              <Calendar size={20} className="mr-2" />
              Schedule Training
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}