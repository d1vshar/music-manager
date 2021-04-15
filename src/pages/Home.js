import HomeRecent from "./home_recent";
import "./home_recent.css";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import HomePlaylist from "./home_playlist"
function Home(){
    return(
        <div className="home">
        <div className="recent">
        <h1>Recent</h1>
        <div className="RecentDis">{/* Here we will map all the src from data base*/}
          <HomeRecent Src="https://static.billboard.com/files/media/Marshmello-2016-Bellnjerry-billboard-1548-650-2-compressed.jpg" Title="Marshmello"/>
          <HomeRecent Src="https://static.billboard.com/files/media/Marshmello-2016-Bellnjerry-billboard-1548-650-2-compressed.jpg" Title="Marshmello"/>
          <HomeRecent Src="https://static.billboard.com/files/media/Marshmello-2016-Bellnjerry-billboard-1548-650-2-compressed.jpg" Title="Marshmello"/>
          <HomeRecent Src="https://static.billboard.com/files/media/Marshmello-2016-Bellnjerry-billboard-1548-650-2-compressed.jpg" Title="Marshmello"/>
          <HomeRecent Src="https://static.billboard.com/files/media/Marshmello-2016-Bellnjerry-billboard-1548-650-2-compressed.jpg" Title="Marshmello"/>
          <HomeRecent Src="https://static.billboard.com/files/media/Marshmello-2016-Bellnjerry-billboard-1548-650-2-compressed.jpg" Title="Marshmello"/>
          <HomeRecent Src="https://static.billboard.com/files/media/Marshmello-2016-Bellnjerry-billboard-1548-650-2-compressed.jpg" Title="Marshmello"/>
          
          </div>
        </div>
        <div className="playlist">
         <h1>Playlist</h1>
            <div className="PlayDis">{/* Map all the src on selection of a card*/}
            <HomePlaylist Src="https://static.billboard.com/files/media/Marshmello-2016-Bellnjerry-billboard-1548-650-2-compressed.jpg" Title="Happy"/>
            <HomePlaylist Src="https://static.billboard.com/files/media/Marshmello-2016-Bellnjerry-billboard-1548-650-2-compressed.jpg" Title="Sad"/>
            
            </div>
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
export default Home;