import React from "react";
import NavBar from "./Nav";
import {Input,Label} from 'reactstrap';
import {user} from './user';
function Profile(props){
    const userob=user[0];
    const handlechange=()=>{
        var obj=document.getElementsByClassName('detailslist');
        for(var i=0;i<obj.length;i++){            
            obj.item(i).setAttribute("disabled","true");
        }
        document.getElementById('savechange').style.display="none";
    }
    return(
        <div>
            <NavBar name={userob.name} />
            <div className="profilewrap">
                <div className="editbutwrap">
                <h4 className="profilehead"> My Profile</h4>
                <div className="editwrap">
                <button className="editpro" onClick={()=>{
                    console.log("edit");
                    var obj=document.getElementsByClassName('detailslist');
                    console.log(obj.length);
                    for(var i=0;i<obj.length;i++){
                    console.log(obj.item(i));
                    obj.item(i).removeAttribute("disabled");
                    //obj.item(i).classList.add('detailslistchange');
                    //obj.item(i).classList.remove('detailslist');
                    }
                    document.getElementById('savechange').style.display="block";
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "white"}}><path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"></path></svg></button>
                </div>
                </div> 
                <div className="profiledetails">
                    <h5 className="detailshead">Your Details</h5>
                    
                    
                    <div className="detailphoto">
                    <div className="userprofile">
                        <img  className="photo" src={userob.profilesrc}/>
                    </div>
                    <div className="details">
                        <Label className="profilelabel" for="name">Name</Label> 
                        <Input type="text" className="detailslist" id="name" name="name" disabled="true" defaultValue={userob.name}/>
                        <Label className="profilelabel" for="name">Mail</Label> 
                        <Input type="text"  className="detailslist" id="mail" name="mail" disabled="true" defaultValue={userob.mail} />
                        <Label className="profilelabel" for="name">Phone</Label> 
                        <Input type="text" className="detailslist" id="phone" name="phone" disabled="true" defaultValue={userob.phone} />
                        <Label className="profilelabel" for="name">City</Label> 
                        <Input type="text"   className="detailslist"id="city" name="city" disabled="true" defaultValue={userob.city} />

                    </div>
                    <div className="socialdetails">
                        <Label className="profilelabel" for="facebook">Facebook</Label> 
                        <Input type="text" className="detailslist" id="facebook" name="facebook" disabled="true" defaultValue={userob.fbid} />
                        <Label className="profilelabel" for="insta">Instagram</Label> 
                        <Input type="text"  className="detailslist" id="insta" name="insta" disabled="true" defaultValue={userob.insta} />
                        <Label className="profilelabel" for="twitter">Twitter</Label> 
                        <Input type="text"  className="detailslist" id="twitter" name="twitter" disabled="true" defaultValue={userob.twitter} />
                    </div>
                    
                    </div>
                    <button className="editpro savechange" id="savechange" onClick={handlechange}>Save Changes</button>
                </div>
            </div>
        </div>
    )
}
export default Profile;