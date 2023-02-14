import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import List from "../components/List";
import Book from "../components/Book";
import Footer from "../components/Footer";
import PaginatedItems from "../components/Pagination";
import Loading from "../components/Loading";

export function SearchResult(props) {
    const { subject } = useParams();
    const [searchParams] = useSearchParams();

    const [books, setBooks] = useState({ "docs": [{ "title": "Loading....", }], "numFound": 0, "author_name": "none" });
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const url = `https://openlibrary.org/search.json?${searchParams.get('by')}=${searchParams.get('query')}&offset=${offset}&limit=12`
        fetch(url)
            .then(response => response.json())
            .then(data => setBooks(data))
        document.getElementById("page").value = offset / 10;
    }, [offset])

    const nextPage = () => {
        if (offset < books.numFound - 10) setOffset(offset + 10);
        document.getElementById("page").value = offset / 10;
    }

    const prevPage = () => {
        if (offset >= 10) setOffset(offset - 10);
        document.getElementById("page").value = offset / 10;

    }

    const setPage = (e) => {

        if (offset < books.numFound - 10) {
            setOffset((document.getElementById("page").value - 1) * 10)
        }
    }

    const no_of_pages = Math.ceil(books.numFound / 10);

    return (
        <>

            <Navbar name={subject} />
            <Banner />
            <List heading="Search Result">
                {books.docs.length > 1 ? books.docs.map((e) => <Col md={2}><Book name={e.title} cover_id={e.cover_i} author_name={e.author_name} /></Col>) : <Loading />}
            </List>
            <div className="right">
                {offset >= 10 ? <input type="button" onClick={prevPage} value="Prev" className="button" /> : ''}

                <select className="button" onChange={(e) => setPage()} id="page">
                    <option value="" hidden>Choose Page...</option>
                    {Array.apply(0, Array(no_of_pages)).map((e, i) => <option value={i}>{i + 1}</option>)}
                </select>

                {offset < books.numFound - 10 ? <input type="button" onClick={nextPage} value="Next" className="button" /> : ''}
            </div>
            <Footer />
        </>
    )
}