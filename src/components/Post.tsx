import { DragEvent } from "react";
import { IPost } from "../types/post";
import { useTypedDispatch } from "../hooks/reduxHooks";
import { deletePost } from "../store/postSlice";


interface PostProps {
  post: IPost;
  dragStartHandler: (post: IPost) => void;
  dragOverHandler: (e: DragEvent<HTMLElement>) => void;
  dropHandler: (e: DragEvent<HTMLElement>, post: IPost) => void;
}

export default function Post({
  post,
  dragStartHandler,
  dragOverHandler,
  dropHandler,
}: PostProps) {
  const dispatch = useTypedDispatch()
  return (
    <article
      key={post.id}
      className="post"
      onDragStart={() => dragStartHandler(post)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, post)}
      draggable={true}
    >
      <h3 className="post__title">{post.title}</h3>
      <p className="post__body">{post.body}</p>
      <button
        className="post__delete__button"
        onClick={() => dispatch(deletePost(post.id))}
      >
        Delete Post
      </button>
    </article>
  );
}
