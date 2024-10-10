import React from 'react'
import { DataTable } from '../components/DataTable'

interface County {
  id: string
  name: string
  state: string
  population: number
  projectCount: number
}

const mockCounties: County[] = [
  { id: '1', name: 'Greene County', state: 'Missouri', population: 250000, projectCount: 25 },
  { id: '2', name: 'Shelby County', state: 'Missouri', population: 180000, projectCount: 12 },
  { id: '3', name: 'Capital County', state: 'Missouri', population: 300000, projectCount: 30 },
  { id: '4', name: 'River County', state: 'Illinois', population: 100000, projectCount: 10 },
  { id: '5', name: 'Summit County', state: 'Colorado', population: 150000, projectCount: 15 },
]

const columns = [
  { key: 'name', header: 'County Name' },
  { key: 'state', header: 'State' },
  { key: 'population', header: 'Population' },
  { key: 'projectCount', header: 'Project Count' },
]

export const Counties: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Counties</h1>
      <DataTable
        data={mockCounties}
        columns={columns}
        linkTo={(county) => `/counties/${county.id}`}
      />
    </div>
  )
}