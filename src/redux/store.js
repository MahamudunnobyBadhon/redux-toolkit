import userSlice from "./slices/userSlice";

const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");
const { default: postSlices } = require("./slices/postSlices");
const { createLogger } = require("redux-logger");

// Create the Redux Logger middleware
const loggerMiddleware = createLogger();

const store = configureStore({
  reducer: {
    // add your reducers
    posts: postSlices,
    users: userSlice
  },
  middleware: [...getDefaultMiddleware(), loggerMiddleware], // Add the logger middleware to the middleware array
});

export default store;
