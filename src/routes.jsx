import { createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/home"
import{Contact} from './pages/contacts'
import{Curriculum} from "./pages/curriculum"


export const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/curriculum",
      element: <Curriculum />,
    },
   
    {
      path: "/contacts",
      element: <Contact />,
    },

]
)