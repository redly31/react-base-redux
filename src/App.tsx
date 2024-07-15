import { useCallback, useState } from "react";
import CreatePostForm from "./components/CreatePostForm";
import PostsList from "./components/PostsList";
import { IPost } from "./types/post";
import "./styles/App.css";
import Search from "./components/Search";
import { usePosts } from "./hooks/usePosts";
import { memo } from 'react';
import { useTypedDispatch, useTypedSelector } from "./hooks/reduxHooks";
import { createPost } from "./store/postSlice";

export default function App() {
  
  const posts = useTypedSelector(state => state.posts.posts)
  const dispatch = useTypedDispatch()
  const [search, setSearch] = useState<string>('')
  const searchedPosts = usePosts(posts, search)
  const PostsListMemo = memo(PostsList);

  const createNewPost = useCallback((newPost: IPost) => {
    dispatch(createPost(newPost))
  }, [posts])

  return (
    <>
      <h1>Posts Page</h1>
      <CreatePostForm createPost={createNewPost} />
      <Search search={search} setSearch={setSearch}/>
      <PostsListMemo posts={searchedPosts} />
    </>
  );
}
