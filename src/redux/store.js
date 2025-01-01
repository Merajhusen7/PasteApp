import {configureStore} from "@reduxjs/toolkit"
import task_loggerReducer from "./task_loggerSlice"

export const store = configureStore({
  reducer:{
      task_logger: task_loggerReducer
  }
})
