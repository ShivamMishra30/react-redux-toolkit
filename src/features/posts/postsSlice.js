import { createSlice } from "@reduxjs/toolkit"; 
import { fetchPostsThunk } from "./postsThunk";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        list: [],
        loading: false,
        error: '' 
    },
    reducers: {
        setLoading: (state, { payload }) => {
            state.loading = true
        }
    },
    extraReducers: (builder) => [
        builder.addCase(fetchPostsThunk.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchPostsThunk.fulfilled, (state, { payload }) => {
            console.log(payload)
            state.loading = false;
            state.list = payload
        })
        .addCase(fetchPostsThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        })
    ]
})


export const { setLoading } = postsSlice.actions
export default postsSlice.reducer