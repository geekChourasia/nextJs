import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Welcome to Next.js Posts</h1>
        <p className="text-xl mb-8">
          A demonstration of Next.js 14 with App Router and server components.
        </p>
        <Link 
          href="/posts"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          View Posts
        </Link>
      </div>
    </main>
  )
}
