import {useState } from "react";
import CreatePostForm from "./components/CreatePostForm";
import PostsList from "./components/PostsList";
import "./styles/App.css";
import Search from "./components/Search";

export default function App() {
  
  const [search, setSearch] = useState<string>('')

  return (
    <>
      <h1>Posts Page</h1>
      <CreatePostForm />
      <Search search={search} setSearch={setSearch}/>
      <PostsList search={search}/>
    </>
  );
}
