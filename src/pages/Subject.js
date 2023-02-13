import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import {Row, Col, Container } from "react-bootstrap";
import List from "../components/List";
import Book from "../components/Book";
import Footer from "../components/Footer";


export function Subject(props) {
    const {subject} = useParams();

    const [books, setBooks] = useState({ "works": [{ "title": "Loading...." }], "authors":[{"name":""}] });

    useEffect(() => {
        fetch(`https://openlibrary.org/subjects/${subject}.json`)
            .then(response => response.json())
            .then(data => setBooks(data))
    }, [])

    const [searchParams] = useSearchParams();
    return(
        <>
        <Navbar name={subject}/>
        <Banner/>
        <List>
            {books.works.map((e) => <Col md={2}><Book name={e.title} cover_id={e.cover_id} authors={e.authors} /></Col>)}
        </List>
        <Footer/>
        </>
    )
}