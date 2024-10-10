import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ChevronDown, ChevronUp } from 'lucide-react'

interface Column<T> {
  key: keyof T
  header: string
  render?: (value: T[keyof T], item: T) => React.ReactNode
}

interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  searchable?: boolean
  linkTo?: (item: T) => string
}

export function DataTable<T extends { id: string | number }>({ data, columns, searchable = true, linkTo }: DataTableProps<T>) {
  const [sortColumn, setSortColumn] = useState<keyof T>(columns[0].key)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState(data)

  const handleSort = (column: keyof T) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }

    const sortedData = [...filteredData].sort((a, b) => {
      if (a[column] < b[column]) return sortDirection === 'asc' ? -1 : 1
      if (a[column] > b[column]) return sortDirection === 'asc' ? 1 : -1
      return 0
    })

    setFilteredData(sortedData)
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value
    setSearchTerm(term)
    const filtered = data.filter(item =>
      Object.values(item).some(value =>
        value.toString().toLowerCase().includes(term.toLowerCase())
      )
    )
    setFilteredData(filtered)
  }

  return (
    <div>
      {searchable && (
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className="absolute left-3 top-2.5">
              <Search size={20} className="text-gray-400" />
            </div>
          </div>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="py-3 px-6 text-left cursor-pointer"
                  onClick={() => handleSort(column.key)}
                >
                  <div className="flex items-center justify-between">
                    {column.header}
                    {sortColumn === column.key && (
                      sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {filteredData.map((item) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                {columns.map((column, index) => (
                  <td key={index} className="py-3 px-6 text-left whitespace-nowrap">
                    {column.render ? (
                      column.render(item[column.key], item)
                    ) : linkTo && index === 0 ? (
                      <Link to={linkTo(item)} className="text-blue-500 hover:text-blue-700">
                        {item[column.key] as React.ReactNode}
                      </Link>
                    ) : (
                      item[column.key] as React.ReactNode
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}