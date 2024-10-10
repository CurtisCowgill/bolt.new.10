import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Home, Calendar, FileText, Clock, DollarSign, MapPin, Upload, Camera } from 'lucide-react'
import { WorkOrdersTable } from '../components/WorkOrdersTable'
import { WorkOrderDetailPopup } from '../components/WorkOrderDetailPopup'
import { TimeTracking } from '../components/TimeTracking'

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedWorkOrder, setSelectedWorkOrder] = useState<any | null>(null)

  const handleWorkOrderClick = (workOrder: any) => {
    setSelectedWorkOrder(workOrder)
  }

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center mb-4">
        <button onClick={() => navigate('/projects')} className="mr-4">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold">Project {id}</h1>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          <button
            className={`px-4 py-2 ${activeTab === 'overview' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('overview')}
          >
            <Home className="inline-block mr-2" size={20} /> Overview
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'workOrders' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('workOrders')}
          >
            <Calendar className="inline-block mr-2" size={20} /> Work Orders
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'docsAndPhotos' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('docsAndPhotos')}
          >
            <FileText className="inline-block mr-2" size={20} /> Docs & Photos
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'time' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('time')}
          >
            <Clock className="inline-block mr-2" size={20} /> Time
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'financial' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('financial')}
          >
            <DollarSign className="inline-block mr-2" size={20} /> Financial
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
                <p><strong>Customer:</strong> John Doe</p>
                <p><strong>Address:</strong> 123 Main St, Anytown, USA</p>
                <p><strong>Lot:</strong> 45</p>
                <p><strong>Block:</strong> B</p>
                <p><strong>Community:</strong> Oakwood Heights</p>
                <p><strong>Status:</strong> In Progress</p>
                <p><strong>Ready For:</strong> Framing</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Project Location</h2>
                <div className="bg-gray-200 h-64 flex items-center justify-center">
                  <MapPin size={48} />
                  <span className="ml-2">Map Placeholder</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'workOrders' && (
            <div>
              <WorkOrdersTable onWorkOrderClick={handleWorkOrderClick} />
              {selectedWorkOrder && (
                <WorkOrderDetailPopup
                  workOrder={selectedWorkOrder}
                  onClose={() => setSelectedWorkOrder(null)}
                  onUpdate={(updatedWorkOrder) => {
                    // Handle work order update
                    console.log('Updated work order:', updatedWorkOrder)
                    setSelectedWorkOrder(null)
                  }}
                />
              )}
            </div>
          )}

          {activeTab === 'docsAndPhotos' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Documents and Photos</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Documents</h3>
                  <div className="flex space-x-2 mb-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                      <Upload className="inline-block mr-2" size={20} /> Upload Document
                    </button>
                  </div>
                  <ul className="list-disc list-inside">
                    <li>Document 1.pdf</li>
                    <li>Document 2.docx</li>
                    <li>Document 3.xlsx</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Photos</h3>
                  <div className="flex space-x-2 mb-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                      <Upload className="inline-block mr-2" size={20} /> Upload Photo
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded">
                      <Camera className="inline-block mr-2" size={20} /> Take Photo
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-gray-200 h-24 flex items-center justify-center">Photo 1</div>
                    <div className="bg-gray-200 h-24 flex items-center justify-center">Photo 2</div>
                    <div className="bg-gray-200 h-24 flex items-center justify-center">Photo 3</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'time' && (
            <div>
              <TimeTracking projectId={id} />
            </div>
          )}

          {activeTab === 'financial' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Financial Information</h2>
              <p>Financial information will be displayed here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}