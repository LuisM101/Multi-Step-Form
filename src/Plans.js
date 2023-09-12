import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./plans.css"

const Plans = (props) => {
    
    const [currectPlan, setCurrectPlan] = useState(JSON.parse(sessionStorage.getItem("dataPlan")).name !== "" ? JSON.parse(sessionStorage.getItem("dataPlan")).name : "") 
    const [onMonthly, setOnMonthly] = useState(true)
    const monthlyList = [
        {"name": "Arcade", "cost": 9, "logo": "../images/icon-arcade.svg"},
        {"name": "Advanced", "cost": 12, "logo": "../images/icon-advanced.svg"},
        {"name": "Pro", "cost": 15, "logo": "../images/icon-pro.svg"}
    ]
    const yearlyList = [
        {"name": "Arcade", "cost": 90, "logo": "../images/icon-arcade.svg", "free": "2 months free"},
        {"name": "Advanced", "cost": 120, "logo": "../images/icon-advanced.svg", "free": "2 months free"},
        {"name": "Pro", "cost": 150, "logo": "../images/icon-pro.svg", "free": "2 months free"}
    ]

    function changeMonthly(){
        setOnMonthly(prevOnMonthly => !prevOnMonthly)
    }

    function newPlans(updatePlan, cost, payment){
        props.handlePlans(updatePlan, cost, payment)
        setCurrectPlan(updatePlan)
    }

    const monthly = monthlyList.map((monthlySection, key) => 
        <button key={key} className="plans-button" id={currectPlan === monthlySection.name ? "selected-button" : ""} onClick={() => newPlans(monthlySection.name, monthlySection.cost, "Monthly")}>
            <img src={monthlySection.logo} alt="logoImg"/>
            <h6>{monthlySection.name}</h6>
            <p className="paymentPlan">${monthlySection.cost}/mo</p>
        </button>
    )

    const yearly = yearlyList.map( (yearlySection, key) => 
        <button key={key} className="plans-button" id={currectPlan === yearlySection.name ? "selected-button" : ""} onClick={() => newPlans(yearlySection.name, yearlySection.cost, "Yearly")}   >
            <img src={yearlySection.logo} alt="logoImg"/>
            <h6>{yearlySection.name}</h6>
            <p className="paymentPlan">${yearlySection.cost}/yr</p>
            <p className="freePlan">{yearlySection.free}</p>
        </button>
    )
    return(
    <div className="form-container">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>
        <div>
            {onMonthly === true ? monthly : yearly}
            <div className="switch-containter">
                <span className={onMonthly === true ? "chosen-payment" : "not-selected-payment"} >Monthly</span>
                <label className="switch">
                    <input className="toggle-payment"  type="checkbox" />
                    <span className="slider-round" onClick={changeMonthly}></span>
                </label>
                <span className={onMonthly === false ? "chosen-payment" : "not-selected-payment"} >Yearly</span>
            </div>
        </div>
        <div className="step-container">
            <Link to="/" className="go-back" onClick={() => props.handleSection("info")}>Go Back</Link>
            {currectPlan !== "" ? <Link to="/addOns" className="next-addOns-button"  onClick={() => props.handleSection("addOns")}>Next Step</Link> : <Link to="/addOns" className="next-addOns-button-decative" >Next Step</Link>}
        </div>
    </div>)
}
export default Plans