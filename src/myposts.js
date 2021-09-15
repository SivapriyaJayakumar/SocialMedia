import React, {  useEffect, useState } from "react";
import NavBar from "./Nav";
import  { user } from './user';
import {Input,Form} from 'reactstrap';
import { cardarr } from "./cardarr";
import SocialCard from "./SocialCard";
function Myposts(){
    const userob=user[0];
    const [content,setContent]=useState('');
    const [postadd,setpadd]=useState(false);
var postnew;
    const showpost=(e)=>{
      postnew={
                profilesrc:userob.profilesrc,
                alt:"avatar",
                username:userob.username,
                userid:userob.userid,
                date:"sep 5",
                content:{content},
                attach:false,
                cardimg:"",
                cardhead:"",
                cardbodytext:"",
                websitelink:"",
                websitename:"",
                likes:0,
                retweets:0,
                comments_no:0,
                comment:[]
            }
            

        e.preventDefault();
        console.log(postnew);
        setpadd(true);
        cardarr.push(postnew);
        console.log("pushed");

        
    }

    return(
        <div>
            <NavBar name={userob.name} />
            
            <div className="post">
                <Form onSubmit={showpost}>
                <Input type="textarea" rows="10" cols="5" placeholder="what's on ur mind!?" className="entercontent pc" onChange={(e)=>{
                    setContent(e.target.value);
                }}>

                </Input>
                <button className="postbut" type="submit">Create a post</button>
                </Form>
            </div>
            {postadd==true?
           <div className="socialcards">
           <SocialCard user={userob} item={postnew}/>
           </div>
           :
           <></>
            }
        </div>
    )
}

export default Myposts;

