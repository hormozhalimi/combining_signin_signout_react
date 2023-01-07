


# combining_signin_signout_react

/*app.js*/
import React from 'react';
import './App.css';
/*import Login from './components/login';*/
/*import Signup from './components/signup';*/
import SignInOutContainer from './containers';

function App() {
  return (
    <div className="App">

      {/*<Login />*/}
      {/*<Signup/>*/}
      <SignInOutContainer/>
    </div>
  );
}

export default App;


/*index.js*/

import React , {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from '../components/login';
import Signup from '../components/signup';



const SignInOutContainer=()=>{
const [value,setValue]=useState(0);
const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle={width:340 , margin:'20px auto'};

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
    return(
        <Paper elevation ={20} style={paperStyle}>
  <Tabs
    value={value}
    indicatorColor="primary"
    textColor="primary"
    onChange={handleChange}
    aria-label="disabled tabs example"
  >
    <Tab label="Sign In" />
    <Tab label="Sign Up" />
  </Tabs>
  <TabPanel value={value} index={0}>
    <Login handleChange={handleChange}/>
</TabPanel>
<TabPanel value={value} index={1}>
  <Signup/>
</TabPanel>
</Paper>

    );
}

export default SignInOutContainer;


/* login.js*/

import { Grid, Paper, Avatar, Button,TextField,Typography, Link} from '@material-ui/core';
import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';



const Login=({handleChange})=> {
    const paperStyle={padding : 20, height : '73vh', width: 300, margin : "0 auto"}
    const avatarStyle={backgroundColor: 'blue'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper style={paperStyle}>
                <Grid align ='center'>
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Sign in</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                            /> 
                             }
                            label="remmember me"
                           />
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography>
                <Link href="#" >Forgot Password</Link>
                </Typography>

                <Typography> Do you have an account?
                <Link href="#"  onClick={()=>handleChange("event", 1)}>
                    sign Up
                </Link>
                </Typography>
            </Paper>
        </Grid>
    );
}

export default Login;

/* signup.js*/

import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';




const Signup = () => {
    const paperStyle = { padding: '20px', width: 300, margin: "0 auto" };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: 'blue' };
    const marginTop = { margin: 5 };


    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>

                    <form>
                        <TextField fullWidth label='Name' placeholder='Enter your Name' />
                        <TextField fullWidth label='Email' placeholder='Enter your Email' />
                        <FormControl component="fieldset" style={marginTop}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }} >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                        <TextField fullWidth label='Phone Number' placeholder='Enter your Phone Number' />
                        <TextField fullWidth label='Password' placeholder='Enter your Password' />
                        <TextField fullWidth label='Confirm Password' placeholder='Confirm your Passoword' />
                        <FormControlLabel
                            control={<Checkbox name="checkedA" />}
                            label="I accept the term and conditions!"
                        />
                        <Button type='submit' variant='contained' color='primary'>Sign Up</Button>
                    </form>
                </Grid>

            </Paper>
        </Grid>
    );
}

export default Signup;




