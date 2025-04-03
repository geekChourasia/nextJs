'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../styles/Card.module.css';

export default function Card({ title, id }) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    setIsLoading(true);
    router.push(`/posts/${id}`);
  };

  return (
    <Link 
      href={`/posts/${id}`} 
      className={`${styles.card} ${isLoading ? styles.loading : ''}`}
      onClick={handleClick}
    >
      <h2>{title}</h2>
      {isLoading && <div className={styles.loader}></div>}
    </Link>
  );
}