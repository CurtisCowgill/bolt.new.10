import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Briefcase, Phone, Mail } from 'lucide-react'

interface Customer {
  id: string
  name: string
  company: string
  email: string
  phone: string
  projectCount: number
  activeProjects: string[]
  completedProjects: string[]
}

const mockCustomers: Customer[] = [
  { 
    id: '1', 
    name: 'John Doe', 
    company: 'Acme Corp', 
    email: 'john@acme.com', 
    phone: '(555) 123-4567', 
    projectCount: 3,
    activeProjects: ['Residential Foundation A', 'Commercial Waterproofing B'],
    completedProjects: ['Flatwork Project C']
  },
  // ... other mock customers
]

export const CustomerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const customer = mockCustomers.find(c => c.id === id)

  if (!customer) {
    return <div>Customer not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/customers" className="flex items-center text-blue-500 hover:text-blue-600 mb-6">
        <ArrowLeft size={20} className="mr-2" />
        Back to Customers
      </Link>
      <h1 className="text-3xl font-bold mb-6">{customer.name}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
            <p className="mb-2"><span className="font-semibold">Company:</span> {customer.company}</p>
            <p className="mb-2"><span className="font-semibold">Email:</span> {customer.email}</p>
            <p className="mb-2"><span className="font-semibold">Phone:</span> {customer.phone}</p>
            <p className="mb-2"><span className="font-semibold">Total Projects:</span> {customer.projectCount}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Active Projects</h2>
            <ul className="list-disc list-inside">
              {customer.activeProjects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Completed Projects</h2>
          <ul className="list-disc list-inside">
            {customer.completedProjects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex space-x-4">
            <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <Briefcase size={20} className="mr-2" />
              Create New Project
            </button>
            <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              <Phone size={20} className="mr-2" />
              Call Customer
            </button>
            <button className="flex items-center bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
              <Mail size={20} className="mr-2" />
              Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}