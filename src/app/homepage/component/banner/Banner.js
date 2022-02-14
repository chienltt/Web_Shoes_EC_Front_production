import React from "react";
import "./Banner.scss"

const Banner = () => {
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

        const productSlider = $(".banner-slides");
        const productItems = $$(".banner-slide");
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