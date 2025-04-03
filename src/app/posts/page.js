'use client'

import { useState, useEffect } from 'react'
import SearchBar from '@/components/SearchBar'
import Card from '@/components/Card'
import CardSkeleton from '@/components/CardSkeleton'

export default function PostsPage() {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSearching, setIsSearching] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true)
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!res.ok) throw new Error('Failed to fetch posts')
        const data = await res.json()
        setPosts(data)
        setFilteredPosts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const handleSearch = (query) => {
    setIsSearching(true)
    const filtered = posts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.body.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredPosts(filtered)
    setIsSearching(false)
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-4 text-red-500">
        Error: {error}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Posts</h1>
        <SearchBar onSearch={handleSearch} isLoading={isSearching} />
        
        {isLoading ? (
          <div className="grid gap-6">
            {[...Array(5)].map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            No posts found matching your search
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredPosts.map((post) => (
              <Card 
                key={post.id}
                title={post.title}
                body={post.body}
                id={post.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
