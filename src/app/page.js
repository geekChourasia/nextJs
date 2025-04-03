import Card from '../components/Card';
import styles from '../styles/Home.module.css';
import ClientComponent from './ClientComponent.js';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();
  
  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      <ClientComponent posts={posts} />
    </div>
  );
}
