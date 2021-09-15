import React,{useEffect, useState} from "react";
import { Input,Form} from 'reactstrap';
import './App.css';
import App from "./App";
import Profile from "./Profile";
import { useHistory } from "react-router";
import {Switch,Route,Redirect} from 'react-router-dom';
import Myposts from "./myposts";
import NavLogin from "./NavLogin";
import { user } from "./user";


function Login(){
    const History=useHistory();
    const [isHome,setisHome]=useState(false);
    const [isLogin,setIsLogin]=useState(false);
    const [isSign,setIsSign]=useState(false);
    const [name,setName]=useState('');
    const [profile,setProfile]=useState('');
    const [mailaddress,setMail]=useState('');
    const [password,setPassword]=useState('');
    const [username,setUserName]=useState('');
    const [userpassword,setUP]=useState('');
     
console.log(isHome);

   const checkUser=(mail,password,e)=>{

        e.preventDefault();
        var flag=false;
        var mailflag=false;
        user.map((item)=>{
            if(item.mail==mail){
               mailflag=true;
                if(item.password==password){
                    flag=true;
                    console.log("Successfully logged in");
                    item.loggedin=true;      
                    setProfile(item.profilesrc);
                    setisHome(true);
                    History.push('./home')
                    
                   
                   
                    
                }
   
            }
        })
        if(flag==false){
            document.getElementById('passwordwarn').innerText='Wrong Password';
            console.log("Wrong Credentials");
        }
        if(mailflag==false){
            document.getElementById('mailwarn').innerText='Wrong Mail';
        }
        if(mailflag==true){
            document.getElementById('mailwarn').innerText='';
        }
       
     
    }

    const checkDetails=(name,password,mail,e)=>{
        e.preventDefault();
        var flag=false;
        var pattern=/^[a-zA-Z]+[^0-9]$/i;
        var usernameflag=false;
        var usermailflag=false;
        var userpasswordflag=false;
        var mailpat=/^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,4}$/i;
        console.log(pattern.test(name))
        if(!(pattern.test(name))){
            usernameflag=true;
            document.getElementById('signuser').innerHTML='Enter Only Alphabets!';
            document.getElementById('signuser').display="block";
        }
        else{
            document.getElementById('signuser').innerHTML='';
        }
        if(!(mailpat.test(mail))){
            usermailflag=true;
            document.getElementById('signmail').innerHTML='Enter Valid Mail!';
            document.getElementById('signmail').display="block";
        }
        else{
            document.getElementById('signmail').innerHTML='';
        }

    
        if(password.length<8){
            userpasswordflag=true;
            document.getElementById('signpassword').innerHTML='Length must be greater than or equal to 8 characters!';
            document.getElementById('signpassword').display="block";
        }
        else{
            document.getElementById('signpassword').innerHTML='';
        }
        if(usermailflag||usernameflag||userpasswordflag){
            flag=true;
       
        }
        else{
            flag=false;
        }
        return flag;
    }
    const addUser=(name,mail,password,e)=>{
        e.preventDefault();

            var flag=checkDetails(name,password,mail,e);
            if(flag==false){
            const userobj={
                name:name,
                mail:mail,
                password:password,
                loggedin:true   
            }
       
            var id=setTimeout(()=>{
                document.getElementById('alert').innerHTML="Account Created Successfully Please Login to continue";
            },1000)
 
            setTimeout(()=>{
                document.getElementById('alert').innerHTML=" ";
                document.getElementById('username').value='';
                document.getElementById('mail').value='';
                document.getElementById('password').value='';
            },3000)
            setTimeout(()=>{
                setIsSign(false);
                setIsLogin(true);

                document.getElementById('log').classList.add('activesign');
                document.getElementById('sign').classList.remove('activesign');
            },3000)
            console.log(userobj);
            console.log(user.length+" Before");
            user.push(userobj);
            console.log(user.length+" After");
           
        }

    }

  
    

    return(
    
    <div className="loginwrap">
        
      <div className="alert" id="alert"></div>
    <NavLogin/>
    <div className="login">
        <div className="buttonwrap">
            <div className="loginbut" id="log" onClick={(e)=>{
                setIsLogin(true);
       
                setIsSign(false);
                e.target.classList.add('activesign');
                document.getElementById('sign').classList.remove('activesign');
              
                }}>
            LOGIN
            </div>
            <div className="signupbut activesign" id="sign" onClick={(e)=>{
                setIsLogin(false);
                setIsSign(false);
                e.target.classList.add('activesign');
           
                document.getElementById('log').classList.remove('activesign');
                }} >
            SIGN UP
            </div>
        </div>
        
        {(isLogin==true) ?
       <div className="loginmodal" id="loginmodal">
        <h4>Login</h4>
        <Form onSubmit={(e)=>{checkUser(username,userpassword,e)}}>
        <Input  className="inputlogin" type="text" id="mail" name="mail" placeholder="Email Address" onChange={(e)=>{setUserName(e.target.value)}} >
        </Input>
        <div className="warning" id="mailwarn"></div>
        
        <Input className="inputlogin"  type="password" id="password" name="password" placeholder="Password" onChange={(e)=>{setUP(e.target.value)}}>
        </Input>
        <div className="warning" id="passwordwarn"></div>
        <button type="submit" className="loginbutton">LOGIN</button>
        </Form>
        </div>
        :
       
        <div className="loginmodal" id="signupmodal">
        <h4>Sign Up, It's Free!</h4>
        <Form onSubmit={(e)=>{addUser(name,mailaddress,password,e)}}>
        <Input className="inputlogin" type="text" id="username" name="username" placeholder="Name" onChange={(e)=>{setName(e.target.value)}} >
        </Input>
        <span className="warning" id="signuser"></span>
        <Input  className="inputlogin" type="text" id="mail" name="mail" placeholder="Email Address" onChange={(e)=>{setMail(e.target.value)}} >
        </Input>
        <span className="warning" id="signmail"></span>
        
        <Input className="inputlogin"  type="password" id="password" name="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} >
        </Input>
        <span className="warning" id="signpassword"></span>
        <button  type="submit" className="loginbutton" >SIGN UP</button>
        </Form>
        </div>
    }
    
    </div>

 
    </div>
)

   

}

 export default Login;