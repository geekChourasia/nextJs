'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function PostsPage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then(setPosts)
      .catch(console.error)
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <Link 
            key={post.id} 
            href={`/posts/${post.id}`}
            className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 line-clamp-2">{post.body}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
