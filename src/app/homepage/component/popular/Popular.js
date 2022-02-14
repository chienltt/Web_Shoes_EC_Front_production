import React from "react";
import "./Popular.scss"
import {AiOutlineFire, AiOutlineLeft, AiOutlineRight, AiOutlineStar} from "react-icons/ai";

const Popular = () => {

    let positionX = 0;
    let index = 0;
    let checkSlide = true;
    let count = 0;

    setTimeout(() => {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);

        const tabs = $$(".product-tab-item");

        const tabActive = $(".active");
        const line = $(".product-tab-line");

        line.style.left = tabActive.offsetLeft + "px";
        line.style.width = tabActive.offsetWidth + "px";

        tabs.forEach((tab, index) => {

            tab.onclick = function () {
                $(".active").classList.remove("active");

                line.style.left = this.offsetLeft + "px";
                line.style.width = this.offsetWidth + "px";

                this.classList.add("active");
            };
        });
    }, 500)

    // setInterval(() => {
    //     if (index < 2 && index >= 0 && checkSlide) {
    //         handleChangeSlide(1)
    //     } else {
    //         checkSlide = false
    //         if (count < 2) {
    //             handleChangeSlide(-1)
    //             count++
    //         } else {
    //             checkSlide = true
    //             positionX = 0
    //             index = 0
    //             count = 0
    //         }
    //     }
    // }, 3000)

    const handleChangeSlide = (dir) => {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);

        const productSlider = $(".product-box-row");
        const productItems = $$(".product-row-slide");
        const productItemWidth = productItems[0].offsetWidth;
        const productItemLength = productItems.length;

        console.log("handle change slide")

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

    const arrayProduct = [
        "https://timan.vn/Thumb.ashx?s=120&file=/UploadImages/shops/giay-nam/TA09/giay-the-thao-vai-luoi-nam-ta09-1.jpg",
        "https://timan.vn/Thumb.ashx?s=120&file=/UploadImages/shops/giay-nam/TA01/giay-the-thao-vai-luoi-nam-ta01-1.jpg",
        "https://timan.vn/Thumb.ashx?s=120&file=/UploadImages/shops/giay-nam/TA01/giay-the-thao-vai-luoi-nam-ta01-1.jpg",
        "https://timan.vn/Thumb.ashx?s=120&file=/UploadImages/shops/giay-nam/TA01/giay-the-thao-vai-luoi-nam-ta01-1.jpg",
        "https://timan.vn/Thumb.ashx?s=120&file=/UploadImages/shops/giay-nam/TA09/giay-the-thao-vai-luoi-nam-ta09-1.jpg",
        "https://timan.vn/Thumb.ashx?s=120&file=/UploadImages/shops/giay-nam/TA01/giay-the-thao-vai-luoi-nam-ta01-1.jpg",
        "https://timan.vn/Thumb.ashx?s=120&file=/UploadImages/shops/giay-nam/TA01/giay-the-thao-vai-luoi-nam-ta01-1.jpg",
        "https://timan.vn/Thumb.ashx?s=120&file=/UploadImages/shops/giay-nam/TA01/giay-the-thao-vai-luoi-nam-ta01-1.jpg",
        "https://timan.vn/Thumb.ashx?s=120&file=/UploadImages/shops/giay-nam/TA09/giay-the-thao-vai-luoi-nam-ta09-1.jpg"
    ]

    const showHotProduct = () => {
        return arrayProduct.map((url, index) => {
            return (<div className="product-row-slide">
                <div className="product-row-item">
                    <div className="product-item-image">
                        <a href="#" className="product-item-image-link">
                            <img src={url} alt="ảnh sản phẩm"/>
                        </a>
                    </div>
                    <div className="product-item-content">
                        <div className={"product-item-number"}>{index + 1}</div>
                        <a href={"#"} className={"product-item-title"}>Giày Thể Thao Vải Lưới Nam TA01 Test</a>
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

    const arrayImage = [
        ["https://timan.vn/Thumb.ashx?s=800&file=/UploadImages/shops/banner/tet-2022/1024X557/nam.jpg",
        "https://timan.vn/Thumb.ashx?s=150&file=/UploadImages/shops/banner/tet-2022/800X1200/nam-1.jpg",
        "https://timan.vn/Thumb.ashx?s=150&file=/UploadImages/shops/banner/tet-2022/800X1200/nam-2.jpg",
        "https://timan.vn/Thumb.ashx?s=150&file=/UploadImages/shops/banner/tet-2022/800X1200/nam-3.jpg"],
        ["https://timan.vn/Thumb.ashx?s=800&file=/UploadImages/shops/banner/tet-2022/1024X557/nu.jpg",
        "https://timan.vn/Thumb.ashx?s=150&file=/UploadImages/shops/banner/tet-2022/800X1200/nu-1.jpg",
        "https://timan.vn/Thumb.ashx?s=150&file=/UploadImages/shops/banner/tet-2022/800X1200/nu-2.jpg",
        "https://timan.vn/Thumb.ashx?s=150&file=/UploadImages/shops/banner/tet-2022/800X1200/nu-3.jpg"]
    ]

    const showHotImage = () => {
        return arrayImage.map((url) => {
            return (<div className={"product-box2-slide"}>
                <div className="row">
                    <div className="col-sm-12 product-box2-mainImage">
                        <a href="">
                            <img className={"product-box2-image"} src={url[0]} alt="ảnh minh họa"/>
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <a href="">
                            <img className={"product-box2-image"} src={url[1]} alt="ảnh minh họa"/>
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <a href="">
                            <img className={"product-box2-image"} src={url[2]} alt="ảnh minh họa"/>
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <a href="">
                            <img className={"product-box2-image"} src={url[3]} alt="ảnh minh họa"/>
                        </a>
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
                <div className={"row"}>
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
                                    {showHotProduct()}
                                </div>
                            </div>
                            <div className={"product-popular-arrow product-popular-next"}>
                                <AiOutlineRight size={30} className={"product-popular-arrow-icon"}/>
                            </div>
                            <div className={"product-popular-arrow product-popular-prev"}>
                                <AiOutlineLeft size={30} className={"product-popular-arrow-icon"}/>
                            </div>
                        </div>
                    </div>
                    <div className={"col-12 col-lg-4"}>
                        <div className={"product-popular-title"}>Hot deals</div>
                        <div className={"product-popular-box2"}>
                            <a href="">
                                <img className={"product-popular-box-image"}
                                     src="https://timan.vn/Thumb.ashx?s=800&file=/UploadImages/adv/adv1.jpg" alt="ảnh minh họa"/>
                            </a>
                            <div className={"product-popular-title2"}> Miễn phí ship toàn quốc </div>
                            <div className={"product-popular-desc"}> Nhận ngay Voucher – Tiết kiệm hơn 15% dành cho bạn </div>
                            <div className={"text-center"}>
                                <a href="" className={"product-popular-text-btn"}> Xem thêm </a>
                            </div>
                        </div>
                    </div>
                    <div className={"col-12 col-lg-4"}>
                        <div className={"product-popular-title"}>Sản phẩm mới</div>
                        <div className={"product-popular-box product-popular-box2"}>
                            <div className={"product-box-container"}>
                                <div className={"product-box2-row"}>
                                    {showHotImage()}
                                </div>
                            </div>
                            <div className={"product-popular-arrow product-popular-next"} onClick={() => handleChangeSlide(1)}>
                                <AiOutlineRight size={30} className={"product-popular-arrow-icon"}/>
                            </div>
                            <div className={"product-popular-arrow product-popular-prev"} onClick={() => handleChangeSlide(-1)}>
                                <AiOutlineLeft size={30} className={"product-popular-arrow-icon"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popular