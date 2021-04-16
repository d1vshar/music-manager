import {Card,Button, CardDeck} from "react-bootstrap";
import "./LibraryCard.css"
function LibraryCard({Src,Title}){
    return(
      <div className="Card">
        <CardDeck>
        <Card style={{ width: '12rem', height:'14rem', margin:'10px'}}>
        <Card.Img variant="top" src={Src} />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
         <Button variant="primary">Play</Button>
        </Card.Body>
      </Card>
      </CardDeck>
      
      </div>
    );
}
export default LibraryCard;