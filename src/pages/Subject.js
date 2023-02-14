import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import {Row, Col, Container } from "react-bootstrap";
import List from "../components/List";
import Book from "../components/Book";
import Footer from "../components/Footer";
import Loading from "../components/Loading";


export function Subject(props) {
    const {subject} = useParams();

    const [books, setBooks] = useState({ "works": [{ "title": "Loading...." }], "authors":[{"name":""}] });

    useEffect(() => {
        fetch(`https://openlibrary.org/subjects/${subject}.json`)
            .then(response => response.json())
            .then(data => setBooks(data))
    }, [])

    // const subject_name = 
    // console.log(subject.split("_").apply((e)=>e)) //.apply((e)=>e.charAt(0).toUpperCase() + e.slice(1)).join(" "))

    return(
        <>
        <Navbar name={subject}/>
        <Banner/>
        <List heading={`Books related to ${subject.split("_").join(" ")}`}>
            {books.works.length>1? books.works.map((e) => <Col md={2}><Book name={e.title} cover_id={e.cover_id} authors={e.authors} /></Col>): <Loading/>}
        </List>
        <Footer/>
        </>
    )
}