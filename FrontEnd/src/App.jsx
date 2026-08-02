import {Routes ,Route} from "react-router-dom";
//pages
import MainLayout from './layouts/MainLayout.jsx';
import Categories from './pages/Admin/Categories/Categories.jsx';
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/register.jsx';
import Cashier from './pages/Cashier/Cashier.jsx';
import PrivateRoute from "./components/Routesss/PrivateRoute.jsx";
function App() {
  const hasUser = localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):false;

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />}/>
        
        <Route path='/register' element={
          <PrivateRoute>
            <Register/>
          </PrivateRoute>
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

          <Route path='admin/dashboard' element={<PrivateRoute></PrivateRoute>}/>
         
          <Route path='admin/categories' element={
            <PrivateRoute>
              <Categories />
            </PrivateRoute>
            }/>

          <Route path='admin/products' element={<PrivateRoute></PrivateRoute>}/>
        </Route>
        
      </Routes>
      
      
    </>
  )
}

export default App
