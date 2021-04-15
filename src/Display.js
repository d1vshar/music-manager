import {Route,Switch} from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Albums from "./pages/Albums";
import Manage from "./pages/Manage";
function Display() {
    
    return(
        <div class="container-md">
           <Switch>
            <Route exact  component={Home}/> 
            <Route path="/Library" component={Library}/>
            <Route path="/Album" component={Albums}/>
            <Route path="/Manage" component={Manage}/>
           </Switch>
           
           
        </div>
    );
}

export default Display;