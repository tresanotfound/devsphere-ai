import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import taskReducer from './slices/taskSlice';
import projectReducer from './slices/projectSlice';
import aiReducer from './slices/aiSlice';
import chatReducer from './slices/chatSlice';
import notesReducer from './slices/notesSlice';
import analyticsReducer from './slices/analyticsSlice';
import notificationReducer from './slices/notificationSlice';
import themeReducer from './slices/themeSlice';

const store = configureStore({

  reducer: {

    auth: authReducer,

    tasks: taskReducer,

    projects: projectReducer,

    ai: aiReducer,

    chat: chatReducer,

    notes: notesReducer,

    analytics: analyticsReducer,

    notifications: notificationReducer,

    theme: themeReducer,

  },

});

export default store;