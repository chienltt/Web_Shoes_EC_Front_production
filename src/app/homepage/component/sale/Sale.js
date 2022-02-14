import React from "react";
import "./Sale.scss"
import {IoDiamondOutline} from "react-icons/io5";

const Sale = () => {

    let positionX = 0;
    let index = 0;
    let checkSlide = true;
    let count = 0;

    setInterval(() => {
        if (index < 1 && index >= 0 && checkSlide) {
            handleChangeBanner(1)
        } else {
            checkSlide = false
            if (count < 1) {
                handleChangeBanner(-1)
                count++
            } else {
                checkSlide = true
                positionX = 0
                index = 0
                count = 0
            }
        }
    }, 3000)

    const handleChangeBanner = (dir) => {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);

        const productSlider = $(".sale-slides");
        const productItems = $$(".sale-slide");
        const productItemWidth = productItems[0].offsetWidth;
        const productItemLength = productItems.length;

        if (dir === 1) {
            if (index >= productItemLength - 1) {
                index = productItemLength - 1;
                return;
            }
            positionX = positionX - productItemWidth;
            productSlider.style = `transform: translateX(${positionX}px)`;
            index++;

        } else if (dir === -1) {
            if (index <= 0) {
                index = 0;
                return;
            }
            positionX = positionX + productItemWidth;
            productSlider.style = `transform: translateX(${positionX}px)`;
            index--;
        }
    }

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