import React from 'react'
import { DataTable } from '../components/DataTable'

interface Customer {
  id: string
  name: string
  company: string
  email: string
  phone: string
  projectCount: number
}

const mockCustomers: Customer[] = [
  { id: '1', name: 'John Doe', company: 'Acme Corp', email: 'john@acme.com', phone: '(555) 123-4567', projectCount: 3 },
  { id: '2', name: 'Jane Smith', company: 'XYZ Industries', email: 'jane@xyz.com', phone: '(555) 987-6543', projectCount: 2 },
  { id: '3', name: 'Bob Johnson', company: '123 Construction', email: 'bob@123const.com', phone: '(555) 246-8135', projectCount: 1 },
  { id: '4', name: 'Alice Brown', company: 'Brown Builders', email: 'alice@brownbuilders.com', phone: '(555) 369-2580', projectCount: 4 },
  { id: '5', name: 'Charlie Wilson', company: 'Wilson Homes', email: 'charlie@wilsonhomes.com', phone: '(555) 159-7531', projectCount: 2 },
]

const columns = [
  { key: 'name', header: 'Name' },
  { key: 'company', header: 'Company' },
  { key: 'email', header: 'Email' },
  { key: 'phone', header: 'Phone' },
  { key: 'projectCount', header: 'Projects' },
]

export const Customers: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Customers</h1>
      <DataTable
        data={mockCustomers}
        columns={columns}
        linkTo={(customer) => `/customers/${customer.id}`}
      />
    </div>
  )
}