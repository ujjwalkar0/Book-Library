import { Card } from "react-bootstrap";
import { Navigate } from "react-router-dom";

export default function SubjectName(params) {
  return (
    <a href={`/${params.href}`} style={{textDecoration:"none"}}>
      <Card className="bookSection">
        <Card.Img variant="top" src={params.img} height="250px" className="subjectCover" />
        <center>
          <h3>{params.sub_name}</h3>
        </center>
      </Card>
    </a>
  )
}