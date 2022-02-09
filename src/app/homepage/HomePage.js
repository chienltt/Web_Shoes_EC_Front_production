import React from "react";
import "./HomePage.scss";
import Banner from "./component/banner/Banner";
import Category from "./component/category/Category";
import Sale from "./component/sale/Sale";
import Popular from "./component/popular/Popular";

const HomePage = (props)=>{
    return(
        <div className={"homepage"}>
            xin chào mn.....
            <div className={"homepage-container"}>
                <div className={"homepage-banner"}>
                    <Banner />
                </div>
                <div className={"homepage-category homepage-item"}>
                    <Category />
                </div>
                <div className={"homepage-sale homepage-item"}>
                    <Sale />
                </div>
                <div className={"homepage-popular homepage-item"}>
                    <Popular />
                </div>
            </div>
        </div>
    )
}
export default HomePage