import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Edit = () => {
    
    const navigate = useNavigate()

    // GET PATH VARIABLE
    const{product_id} = useParams()

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState([]); 

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${product_id}`)
        .then(res => {
            console.log(res.data)
            setName(res.data.name)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
        .catch(errors => console.log(errors))
    },[])

    const updateProduct = (e) => {
        e.preventDefault()
        let updateBody = {
            "name" : name,
            "price" : price,
            "description" : description
        }
        //MAKE A AXIOS REQUEST TO MY API
        // important for it to be http rn and not https, because the s stands for secure
        axios.put(`http://localhost:8000/api/products/${product_id}`, updateBody)
        .then(res => {
            console.log(res.data)
            navigate("/dashboard")
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
        <legend>Edit.jsx</legend>
        <form onSubmit={updateProduct}>
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
            </form>
    </fieldset>
    )
}

export default Edit