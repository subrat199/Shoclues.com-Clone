import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home';
import Store from '../Pages/Store';
import Men from './../Pages/Men';
import OnlyApple from './../Pages/OnlyApple';
import Support from './../Pages/Support';
import Login from './../Pages/Login';
import Admin from './../Pages/Admin';
import Search from './../Pages/Search';
import SingleProduct from './../Pages/SingleProduct';
import PrivateRoute from './PrivateRoute';
import Addtocart from './../Pages/Addtocart';
import Signup from './../Pages/Signup';
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />   
            <Route path='/store' element={<Store/>}/>      
            <Route path='/onlyApple' element={<OnlyApple/>}/>
            <Route path='/store' element={<PrivateRoute><Store/></PrivateRoute>}/>
            <Route path='/support' element={<Support/>}/>
            <Route path='/product/:id' element={<SingleProduct/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/addtocart' element={<Addtocart/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes