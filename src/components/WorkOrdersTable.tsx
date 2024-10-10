import React, { useState } from 'react'
import { Edit2, Check, X } from 'lucide-react'

interface WorkOrder {
  id: string
  number: string
  type: string
  schedule: string
  assigned: string
  duration: string
  suppliers: string
  times: string
  inspections: string
  stage: 'Unassigned' | 'Assigned' | 'Closed'
  estimatedCompletionDate: string
  completedOn: string
  reviewedBy: string
  scheduleChangeReason: string
  scheduleChangeComment: string
  statuses: { [key: string]: boolean }
  vendors: { [key: string]: string }
  notes: string
  crewNotes: string
}

const mockWorkOrders: WorkOrder[] = [
  { id: '1', number: '19031128', type: '4. Waterproofing', schedule: '2024-10-10', assigned: '', duration: '', suppliers: '', times: '', inspections: '', stage: 'Unassigned', estimatedCompletionDate: '2024-10-15', completedOn: '', reviewedBy: '', scheduleChangeReason: '', scheduleChangeComment: '', statuses: {}, vendors: {}, notes: '', crewNotes: '' },
  { id: '2', number: '18963731', type: '3. Walls/Strip', schedule: '2024-10-04', assigned: '3W - Hector #', duration: '', suppliers: '', times: '', inspections: '', stage: 'Assigned', estimatedCompletionDate: '2024-10-08', completedOn: '', reviewedBy: 'Curtis W. Cowgill', scheduleChangeReason: 'Auto Schedule Change', scheduleChangeComment: '', statuses: {}, vendors: {}, notes: '', crewNotes: '' },
  { id: '3', number: '18963732', type: '2. Footings', schedule: '2024-10-01', assigned: '1F - Erasmo #\n4W - Hugo #', duration: '', suppliers: '', times: '', inspections: '', stage: 'Closed', estimatedCompletionDate: '2024-10-03', completedOn: '2024-10-03', reviewedBy: '', scheduleChangeReason: '', scheduleChangeComment: '', statuses: {}, vendors: {}, notes: '', crewNotes: '' },
  { id: '4', number: '18963733', type: '1. Initial Site Visit / Stake Out', schedule: '2024-09-24', assigned: '0 - Pedro #', duration: '', suppliers: '', times: '', inspections: '', stage: 'Closed', estimatedCompletionDate: '2024-09-24', completedOn: '2024-09-24', reviewedBy: '', scheduleChangeReason: '', scheduleChangeComment: '', statuses: {}, vendors: {}, notes: '', crewNotes: '' },
]

interface WorkOrdersTableProps {
  onWorkOrderClick: (workOrder: WorkOrder) => void
}

export const WorkOrdersTable: React.FC<WorkOrdersTableProps> = ({ onWorkOrderClick }) => {
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>(mockWorkOrders)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editedWorkOrder, setEditedWorkOrder] = useState<WorkOrder | null>(null)

  const handleEdit = (workOrder: WorkOrder) => {
    setEditingId(workOrder.id)
    setEditedWorkOrder({ ...workOrder })
  }

  const handleSave = () => {
    if (editedWorkOrder) {
      setWorkOrders(workOrders.map(wo => wo.id === editedWorkOrder.id ? editedWorkOrder : wo))
      setEditingId(null)
      setEditedWorkOrder(null)
    }
  }

  const handleCancel = () => {
    setEditingId(null)
    setEditedWorkOrder(null)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (editedWorkOrder) {
      setEditedWorkOrder({ ...editedWorkOrder, [e.target.name]: e.target.value })
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Number</th>
            <th className="py-3 px-6 text-left">Type</th>
            <th className="py-3 px-6 text-left">Schedule</th>
            <th className="py-3 px-6 text-left">Assigned</th>
            <th className="py-3 px-6 text-left">Duration</th>
            <th className="py-3 px-6 text-left">Suppliers</th>
            <th className="py-3 px-6 text-left">Times</th>
            <th className="py-3 px-6 text-left">Inspections</th>
            <th className="py-3 px-6 text-left">Stage</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {workOrders.map((workOrder) => (
            <tr key={workOrder.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{workOrder.number}</td>
              <td className="py-3 px-6 text-left">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => onWorkOrderClick(workOrder)}
                >
                  {workOrder.type}
                </button>
              </td>
              <td className="py-3 px-6 text-left">
                {editingId === workOrder.id ? (
                  <input
                    type="date"
                    name="schedule"
                    value={editedWorkOrder?.schedule}
                    onChange={handleChange}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  workOrder.schedule
                )}
              </td>
              <td className="py-3 px-6 text-left">
                {editingId === workOrder.id ? (
                  <input
                    type="text"
                    name="assigned"
                    value={editedWorkOrder?.assigned}
                    onChange={handleChange}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  workOrder.assigned
                )}
              </td>
              <td className="py-3 px-6 text-left">{workOrder.duration}</td>
              <td className="py-3 px-6 text-left">{workOrder.suppliers}</td>
              <td className="py-3 px-6 text-left">{workOrder.times}</td>
              <td className="py-3 px-6 text-left">{workOrder.inspections}</td>
              <td className="py-3 px-6 text-left">
                {editingId === workOrder.id ? (
                  <select
                    name="stage"
                    value={editedWorkOrder?.stage}
                    onChange={handleChange}
                    className="border rounded px-2 py-1"
                  >
                    <option value="Unassigned">Unassigned</option>
                    <option value="Assigned">Assigned</option>
                    <option value="Closed">Closed</option>
                  </select>
                ) : (
                  <span className={`py-1 px-3 rounded-full text-xs ${
                    workOrder.stage === 'Unassigned' ? 'bg-yellow-200 text-yellow-600' :
                    workOrder.stage === 'Assigned' ? 'bg-blue-200 text-blue-600' :
                    'bg-green-200 text-green-600'
                  }`}>
                    {workOrder.stage}
                  </span>
                )}
              </td>
              <td className="py-3 px-6 text-left">
                {editingId === workOrder.id ? (
                  <>
                    <button onClick={handleSave} className="text-green-500 hover:text-green-700 mr-2">
                      <Check size={18} />
                    </button>
                    <button onClick={handleCancel} className="text-red-500 hover:text-red-700">
                      <X size={18} />
                    </button>
                  </>
                ) : (
                  <button onClick={() => handleEdit(workOrder)} className="text-blue-500 hover:text-blue-700">
                    <Edit2 size={18} />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}