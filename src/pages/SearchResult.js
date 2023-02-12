import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import {Row, Col, Container } from "react-bootstrap";
import List from "../components/List";
import Book from "../components/Book";


export function SearchResult(props) {
    const {subject} = useParams();
    const [searchParams] = useSearchParams();

    const [books, setBooks] = useState({ "docs": [{ "title": "Loading....", }], "numFound": 0 });
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const url = `https://openlibrary.org/search.json?${searchParams.get('by')}=${searchParams.get('query')}&offset=${offset}&limit=10`

        fetch(url)
            .then(response => response.json())
            .then(data => setBooks(data))
    }, [offset])

    const nextPage = () => {
        if (offset<books.numFound-10) setOffset(offset+10);
    }
    
    const prevPage = () => {
        if (offset>=10) setOffset(offset-10)
    }

    const setPage = (e) => {
        if (offset<books.numFound-10) {
            setOffset((e-1)*10)
        }
    }

    const no_of_pages = Math.ceil(books.numFound/10);

    try{
        for (let i=0; i<no_of_pages; i++){
            document.getElementById(`button${i}`).style.backgroundColor = "blue";
        }
        document.getElementById(`button${offset/10}`).style.backgroundColor = "red";
    }
    catch(e) {console.log(e)}


    // console.log(document.getElementById(`button${offset/10}`).value)//.style//.backgroundColor = "red";


    return(
        <>
        
        <Navbar name={subject}/>
        <Banner/>
        <List>
            {books.docs.map((e) =><Col><Book name={e.title} cover_id={e.cover_i}/></Col>)}
        </List>

            <div id="pagination">
                {offset>=10?<input type="button" onClick={prevPage} value="Prev" className="button" />:''}
                {Array.apply(0, Array(no_of_pages)).map((e,i)=><input type="button" id={`button${i}`} onClick={(e)=>setPage(e.target.value)} value={i+1} className="button"/>)}
                {offset<books.numFound-10?<input type="button" onClick={nextPage} value="Next" className="button"/>:''}
                {/* <input type="button" value={offset} /> */}
            </div>
        </>
    )
}