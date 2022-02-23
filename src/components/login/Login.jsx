import React from 'react';
import './login.css';
import Button from '@mui/material/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';



const Login = () => {
    return (
        <div className="wholeLogin">
            <h1>Login</h1>
            <h4>By signing you agree to our Term and privacy policy.</h4>
        
        
        <div className="loginRegister">
            
        <Button
            className="loginButton" 
            variant="text" >
              Login
        </Button>

        <Button 
          className="registerButton"
          variant="text">
         Register 
         </Button>
      </div> 

      <div className="loginForm">
           
                        <div className="Mail">
                                <TextField
                                    id="standard-disabled"
                                    id="input-with-icon-textfield"
                                    InputProps={{
                                        startAdornment: (
                                        <InputAdornment position="start">
                                          <MailOutlineIcon />
                                        </InputAdornment>),
                                    }}
                                    variant="standard"
                                    type="text"
                                    placeholder="E-Mail"
                                    onChange={(event) => {
                                        const value = event.target.value;
                                        this.setState({address: value});
                                    }}
                                />
                                
                            </div>
                            <br></br><br></br><br></br>
                       <div className="password">
                                <TextField
                                    id="standard-disabled"
                                    id="input-with-icon-textfield"

                                    InputProps={{
                                        startAdornment: (
                                        <InputAdornment position="start">
                                          <LockOutlinedIcon />
                                        </InputAdornment>),
                                    }}

                                    variant="standard"
                                    placeholder="Password"
                                    onChange={(event) => {
                                        const value = event.target.value;
                                        this.setState({review: value});
                                    }}
                                    />

                        </div>
                        <br></br>  
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Remember password" />

                        <br></br><br></br><br></br>  

        <Button
            className="loginButton2">
              Login
        </Button>
        
        
        </div>
        <p> or connect with</p>

        
        </div>

                             
                            
                      

                        
                           


    

) }
        

    

export default Login;
