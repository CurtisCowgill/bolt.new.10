import React, { useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { Monitor, Calendar, Home, Users, HardHat, Truck, MapPin, BarChart2, Settings as SettingsIcon, Search, Plus, Bell, ChevronDown, ChevronRight, LogOut, User } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { Dashboard } from '../pages/Dashboard'
import { Schedule } from '../pages/Schedule'
import { Projects } from '../pages/Projects'
import { ProjectDetail } from '../pages/ProjectDetail'
import { Crews } from '../pages/Crews'
import { CrewDetail } from '../pages/CrewDetail'
import { Employees } from '../pages/Employees'
import { EmployeeDetail } from '../pages/EmployeeDetail'
import { Customers } from '../pages/Customers'
import { CustomerDetail } from '../pages/CustomerDetail'
import { Vendors } from '../pages/Vendors'
import { VendorDetail } from '../pages/VendorDetail'
import { Communities } from '../pages/Communities'
import { CommunityDetail } from '../pages/CommunityDetail'
import { Cities } from '../pages/Cities'
import { CityDetail } from '../pages/CityDetail'
import { Counties } from '../pages/Counties'
import { CountyDetail } from '../pages/CountyDetail'
import { States } from '../pages/States'
import { StateDetail } from '../pages/StateDetail'
import { Reports } from '../pages/Reports'
import { Settings } from '../pages/Settings'
import { UserProfile } from '../pages/UserProfile'

export const Layout: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const [isLocationsOpen, setIsLocationsOpen] = useState(false)
  const [isAddMenuOpen, setIsAddMenuOpen] = useState(false)
  const location = useLocation()

  const toggleLocations = () => {
    setIsLocationsOpen(!isLocationsOpen)
  }

  const toggleAddMenu = () => {
    setIsAddMenuOpen(!isAddMenuOpen)
  }

  const NavLink: React.FC<{ to: string; icon: React.ReactNode; label: string }> = ({ to, icon, label }) => {
    const isActive = location.pathname === to
    return (
      <Link
        to={to}
        className={`flex items-center px-4 py-2 mt-2 text-gray-600 dark:text-gray-300 ${
          isActive ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        {icon}
        <span className="mx-4">{label}</span>
      </Link>
    )
  }

  return (
    <div className={`flex h-screen bg-gray-100 dark:bg-gray-900 ${theme}`}>
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
        <div className="flex items-center p-4">
          <Link to="/" className="flex items-center">
            <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46" className="h-8 w-8 mr-2">
              <polygon className="c" points="30.503 0 20.731 0 30.503 12.604 30.503 0" fill="#ffc92d"/>
              <polygon className="c" points="33.928 0 33.928 22.601 16.407 0 0 0 0 35.195 12.072 35.195 12.072 12.604 29.593 35.195 46 35.195 46 0 33.928 0" fill="#ffc92d"/>
              <polygon className="c" points="15.497 35.195 17.184 35.195 25.269 35.195 15.497 22.601 15.497 35.195" fill="#ffc92d"/>
              <polygon className="b" points="0 37.832 0 46 46 46 46 44.61 46 37.832 0 37.832" fill="#959799"/>
            </svg>
            <span className="text-xl font-semibold">Nies Foundations</span>
          </Link>
        </div>
        <div className="w-11/12 mx-auto border-b border-gray-200 dark:border-gray-700 mb-4"></div>
        <nav className="flex-grow">
          <NavLink to="/" icon={<Monitor size={20} />} label="Dashboard" />
          <NavLink to="/projects" icon={<Home size={20} />} label="Projects" />
          <NavLink to="/schedule" icon={<Calendar size={20} />} label="Schedule" />
          <NavLink to="/crews" icon={<Users size={20} />} label="Crews" />
          <NavLink to="/employees" icon={<HardHat size={20} />} label="Employees" />
          <NavLink to="/customers" icon={<Users size={20} />} label="Customers" />
          <NavLink to="/vendors" icon={<Truck size={20} />} label="Vendors" />
          <div className="relative">
            <button
              onClick={toggleLocations}
              className="flex items-center w-full px-4 py-2 mt-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <MapPin size={20} />
              <span className="mx-4">Locations</span>
              {isLocationsOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
            </button>
            {isLocationsOpen && (
              <div className="pl-8">
                <NavLink to="/communities" icon={<MapPin size={16} />} label="Communities" />
                <NavLink to="/cities" icon={<MapPin size={16} />} label="Cities" />
                <NavLink to="/counties" icon={<MapPin size={16} />} label="Counties" />
                <NavLink to="/states" icon={<MapPin size={16} />} label="States" />
              </div>
            )}
          </div>
          <NavLink to="/reports" icon={<BarChart2 size={20} />} label="Reports" />
        </nav>
        <div className="w-11/12 mx-auto border-t border-gray-200 dark:border-gray-700 mt-4"></div>
        <div className="mt-auto mb-4">
          <NavLink to="/profile" icon={<User size={20} />} label="User Profile" />
          <NavLink to="/settings" icon={<SettingsIcon size={20} />} label="Settings" />
          <button className="flex items-center w-full px-4 py-2 mt-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
            <LogOut size={20} />
            <span className="mx-4">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navigation */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex-1"></div>
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-lg">
                <label htmlFor="search" className="sr-only">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-end items-center">
              <div className="relative">
                <button 
                  onClick={toggleAddMenu}
                  className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Plus className="h-6 w-6" aria-hidden="true" />
                </button>
                {isAddMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                    <Link to="/projects/new" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Add Project</Link>
                    <Link to="/customers/new" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Add Customer</Link>
                    <Link to="/vendors/new" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Add Vendor</Link>
                  </div>
                )}
              </div>
              <button className="ml-3 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Bell className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-4 py-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/crews" element={<Crews />} />
              <Route path="/crews/:id" element={<CrewDetail />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/employees/:id" element={<EmployeeDetail />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/customers/:id" element={<CustomerDetail />} />
              <Route path="/vendors" element={<Vendors />} />
              <Route path="/vendors/:id" element={<VendorDetail />} />
              <Route path="/communities" element={<Communities />} />
              <Route path="/communities/:id" element={<CommunityDetail />} />
              <Route path="/cities" element={<Cities />} />
              <Route path="/cities/:id" element={<CityDetail />} />
              <Route path="/counties" element={<Counties />} />
              <Route path="/counties/:id" element={<CountyDetail />} />
              <Route path="/states" element={<States />} />
              <Route path="/states/:id" element={<StateDetail />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<UserProfile />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  )
}