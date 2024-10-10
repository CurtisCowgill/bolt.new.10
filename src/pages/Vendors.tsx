import React from 'react'
import { DataTable } from '../components/DataTable'

interface Vendor {
  id: string
  name: string
  category: string
  contact: string
  email: string
  phone: string
}

const mockVendors: Vendor[] = [
  { id: '1', name: 'Concrete Supply Co.', category: 'Materials', contact: 'John Supplier', email: 'john@concretesupply.com', phone: '(555) 111-2222' },
  { id: '2', name: 'Heavy Equipment Rentals', category: 'Equipment', contact: 'Jane Renter', email: 'jane@heavyequipment.com', phone: '(555) 333-4444' },
  { id: '3', name: 'Safety Gear Inc.', category: 'Safety Equipment', contact: 'Bob Safe', email: 'bob@safetygear.com', phone: '(555) 555-6666' },
  { id: '4', name: 'Trucking Services LLC', category: 'Transportation', contact: 'Alice Trucker', email: 'alice@truckingservices.com', phone: '(555) 777-8888' },
  { id: '5', name: 'Tool World', category: 'Tools', contact: 'Charlie Tools', email: 'charlie@toolworld.com', phone: '(555) 999-0000' },
]

const columns = [
  { key: 'name', header: 'Vendor Name' },
  { key: 'category', header: 'Category' },
  { key: 'contact', header: 'Contact Person' },
  { key: 'email', header: 'Email' },
  { key: 'phone', header: 'Phone' },
]

export const Vendors: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Vendors</h1>
      <DataTable
        data={mockVendors}
        columns={columns}
        linkTo={(vendor) => `/vendors/${vendor.id}`}
      />
    </div>
  )
}