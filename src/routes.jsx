import { createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/home"
import{Contact} from './pages/contacts'
import { ListaDeEstudantes } from "./pages/list"


export const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/list",
      element: <ListaDeEstudantes />,
    },
   
    {
      path: "/contacts",
      element: <Contact />,
    },

]
)