import { useMemo } from "react";
import { IPost } from "../types/post";

export const usePosts = (
    posts: IPost[],
    search: string
  ) => {
    const searchedPosts = useMemo(() => {
      return posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );
    }, [posts, search]);
  
    return searchedPosts;
  };
