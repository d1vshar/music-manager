import {Route,Switch} from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Albums from "./pages/Albums";
import Manage from "./pages/Manage";
import AudioPlayer from 'react-h5-audio-player';
import "./pages/home_recent.css"
function Display() {
    
    return(
        <div className="container-md">
           <Switch>
            <Route exact path="/home" component={Home}/> 
            <Route path="/library" component={Library}/>
            <Route path="/album" component={Albums}/>
            <Route path="/manage" component={Manage}/>
           </Switch>
           <div className="audioPlayer">
            <AudioPlayer
            autoPlay
            src="http://example.com/audio.mp3"
            onPlay={e => console.log("onPlay")}
    // other props here
  />
  </div>           
           
        </div>
    );
}

export default Display;