import { createSlice } from '@reduxjs/toolkit';

const aiSlice = createSlice({

  name: 'ai',

  initialState: {

    prompts: [],

  },

  reducers: {

    addPrompt: (state, action) => {

      state.prompts.push(action.payload);
    },

  },

});

export const {

  addPrompt,

} = aiSlice.actions;

export default aiSlice.reducer;