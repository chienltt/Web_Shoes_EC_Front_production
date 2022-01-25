import React from "react";
import Banner from "./component/banner/Banner";
import SelectionLists from "./component/selection-lists/SelectionLists";
const HomePage = (props)=>{
    console.log("okok123")
    return(
        <div className={"page-content"}>
            <div className={"banner"}>
                <Banner/>
            </div>
            <div className={"container body"}>
                <SelectionLists/>
            </div>
            <div className={"footer"}></div>
        </div>
    )
}
export  default HomePage