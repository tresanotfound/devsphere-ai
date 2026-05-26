import { createSlice } from '@reduxjs/toolkit';

const analyticsSlice = createSlice({

  name: 'analytics',

  initialState: {

    reports: [],

  },

  reducers: {

    setReports: (state, action) => {

      state.reports = action.payload;
    },

  },

});

export const {

  setReports,

} = analyticsSlice.actions;

export default analyticsSlice.reducer;