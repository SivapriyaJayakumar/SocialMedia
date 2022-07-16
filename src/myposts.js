import React, {  useEffect, useState } from "react";
import NavBar from "./Nav";
import  { user } from './user';
import {Input,Form} from 'reactstrap';
import { cardarr } from "./cardarr";
import SocialCard from "./SocialCard";
import NotFound from "./notfound";
function Myposts(){
    const userob=user[0];
        
    

    return(
        <div>
            <NavBar name={userob.name} /> 
           <NotFound/>
        </div>
    )
}

export default Myposts;

