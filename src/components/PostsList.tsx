import { IPost } from "../types/post";
import Post from "./Post";
import { sortPostsByOrder } from "../helpers/sortPostsByOrder";
import { useDrag } from "../hooks/useDrag";

interface PostsListProps {
  posts: IPost[];
}

export default function PostsList({ posts }: PostsListProps) {

  const { dragOverHandler, dragStartHandler, dropHandler } = useDrag()

  return (
    <section className="">
      <h2>Posts ({posts.length})</h2>
      <div className="posts">
        {posts.sort(sortPostsByOrder).map((post) => (
          <Post
            key={post.id}
            post={post}
            dragStartHandler={dragStartHandler}
            dragOverHandler={dragOverHandler}
            dropHandler={dropHandler}
          />
        ))}
      </div>
    </section>
  );
}
