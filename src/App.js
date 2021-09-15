import './App.css';
import { cardarr } from './cardarr';
import React,{ useEffect, useState} from 'react';
import SocialCard from './SocialCard';
import NavBar from './Nav';
import { user } from './user';
import Profile from './Profile';
import Login from "./LoginPage";
import {Switch,Route,Redirect} from 'react-router-dom';

import {Nav,NavbarBrand,Collapse,NavbarToggler,Navbar,NavItem,NavLink} from 'reactstrap';

function App(props) {
  const [card,AddCard]=useState(cardarr);
  const [name,setName]=useState('');
  const [profilesrc,setprofile]=useState('');
  const[isOpen,setIsOpen]=useState(false);
  const toggle=()=>setIsOpen(!isOpen)


useEffect(()=>{
  user.map((item)=>{
    if(item.mail=="mail"){
      setName(item.name);
      setprofile(item.profilesrc)
    }
  })
})
  return (


    <div className="AppWrap">
  

     



        <div className="customnav">
            <NavBar  name={name} username={user.username} password={user.password}/>
              

                    
        </div>
       <div className="App">
      {card.map((item,i)=>{
        return(
        <SocialCard key={i} item={item} username={name} profilesrc={profilesrc}/>
        )
      })
      }
 
     </div>
  
    </div>
 
  );
}

export default App;
