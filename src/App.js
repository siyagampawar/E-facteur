
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/loginSignupPage';
import Home from './components/Home';
import './App.css'
import DataProvider from './context/DataProvider';

const App = () => {
    return (
    <div>
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <DataProvider>
                <Route path="/login" element={<Login />} />
                </DataProvider>
                <Route path="/" element={<Navigate to="/home"/>} />
            </Routes>
        </Router>
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

