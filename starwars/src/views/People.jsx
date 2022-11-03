import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


const People = () => {

    const[people, setPeople] = useState(null)
    const[err, setErr] = useState("")

    const {people_id} = useParams()

    const navigate = useNavigate()
    const homeworld = (e) => {
        e.preventDefault();
        navigate(`${people.homeworld}`)
    }

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${people_id}/`)
        .then(res => setPeople(res.data))
        .catch(error => setErr("These are not the drones you are looking for"))
    },[people_id])

    const home = (() =>{
        axios.get(`${people.homeworld}`)
        .then(res => <p>{res.data.homeworld}</p>)
        .catch(err => console.log(err))
    })


    return (
        <fieldset>
            <legend>People.jsx</legend>
            {
                (people) ? <>
                <h1>Name : {people.name}</h1>
                <p1>Height : {people.height} cm</p1>
                <p> Gender : {people.gender}</p>
                <p> Hair Color : {people.hair_color}</p>
                <p>{people.homeworld}</p>
                <Link to={homeworld}>Homeworld</Link>
                </> : <img src="http://www.quickmeme.com/img/c0/c0be4a551f4cb4f3ecf7d5b3b94d515d2d4598467a12358fad645efc13166aa5.jpg" alt="picture" />
            }
        </fieldset>
    )
}

export default People