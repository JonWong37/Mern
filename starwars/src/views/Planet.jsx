import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Planet = () => {

    const[planet, setPlanet] = useState(null)
    const[err, setErr] = useState("")

    const{planet_id} = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${planet_id}/`)
        .then(res => setPlanet(res.data))
        .catch(error => console.log(error))
    },[planet_id])
    
    return (
        <fieldset>
            <legend>Planet.jsx</legend>
            {
                (planet) ? <>
                <h1>Name : {planet.name}</h1>
                <p>Climate : {planet.climate}</p>
                <p>Terrain : {planet.terrain}</p>
                <p>Population : {planet.population}</p>
                </> : <img src="http://www.quickmeme.com/img/c0/c0be4a551f4cb4f3ecf7d5b3b94d515d2d4598467a12358fad645efc13166aa5.jpg" alt="picture" />
            }
        </fieldset>
    )
}

export default Planet