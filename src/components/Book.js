import { Card, Row, Col } from "react-bootstrap";

export default function Book(params) {
  return (
    <Card className="bookSection">
      <Card.Body>
        <Row>
          <Card.Img variant="top" src={`https://covers.openlibrary.org/b/id/${params.cover_id}-M.jpg`} height="250px" className="bookimage" />
        </Row>
        <div style={{ height: "120px" }} id="bookSec">
          <Card.Title style={{ textAlign: "left", fontSize: "15px" }}>
            {params.name}
          </Card.Title>
          <p>
            By - {params.author_name? params.author_name:params.authors? params.authors.map((e)=>e.name).join() :""} 
          </p>
        </div>
      </Card.Body>
    </Card>
  )
}