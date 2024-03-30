import React from "react";
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import HeaderK from './Header';
import data from './data';
import Review from './Review';
import Navbar from './Navbar';
import Header from './Header.jsx';
import CourrierTable from './Courrier_data';
import Design from './Design';

function Home() {
    const navigate = useNavigate();
    const auth = getAuth();
    const data1=data.map((item)=>(
        <Review head={item.head} details={item.details} stars={item.stars} name={item.name} des={item.des}/>
      ) )
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log('User signed out');
                navigate('/login'); // Redirect to login page after successful logout
            })
            .catch((error) => {
                // An error happened.
                console.error('Error signing out:', error);
            });
    };
    return (
        <>
            <div className="App">  
            <Navbar />
            {/* <button onClick={handleLogout}>Logout</button> */}
            <Header />
            <CourrierTable/>
            <Design/>
            <div className='Header'> 
            <HeaderK />
            </div>
                <div className='List'>
                    {data1}
                </div> 
            </div> 
        </>
    );
}

export default Home;