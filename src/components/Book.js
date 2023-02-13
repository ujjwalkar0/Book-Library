import { Card, Row, Col } from "react-bootstrap";

function Author(params) {

  var author_name = "";
  try {
    author_name = params.author_name.map((e) => e.name).join();
  }
  catch {
    author_name = params.author_name;
  }

  // params.author_name.map((e)=>console.log(e.name))

  return (
    <>{author_name}</>
  )
}

export default function Book(params) {
  return (
    <Card className="bookSection">
      <Card.Body>
        <Row>
          <Card.Img variant="top" src={`https://covers.openlibrary.org/b/id/${params.cover_id}-M.jpg`} height="250px" className="bookimage" />
        </Row>
        <div style={{ height: "120px", }}>
          <Card.Title style={{ textAlign: "left", fontSize: "15px" }}>
            {params.name}
          </Card.Title>
          <p style={{overflowY:"scroll"}}>
            By - {params.author_name? params.author_name:params.authors? params.authors.map((e)=>e.name).join() :""} 
          </p>
        </div>
      </Card.Body>
    </Card>
  )
}