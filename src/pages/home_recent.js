import {Card,Button, CardDeck} from "react-bootstrap"
import "./home_recent.css";
function HomeRecent({Src,Title,Link}){
   
    return(
        <CardDeck>
        <Card style={{ width: '10rem', height:'12.5rem', margin:'8px'}}>
        <Card.Img variant="top" src={Src} style={{height:'6.5rem'}} />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
         <Button variant="primary" >Play</Button>
        </Card.Body>
      </Card>
      </CardDeck>
    )
}

export default HomeRecent;