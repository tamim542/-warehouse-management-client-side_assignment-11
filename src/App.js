
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
import ManageItem from './component/ManageItem/ManageItem';
import AddItem from './component/AddItem/AddItem';
import MyItem from './component/MyItem/MyItem';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import NotFound from './component/NotFound/NotFound';



function App() {
  return (
    <div className="">
      <Header></Header>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound/>} />
        
        <Route path="/manageitem" element={
        <RequireAuth>
          <ManageItem/>
        </RequireAuth>} />

        <Route path="/additem" element={
        <RequireAuth>
          <AddItem />
        </RequireAuth>} />

        <Route path="/myitem" element={
        <RequireAuth>
          <MyItem />
        </RequireAuth>} />

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
