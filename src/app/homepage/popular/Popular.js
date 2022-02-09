import React from "react";
import "./Popular.scss"

const Popular = () => {
    return (
        <div className={"product-popular"}>
            <div className={"product-popular-heading"}>
                Hot Hot
            </div>
            <div className={"product-popular-container"}>
                <div className={"product-popular-row"}>
                    <div className={"col-12 col-lg-4"}>
                        <div className={"product-popular-title"}>Sản phẩm nổi bật</div>
                        <div className={"product-popular-menu"}>
                            <div className={"product-popular-tabs"}></div>
                        </div>
                        <div className={"product-popular-box"}></div>
                    </div>
                    <div className={"col-12 col-lg-4"}></div>
                    <div className={"col-12 col-lg-4"}></div>
                </div>
            </div>
        </div>
    )
}

export default Popular