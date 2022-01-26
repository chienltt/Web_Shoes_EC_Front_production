import React from "react";
import "./Category.scss";
import {RiOrganizationChart} from "react-icons/ri";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

const Category = () => {
    return (
        <div className={"category-product"}>
            <div className={"category-product-title"}>
                <RiOrganizationChart size={30} className={"category-title-icon"}/>
                Danh mục sản phẩm
            </div>
            <div className={"category-product-box"}>
                <div className={"category-product-row"}>
                    <div className={"category-product-list"}>

                        <div className={"category-product-item"}>
                            <a href="#" className={"category-product-link"}>
                                <div className={"category-product-image"}>
                                    <img src="https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/giay-da-nam.jpg" alt="Ảnh giày nam"/>
                                </div>
                                <span>Giày Nam</span>
                            </a>
                        </div>
                        <div className={"category-product-item"}>
                            <a href="#" className={"category-product-link"}>
                                <div className={"category-product-image"}>
                                    <img src="https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/nsp1-min.jpg" alt="Ảnh giày nữ"/>
                                </div>
                                <span>Giày Nữ</span>
                            </a>
                        </div>
                        <div className={"category-product-item"}>
                            <a href="#" className={"category-product-link"}>
                                <div className={"category-product-image"}>
                                    <img src="https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/nsp3-min.jpg" alt="Giày da nam"/>
                                </div>
                                <span>Giày Da Nam</span>
                            </a>
                        </div>
                        <div className={"category-product-item"}>
                            <a href="#" className={"category-product-link"}>
                                <div className={"category-product-image"}>
                                    <img src="https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/giay-luoi-nam.jpg" alt="Giày lười nam"/>
                                </div>
                                <span>Giày Lười Nam</span>
                            </a>
                        </div>
                        <div className={"category-product-item"}>
                            <a href="#" className={"category-product-link"}>
                                <div className={"category-product-image"}>
                                    <img src="https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/nsp2-min.jpg" alt="Giày thể thao nam"/>
                                </div>
                                <span>Giày Thể Thao Nam</span>
                            </a>
                        </div>
                        <div className={"category-product-item"}>
                            <a href="#" className={"category-product-link"}>
                                <div className={"category-product-image"}>
                                    <img src="https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/giay-the-thao-nu.jpg" alt="Giày thể thao nữ"/>
                                </div>
                                <span>Giày Thể Thao Nữ</span>
                            </a>
                        </div>
                        <div className={"category-product-item"}>
                            <a href="#" className={"category-product-link"}>
                                <div className={"category-product-image"}>
                                    <img src="https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/giay-vai-nam.jpg" alt="Giày vải nam"/>
                                </div>
                                <span>Giày Vải Nam</span>
                            </a>
                        </div>
                        <div className={"category-product-item"}>
                            <a href="#" className={"category-product-link"}>
                                <div className={"category-product-image"}>
                                    <img src="https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/nsp1-min.jpg" alt="Giày Boot Nam"/>
                                </div>
                                <span>Giày Boot Nam</span>
                            </a>
                        </div>
                        <div className={"category-product-item"}>
                            <a href="#" className={"category-product-link"}>
                                <div className={"category-product-image"}>
                                    <img src="https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/dep-nam-1.jpg" alt="Dép nam"/>
                                </div>
                                <span>Dép Nam</span>
                            </a>
                        </div>
                        <div className={"category-product-item"}>
                            <a href="#" className={"category-product-link"}>
                                <div className={"category-product-image"}>
                                    <img src="https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/dep-nu-1.jpg" alt="Dép nữ"/>
                                </div>
                                <span>Dép Nữ</span>
                            </a>
                        </div>
                        <div className={"category-product-item"}>
                            <a href="#" className={"category-product-link"}>
                                <div className={"category-product-image"}>
                                    <img src="https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/giay-cao-got.jpg" alt="Giày cao gót"/>
                                </div>
                                <span>Giày Cao Gót</span>
                            </a>
                        </div>
                        <div className={"category-product-item"}>
                            <a href="#" className={"category-product-link"}>
                                <div className={"category-product-image"}>
                                    <img src="https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/giay-luoi-nu.jpg" alt="Giày lười nữ"/>
                                </div>
                                <span>Giày Lười Nữ</span>
                            </a>
                        </div>

                    </div>
                    <div className={"category-product-arrow category-product-next"}>
                        <AiOutlineRight size={30} className={"category-arrow-icon"}/>
                    </div>
                    <div className={"category-product-arrow category-product-prev"}>
                        <AiOutlineLeft size={30} className={"category-arrow-icon"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category