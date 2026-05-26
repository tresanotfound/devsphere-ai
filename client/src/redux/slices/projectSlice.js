import { createSlice } from '@reduxjs/toolkit';

const projectSlice = createSlice({

  name: 'projects',

  initialState: {

    projects: [],

  },

  reducers: {

    addProject: (state, action) => {

      state.projects.push(action.payload);
    },

  },

});

export const {

  addProject,

} = projectSlice.actions;

export default projectSlice.reducer;