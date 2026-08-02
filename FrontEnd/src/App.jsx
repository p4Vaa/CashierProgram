import {Routes ,Route} from "react-router-dom";
//pages
import MainLayout from './layouts/MainLayout.jsx';
import Categories from './pages/Admin/Categories/Categories.jsx';
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/register.jsx';
import Cashier from './pages/Cashier/Cashier.jsx';
import PrivateRoute from "./components/Routesss/PrivateRoute.jsx";
import AdminRoute from "./components/Routesss/AdminRoute.jsx";
function App() {
  const hasUser = localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):false;
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />}/>
        
        <Route path='/register' element={
          <AdminRoute>
            <Register/>
          </AdminRoute>
        }/>


        <Route path='/' element={
          <PrivateRoute>
              <MainLayout />
          </PrivateRoute>
        }>
          <Route path='cashier' element={
            <PrivateRoute>
              <Cashier />
            </PrivateRoute>
            }/>

          <Route path='admin/dashboard' element={<AdminRoute></AdminRoute>}/>
         
          <Route path='admin/categories' element={
            <AdminRoute >
              <Categories />
            </AdminRoute>
            }/>

          <Route path='admin/products' element={<AdminRoute></AdminRoute>}/>
        </Route>
        
      </Routes>
      
      
    </>
  )
}

export default App
