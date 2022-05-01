
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Blog from './component/Blog/Blog';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp';
import RequireAuth from './component/RequireAuth/RequireAuth';
import ManageInventory from './component/ManageInventory/ManageInventory';

function App() {
  return (
    <div className="">
      <Header></Header>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path='/inventory/:id' element={
         <RequireAuth>
         <Inventory/>
       </RequireAuth>
      }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
