import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Briefcase, HardHat, FileText } from 'lucide-react'

interface Employee {
  id: string
  name: string
  position: string
  crew: string
  hireDate: string
  email: string
  phone: string
  certifications: string[]
  currentProjects: string[]
}

const mockEmployees: Employee[] = [
  { 
    id: '1', 
    name: 'John Doe', 
    position: 'Foreman', 
    crew: 'Alpha Team', 
    hireDate: '2020-01-15',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    certifications: ['OSHA 30', 'First Aid', 'Heavy Equipment Operation'],
    currentProjects: ['Residential Foundation A', 'Commercial Waterproofing B']
  },
  // ... other mock employees
]

export const EmployeeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const employee = mockEmployees.find(e => e.id === id)

  if (!employee) {
    return <div>Employee not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/employees" className="flex items-center text-blue-500 hover:text-blue-600 mb-6">
        <ArrowLeft size={20} className="mr-2" />
        Back to Employees
      </Link>
      <h1 className="text-3xl font-bold mb-6">{employee.name}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Employee Details</h2>
            <p className="mb-2"><span className="font-semibold">Position:</span> {employee.position}</p>
            <p className="mb-2"><span className="font-semibold">Crew:</span> {employee.crew}</p>
            <p className="mb-2"><span className="font-semibold">Hire Date:</span> {employee.hireDate}</p>
            <p className="mb-2"><span className="font-semibold">Email:</span> {employee.email}</p>
            <p className="mb-2"><span className="font-semibold">Phone:</span> {employee.phone}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Certifications</h2>
            <ul className="list-disc list-inside">
              {employee.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Current Projects</h2>
          <ul className="list-disc list-inside">
            {employee.currentProjects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex space-x-4">
            <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <Briefcase size={20} className="mr-2" />
              Assign to Project
            </button>
            <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              <HardHat size={20} className="mr-2" />
              Update Certifications
            </button>
            <button className="flex items-center bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
              <FileText size={20} className="mr-2" />
              View Performance Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}