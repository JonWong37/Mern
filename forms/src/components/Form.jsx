import React, { useState } from 'react'

const Form = () => {
    // STATE
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [conpassword, setConPassowrd] = useState("")

    const[firstNameError, setfirstNameError] = useState("")
    const[lastNameError, setLastNameError] = useState("")
    const[emailError, setemailError] = useState("")
    const[passwordError, setPasswordError] = useState("")
    const[conpasswordError, setConPasswordError] = useState("")


    // validations can be as being input or submitting, up to the dev
    const nameHandler = (event) => {
        // let valid = true
        if(event.target.value.length < 2){
            setfirstNameError("Your first name must be longer than 2 characters")
            // valid = false
        }
        else{
            setfirstNameError("")
        }
        setfirstName(event.target.value)
    }

    const lastNameHandler = (event) =>{
        if(event.target.value.length < 2){
            setLastNameError("Your last name must be longer than 2 characters")
            // valid = false
        }
        else{
            setLastNameError("")
        }
        setlastName(event.target.value)
    }

    const emailHandler = (event) =>{
        if(event.target.value.length < 5){
            setemailError("email must be longer than 5 characters")
            // valid = false
        }
        else{
            setemailError("")
        }
        setEmail(event.target.value)
    }

    const passwordHandler = (event) =>{
        if(event.target.value.length < 8){
            setPasswordError("Password must be atleast 8 characters")
        }
        else{
            setPasswordError("")
        }
        setPassword(event.target.value)
        console.log(password)
    }

    const conPasswordHandler = (event) =>{
    
        if(event.target.value !== password){
            setConPasswordError("Passwords do not match")
        }
        else{
            setConPasswordError("")
        }
        
    }


    // // this (checkbox) is very important says ed in lecture. will come back up
    // const checkbox = (event) =>{
    //     setJobReady(event.target.checked)
    // }

    const createUser = (event) =>{
        event.preventDefault();
        const user = {
            firstName,
            lastName,
            email,
            password
        }

        console.log('User being created : ', user)
        setfirstName("")
        setlastName("")
        setEmail("")
        setPassword("")

    } 

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={createUser}>
                <p>
                    First name:
                    <input type="text" value={firstName} onChange={nameHandler} />
                    {(firstNameError) ? <p>{firstNameError}</p> : null}
                </p>
                <p>
                    Last Name:
                    <input type="text" value={lastName} onChange={lastNameHandler} />
                    {(lastNameError) ? <p>{lastNameError}</p> : null}

                </p>
                <p>
                    Email:
                    <input type="text" value ={email} onChange={emailHandler} />
                    {(emailError) ? <p>{emailError}</p> : null}

                </p>
                <p>
                    Password:
                    <input type="password" value={password} onChange={passwordHandler} />
                    {(passwordError) ? <p>{passwordError}</p> : null}
                </p>
                <p>
                    Confirm Password:
                    <input type="password" onChange={conPasswordHandler} />
                    {(conpasswordError) ? <p>{conpasswordError}</p> : null}
                </p>
                <button>Submit</button>
            </form>
            <div>
                <h1>{firstName}</h1>
                <h1>{email}</h1>
            </div>
        </fieldset>
    )
}

export default Form