import React from 'react'
import { User, Mail, Phone, Briefcase, Calendar } from 'lucide-react'

export const UserProfile: React.FC = () => {
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    position: 'Project Manager',
    joinDate: 'January 15, 2020',
    avatar: 'https://source.unsplash.com/random/100x100/?portrait'
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">{user.name}</h2>
            <div className="flex items-center mb-2">
              <Briefcase size={20} className="mr-2 text-gray-500 dark:text-gray-400" />
              <span>{user.position}</span>
            </div>
            <div className="flex items-center mb-2">
              <Mail size={20} className="mr-2 text-gray-500 dark:text-gray-400" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center mb-2">
              <Phone size={20} className="mr-2 text-gray-500 dark:text-gray-400" />
              <span>{user.phone}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={20} className="mr-2 text-gray-500 dark:text-gray-400" />
              <span>Joined on {user.joinDate}</span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Change Password
          </button>
          <button className="ml-4 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-bold py-2 px-4 rounded">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  )
}