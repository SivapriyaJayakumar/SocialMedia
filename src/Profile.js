import React from "react";
import NavBar from "./Nav";
import {Input,Label} from 'reactstrap';
import {user} from './user';
function Profile(props){
    const userob=user[0];
    return(
        <div>
            <NavBar name={userob.name} />
            <div className="profilewrap">
                <h4 className="profilehead"> My Profile</h4>
                <div className="profiledetails">
                    <h5 className="detailshead">Your Details</h5>
                    <div className="detailphoto">
                    <div className="userprofile">
                        <img  className="photo" src={userob.profilesrc}/>
                    </div>
                    <div className="details">
                        <Label className="profilelabel" for="name">Name</Label> 
                        <Input type="text" className="detailslist" id="name" name="name" disabled value={userob.name}/>
                        <Label className="profilelabel" for="name">Mail</Label> 
                        <Input type="text"  className="detailslist" id="mail" name="mail" disabled value={userob.mail}/>
                        <Label className="profilelabel" for="name">Phone</Label> 
                        <Input type="text" className="detailslist" id="phone" name="phone" disabled value={userob.phone}/>
                        <Label className="profilelabel" for="name">City</Label> 
                        <Input type="text"   className="detailslist"id="city" name="city" disabled value={userob.city}/>
                        

               
                    </div>
                    <div className="socialdetails">
                        <Label className="profilelabel" for="facebook">Facebook</Label> 
                        <Input type="text" className="detailslist" id="facebook" name="facebook" disabled value={userob.fbid}/>
                        <Label className="profilelabel" for="insta">Instagram</Label> 
                        <Input type="text"  className="detailslist" id="insta" name="insta" disabled value={userob.insta}/>
                        <Label className="profilelabel" for="twitter">Twitter</Label> 
                        <Input type="text"  className="detailslist" id="twitter" name="twitter" disabled value={userob.twitter}/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;