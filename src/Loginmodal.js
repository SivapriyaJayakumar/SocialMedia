import './App.css';
import App from "./App";
import Profile from "./Profile";
import Login from './LoginPage';
import NotFound from './notfound'
import {Switch,Route,Redirect} from 'react-router-dom';
import Myposts from './myposts';



function LoginNavigator(){

   return(
       <div>
         
    <Switch>
   
    <Route path="/home"><App /></Route>
    <Route exact path="/profile" ><Profile/></Route>
    <Route exact path="/"><Login/></Route>
    <Route path="/posts"><Myposts/></Route>
    <Route path="*"><NotFound/></Route>
         
</Switch>
</div>
   )
}
export default LoginNavigator;