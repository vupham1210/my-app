import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface initialStateType {
  menu: boolean,
}

const initialState:initialStateType  = {
  menu: false, 
}

export const MobileMenuSlice = createSlice({
  name: 'mobilemenu',
  initialState,
  reducers: {
    showMobileMenu: (state:initialStateType, action:any) => {
      state.menu = action.payload;
    }
  }
})

export const ShowMobileMenuState = (state: RootState) => state.mobilemenu.menu;
export const { showMobileMenu } = MobileMenuSlice.actions;
export default MobileMenuSlice.reducer;