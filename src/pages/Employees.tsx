import React from 'react'
import { DataTable } from '../components/DataTable'

interface Employee {
  id: string
  name: string
  position: string
  crew: string
  hireDate: string
}

const mockEmployees: Employee[] = [
  { id: '1', name: 'John Doe', position: 'Foreman', crew: 'Alpha Team', hireDate: '2020-01-15' },
  { id: '2', name: 'Jane Smith', position: 'Laborer', crew: 'Beta Squad', hireDate: '2021-03-22' },
  { id: '3', name: 'Bob Johnson', position: 'Equipment Operator', crew: 'Gamma Crew', hireDate: '2019-11-05' },
  { id: '4', name: 'Alice Brown', position: 'Carpenter', crew: 'Delta Force', hireDate: '2022-06-10' },
  { id: '5', name: 'Charlie Wilson', position: 'Foreman', crew: 'Epsilon Group', hireDate: '2018-09-01' },
]

const columns = [
  { key: 'name', header: 'Name' },
  { key: 'position', header: 'Position' },
  { key: 'crew', header: 'Crew' },
  { key: 'hireDate', header: 'Hire Date' },
]

export const Employees: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Employees</h1>
      <DataTable
        data={mockEmployees}
        columns={columns}
        linkTo={(employee) => `/employees/${employee.id}`}
      />
    </div>
  )
}