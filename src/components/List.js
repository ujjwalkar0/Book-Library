import {Row, Col, Container } from "react-bootstrap";
import Book from "./Book";


export default function List(props){
    console.log(props.name)
    return (
        <Container>
            <center>
            <h1>List of Books...</h1>
        <Row>
            {props.children}

            {/* // .books.works.map((e) =><Col><Book name={e.title} cover_id={e.cover_id}/></Col>)} */}
        </Row>
        </center>
        </Container>
    )
}