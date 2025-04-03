'use client'

import { useState, useEffect } from 'react'

export default function SearchBar({ onSearch, isLoading }) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query)
    }, 300) // Debounce for 300ms

    return () => clearTimeout(timer)
  }, [query, onSearch])

  return (
    <div className="mb-6">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts..."
          className="w-full p-4 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
          ) : (
            '🔍'
          )}
        </div>
      </div>
    </div>
  )
} 