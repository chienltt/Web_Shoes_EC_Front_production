import React from "react";
import "./Popular.scss"
import {AiOutlineFire, AiOutlineStar} from "react-icons/ai";

const Popular = () => {
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
                                <div className={"tab-giay-nam"}>Giày Nam</div>
                                <div className={"tab-giay-nu"}>Giày Nữ</div>
                                <div className={"tab-dep-nam"}>Dép Nam</div>
                                <div className={"tab-dep-nu"}>Dép Nữ</div>
                            </div>
                        </div>
                        <div className={"product-popular-box"}>
                            <div className={"product-box-container"}>
                                <div className={"product-box-row"}>
                                    <div className="product-row-slide">
                                        <div className="product-row-item">
                                            <div className="product-item-image">
                                                <a href="#">
                                                    <img src="https://timan.vn/Thumb.ashx?s=120&file=/UploadImages/shops/giay-nam/TA01/giay-the-thao-vai-luoi-nam-ta01-1.jpg"
                                                         alt="ảnh sản phẩm"/>
                                                </a>
                                            </div>
                                            <div className="product-item-content">
                                                <div className={"product-item-number"}>1</div>
                                                <div className={"product-item-title"}>Giày Thể Thao Vải Lưới Nam TA01</div>
                                                <div className={"product-item-price"}>690.000 đ</div>
                                                <div className="product-item-stars">
                                                    <AiOutlineStar />
                                                    <AiOutlineStar />
                                                    <AiOutlineStar />
                                                    <AiOutlineStar />
                                                    <AiOutlineStar />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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