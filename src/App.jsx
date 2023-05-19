import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Inicio from "./Paginas/Inicio"
import Cursos from "./Paginas/Cursos.jsx"
import './App.css'

function App() {


  const router = createBrowserRouter([

    {
      path: '/',
      element: <Inicio />
    },
    {
      path: '/Cursos',
      element: <Cursos />
    },

  ])


  return (


    <RouterProvider router={router} />
  )
}

export default App
