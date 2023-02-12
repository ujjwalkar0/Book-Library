import { Card } from "react-bootstrap";

export default function Book(params){
    return(
    <Card style={{ width: '13rem'}}>
      <Card.Img variant="top" src={`https://covers.openlibrary.org/b/id/${params.cover_id}-M.jpg`} height="250px"/>
      <Card.Body>
        <Card.Title>{params.name}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  )
}