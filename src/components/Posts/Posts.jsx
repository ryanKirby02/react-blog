import Post from '../Post/Post';
import './Posts.css';

export default function Posts() {
  return (
    <>
      <h1 className='posts-title'>Posts</h1>
      <div className='posts'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
}
