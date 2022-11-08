import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Create = () => {

    const navigate = useNavigate()

    // state
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState([])

    const createProduct = (e) => {
        e.preventDefault()
        // create body to send over to api
        let body = {
            "name" : name,
            "price" : price,
            "description" : description
        }
        //MAKE A AXIOS REQUEST TO MY API
        // important for it to be http rn and not https, because the s stands for secure
        axios.post("http://localhost:8000/api/products", body)
        .then(res => {
            console.log(res.data)
            setName("")
            setPrice("")
            setDescription("")
            navigate("")
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })
    }

    return (
        <fieldset>
            <legend>Create.jsx</legend>
            <h1>Add a product</h1>
            <form onSubmit={createProduct}>
                <p>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </p>
                <p>
                    Price:
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </p>
                <p>
                    Description
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value) }/>
                </p>
                <button>Submit</button>
                {
                    errors.map((error) => <p>{error}</p>)
                }
            </form>
        </fieldset>
    )
}

export default Create