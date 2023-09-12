import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./summary.css"

const Summary = (props) => {
    const [totalCost, setTotalCost] = useState(props.dataPlan.cost)
    const summaryAddOns = props.dataAddOns.map((addOns, key) =>
         {return(addOns.selected === true ? 
            <div key={key} className="summary-addOns-container">
                <p className="summary-addOns-name">{addOns.name}</p>
                <span className="summary-addOns-payment" > +${props.dataPlan.payment === "Monthly" ? addOns.Monthly + "/mo" : addOns.Yearly + "/yr"} </span>
            </div>: "")}
    )
    useEffect( function() {
        for(let i = 0; i < props.dataAddOns.length; i++){
            const addOns = props.dataAddOns[i]
            const addOnsSelected = addOns.selected
            if(addOnsSelected === true){
                if(props.dataPlan.payment === "Monthly"){
                    setTotalCost(prevCost =>prevCost + addOns.Monthly)
                }
                if(props.dataPlan.payment === "Yearly"){
                    setTotalCost(prevCost =>prevCost + addOns.Yearly)
                }
            }
        }
    }, [])
    return(
        <div className="form-container">
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirmin</p>
            <div className="summary-container">
                <div className="summary-info-container">
                    <div className="summary-payment-container">
                        <div className="summary-title-container">
                            <p className="title-summary">{props.dataPlan.name} ({props.dataPlan.payment})</p>
                            <Link className="change-link" to="/plans" onClick={() => props.handleSection("plan")}>Change</Link>
                        </div>
                        <span className="summary-payment">${props.dataPlan.cost}/ {props.dataPlan.payment === "Monthly" ? "mo" : "yr"}</span>
                    </div>
                    <br></br>
                    {summaryAddOns}
                </div>
                <div className="summary-total-container">
                    <span className="summary-total-title">Total ({props.dataPlan.payment === "Monthly" ? "per month" : "per year"})</span>
                    <p className="summary-total-cost">{totalCost}</p>
                </div>
            </div>
            <div className="step-container">
                <Link to="/addOns" className="go-back" onClick={() => props.handleSection("addOns")}>Go Back</Link>
                { <Link to="/thankYou" className="next-summary-button">Next Step</Link> }
            </div>
        </div>
    )
}
export default Summary
