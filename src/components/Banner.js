import { useState, } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Banner() {
    const [placeholder, setPlaceholder] = useState("Search books by title...");

        return (
            <div className="banner">
                <center>
                    <form method="get" action="search">
                        <select name="by" id="searchBy" onChange={(e)=>setPlaceholder(`Search books by ${e.target.value}...`)}>
                            <option value="title">Title</option>
                            <option value="author">Author</option>
                        </select>
                        <input type="search" name="query" id="search" placeholder={placeholder}/>
                        <button type="submit" id="searchButton">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>
                </center>
            </div>
        )
    }