import React from 'react'

interface TimeEntry {
  workOrderId: string
  workOrderName: string
  hoursWorked: number
  estimatedHours: number
}

interface TimeTrackingProps {
  projectId: string | undefined
}

export const TimeTracking: React.FC<TimeTrackingProps> = ({ projectId }) => {
  // Mock data - replace with actual data fetching logic
  const timeEntries: TimeEntry[] = [
    { workOrderId: '1', workOrderName: 'Initial Site Visit', hoursWorked: 2, estimatedHours: 3 },
    { workOrderId: '2', workOrderName: 'Excavation', hoursWorked: 8, estimatedHours: 10 },
    { workOrderId: '3', workOrderName: 'Foundation Pouring', hoursWorked: 6, estimatedHours: 8 },
    { workOrderId: '4', workOrderName: 'Framing', hoursWorked: 20, estimatedHours: 24 },
  ]

  const totalHoursWorked = timeEntries.reduce((sum, entry) => sum + entry.hoursWorked, 0)
  const totalEstimatedHours = timeEntries.reduce((sum, entry) => sum + entry.estimatedHours, 0)

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Time Tracking</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Work Order</th>
              <th className="py-3 px-6 text-left">Hours Worked</th>
              <th className="py-3 px-6 text-left">Estimated Hours</th>
              <th className="py-3 px-6 text-left">Progress</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {timeEntries.map((entry) => (
              <tr key={entry.workOrderId} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{entry.workOrderName}</td>
                <td className="py-3 px-6 text-left">{entry.hoursWorked}</td>
                <td className="py-3 px-6 text-left">{entry.estimatedHours}</td>
                <td className="py-3 px-6 text-left">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${(entry.hoursWorked / entry.estimatedHours) * 100}%` }}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-100 font-semibold text-gray-600">
              <td className="py-3 px-6 text-left">Total</td>
              <td className="py-3 px-6 text-left">{totalHoursWorked}</td>
              <td className="py-3 px-6 text-left">{totalEstimatedHours}</td>
              <td className="py-3 px-6 text-left">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: `${(totalHoursWorked / totalEstimatedHours) * 100}%` }}
                  ></div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500">
          Note: Time tracking component and real-time updates will be implemented in the future.
        </p>
      </div>
    </div>
  )
}