import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
interface initialStateType {
  modal: boolean,
  searchKeyword: [],
  searchData:[],
}

const initialState:initialStateType  = {
  modal: false, 
  searchKeyword: [],
  searchData: [],
}

export const ModalSearchSlice = createSlice({
  name: 'modaltemplates',
  initialState,
  reducers: {
    showModal: (state:initialStateType, action:any) => {
      state.modal = action.payload;
    }
  }
})

export const ShowModalState = (state: RootState) => state.modal.modal;
export const {showModal} = ModalSearchSlice.actions;
export default ModalSearchSlice.reducer;