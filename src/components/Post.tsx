import { IPost } from "../types/post";
import { useDeletePostMutation } from "../store/postsAPI";


interface PostProps {
  post: IPost;
}

export default function Post({
  post,
}: PostProps) {
  
  const [deletePost] = useDeletePostMutation()

  const removePost = async (id: string) => {
    await deletePost(id)
  }

  return (
    <article
      key={post.id}
      className="post"
    >
      <h3 className="post__title">{post.title}</h3>
      <p className="post__body">{post.body}</p>
      <button
        className="post__delete__button"
        onClick={() => removePost(post.id)}
      >
        Delete Post
      </button>
    </article>
  );
}
