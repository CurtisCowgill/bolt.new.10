import React from 'react'
import { DataTable } from '../components/DataTable'

interface Community {
  id: string
  name: string
  city: string
  projectCount: number
}

const mockCommunities: Community[] = [
  { id: '1', name: 'Oakwood Heights', city: 'Springfield', projectCount: 5 },
  { id: '2', name: 'Evergreen Terrace', city: 'Springfield', projectCount: 3 },
  { id: '3', name: 'Maple Grove', city: 'Shelbyville', projectCount: 2 },
  { id: '4', name: 'Pine Valley', city: 'Capital City', projectCount: 4 },
  { id: '5', name: 'Cedar Hills', city: 'Springfield', projectCount: 1 },
]

const columns = [
  { key: 'name', header: 'Community Name' },
  { key: 'city', header: 'City' },
  { key: 'projectCount', header: 'Project Count' },
]

export const Communities: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Communities</h1>
      <DataTable
        data={mockCommunities}
        columns={columns}
        linkTo={(community) => `/communities/${community.id}`}
      />
    </div>
  )
}