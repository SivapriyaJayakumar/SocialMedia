import React, { useState } from "react";
import {Card,CardText,CardBody,CardImg} from 'reactstrap';
import { svg } from "./retweetgreen";
import "./App.css";
function SocialCard(props){
    const item=props.item;

    const [isLove,setLove]=useState(false);
    const [isRT,setRT]=useState(false);
    const [cmt,setcmt]=useState('');
    const [isDisplayComments,setCommentsDisplay]=useState(false);
    const [comments_no,countComments]=useState(item.comments_no);
     const br=<br/>;
    const callLove=(e,isLove)=>{
       
        if(isLove){
            item.likes+=1;
            e.target.setAttribute('fill','#EF4444');
        }
        else{
            item.likes-=1;
            e.target.setAttribute('fill','#000000');
            
          
        }
    }

    const callRT=(e,isRT)=>{
       
        if(isRT){
            item.retweets+=1;
            e.target.setAttribute('fill','#2563EB');
        }
    }
   

    return(
        <div className="cardwrap">
            <div className="secwrap">
            <div className="avatarwrap">
                <div className="avatar"><img src={item.profilesrc} className="avatarimg"  alt={item.alt}/></div>
            </div>
            <div className="secondcol" id="secondcol">
            <div className="username">{item.username}
                <span className="userid">{item.userid} </span>
                <div className="dot"></div>
                <span className="date"> {item.date} </span>
            </div>
            <div className="content">{item.content}</div>
            {
            (item.attach===true)   ?
            <div className="cardlink">
                <Card className="cardcustom">
                <CardBody className="cardbodycustom">
                    {(item.cardimg!=null)?
                   
                    <CardImg className="custcardimg" src={item.cardimg} />
                        :
                    <></>
                    }
                    <CardText className="cardtextcustom">
                    {item.cardhead!=null?
                        <span className="headingcard">{item.cardhead}</span>
                        :<></>
                    }
                    {item.cardbodytext!=null?
                          <p>{item.cardbodytext} </p>
                          :<></>
                    }
                    {item.websitelink!=null?
                          <a className="websitelink"rel="noreferrer" target="_blank" href={item.websitelink}>{item.websitename}</a>
                          :<></>
                    }
                        </CardText>
                    </CardBody>
                </Card>
            </div>
                : <></>
            }
           
           
            <div className="reactions">
                <div className="comment">
                <svg xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 0 24 24" className="commenticon" onClick={()=>{setCommentsDisplay(!isDisplayComments)}} style={{fill: "rgba(0, 0, 0, 1)"},{transform: ";msFilter:"}}><path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path></svg>
                    <span className="count">{comments_no}</span>
                </div>
                <div className="retweet">
                <svg viewBox="0 0 24 24"
                     aria-hidden="true"
                     className="retweeticon"
                     fill="#000000"
                     onClick={(e)=>{   
                        callRT(e,true)
                        setRT(true);
                        }}
                    >
                    <g><path d="M23.615 15.477c-.47-.47-1.23-.47-1.697 0l-1.326 1.326V7.4c0-2.178-1.772-3.95-3.95-3.95h-5.2c-.663 0-1.2.538-1.2 1.2s.537 1.2 1.2 1.2h5.2c.854 0 1.55.695 1.55 1.55v9.403l-1.326-1.326c-.47-.47-1.23-.47-1.697 0s-.47 1.23 0 1.697l3.374 3.375c.234.233.542.35.85.35s.613-.116.848-.35l3.375-3.376c.467-.47.467-1.23-.002-1.697zM12.562 18.5h-5.2c-.854 0-1.55-.695-1.55-1.55V7.547l1.326 1.326c.234.235.542.352.848.352s.614-.117.85-.352c.468-.47.468-1.23 0-1.697L5.46 3.8c-.47-.468-1.23-.468-1.697 0L.388 7.177c-.47.47-.47 1.23 0 1.697s1.23.47 1.697 0L3.41 7.547v9.403c0 2.178 1.773 3.95 3.95 3.95h5.2c.664 0 1.2-.538 1.2-1.2s-.535-1.2-1.198-1.2z"></path></g>
                </svg> 
                     
                        
                        
                    <span className="count">{item.retweets}</span>
                </div>
                <div className="like">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)"},{transform: ";msFilter:" }}
                onClick={(e)=>{
                        callLove(e,!isLove)
                        setLove(!isLove);
                    }
                    }   
                className="likeicon" id="like"><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path>
                </svg> 
                    <span className="count">{item.likes}</span>
                </div>
            </div>
            <div className="commentsdisplay" id="commentsdisplay">
               
                {
                (isDisplayComments!==false) ?
                <>  
                    <div className="cardcomment">
                        <div className="commentavatarimg">
                            <img className="commentavatar" src={props.profilesrc}/>
                            
                        </div>
                        <div className="userdetailwrap">
                        <div className="username">{props.username}</div>
                        <div className="username" > <input type="text"id="commentofuser" placeholder="Add your comment" style={{padding:"4px"}} onChange={(e)=>{setcmt(e.target.value)}}/></div>
                        <span className="addbtn"><button className="btnadd" onClick={
                            ()=>{
                            item.comment.push(
                            {
                                str:cmt,
                                username:props.username,
                                profilesrc:props.profilesrc

                            })
                            item.comments_no++;
                            countComments(item.comments_no)
                            }
                        }
                            >POST</button></span>
                        </div>
                    </div>
                
                    <div className="commentswrap">
                    {item.comment.map(
                        (string,i)=>{
                            return(
                                <div key={i} className="cardcomment">
                              
                                    <div className="commentavatarimg"><img className="avatarimg" width="100%" src={string.profilesrc}/></div>
                                    <div className="userdetailwrap">
                                    <div className="username">{string.username}</div>
                                    <p className="commentstr">{string.str} </p>
                                    </div>
                                   
                                </div>
                            )
                        }
                    )}
        
              
                    
                    </div>
                    </>
                :
                <></>
                }
            </div>
            </div>
            </div>
        </div>
    )
}

export default SocialCard;