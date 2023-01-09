import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: 'Ahmad',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeTheName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const {changeTheName} = userSlice.actions;

export default userSlice.reducer;
