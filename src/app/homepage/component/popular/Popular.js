import React from "react";
import "./Popular.scss"
import {AiOutlineFire, AiOutlineStar} from "react-icons/ai";

const Popular = () => {

    setTimeout(() => {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);

        const tabs = $$(".product-tab-item");
        // const panes = $$(".product-row-slide");

        const tabActive = $(".active");
        const line = $(".product-tab-line");

        line.style.left = tabActive.offsetLeft + "px";
        line.style.width = tabActive.offsetWidth + "px";

        tabs.forEach((tab, index) => {
            // const pane = panes[index];

            tab.onclick = function () {
                $(".active").classList.remove("active");
                // $(".active2").classList.remove("active2");

                line.style.left = this.offsetLeft + "px";
                line.style.width = this.offsetWidth + "px";

                this.classList.add("active");
                // pane.classList.add("active2");
            };
        });
    }, 500);


    const arrayImage = [
        "https://timan.vn/Thumb.ashx?s=120&file=/UploadImages/shops/giay-nam/TA01/giay-the-thao-vai-luoi-nam-ta01-1.jpg",
        "https://timan.vn/Thumb.ashx?s=120&file=/UploadImages/shops/giay-nam/TA01/giay-the-thao-vai-luoi-nam-ta01-1.jpg",
        "https://timan.vn/Thumb.ashx?s=120&file=/UploadImages/shops/giay-nam/TA01/giay-the-thao-vai-luoi-nam-ta01-1.jpg",
        "https://timan.vn/Thumb.ashx?s=120&file=/UploadImages/shops/giay-nam/TA01/giay-the-thao-vai-luoi-nam-ta01-1.jpg",
        "https://timan.vn/Thumb.ashx?s=120&file=/UploadImages/shops/giay-nam/TA01/giay-the-thao-vai-luoi-nam-ta01-1.jpg",
        "https://timan.vn/Thumb.ashx?s=120&file=/UploadImages/shops/giay-nam/TA01/giay-the-thao-vai-luoi-nam-ta01-1.jpg",
        "https://timan.vn/Thumb.ashx?s=120&file=/UploadImages/shops/giay-nam/TA01/giay-the-thao-vai-luoi-nam-ta01-1.jpg",
        "https://timan.vn/Thumb.ashx?s=120&file=/UploadImages/shops/giay-nam/TA01/giay-the-thao-vai-luoi-nam-ta01-1.jpg",
        "https://timan.vn/Thumb.ashx?s=120&file=/UploadImages/shops/giay-nam/TA01/giay-the-thao-vai-luoi-nam-ta01-1.jpg"
    ]

    const showHotImages = () => {
        return arrayImage.map((url, index) => {
            return (<div className="product-row-slide">
                <div className="product-row-item">
                    <div className="product-item-image">
                        <a href="#" className="product-item-image-link">
                            <img src={url} alt="ảnh sản phẩm"/>
                        </a>
                    </div>
                    <div className="product-item-content">
                        <div className={"product-item-number"}>{index + 1}</div>
                        <a href={"#"} className={"product-item-title"}>Giày Thể Thao Vải Lưới Nam TA01</a>
                        <div className={"product-item-price"}>690.000 đ</div>
                        <div className="product-item-star">
                            <AiOutlineStar size={15} className="product-item-star-active"/>
                            <AiOutlineStar size={15} className="product-item-star-active"/>
                            <AiOutlineStar size={15} className="product-item-star-active"/>
                            <AiOutlineStar size={15} className="product-item-star-active"/>
                            <AiOutlineStar size={15} />
                        </div>
                    </div>
                </div>
            </div>)
        })
    }

    return (
        <div className={"product-popular"}>
            <div className={"product-popular-heading"}>
                <AiOutlineFire size={30} className={"product-popular-icon"}/>
                Hot Hot
            </div>
            <div className={"product-popular-container"}>
                <div className={"product-popular-row"}>
                    <div className={"col-12 col-lg-4"}>
                        <div className={"product-popular-title"}>Sản phẩm nổi bật</div>
                        <div className={"product-popular-menu"}>
                            <div className={"product-popular-tabs"}>
                                <div className={"product-tab-item active"}>Giày Nam</div>
                                <div className={"product-tab-item"}>Giày Nữ</div>
                                <div className={"product-tab-item"}>Dép Nam</div>
                                <div className={"product-tab-item"}>Dép Nữ</div>
                                <div className={"product-tab-line"}/>
                            </div>
                        </div>
                        <div className={"product-popular-box"}>
                            <div className={"product-box-container"}>
                                <div className={"product-box-row"}>
                                    {showHotImages()}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-12 col-lg-4"}></div>
                    <div className={"col-12 col-lg-4"}></div>
                </div>
            </div>
        </div>
    )
}

export default Popular