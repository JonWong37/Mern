import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Pokemon = () => {
    
    const[pokelist, setPokeList] = useState([])
    const[err, setErr] = useState("")

    // use effect
    // useEffect(() => {
    //     makeApiCall()
    // }, [])


    const makeApiCall = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(res => {
            const {results} = res.data
            setPokeList(results)
        })
        .catch(error => setErr("Oops the pokemon got away!"))
    }

    
    return (
        <fieldset>
            <legend>Pokemon.jsx</legend>
            <button onClick={makeApiCall}> Catch some Pokemons!</button>
            {err ? <p>{err}</p> : null}
            {
                pokelist.map((poke) => <p>{poke.name}</p>)
            }
        </fieldset>
    )
}

export default Pokemon