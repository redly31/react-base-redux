import { useState } from "react";
import { DragEvent } from "react";
import { IPost } from "../types/post";
import { useTypedDispatch } from "./reduxHooks";
import { changePostOrder } from "../store/postSlice";

export const useDrag = () => {
  const dispatch = useTypedDispatch()
  const [currentPost, setCurrentPost] = useState<IPost | null>(null);

  function dragStartHandler(post: IPost): void {
    setCurrentPost(post);
  }

  function dragOverHandler(e: DragEvent<HTMLElement>): void {
    e.preventDefault();
  }

  function dropHandler(e: DragEvent<HTMLElement>, post: IPost): void {
    e.preventDefault(); 
    dispatch(changePostOrder({post, currentPost}))
  }

  return { dragStartHandler, dragOverHandler, dropHandler };
};
