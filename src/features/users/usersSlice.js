import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('users/fetchData', async (_, { dispatch })=> {
    const data = await fetch('http://localhost:3001/users').then((res) => res.json())
    console.log(data)
    const users = data.map(({ articles, comments, ...user}) => ({
        ...user,
        articles: articles.map(({ id }) => id),
        comments: comments.map(({ id }) => id)
    }))

    dispatch(setUsers(users))

    const articles = data
        .map((user) => 
            user.articles.map((article) => ({ ...article, userId: user.id }))
        ).flat()
    const comments = data
        .map((user) => 
            user.articles.map((comment) => ({ ...comment, userId: user.id }))
        ).flat()


})

const usersAdpater = createEntityAdapter({
    selectId: ({ id }) => id
})
const usersSlice = createSlice({
    name: 'users',
    initialState: {},
    reducers: {
        addUser: usersAdpater.addOne,
        setUsers: usersAdpater.setAll,
        addUsers: usersAdpater.addMany
    }
})

export const { addUser, setUsers, addUsers} = usersSlice.actions

export default usersSlice.reducer