import React from "react";
import { Link } from "react-router-dom";
import "./addOns.css"

const AddOns = (props) => {
    const addOnList = [
        {"title": "Online service", "description": "Access to multiplayer games", "Monthly": 1, "Yearly": 10, "key": 1},
        {"title": "Larger storage", "description": "Extra 1TB of cloud save", "Monthly": 2, "Yearly": 20, "key": 2},
        {"title": "Customizable profile", "description": "Custom theme on your profile", "Monthly": 2, "Yearly": 20, "key": 3}
    ]
    const addOns = addOnList.map((addOn, id) => 
        <label key={addOn.key} className="addOn-holder" id={props.dataAddOns[id]["selected"] === true ? "addOns-holder-active" : ""}>
            <input 
                type="checkbox"
                id={"selected"}
                checked={props.dataAddOns[id]["selected"]}
                onChange={(event) => props.handleAddOns(event,id)}
                name={"selected"}
            />
            <div className="addOn-title-descrip-container">
                <h2>{addOn.title}</h2>
                <h5>{addOn.description}</h5>  
            </div>
            <p className="addOn-payment">+${props.dataPlan.payment === "Monthly" ? addOn.Monthly + "/mo" : addOn.Yearly + "/yr"} </p>
        </label>
    )
    return(
        <div className="form-container">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience</p>
            {addOns}
            <div className="step-container">
                <Link to="/plans" className="go-back" onClick={() => props.handleSection("plan")}>Go Back</Link>
                {props.dataAddOns[0]["selected"] !== false || props.dataAddOns[1]["selected"] !== false || props.dataAddOns[2]["selected"] !== false ? <Link to="/summary" className="next-summary-button"  onClick={() => props.handleSection("summary")}>Next Step</Link> : <Link to="/summary" className="next-summary-button-decative" >Next Step</Link>}
            </div>
        </div>
    )
}
export default AddOns