import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
  task_logger: localStorage.getItem("task_logger")
    ? JSON.parse(localStorage.getItem("task_logger"))
    : []
}

const task_loggerSlice = createSlice({
  name: "task_logger",
  initialState,
  reducers: {
    addToTask_Logger: (state, action) => {
      const task_logger = action.payload
      const index = state.task_logger.findIndex((item) => item._id === task_logger._id)

      if (index >= 0) {
        // If the course is already in the Pastes, do not modify the quantity
        toast.error("Task Logger already exists")
        return
      }
      // If the course is not in the Pastes, add it to the Pastes
      state.task_logger.push(task_logger)
      
      // Update to localstorage
      localStorage.setItem("task_logger", JSON.stringify(state.task_logger))
      // show toast
      toast.success("Task Logger added")
    },

    updateTask_Logger: (state, action) => {
      const task_logger = action.payload
      const index = state.task_logger.findIndex((item) => item._id === task_logger._id)

      if (index >= 0) {
        // If the course is found in the Pastes, update it
        state.task_logger[index] = task_logger
        // Update to localstorage
        localStorage.setItem("task_logger", JSON.stringify(state.task_logger))
        // show toast
        toast.success("Task Logger updated")
      }
    },
    removeFromTask_Logger: (state, action) => {
      const task_loggerId = action.payload

      console.log(task_loggerId)
      const index = state.task_logger.findIndex((item) => item._id === task_loggerId)

      if (index >= 0) {
        // If the course is found in the Pastes, remove it
        state.task_logger.splice(index, 1)
        // Update to localstorage
        localStorage.setItem("task_logger", JSON.stringify(state.task_logger))
        // show toast
        toast.success("Task Logger deleted")
      }
    },
    resetTask_Logger: (state) => {
      state.task_logger = []
      // Update to localstorage
      localStorage.removeItem("task_logger")
    },
  },
})

export const { addToTask_Logger, removeFromTask_Logger, updateTask_Logger } = pasteSlice.actions

export default task_loggeerSlice.reducer
