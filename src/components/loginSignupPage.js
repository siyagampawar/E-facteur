import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { TextField, Box, Button, Typography, styled } from '@mui/material';
import { useState, useEffect} from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import Grid from '@mui/material/Grid';
import vector1 from '../images/loginSingupPgImgs/vector11.png'
import vector2 from '../images/loginSingupPgImgs/vector12.png'
import vector3 from '../images/loginSingupPgImgs/vector13.png'
import vector21 from '../images/loginSingupPgImgs/vector21.png'
import vector22 from '../images/loginSingupPgImgs/vector22.png'
import vector23 from '../images/loginSingupPgImgs/vector23.png'
import nameLogoVector from '../images/loginSingupPgImgs/Logo(1).png'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { auth, provider,provider1 } from "./config";
import {signInWithPopup} from "firebase/auth";
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';

const Component = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;
const OuterBox =styled(Box)`
    justify-content: flex-start;
    border-radius: 30px; 
    width: 400px;
    margin: auto;
    margin-top :50px
`;
const TaglineBox =styled(Box)` 
`;
const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`
const Tagline = {
  opacity:'100%',
  color: '#100000',
  fontSize: '45px',
  fontFamily: 'Inter',
  fontStyle: 'italic',
  fontWeight: '900px',
  margin:'0px',
}


const Login = (props) => {
  const { setAccount } = useContext(DataContext);
  const [account, toggleAccount] = useState('login');
  const [login, setLogin] = useState({Fullname: '',password: ''});
  const [signup, setSignup] = useState({ Fullname: '',Email: '',Gender:'',DateOfBirth:'',phone:'',password: '',confirmPasswaord:''});
  const [error, showError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [value,setValue] = useState('')
  const navigate = useNavigate ();


  useEffect(() => {
    showError(false);
    setValue(localStorage.getItem('email'))
  }, [login])

const toggleSignup = () => {
  account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
}
const handleClick1 =()=>{
  signInWithPopup(auth,provider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem("email",data.user.email)
      navigate('/home');
  })
}
const handleClick2 =()=>{
  signInWithPopup(auth,provider1).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem("email",data.user.email)
      navigate('/home');
  })
  
}
const handleSignUp =async (e)=>{
  const {  Fullname,Email,Gender,DateOfBirth,phone,password,confirmPasswaord} = signup;
  e.preventDefault();
  if(confirmPasswaord == password){
    const options ={
      method : 'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({
        Fullname,Email,Gender,DateOfBirth,phone,password,confirmPasswaord,
      })
    }
    const res = await fetch(
      'https://newef-2bcd7-default-rtdb.firebaseio.com/UserData.json',
      options
      )
      if(res){
        alert("Message Sent ")
      }
      else{
        alert("Error Sent ")
      }
  }else{
    alert("Password and confirm password are diff")
  }
}
const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.get('https://newef-2bcd7-default-rtdb.firebaseio.com/UserData.json');
    const userData = response.data;

    // Loop through each user in the database
    for (const userId in userData) {
      const user = userData[userId];

      // Check if the entered Fullname and password match with any user's data
      if (user.Fullname === login.Fullname && user.password === login.password) {
        navigate("/home", { state: { id: user.Fullname } });
        return; // Exit the function after successful login
      }
    }

    // If no user found with the entered credentials
    alert("User does not exist or incorrect password");
  } catch (error) {
    console.error('Error occurred while logging in:', error);
    alert("Something went wrong. Please try again later.");
  }
};

const onValueChange = (form, field, value) => {
  if (form === 'login') {
    setLogin((prevLogin) => ({ ...prevLogin, [field]: value }));
  } else {
    setSignup((prevSignup) => ({ ...prevSignup, [field]: value }));
  }
};

return (
    <div class="background-container" style={{width:'100%'}}>
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
            <TaglineBox style={{width:' 100%',height: '100%',flexShrink: '0px',marginTop:'100px',marginRight:'98px',marginLeft:'155px' }}>
              {account ==='login'?
             <>
                <img src={vector1} alt="SVG" width='110px' style={{marginLeft:'18px',marginBottom:'8px'}}/>
                <Grid container spacing={1}>
                <Grid item xs={6} style={{ height: '10px' }}>
                <h3 style={Tagline}> FIND THE </h3>  </Grid>
                <Grid item xs={6}  style={{ height: '60px' }}><img src={vector2} alt="SVG" width='150px' style={{marginLeft:'40px'}}/><br></br>
                </Grid></Grid>
                <h3 style={Tagline}> FASTEST, <br></br>
                  SAFEST, <br></br>
                  AND BEST DELIVERY <br></br>
                  FOR YOUR GOODS
                </h3> 
                <img src={vector3} alt="SVG" width='200px' style={{marginLeft:'105px'}}/><br></br>
              </> 
                :
              <>
                <img src={vector21} alt="SVG" width='150px' style={{marginLeft:'0px',marginBottom:'8px'}}/>
                <Grid container spacing={1}>
                  <Grid item xs={6} style={{ height: '10px' }}>
                    <h3 style={Tagline} marginLeft='80px'>SHIP SMARTER,</h3> 
                  </Grid>
                  <Grid item xs={6} style={{ height: '10px' }}>
                    <img src={vector22} alt="SVG" width='210px' style={{marginLeft:'18px',marginBottom:'8px'}}/>
                  </Grid></Grid>
                  <h3 style={Tagline}><br></br> SIGN UP NOW.</h3>
                <img src={vector23} alt="SVG" width='160px' style={{marginLeft:'18px',marginTop:'28px'}}/></>}
            </TaglineBox>
         
        </Grid>
        <Grid item xs={6}>
          <OuterBox style={{backgroundColor:'rgba(255, 255, 255, 0.3)'}}> 
          <img src={nameLogoVector} alt="SVG" width='168px' height='36px' style={{paddingTop:'30px',marginLeft:'30px',marginBottom:'0px'}}/>
        {
        account === 'login' ?
          <Component className='loginBox'>
              <TextField id="outlined-basic1"  onChange={(e) => onValueChange('login', 'Fullname', e.target.value)}value={login.Fullname} label="UserName" variant="outlined" />
              <TextField
                id="outlined-basic2"
                type={showPassword ? 'text' : 'password'}  // Toggle between text and password
                onChange={(e) => onValueChange('login', 'password', e.target.value)}
                value={login.password}
                label="Password"
                variant="outlined"
                InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
              {error && <Error>{error}</Error>}
              <LoginButton variant="contained" onClick={(e)=> handleLogin(e)} >Login</LoginButton>
              <Text style={{ textAlign: 'center' }}>OR</Text>
              <SignupButton onClick={() => toggleSignup()} style={{ marginBottom: 20 }}>Create an account</SignupButton> 
          
              <Stack direction="row" spacing={4} style={{marginLeft:'30px', marginTop:'0px'}}>
              
              <Button variant="outlined" style={{background:'white'}} onClick={handleClick1}>
                  <GoogleIcon></GoogleIcon>
                </Button>
                <Button variant="outlined" style={{background:'white'}} onClick={handleClick2}>
                  <MicrosoftIcon></MicrosoftIcon>
                </Button>
                <Button variant="outlined" style={{background:'white'}}>
                  <FacebookIcon></FacebookIcon>
                </Button>
              </Stack>
          </Component>
          :
          <Component className='signInBox'>
              <TextField id="outlined-basic1" label="Full Name"onChange={(e) => onValueChange('signup', 'Fullname', e.target.value)}     value={signup.Fullname} variant="outlined" />
              <TextField id="outlined-basic2" label="Email id" onChange={(e) => onValueChange('signup', 'Email', e.target.value)} value={signup.Email}variant="outlined" />
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  onChange={(e) => onValueChange('signup', 'Gender', e.target.value)}
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">Date of birth</FormLabel>
              
              <input style={{ height: '55px' , backgroundColor:'transparent' , borderRadius:'3.5px',boxShadow:'inherit',border: '1px solid #C3BEB5'}} type="date" id="birthday" name="birthday"  onChange={(e) => onValueChange('signup','DateOfBirth', e.target.value)}/>
              <TextField id="outlined-basic3" type="Phone Number"label="Phone Number" onChange={(e) => onValueChange('signup', 'phone', e.target.value)} value={signup.phone}variant="outlined" />
              <TextField id="outlined-basic4" type="password"label="Password" onChange={(e) => onValueChange('signup', 'password', e.target.value)} value={signup.password}variant="outlined" />
              <TextField id="outlined-basic5" type="password"label="Confirm Password" onChange={(e) => onValueChange('signup', 'confirmPasswaord', e.target.value)} value={signup.confirmPasswaord}variant="outlined" />
              
              <SignupButton onClick={handleSignUp} >Signup</SignupButton>
              <Text style={{ textAlign: 'center' }}>OR</Text>
              <LoginButton variant="contained" onClick={() => toggleSignup()}style={{ marginBottom: 20 }}>Already have an account</LoginButton>
              <Stack direction="row" spacing={4} style={{marginLeft:'30px', marginTop:'0px'}}>
                <Button onClick={handleClick1} variant="outlined" style={{background:'white'}} >
                  <GoogleIcon></GoogleIcon>
                </Button>
                <Button variant="outlined" style={{background:'white'}}>
                  <MicrosoftIcon></MicrosoftIcon>
                </Button>
                <Button onClick={handleClick2} variant="outlined" style={{background:'white'}}>
                  <FacebookIcon></FacebookIcon>
                </Button>
              </Stack>
          </Component>
        }     
      </OuterBox>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default Login;