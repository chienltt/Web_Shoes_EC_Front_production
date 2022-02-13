import React from "react";
import "./Banner.scss"

const Banner = () => {



    return (
        <div className={"banner-container"}>
            <div className={"banner-slider"}>
                <div className={"banner-slides"}>

                    <div className={"banner-slide"}>
                        <a href="">
                            <img className={"banner-slide-image"}
                                 src={"https://timan.vn/Thumb.ashx?s=1920&file=/UploadImages/shops/banner/tet-2022/1920X550/nam.jpg"}
                                 alt="ảnh minh họa"/>
                        </a>
                    </div>
                    <div className={"banner-slide"}>
                        <a href="">
                            <img className={"banner-slide-image"}
                                 src={"https://timan.vn/Thumb.ashx?s=1920&file=/UploadImages/shops/banner/tet-2022/1920X550/nu.jpg"}
                                 alt="ảnh minh họa"/>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner