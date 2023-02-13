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

export function SearchResult(props) {
    const { subject } = useParams();
    const [searchParams] = useSearchParams();

    const [books, setBooks] = useState({ "docs": [{ "title": "Loading....", }], "numFound": 0, "author_name": "none" });
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const url = `https://openlibrary.org/search.json?${searchParams.get('by')}=${searchParams.get('query')}&offset=${offset}&limit=12`

        console.log(url);

        fetch(url)
            .then(response => response.json())
            .then(data => setBooks(data))
    }, [offset])

    const nextPage = () => {
        if (offset < books.numFound - 10) setOffset(offset + 10);
    }

    const prevPage = () => {
        if (offset >= 10) setOffset(offset - 10)
    }

    const setPage = (e) => {
        if (offset < books.numFound - 10) {
            setOffset((e - 1) * 10)
        }
    }

    const no_of_pages = Math.ceil(books.numFound / 10);

    // try{
    //     console.log(offset/10);

    //     for (let i=0; i<no_of_pages; i++){
    //         document.getElementById(`button${i}`).style.backgroundColor = "blue";
    //     }
    //     document.getElementById(`button${offset/10}`).style.backgroundColor = "red";
    // }
    // catch(e) {console.log(e)}

    return (
        <>

            <Navbar name={subject} />
            <Banner />
            <List>
                {books.docs.map((e) => <Col md={2}><Book name={e.title} cover_id={e.cover_i} author_name={e.author_name} /></Col>)}
            </List>
            <PaginatedItems itemsPerPage={4} />
            <div id="pagination">
                {offset >= 10 ? <input type="button" onClick={prevPage} value="Prev" className="button" /> : ''}
                {Array.apply(0, Array(no_of_pages)).map((e, i) => <input type="button" id={`button${i}`} onClick={(e) => setPage(e.target.value)} value={i + 1} className="button" />)}
                {/* ... */}
                {/* {Array.apply(0, Array(no_of_pages)).slice(no_of_pages-5,no_of_pages).map((e,i)=><input type="button" id={`button${no_of_pages+i-4}`} onClick={(e)=>setPage(e.target.value)} value={no_of_pages+i-4} className="button"/>)} */}

                {offset < books.numFound - 10 ? <input type="button" onClick={nextPage} value="Next" className="button" /> : ''}
            </div>
            <Footer />
        </>
    )
}