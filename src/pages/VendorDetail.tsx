import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Truck, FileText, DollarSign } from 'lucide-react'

interface Vendor {
  id: string
  name: string
  category: string
  contact: string
  email: string
  phone: string
  activeContracts: string[]
  pastProjects: string[]
}

const mockVendors: Vendor[] = [
  { 
    id: '1', 
    name: 'Concrete Supply Co.', 
    category: 'Materials', 
    contact: 'John Supplier', 
    email: 'john@concretesupply.com', 
    phone: '(555) 111-2222',
    activeContracts: ['Residential Foundation A', 'Commercial Waterproofing B'],
    pastProjects: ['Flatwork Project C', 'Excavation Project D']
  },
  // ... other mock vendors
]

export const VendorDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const vendor = mockVendors.find(v => v.id === id)

  if (!vendor) {
    return <div>Vendor not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/vendors" className="flex items-center text-blue-500 hover:text-blue-600 mb-6">
        <ArrowLeft size={20} className="mr-2" />
        Back to Vendors
      </Link>
      <h1 className="text-3xl font-bold mb-6">{vendor.name}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Vendor Details</h2>
            <p className="mb-2"><span className="font-semibold">Category:</span> {vendor.category}</p>
            <p className="mb-2"><span className="font-semibold">Contact Person:</span> {vendor.contact}</p>
            <p className="mb-2"><span className="font-semibold">Email:</span> {vendor.email}</p>
            <p className="mb-2"><span className="font-semibold">Phone:</span> {vendor.phone}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Active Contracts</h2>
            <ul className="list-disc list-inside">
              {vendor.activeContracts.map((contract, index) => (
                <li key={index}>{contract}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Past Projects</h2>
          <ul className="list-disc list-inside">
            {vendor.pastProjects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex space-x-4">
            <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <Truck size={20} className="mr-2" />
              Place New Order
            </button>
            <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              <FileText size={20} className="mr-2" />
              View Contracts
            </button>
            <button className="flex items-center bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
              <DollarSign size={20} className="mr-2" />
              Review Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}