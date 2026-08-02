import {Routes ,Route} from "react-router-dom";
//pages
import MainLayout from './layouts/MainLayout.jsx';
import Categories from './pages/Admin/Categories/Categories.jsx';
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/register.jsx';
import Cashier from './pages/Cashier/Cashier.jsx';
function App() {


  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register/>}/>
        

      
        <Route path='/' element={<MainLayout />}>
          <Route path='cashier' element={<Cashier />}/>

          <Route path='admin/dashboard' element={""}/>
          <Route path='admin/categories' element={<Categories />}/>
          <Route path='admin/products' element={""}/>
        </Route>
        
      </Routes>
      
      
    </>
  )
}

export default App
