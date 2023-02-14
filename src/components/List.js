import { Row, Col, Container } from "react-bootstrap";
import Book from "./Book";


export default function List(props) {
    return (
        <Container>
            <center>
                <h3>{props.heading}</h3>
                <Row>
                    {props.children}
                </Row>
            </center>
        </Container>
    )
}