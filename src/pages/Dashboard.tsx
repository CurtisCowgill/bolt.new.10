import React, { useState, useEffect } from 'react'
import { BarChart2, Users, Briefcase, FileText } from 'lucide-react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Mock data for projects
const mockProjects = [
  { id: 1, name: 'Project A', lat: 40.7128, lng: -74.0060, status: 'Stake Out' },
  { id: 2, name: 'Project B', lat: 40.7282, lng: -73.7949, status: 'Footings' },
  { id: 3, name: 'Project C', lat: 40.7489, lng: -73.9680, status: 'Walls' },
  { id: 4, name: 'Project D', lat: 40.6782, lng: -73.9442, status: 'Waterproofing' },
]

const statusColors = {
  'Stake Out': 'blue',
  'Footings': 'green',
  'Walls': 'orange',
  'Waterproofing': 'purple',
}

const createCustomIcon = (color: string) => {
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  })
}

export const Dashboard: React.FC = () => {
  const [weather, setWeather] = useState<any>(null)
  const [filteredStatus, setFilteredStatus] = useState<string | null>(null)

  useEffect(() => {
    // Fetch weather data (replace with actual API call)
    const fetchWeather = async () => {
      // Mock weather data
      setWeather({
        temp: 72,
        description: 'Partly cloudy',
        icon: '02d'
      })
    }

    fetchWeather()
  }, [])

  const filteredProjects = filteredStatus
    ? mockProjects.filter(project => project.status === filteredStatus)
    : mockProjects

  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Project Map</h2>
          <div className="mb-4">
            <label className="mr-2">Filter by status:</label>
            <select
              value={filteredStatus || ''}
              onChange={(e) => setFilteredStatus(e.target.value || null)}
              className="border rounded px-2 py-1"
            >
              <option value="">All</option>
              <option value="Stake Out">Stake Out</option>
              <option value="Footings">Footings</option>
              <option value="Walls">Walls</option>
              <option value="Waterproofing">Waterproofing</option>
            </select>
          </div>
          <MapContainer center={[40.7128, -74.0060]} zoom={10} style={{ height: '400px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {filteredProjects.map((project) => (
              <Marker
                key={project.id}
                position={[project.lat, project.lng]}
                icon={createCustomIcon(statusColors[project.status as keyof typeof statusColors])}
              >
                <Popup>
                  <strong>{project.name}</strong><br />
                  Status: {project.status}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Weather</h2>
          {weather && (
            <div className="flex items-center">
              <img
                src={`http://openweathermap.org/img/w/${weather.icon}.png`}
                alt="Weather icon"
                className="w-16 h-16 mr-4"
              />
              <div>
                <p className="text-2xl font-bold">{weather.temp}°F</p>
                <p className="text-gray-600">{weather.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Total Projects" value="24" icon={<Briefcase size={24} />} />
        <DashboardCard title="Active Work Orders" value="12" icon={<FileText size={24} />} />
        <DashboardCard title="Customers" value="45" icon={<Users size={24} />} />
        <DashboardCard title="Revenue" value="$250,000" icon={<BarChart2 size={24} />} />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Projects</h2>
        {/* Add a table or list of recent projects here */}
      </div>
    </div>
  )
}

const DashboardCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <div className="text-blue-500">{icon}</div>
      </div>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
    </div>
  )
}