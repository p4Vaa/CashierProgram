//pages
import AdminLayout from './layouts/AdminLayout.jsx';
import Categories from './pages/Admin/Categories/Categories.jsx';
import Login from './pages/Auth/Login.jsx';
import {Routes ,Route} from "react-router-dom";
function App() {


  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />}/>

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
