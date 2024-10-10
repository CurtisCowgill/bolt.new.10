import React, { useState } from 'react'
import { DataTable } from '../components/DataTable'

interface Location {
  id: string
  name: string
  type: 'Community' | 'City' | 'County' | 'State'
  parent?: string
  projectCount: number
}

const mockLocations: Location[] = [
  { id: '1', name: 'Oakwood Heights', type: 'Community', parent: 'Springfield', projectCount: 5 },
  { id: '2', name: 'Springfield', type: 'City', parent: 'Greene County', projectCount: 15 },
  { id: '3', name: 'Shelbyville', type: 'City', parent: 'Shelby County', projectCount: 8 },
  { id: '4', name: 'Greene County', type: 'County', parent: 'Missouri', projectCount: 25 },
  { id: '5', name: 'Shelby County', type: 'County', parent: 'Missouri', projectCount: 12 },
  { id: '6', name: 'Missouri', type: 'State', projectCount: 150 },
  { id: '7', name: 'Evergreen Terrace', type: 'Community', parent: 'Springfield', projectCount: 3 },
  { id: '8', name: 'Capital City', type: 'City', parent: 'Capital County', projectCount: 20 },
  { id: '9', name: 'Capital County', type: 'County', parent: 'Missouri', projectCount: 30 },
  { id: '10', name: 'Illinois', type: 'State', projectCount: 100 },
]

const columns = [
  { key: 'name', header: 'Name' },
  { key: 'type', header: 'Type' },
  { key: 'parent', header: 'Parent Location' },
  { key: 'projectCount', header: 'Project Count' },
]

export const Locations: React.FC = () => {
  const [locationType, setLocationType] = useState<'Community' | 'City' | 'County' | 'State'>('Community')

  const filteredLocations = mockLocations.filter(location => location.type === locationType)

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Locations</h1>
      <div className="mb-4">
        <select
          className="border rounded px-3 py-2"
          value={locationType}
          onChange={(e) => setLocationType(e.target.value as 'Community' | 'City' | 'County' | 'State')}
        >
          <option value="Community">Communities</option>
          <option value="City">Cities</option>
          <option value="County">Counties</option>
          <option value="State">States</option>
        </select>
      </div>
      <DataTable
        data={filteredLocations}
        columns={columns}
        linkTo={(location) => `/locations/${location.id}`}
      />
    </div>
  )
}