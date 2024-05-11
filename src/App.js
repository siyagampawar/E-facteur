import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/loginSignupPage';
import Home from './components/Home';
import './App.css'
import DataProvider from './context/DataProvider';
import DeliveryPartnerList from './components/DeliveryPartnerList';
import AppWrapper from "../src/components/AppWrapper";
import User from './components/User';
import PriceCalculation from './components/PriceCalculation';
import LoginForm from './components/LoginForm';
import DocumentForm from './components/DocumentForm';
import HomeService from './components/HomeService'

const App = () => {
    return (
    <div className='class'>
        <DataProvider>
            <Router>
                <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/homeService" element={<HomeService/>} />
                    <Route path="/leaderBoard" element={<DeliveryPartnerList/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/DistForm" element={<User/>} />
                    <Route path="/PriceForm" element={<PriceCalculation/>} />
                    <Route path="/LoginForm" element={<LoginForm/>}/>
                    <Route path="/DocumentForm" element={<DocumentForm/>}/>
                    <Route path="/" element={<Navigate to="/home"/>} />
                </Routes>
            </Router>
        </DataProvider>
        
      </div>
    );
};

export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Login from './components/loginSignupPage';
// import Home from './components/Home';
// import './App.css'
// import DataProvider from './context/DataProvider';

// const App = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     useEffect(() => {
//         // Check if the user is logged in (e.g., using local storage)
//         const storedLoggedInStatus = localStorage.getItem('isLoggedIn');
//         setIsLoggedIn(storedLoggedInStatus === 'true');
//     }, []);

//     return (
//         <div>
//             <Router>
//                 <Routes>
//                     <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
//                     <DataProvider>
//                         <Route path="/login" element={<Login />} />
//                     </DataProvider>
//                     <Route path="/" element={<Navigate to="/home"/>} />
//                 </Routes>
//             </Router>
//         </div>
//     );
// };

// export default App;

