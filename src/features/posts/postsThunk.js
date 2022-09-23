import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPostsThunk = createAsyncThunk('posts/getPosts', async ({ limit }, { dispatch, getState }) => {
    // const { todos } = getState()
    // console.log({ todos })
    // you can dispatch any action from here!
    // dispatch(del(2))
    return fetch(
      `https://jsonplaceholde.typicode.com/posts?_limit=${limit}`
    ).then((res) => res.json())
  }
)