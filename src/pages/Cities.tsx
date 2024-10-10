import React from 'react'
import { DataTable } from '../components/DataTable'

interface City {
  id: string
  name: string
  county: string
  population: number
  projectCount: number
}

const mockCities: City[] = [
  { id: '1', name: 'Springfield', county: 'Greene County', population: 150000, projectCount: 15 },
  { id: '2', name: 'Shelbyville', county: 'Shelby County', population: 80000, projectCount: 8 },
  { id: '3', name: 'Capital City', county: 'Capital County', population: 200000, projectCount: 20 },
  { id: '4', name: 'Rivertown', county: 'River County', population: 50000, projectCount: 5 },
  { id: '5', name: 'Mountainview', county: 'Summit County', population: 75000, projectCount: 7 },
]

const columns = [
  { key: 'name', header: 'City Name' },
  { key: 'county', header: 'County' },
  { key: 'population', header: 'Population' },
  { key: 'projectCount', header: 'Project Count' },
]

export const Cities: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Cities</h1>
      <DataTable
        data={mockCities}
        columns={columns}
        linkTo={(city) => `/cities/${city.id}`}
      />
    </div>
  )
}