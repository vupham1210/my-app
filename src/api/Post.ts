import axios from 'axios';
import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'

import { RootState } from '../app/store';

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (FetchURL: string)  => {
      const response = await axios.get(FetchURL);
      return response;
  }
)

interface initialStateType {
  post: any,
  status: string,
  error: null
}

const initialState:initialStateType = {
  post: [],
  status: 'idle',
  error: null
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
  },
  extraReducers: (loadPost) => {
    loadPost
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        console.log('loaded post');
        state.status = 'loaded';
        state.post = action.payload.data;
      })
      ;
  },
})

export default postsSlice.reducer

export const dataSingleTemplates = (state:RootState) => state.posts.post;
export const postStatus = (state:RootState) => state.posts.status;