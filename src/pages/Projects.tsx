import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface Project {
  id: string
  name: string
  customer: string
  status: 'Active' | 'Completed' | 'On Hold'
  startDate: string
  stage: 'Stake Out' | 'Footings' | 'Walls' | 'Strip' | 'Waterproof'
  stageProgress: number
}

const mockProjects: Project[] = [
  { id: '1', name: 'Residential Foundation A', customer: 'John Doe', status: 'Active', startDate: '2023-03-15', stage: 'Stake Out', stageProgress: 80 },
  { id: '2', name: 'Commercial Waterproofing B', customer: 'Jane Smith', status: 'Completed', startDate: '2023-01-10', stage: 'Waterproof', stageProgress: 100 },
  { id: '3', name: 'Flatwork Project C', customer: 'Bob Johnson', status: 'On Hold', startDate: '2023-05-01', stage: 'Footings', stageProgress: 30 },
  { id: '4', name: 'Residential Foundation D', customer: 'Alice Brown', status: 'Active', startDate: '2023-04-01', stage: 'Walls', stageProgress: 60 },
  { id: '5', name: 'Excavation Project E', customer: 'Charlie Wilson', status: 'Active', startDate: '2023-06-01', stage: 'Strip', stageProgress: 90 },
]

const stageColors = {
  'Stake Out': 'bg-green-100 text-green-800',
  'Footings': 'bg-gray-100 text-gray-800',
  'Walls': 'bg-orange-100 text-orange-800',
  'Strip': 'bg-yellow-100 text-yellow-800',
  'Waterproof': 'bg-blue-100 text-blue-800',
}

const statusColors = {
  'Active': 'bg-green-100 text-green-800',
  'Completed': 'bg-blue-100 text-blue-800',
  'On Hold': 'bg-yellow-100 text-yellow-800',
}

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(mockProjects)
  const [sortColumn, setSortColumn] = useState<keyof Project>('name')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  const handleSort = (column: keyof Project) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }

    const sortedProjects = [...projects].sort((a, b) => {
      if (a[column] < b[column]) return sortDirection === 'asc' ? -1 : 1
      if (a[column] > b[column]) return sortDirection === 'asc' ? 1 : -1
      return 0
    })

    setProjects(sortedProjects)
  }

  const getDaysActive = (startDate: string) => {
    const diff = new Date().getTime() - new Date(startDate).getTime()
    return Math.floor(diff / (1000 * 60 * 60 * 24))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm leading-normal">
              {['Name', 'Customer', 'Status', 'Stage', 'Days Active'].map((header, index) => (
                <th
                  key={index}
                  className="py-3 px-6 text-left cursor-pointer"
                  onClick={() => handleSort(header.toLowerCase().replace(' ', '') as keyof Project)}
                >
                  <div className="flex items-center justify-between">
                    {header}
                    {sortColumn === header.toLowerCase().replace(' ', '') && (
                      sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {projects.map((project) => (
              <tr key={project.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <Link to={`/projects/${project.id}`} className={`font-medium ${project.status === 'Active' ? 'text-green-600' : 'text-gray-600'}`}>
                    {project.name}
                  </Link>
                </td>
                <td className="py-3 px-6 text-left">{project.customer}</td>
                <td className="py-3 px-6 text-left">
                  <span className={`inline-block py-1 px-2 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                    {project.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className={`relative inline-block w-32 h-6 rounded-full ${stageColors[project.stage]} overflow-hidden`}>
                    <div 
                      className={`absolute top-0 left-0 h-full ${stageColors[project.stage].replace('100', '300')}`}
                      style={{ width: `${project.stageProgress}%` }}
                    ></div>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                      {project.stage}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">{getDaysActive(project.startDate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}