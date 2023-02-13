import { useState, } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useSearchParams } from "react-router-dom";

export default function Banner() {
    const [placeholder, setPlaceholder] = useState("Search books by title...");
    const [searchParams] = useSearchParams();

    return (
        <div className="banner">
            <center>
                <form method="get" action="search">
                    <select name="by" id="searchBy" onChange={(e) => setPlaceholder(`Search books by ${e.target.value}...`)} defaultValue={searchParams.get('by')}>
                        <option value="title">Title</option>
                        <option value="author">Author</option>
                    </select>
                    <input type="search" name="query" id="search" placeholder={placeholder} defaultValue={searchParams.get('query')} />
                    <button type="submit" id="searchButton">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </center>
        </div>
    )
}