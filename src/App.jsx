import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Paste from "./components/Paste"
import ViewPaste from "./components/ViewPaste"
import Navbar from "./components/Navbar"


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div className="w-full h-full flex flex-col">
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/task_logger",
      element: <div className="w-full h-full flex flex-col">
      <Navbar/>
      <Task_Logger/>
    </div>
    },
    {
      path:"/task_logger/:id",
      element: <div className="w-full h-full flex flex-col">
      <Navbar/>
      <ViewTask_Logger/>
    </div>,
    }
  ]
)

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
