import React, {useEffect, useState} from "react";
import axios from 'axios';


import { gapi } from "gapi-script";
// import "./loginform.css"
import { Link } from "react-router-dom";

const SignForm = () => {

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: "79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com",
                scope: ""
            })
        }
        gapi.load('client: auth2', start)
    })

    const [popupStyle, showPopup] = useState("hide");
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[phone,setphone]=useState("");
    const[password,setpass]=useState("");
    const[cpass,setcpass]=useState("");


    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    const Adduser = async  (e)=>{
        e.preventDefault();

        const dataBackend ={name,email,phone,password};
        try {
          // Send the registration data to the backend using axios
          const response = await axios.post('http://localhost:3001/api/signup', dataBackend);
    
          // Handle the response from the backend
          if (response.status === 200) {
            // Registration successful
            console.log('Registration successful!');
          } else {
            // Registration failed
            console.error('Registration failed!');
          }
        } catch (error) {
          console.error('Error occurred while registering:', error);
        }
        
      };
    return (
        <>
        <center className="upper">
            
        < form  className="sign"  onSubmit={Adduser}>
            <h1 style={{color:"White"}}>SIGNUP</h1>
            <br/> 
            <input type="text" placeholder="username" value={name} onChange={(e)=>setname(e.target.value)}/><br/>
            <input type="email" placeholder="email"  value={email} onChange={(e)=>setemail(e.target.value)}/><br/>
            <input type="text" placeholder="Phone number" value={phone} onChange={(e)=>setphone(e.target.value)} /><br/>
            <input type="password" placeholder="password" value={cpass} onChange={(e)=>setcpass(e.target.value)} /><br/>
            <input type="password" placeholder="confirm password"  value={password} onChange={(e)=>setpass(e.target.value)}/><br/>

            <input type="submit" className="login-btn  button1" style={{color:"white" ,textDecoration:"none" }}  value="SIGNUP"/>


            <div className={popupStyle}>
                <h3>Login Failed</h3>
                {
                    name==="" && 
                    <p> Enter Username</p>
                }
                 {
                    email==="" && 
                    <p>Enter email</p>
                }
                 {
                    phone==="" &&
                    <p>Enter phone number</p>
                }
                 {
                    phone.length!==10 &&
                    <p>Enter valid phone number</p>
                }
                 {
                    password===""&& 
                    <p>Enter password</p>
                }
                {
                    password.length==="6"&& 
                    <p>Enter  valid password</p>
                }
                 {
                    cpass==="" && 
                    <p>Enter confirm password</p>
                }
                {
                    cpass!==password && 
                    <p>Confirm password and Password not match</p>
                }
            </div>
            
        </form>
        </center>
        </>
    )
}

export default SignForm