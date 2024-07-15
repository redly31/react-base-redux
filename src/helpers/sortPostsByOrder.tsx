import { IPost } from "../types/post";

export const sortPostsByOrder = (a: IPost, b: IPost) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };