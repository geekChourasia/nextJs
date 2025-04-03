import { notFound } from 'next/navigation'

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  if (!res.ok) return undefined
  return res.json()
}

export default async function PostPage({ params }) {
  const post = await getPost(params.id)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600">{post.body}</p>
    </div>
  )
} 