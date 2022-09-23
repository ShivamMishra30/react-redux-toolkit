import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todos/todosSlice'
import postsReducer from '../features/posts/postsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    posts: postsReducer
  },
});
