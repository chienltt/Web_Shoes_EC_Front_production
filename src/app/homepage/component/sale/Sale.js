import React from "react";
import "./Sale.scss"
import {IoDiamondOutline} from "react-icons/io5";

const Sale = () => {


    return (
        <div className={"sale-container"}>
            <div className={"sale-title"}>
                <IoDiamondOutline size={28} className={"sale-title-icon"}/>
                Sale vô cực
            </div>
            <div className={"sale-slider"}>
                <div className={"sale-slides"}>
                    <div className={"sale-slide"}>
                        <a href="">
                            <img className={"sale-slide-image"}
                                 src={"https://timan.vn/Thumb.ashx?s=1200&file=/UploadImages/shops/banner/tet-2022/1500X360/nu.jpg"}
                                 alt="ảnh minh họa"/>
                        </a>
                    </div>
                    <div className={"sale-slide"}>
                        <a href="">
                            <img className={"sale-slide-image"}
                                 src={"https://timan.vn/Thumb.ashx?s=1200&file=/UploadImages/shops/banner/tet-2022/1500X360/nam.jpg"}
                                 alt="ảnh minh họa"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sale