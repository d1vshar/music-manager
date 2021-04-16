import {Route,Switch} from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Albums from "./pages/Albums";
import Manage from "./pages/Manage";
function Display() {
    
    return(
        <div class="container-md">
           <Switch>
            <Route exact path="/home" component={Home}/> 
            <Route path="/library" component={Library}/>
            <Route path="/album" component={Albums}/>
            <Route path="/manage" component={Manage}/>
           </Switch>
           
           
        </div>
    );
}

export default Display;