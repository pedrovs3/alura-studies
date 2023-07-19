import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import { ProvedorTema } from "./components/ProvedorTema/ProvedorTema"
import { Estilos } from "./components/EstilosGlobais/Estilos"

function App () {
  return (
    <ProvedorTema>
      <Estilos />
      <RouterProvider router={router} />
    </ProvedorTema>
  )
} 

export default App
