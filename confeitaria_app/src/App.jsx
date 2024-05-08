import { Layout } from "./components/Layout/Layout"
import { Login } from './pages/Login/SingIn'
import { Register } from './pages/Login/SingUp'
import { NewProduct } from "./pages/NewProduct"
import { Profile } from './pages/Profile'
import { HomeAdm } from './pages/Adm'
import { Catalog } from './pages/Catalog/Catalog'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from "./model/Cart"
import { Confeitaria } from "./pages/Confeitaria"
import { Landing } from "./pages/Landing"
import { VerLojas } from "./pages/VerLojas"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="loja">
          <Route path="login" element={ <Login/> }/>
          <Route path="register" element={ <Register/> }/>
          <Route path="novo-produto" element={ <Layout><NewProduct/></Layout> }/>
          <Route path="perfil" element={ <Layout><Profile/></Layout> }/>
          <Route path="nova-confeitaria" element={ <Confeitaria/> }/>
          <Route index element = { <Layout><HomeAdm/></Layout> } />
        </Route>

        <Route path="ecommerce">
          <Route path=":id" element={ <CartProvider><Catalog/></CartProvider> }/>
        </Route>
 
          <Route path="verlojas" element={<VerLojas/>}></Route>
       
        <Route index element={ <Landing/> }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
