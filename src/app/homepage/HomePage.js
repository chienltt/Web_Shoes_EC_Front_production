import React from "react";
import Banner from "./component/Banner";
const HomePage = (props)=>{
    console.log("okok123")
    return(
        <div className={"page-content"}>
            <div className={"banner"}>
                <Banner/>
            </div>
            <div className={"body"}></div>
            <div className={"footer"}></div>
        </div>
    )
}
export  default HomePage