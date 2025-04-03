'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../styles/Card.module.css';

export default function Card({ title, body, id }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    setIsLoading(true);
    router.push(`/posts/${id}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">{title}</h2>
        <p className="text-gray-600 line-clamp-2">{body}</p>
        <div className="mt-4">
          <a 
            href={`/posts/${id}`}
            className="inline-block text-blue-500 hover:text-blue-600 font-medium"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
}