import React from "react";
import "./Banner.scss"

const Banner = () => {

    let counter = 1;
    setInterval(() => {
        document.getElementById('banner-radio' + counter).checked = true;
        counter++;
        if (counter > 2) {
            counter = 1;
        }
    }, 4000);

    return (
        <div className={"banner-slider"}>
            <div className={"banner-slides"}>
                <input type="radio" name="radio-btn" id="banner-radio1"/>
                <input type="radio" name="radio-btn" id="banner-radio2"/>

                <div className={"banner-slide first"}>
                    <div className={"banner-slide-first"}/>
                </div>
                <div className={"banner-slide"}>
                    <div className={"banner-slide-second"}/>
                </div>
            </div>
        </div>
    )
}

export default Banner