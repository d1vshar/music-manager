import {Card,Button, CardDeck} from "react-bootstrap"
import "./home_recent.css";
function HomeRecent({Src,Title}){
    return(
        <CardDeck>
        <Card style={{ width: '10rem', height:'12.5rem', margin:'8px'}}>
        <Card.Img variant="top" src={Src} />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
         <Button variant="primary">Play</Button>
        </Card.Body>
      </Card>
      </CardDeck>
    )
}

export default HomeRecent;