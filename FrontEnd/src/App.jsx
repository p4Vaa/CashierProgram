import {Routes ,Route} from "react-router-dom";
//pages
import AdminLayout from './layouts/AdminLayout.jsx';
import Categories from './pages/Admin/Categories/Categories.jsx';
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/register.jsx';
function App() {


  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register/>}/>

        <Route path='/admin' element={<AdminLayout />}>
          <Route path='dashboard' element={""}/>
          <Route path='categories' element={<Categories />}/>
          <Route path='products' element={""}/>
        </Route>
        
      </Routes>
      
      
    </>
  )
}

export default App
