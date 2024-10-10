import React, { useState, useRef, useEffect } from 'react'
import { X, Calendar, Clock } from 'lucide-react'

interface WorkOrderDetailPopupProps {
  workOrder: any
  onClose: () => void
  onUpdate: (updatedWorkOrder: any) => void
}

export const WorkOrderDetailPopup: React.FC<WorkOrderDetailPopupProps> = ({ workOrder, onClose, onUpdate }) => {
  const [editedWorkOrder, setEditedWorkOrder] = useState(workOrder)
  const popupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClose])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEditedWorkOrder(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onUpdate(editedWorkOrder)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div ref={popupRef} className="bg-white rounded-lg p-6 w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Work Order Details</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Work Order Type</label>
              <input
                type="text"
                name="type"
                value={editedWorkOrder.type}
                onChange={handleInputChange}
                className="w-full border rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block mb-1">Schedule Date</label>
              <input
                type="date"
                name="schedule"
                value={editedWorkOrder.schedule}
                onChange={handleInputChange}
                className="w-full border rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block mb-1">Assigned</label>
              <input
                type="text"
                name="assigned"
                value={editedWorkOrder.assigned}
                onChange={handleInputChange}
                className="w-full border rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block mb-1">Duration</label>
              <input
                type="text"
                name="duration"
                value={editedWorkOrder.duration}
                onChange={handleInputChange}
                className="w-full border rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block mb-1">Suppliers</label>
              <input
                type="text"
                name="suppliers"
                value={editedWorkOrder.suppliers}
                onChange={handleInputChange}
                className="w-full border rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block mb-1">Times</label>
              <input
                type="text"
                name="times"
                value={editedWorkOrder.times}
                onChange={handleInputChange}
                className="w-full border rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block mb-1">Inspections</label>
              <input
                type="text"
                name="inspections"
                value={editedWorkOrder.inspections}
                onChange={handleInputChange}
                className="w-full border rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block mb-1">Stage</label>
              <select
                name="stage"
                value={editedWorkOrder.stage}
                onChange={handleInputChange}
                className="w-full border rounded px-2 py-1"
              >
                <option value="Unassigned">Unassigned</option>
                <option value="Assigned">Assigned</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label className="block mb-1">Notes</label>
            <textarea
              name="notes"
              value={editedWorkOrder.notes || ''}
              onChange={handleInputChange}
              className="w-full border rounded px-2 py-1"
              rows={3}
            ></textarea>
          </div>
          <div className="mt-6 flex justify-end">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800 mr-2">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}