import { useGetPostsQuery } from "../store/postsAPI";
import { IPost } from "../types/post";
import Post from "./Post";
import { usePosts } from "../hooks/usePosts";

export default function PostsList({search}: {search: string}) {

  const { data: posts = [], isLoading } = useGetPostsQuery("")
  const searchedPosts = usePosts(posts, search)

  if(isLoading) {
    return (<h1>Loading...</h1>)
  }

  return (
    <section className="">
      <h2>Posts ({posts.length})</h2>
      <div className="posts">
        {searchedPosts.map((post: IPost) => (
          <Post
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </section>
  );
}
