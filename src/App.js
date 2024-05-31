import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import Pagenot from './pages/Pagenot'
// import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/user/Dashboard'
import PrivateRoute from './components/Layout/Routes/PrivateRoute'
import AdminRoute from './components/Layout/Routes/AdminRoute'
import AdminDashboard from './pages/Admin/AdminDashboard'
import CreateCategory from './pages/Admin/Createcategor'
import Createproduct from './pages/Admin/Createproduct'
import User from './pages/Admin/User'
import Orders from './pages/user/Orders'
import Profile from './pages/user/Profile'
import Product from './pages/Admin/Product'
import UpdateProduct from './pages/Admin/UpdateProduct'
import Search from './pages/Search'
import ProductDetails from './pages/productDetails'
import Categories from './pages/Categories'
import CategoryProduct from './pages/CategoryProduct'
import CartPage from './pages/CartPage'
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}/>
      <Route path='/categories' element={<Categories></Categories>}/>
      <Route path='/cart' element={<PrivateRoute></PrivateRoute>} >
          <Route path='' element={<CartPage></CartPage>}></Route>

          </Route>

      <Route path='/product/:slug' element={<ProductDetails></ProductDetails>}/>
      <Route path='/category/:slug' element={<CategoryProduct></CategoryProduct>}/>
      <Route path='/search' element={<Search></Search>}/>
      <Route path='/about' element={<About></About>}/>
      <Route path='/dash' element={<PrivateRoute></PrivateRoute>}>
           <Route path='admin' element={<AdminDashboard></AdminDashboard>}/>
           <Route path='admin/createcategory' element={<CreateCategory></CreateCategory>}/>
           <Route path='admin/createproduct' element={<Createproduct></Createproduct>}/>
           <Route path='admin/user' element={<User></User>}/>
           <Route path='admin/products' element={<Product></Product>}/>
           <Route path='admin/product/:slug' element={<UpdateProduct></UpdateProduct>}/>
      </Route>
      <Route path='/dash' element={<PrivateRoute></PrivateRoute>}>
         <Route path='user' element={<Dashboard></Dashboard>}/>
         <Route path='user/profile' element={<Profile></Profile>}/>
         <Route path='user/orders' element={<Orders></Orders>}/>
      </Route>
     
     
      <Route path='/register' element={<Register></Register>}/>
      <Route path='/login' element={<Login></Login>}/>
      <Route path='/contact' element={<Contact></Contact>}/>
      <Route path='/policy' element={<Policy></Policy>}/>
      <Route path='*' element={<Pagenot></Pagenot>}/>
    </Routes>
    </div>
  );
}
export default App;
