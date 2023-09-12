import React from "react";
import { Outlet} from "react-router-dom";
import "./index.css"


const Layout = (props) => {
    return(
        <div className="container">
            <div className="siderbar-container">
                <img src="../images/bg-sidebar-desktop.svg" alt="sidebar" className="sidebar"/>
                <div className="section-container" id="info-container">
                    <span className={props.currectSection === "info" ? "active-number" : "number"}>1</span>
                    <div className="currect-step-container">
                        <p className="step-number">step 1</p>
                        <h3>YOUR INFO</h3>
                    </div>
                </div>
                <div className="section-container" id="plan-container">
                    <span className={props.currectSection  === "plan" ? "active-number" : "number"}>2</span>
                    <div className="currect-step-container">
                        <p className="step-number">STEP 2</p>
                        <h3>SELECT PLAN</h3>
                    </div>
                </div>
                <div className="section-container" id="addOns-container">
                    <span className={props.currectSection=== "addOns" ? "active-number" : "number"}>3</span>
                    <div className="currect-step-container">
                        <p className="step-number">STEP 3</p>
                        <h3>ADD-ONS</h3>
                    </div>
                </div>
                <div className="section-container" id="summary-container">
                    <span className={props.currectSection  === "summary" ? "active-number" : "number"}>4</span>
                    <div className="currect-step-container">
                        <p className="step-number">STEP 4</p>
                        <h3>SUMMARY</h3>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Layout