// REDUX
import { createSlice } from "@reduxjs/toolkit";

// HELP MARKDOWN
import { help } from "./helpMarkdownText";

export const markdownSlice = createSlice({
  name: "markdown",
  initialState: {
    textUser: "this is user input",
    textHelp: help,
    isShowingHelp: false,
  },
  reducers: {
    changeIsShowingHelp: (state, action) => {
      state.isShowingHelp = action.payload;
    },
    changeTextCurrent: (state, action) => {
      state.textUser = action.payload;
    },
  },
});

export const { changeIsShowingHelp, changeTextCurrent } = markdownSlice.actions;

export default markdownSlice.reducer;
