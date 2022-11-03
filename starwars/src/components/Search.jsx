import axios from 'axios'
import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Search = () => {

    const[category, setCategory] = useState("people")
    const[id, setId] = useState(null)

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}/`)
    }

    return (
        <fieldset>
            <legend>Search Bar</legend>
        <form onSubmit={submitHandler}>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="people">People</option>
                <option value="planet">Planet</option>
            </select>
            <input type="number" onChange={(e) => setId(e.target.value)} />
            <button>Search</button>
        </form>
        </fieldset>
    )
}

export default Search