import React, { useState , useContext } from 'react';
import '../style/navbar.css';
import logo from '../images/landingPageImgs/Logo_p.png'
import profileImage from '../images/landingPageImgs/profileImage.png'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { DataContext } from '../context/DataProvider';
const Navbar = () => {
  debugger
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { account } = useContext(DataContext);
  console.log(account.Fullname)
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <img src={profileImage} alt="profile"  />

        <p>User name : {account.Fullname}</p>
       
      </List>
      <Divider />
      <List>
        {['Personal Information', 'My Order', 'logout'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <nav>
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="img"/>
          </div>
          <div className="elements">
            <ul>
              <li><a style={{textDecoration:'none',textDecorationColor:'black',color:'black'}} href="/">HOME</a></li>
              <li>CONTACT US</li>
              <li>MY ORDER</li>
              {isLoggedIn ? (
                <li> <a style={{textDecoration:'none',color:'black'}}><img style={{textDecoration:'none',color:'black'}} src={profileImage} alt="Profile"/></a> </li>
              ) : (
                <li> <a style={{textDecoration:'none',color:'black'}}href="/login">Login / SignUp</a> </li>
              )}
              <li>
              <div style={{marginBottom:'0px'}}>{['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{textDecoration:'none',height:'min-content',color:'black',fontSize:'15px',fontWeight:'bold'}}>Profile</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
              </li>
            </ul>
          </div> 
        </div>
    </nav>
  );
};

export default Navbar;