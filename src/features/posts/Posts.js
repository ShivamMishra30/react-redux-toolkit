import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPostsThunk } from './postsThunk'

const Posts = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(fetchPostsThunk({ limit: 5 }))
    }, [dispatch])
  return (
    <div>Posts</div>
  )
}

export default Posts