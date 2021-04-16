import HomeRecent from "./home_recent";
import "./home_recent.css";
import 'react-h5-audio-player/lib/styles.css';
import HomePlaylist from "./home_playlist"
import TestData from "../TestData.json";
import React , {useState} from 'react';
function Home(){

    const [state, setstate] = useState(TestData.map((TestData)=><HomeRecent Src={TestData.Src} Title={TestData.Title} Link={TestData.Link}/>));
    return(
        <div className="home">
        <div className="recent">
        <h1>Recent</h1>
        <div className="RecentDis">{/* Here we will map all the src from data base*/}
          {
            /*  state.map(TestData=>{
                  return(<HomeRecent Src={TestData.Src} Title={TestData.Title} Link={TestData.Link}/>)
              })

              */
              state
          }
          
          </div>
        </div>
        <div className="playlist">
         <h1>Playlist</h1>
            <div className="PlayDis">{/* Map all the src on selection of a card*/}
            <HomePlaylist Src="https://static.billboard.com/files/media/Marshmello-2016-Bellnjerry-billboard-1548-650-2-compressed.jpg" Title="Happy"/>
            <HomePlaylist Src="https://static.billboard.com/files/media/Marshmello-2016-Bellnjerry-billboard-1548-650-2-compressed.jpg" Title="Sad"/>
            
            </div>
            
        </div>
        

        </div>
    );
}
export default Home;