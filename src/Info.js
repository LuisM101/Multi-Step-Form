import { useNavigate} from "react-router-dom"
import React, { useEffect, useState } from "react"
import "./info.css"

 const Info = (props) => {
    const name = JSON.parse(sessionStorage.getItem("formData")) === null ? "" : JSON.parse(sessionStorage.getItem("formData")).name
    const email = JSON.parse(sessionStorage.getItem("formData")) === null ? "" : JSON.parse(sessionStorage.getItem("formData")).email
    const phone = JSON.parse(sessionStorage.getItem("formData")) === null ? "" : JSON.parse(sessionStorage.getItem("formData")).phone

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        "name":  name,
        "email": email,
        "phone": phone,
    })


    useEffect(() => {
        sessionStorage.setItem("formData", JSON.stringify(formData))
    },[formData])

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function isNumeric(value) {
        return /^-?\d+$/.test(value);
    }

    function handleChange(event){
        const {name, value} = event.target

        setFormData( prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }
    function handleSubmit(){
        let validName = true
        let validEmail = false
        let validPhone = false
        if(formData.name === ""){
            validName = false
        }
        for(let i = 0; i < formData.name.length;i++){
            if(isNumeric(formData.name[i]) === true){
                validName = false
                break
            }
        }
        validEmail = validateEmail(formData.email)
        validPhone = isNumeric(formData.phone)
        if( validEmail === true && validName === true && validPhone === true){
            props.handleSection("plan")
            navigate("/plans")
        }

    }
    return(
        <div className="form-container">
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number</p>
            <form>
                <label className="form-label">
                    Name
                    <input 
                        placeholder="e.g. Stephen King"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                        className="text-input"
                    />
                </label>

                <label className="form-label">
                    Email Address 
       
                    <input 
                        placeholder="e.g. stephenking@lorem.com"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        className="text-input"
                    />
                </label>
                <label className="form-label">
                    Phone Number
                    <input 
                        placeholder="e.g. 234 567 8902"
                        type="text"
                        name="phone"
                        onChange={handleChange}
                        value={formData.phone}
                        maxLength={12}
                        className="text-input"    
                    />
                </label>
            </form>
            <button className="next-step-button" onClick={handleSubmit}>Next Step</button>
        </div>
    )
}

export default Info