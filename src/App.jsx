import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

export const App = () => {
  
  return(
    
    <div className="flex w-full h-screen bg-gradient-to-tr from-blue-800 to-green-300">
      <div>
    <RouterProvider router={routes} />
    </div>
    </div>
  
  )
  
}



