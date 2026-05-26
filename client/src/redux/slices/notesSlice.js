import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({

  name: 'notes',

  initialState: {

    notes: [],

  },

  reducers: {

    addNote: (state, action) => {

      state.notes.push(action.payload);
    },

  },

});

export const {

  addNote,

} = notesSlice.actions;

export default notesSlice.reducer;