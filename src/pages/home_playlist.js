import {Card,Button, CardDeck} from "react-bootstrap"

function HomePlaylist({Src,Title}){
    return(
        <CardDeck>
        <Card style={{ width: '10rem', height:'12.5rem', margin:'8px'}}>
        <Card.Img variant="top" src={Src} style={{height:'6.5rem'}} />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
         <Button variant="primary">Select</Button>
        </Card.Body>
      </Card>
      </CardDeck>
    );
}

export default HomePlaylist;