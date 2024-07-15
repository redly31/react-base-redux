import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../types/post";

const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [] as IPost[],
    },
    reducers: {
        getPosts() {},
        createPost(state, action) {
            state.posts.push(action.payload)
            state.posts.forEach((post, index) => (post.order = index + 1));
        },
        deletePost(state, action) {
            state.posts = state.posts.filter((post) => post.id !== action.payload)
        },
        changePostOrder(state, action: PayloadAction<{ post: IPost; currentPost: IPost | null }>) {
            const { post, currentPost } = action.payload
            state.posts = state.posts.map(p => {
                if (p.id === post.id) {
                  return {...p, order: currentPost? currentPost.order : 0 }; // Provide a default value
                } else if (currentPost && p.id === currentPost.id) {
                  return {...p, order: post.order };
                }
                return p;
            });
        },
    },
})

export const { createPost, deletePost, changePostOrder } = postSlice.actions
export default postSlice.reducer;




