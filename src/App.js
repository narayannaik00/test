import './App.css';
import ResetPassword from './ResetPassword';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import Login from './Login';
import SentOtp from './Sendotp';  
import GetProduct from './GetProduct';
import ProductDetails from './Productdetails';
import AddProduct from './AddProduct'

function App() {
  return (
    <div>
      <ToastContainer/>
      <Router>
        <Routes>
        <Route path="Products" element={<GetProduct/>} />
        <Route path="/Products/:id" element={<ProductDetails/>} />
        <Route path="/Products/add" element={<AddProduct/>} />
        </Routes>
       
       </Router>
    </div>
  );
}

export default App;
// /////* 
// <div>
 
//  <ToastContainer />
// <Router>

// <Routes>
// <Route path="/" element={<SentOtp/>} />
// <Route path="/ResetPassword" element={<ResetPassword/>} />
// <Route path="/login" element={<Login/>} />

// </Routes>
// </Router>


// </div> */