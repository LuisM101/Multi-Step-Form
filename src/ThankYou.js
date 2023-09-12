import React from "react";
import "./thankYou.css"

const ThankYou = () => {
    return(
        <div className="thank-you-container">
            <img src="../images/icon-thank-you.svg" alt="thank you Img"/>
            <h2 className="thank-you-title">Thank you!</h2>
            <p className="thank-you-description">
                Thanks for confirming your subscription! We hope you have
                fun using our plaform. If you even need support, please feel free to 
                email us at supoort@loremgaming.com
            </p>
        </div>
    )
}
export default ThankYou