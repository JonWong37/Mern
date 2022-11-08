import React, {useState, useEffect, useParams} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Dashboard = () => {
    // state
    const [allProducts, setAllProducts] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() =>{
        axios.get("http://localhost:8000/api/products")
        .then(res => setAllProducts(res.data))
        .catch(errors => console.log(errors))
    },[refresh])

    // handler

    const deleteProduct = (product_id) => {
        axios.delete(`http://localhost:8000/api/products/${product_id}`)
        .then(res => setRefresh(!refresh))
        .catch(errors => console.log(errors))
    }


    return (
        <fieldset>
            <legend>Dashboard.jsx</legend>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allProducts.map((product) => {
                            const {_id, name, price, description, createdAt} = product
                            return(
                                <tr key ={product._id}>
                                    {/* <td>{_id}</td> */}
                                    <td>{name}</td>
                                    <td>${price}</td>
                                    <td>{description}</td>
                                    <td>
                                        <Link to={`/products/${_id}`}>View</Link>
                                        <Link to ={`/products/edit/${_id}`}>Edit</Link>
                                    </td>
                                    <td><button onClick={() => deleteProduct(_id)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default Dashboard