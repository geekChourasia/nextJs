import styles from '../../styles/Post.module.css';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return {
    props: { post },
  };
}

export default function Post({ post }) {
  return (
    <div className={styles.container}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}