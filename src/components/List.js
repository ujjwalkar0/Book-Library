import { Row, Col, Container } from "react-bootstrap";
import Book from "./Book";


export default function List(props) {
    return (
        <Container>
            <center>
                <h1>List of Books...</h1>
                <Row>
                    {props.children}
                </Row>
            </center>
        </Container>
    )
}