import { notFound } from 'next/navigation'

async function getPost(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if (!res.ok) return undefined
    return res.json()
  } catch (error) {
    console.error('Error fetching post:', error)
    return undefined
  }
}

export default async function PostPage({ params }) {
  const post = await getPost(params.id)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">{post.title}</h1>
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed">{post.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 