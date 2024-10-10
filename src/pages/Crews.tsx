import React from 'react'
import { DataTable } from '../components/DataTable'

interface Crew {
  id: string
  name: string
  foreman: string
  size: number
  currentProject: string
}

const mockCrews: Crew[] = [
  { id: '1', name: 'Alpha Team', foreman: 'John Doe', size: 5, currentProject: 'Residential Foundation A' },
  { id: '2', name: 'Beta Squad', foreman: 'Jane Smith', size: 4, currentProject: 'Commercial Waterproofing B' },
  { id: '3', name: 'Gamma Crew', foreman: 'Bob Johnson', size: 6, currentProject: 'Flatwork Project C' },
  { id: '4', name: 'Delta Force', foreman: 'Alice Brown', size: 3, currentProject: 'Residential Foundation D' },
  { id: '5', name: 'Epsilon Group', foreman: 'Charlie Wilson', size: 7, currentProject: 'Excavation Project E' },
]

const columns = [
  { key: 'name', header: 'Crew Name' },
  { key: 'foreman', header: 'Foreman' },
  { key: 'size', header: 'Crew Size' },
  { key: 'currentProject', header: 'Current Project' },
]

export const Crews: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Crews</h1>
      <DataTable
        data={mockCrews}
        columns={columns}
        linkTo={(crew) => `/crews/${crew.id}`}
      />
    </div>
  )
}