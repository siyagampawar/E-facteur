import React, { useState, useContext} from 'react';
import '../style/LoginForm.css';
import calculatePincodeDistance from './method' ;
import inm from '../ServicesPage.svg'
import { DistanceContext } from '../context/DistanceContext';
import { useNavigate } from 'react-router-dom';



const LoginForm = () => {
    debugger
    const navigate =useNavigate()
    // const {setDistance }= useContext(DistanceContext);
    
    const [loginFormData, setLoginFormData] = useState({
        loginOriginCity: '',
        loginOriginPincode: '',
        loginDestinationCity: '',
        loginDestinationPincode: ''
    });

    const [signupFormData, setSignupFormData] = useState({
        signupDestinationCountry: '',
        signupOriginPincode: '',
        signupDestinationPincode: ''
    });

    const handleSignupClick = () => {
        const slider = document.querySelector(".slider");
        const formSection = document.querySelector(".form-section");
        slider.classList.add("moveslider");
        formSection.classList.add("form-section-move");
    };

    const handleLoginClick = () => {
        const slider = document.querySelector(".slider");
        const formSection = document.querySelector(".form-section");
        slider.classList.remove("moveslider");
        formSection.classList.remove("form-section-move");
    };

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData({ ...loginFormData, [name]: value });
    };

    const handleSignupChange = (e) => {
        const { name, value } = e.target;
        setSignupFormData({ ...signupFormData, [name]: value });
    };

    const handleDomestic = (event) => {
      debugger
      event.preventDefault();
      const lovardistance = calculatePincodeDistance(loginFormData.loginOriginPincode, loginFormData.loginDestinationPincode);
      console.log('Distance (Domestic):', lovardistance);
      navigate("/DocumentForm",{ state: { distance: lovardistance } })
    //   setDistance({distance:lovardistance});
       };
  
    const handleInternational = (event) => {
      debugger
      event.preventDefault();
      const lovardistance = calculatePincodeDistance(signupFormData.signupOriginPincode,signupFormData.signupDestinationPincode);
      console.log('Distance (International):', lovardistance);
    //   setDistance({distance:lovardistance});
      
    //   history.push('/DocumentForm', { signupFormData });
      // You can perform additional actions here, such as sending data to the backend
    };
  


    return (
        <div className='body1' style={{ backgroundImage: `url(${inm})`,backgroundSize: 'cover',height:'100vh',padding:'40px'}}>
           <div className="containerlf" style={{
    width: '500px',
}}>

                <div className="slider"></div>
                <div className="btn">
                    <button className="login" onClick={handleLoginClick}>Domestic</button>
                    <button className="signup" onClick={handleSignupClick}>International</button>
                </div>

                <div className="form-section">
                    <div className="login-box">
                    <form name="login" onSubmit={handleDomestic}>
                            <input type="text" className="password ele" name="loginOriginCity" placeholder="Origin City Name" value={loginFormData.loginOriginCity} onChange={handleLoginChange} required />
                            <br />
                            <br />
                            <input type="text" className="password ele" name="loginOriginPincode" placeholder="Origin Pincode" value={loginFormData.loginOriginPincode} onChange={handleLoginChange} required />
                            <br />
                            <br />
                            <input type="text" className="password ele" name="loginDestinationCity" placeholder="Destination City Name" value={loginFormData.loginDestinationCity} onChange={handleLoginChange} required />
                            <br />
                            <br />
                            <input type="text" className="email ele" name="loginDestinationPincode" placeholder="Destination Pincode" value={loginFormData.loginDestinationPincode} onChange={handleLoginChange} required />
                            <br />
                            <br />
                            <center><input type="submit" className="clkbtn" name="Register" value="Submit"/></center>
                        </form>
                    </div>

                    <div className="signup-box">
                        <form name="register" onSubmit={handleInternational}>
                            <input type="text" className="name ele" name="signupName" placeholder="Destination Country Name" value={signupFormData.signupName} onChange={handleSignupChange} required />
                            <br />
                            <br />
                            <input type="text" className="name ele" name="signupOrigin" placeholder="Origin Pincode" value={signupFormData.signupOrigin} onChange={handleSignupChange} required />
                            <br />
                            <br />
                            <input type="text" className="password ele" name="signupDestination" placeholder="Destination Pincode" value={signupFormData.signupDestination} onChange={handleSignupChange} required />
                            <br />
                            <br />
                            <center><input type="submit" className="clkbtn" name="Register" value="Submit" /></center>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;