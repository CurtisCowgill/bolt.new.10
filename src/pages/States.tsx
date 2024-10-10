import React from 'react'
import { DataTable } from '../components/DataTable'

interface State {
  id: string
  name: string
  abbreviation: string
  population: number
  projectCount: number
}

const mockStates: State[] = [
  { id: '1', name: 'Missouri', abbreviation: 'MO', population: 6000000, projectCount: 150 },
  { id: '2', name: 'Illinois', abbreviation: 'IL', population: 12000000, projectCount: 100 },
  { id: '3', name: 'Colorado', abbreviation: 'CO', population: 5800000, projectCount: 80 },
  { id: '4', name: 'Kansas', abbreviation: 'KS', population: 2900000, projectCount: 50 },
  { id: '5', name: 'Arkansas', abbreviation: 'AR', population: 3000000, projectCount: 40 },
]

const columns = [
  { key: 'name', header: 'State Name' },
  { key: 'abbreviation', header: 'Abbreviation' },
  { key: 'population', header: 'Population' },
  { key: 'projectCount', header: 'Project Count' },
]

export const States: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">States</h1>
      <DataTable
        data={mockStates}
        columns={columns}
        linkTo={(state) => `/states/${state.id}`}
      />
    </div>
  )
}