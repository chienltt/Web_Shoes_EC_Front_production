import React from "react";
import "./Category.scss";
import {RiOrganizationChart} from "react-icons/ri";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

const Category = () => {

    let positionX = 0;
    let index = 0;

    const handleClickSlide = () => {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);

        const productList = $(".category-product-list");
        const productItems = $$(".category-product-item");
        const productNext = $(".category-product-next");
        const productPrev = $(".category-product-prev");
        const productItemWidth = productItems[0].offsetWidth;
        const productItemLength = productItems.length;

        productNext.addEventListener("click", () => {
            handleChangeSlide(1)
        });

        productPrev.addEventListener("click", () => {
            handleChangeSlide(-1)
        });

        const handleChangeSlide = (dir) => {
            if (dir === 1) {
                if (index >= productItemLength - 1) {
                    index = productItemLength - 1;
                    return;
                }
                positionX = positionX - productItemWidth;
                productList.style = `transform: translateX(${positionX}px)`;
                index++;

            } else if (dir === -1) {
                if (index <= 0) {
                    index = 0;
                    return;
                }
                positionX = positionX + productItemWidth;
                productList.style = `transform: translateX(${positionX}px)`;
                index--;
            }
        }
    }

    const arrayImage = [
        "https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/giay-da-nam.jpg",
        "https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/nsp1-min.jpg",
        "https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/nsp3-min.jpg",
        "https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/giay-luoi-nam.jpg",
        "https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/nsp2-min.jpg",
        "https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/giay-the-thao-nu.jpg",
        "https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/giay-vai-nam.jpg",
        "https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/nsp1-min.jpg",
        "https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/dep-nam-1.jpg",
        "https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/dep-nu-1.jpg",
        "https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/giay-cao-got.jpg",
        "https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/giay-luoi-nu.jpg"
    ]

    const arrayName = [
        "Giày Nam", "Giày Nữ", "Giày Da Nam", "Giày Lười Nam", "Giày Thể Thao Nam", "Giày Thể Thao Nữ",
        "Giày Vải Nam", "Giày Boot Nam", "Dép Nam", "Dép Nữ", "Giày Cao Gót", "Giày Lười Nữ"
    ]

    const showCategoryProduct = () => {
        return arrayImage.map((url, index)  => {
            return (
                <div className={"category-product-item"}>
                    <a href="#" className={"category-product-link"}>
                        <div className={"category-product-image"}>
                            <img src={url} alt="Ảnh minh họa"/>
                        </div>
                        <span>{arrayName[index]}</span>
                    </a>
                </div>
            )
        })
    }

    return (
        <div className={"category-product"}>
            <div className={"category-product-title"}>
                <RiOrganizationChart size={30} className={"category-title-icon"}/>
                Danh mục sản phẩm
            </div>
            <div className={"category-product-box"}>
                <div className={"category-product-row"}>
                    <div className={"category-product-list"}>
                        {showCategoryProduct()}
                    </div>
                    <div className={"category-product-arrow category-product-next"} onClick={handleClickSlide}>
                        <AiOutlineRight size={30} className={"category-arrow-icon"}/>
                    </div>
                    <div className={"category-product-arrow category-product-prev"} onClick={handleClickSlide}>
                        <AiOutlineLeft size={30} className={"category-arrow-icon"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category