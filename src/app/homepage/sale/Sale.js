import React from "react";
import "./Sale.scss"
import {IoDiamondOutline} from "react-icons/io5";

const Sale = () => {

    let counter = 1;
    setInterval(() => {
        document.getElementById('sale-radio' + counter).checked = true;
        counter++;
        if (counter > 2) {
            counter = 1;
        }
    }, 3000);

    return (
        <div className={"sale-container"}>
            <div className={"sale-title"}>
                <IoDiamondOutline size={30} className={"sale-title-icon"}/>
                Sale vô cực
            </div>
            <div className={"sale-slider"}>
                <div className={"sale-slides"}>
                    <input type="radio" name="radio-btn" id="sale-radio1"/>
                    <input type="radio" name="radio-btn" id="sale-radio2"/>

                    <div className={"sale-slide first"}>
                        <div className={"sale-slide-first"}/>
                    </div>
                    <div className={"sale-slide"}>
                        <div className={"sale-slide-second"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sale