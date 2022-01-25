import React from "react";
import "./Banner.scss"
const Banner = (props)=>{
    // const changeImageInfinite=()=>{
    //     const element = document.getElementById("banner-image")
    //     if(element.style.left === "0px" || element.style.left === "") element.style.left= "-100%"
    //     else element.style.left = "0px"
    // }
    // setInterval(changeImageInfinite,5000)
    return(
        <div id={"banner-image"}>
            <img id={"image-1"} alt={""} src={"https://timan.vn/Thumb.ashx?s=1920&file=/UploadImages/shops/banner/tet-2022/1920X550/nu.jpg"}/>
            <img id={"image-2"} alt={""} src={"https://timan.vn/Thumb.ashx?s=1920&file=/UploadImages/shops/banner/tet-2022/1920X550/nam.jpg"}/>
        </div>
    )
}
export default Banner