'use client';

import { useState } from 'react';
import Card from '../components/Card';
import styles from '../styles/Home.module.css';

export default function ClientComponent({ posts }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
      <ul className={styles.postList}>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <Card title={post.title} id={post.id} />
          </li>
        ))}
      </ul>
    </>
  );
} 