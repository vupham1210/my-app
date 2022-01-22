import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export const danhmucAsync = createAsyncThunk(
    'category/fetchdanhmuc',
    async (FetchURL: string)  => {
      const response = await axios.get(FetchURL);
      return response.data;
  }
)

interface DataCategoryInterface {
  val: any,
  status: string
}

const initialState:DataCategoryInterface =  {
  val: [],
  status: 'idle'
};

export const dataCategorySlice = createSlice({
  name: 'category',
  // Thêm 1 số state như trạng thái loading, báo lỗi và thông tin user đang đăng nhập
  initialState,
  // Các action bình thường (sync action)
  reducers: {
    // Logout không gọi API mà chỉ đơn giản là cập nhật state
    danhmuc: (state, action) => {
       state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(danhmucAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(danhmucAsync.fulfilled, (state, action) => {
        state.val = action.payload;
        state.status = 'loaded';
      });
  },
});

export const dataCategory = (state: RootState) => state.category.val;
export const statusCategory = (state: RootState) => state.category.status;
export const { danhmuc } = dataCategorySlice.actions;

export default dataCategorySlice.reducer;