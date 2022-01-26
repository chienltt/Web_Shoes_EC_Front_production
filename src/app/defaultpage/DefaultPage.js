import React from "react";
import {renderRoutes} from "react-router-config";
import "./DefaultPage.scss"
import 'font-awesome/css/font-awesome.min.css';
import {FaArrowRight, FaHeart, FaTimes} from "react-icons/fa";
import {AiOutlineSearch} from "react-icons/ai"
import {MdLocalGroceryStore} from "react-icons/md";
import {IoMdArrowDropdown} from "react-icons/io";
import Banner from "./banner/Banner";
import Category from "./category/Category";
import Sale from "./sale/Sale"

const DefaultPage = (props) => {
    return (
        <div className={"main"}>
            <div className={"header"}>
                <div className={"header-top"}>
                    <div className={"header-top-list"}>
                        <div className={"header-list-item"}>
                            <FaArrowRight size={13} className={"header-list-icon"}/>
                            SALE OFF NỮ
                        </div>
                        <div className={"header-list-item"}>
                            <FaArrowRight size={13} className={"header-list-icon"}/>
                            SALE OFF NAM
                        </div>
                        <div className={"header-list-item"} style={{border: 'none'}}>
                            <FaArrowRight size={13} className={"header-list-icon"}/>
                            1900 638083
                        </div>
                        <div className={"disabled-header-top-btn"}>
                            <FaTimes size={13} style={{color: "white"}}/>
                        </div>
                    </div>
                </div>
                <div className={"header-middle"}>
                    <div className={"header-middle-content"}>
                        <img className={"header-logo"} alt={""}
                             src={"https://timan.vn/Thumb.ashx?s=500&file=/UploadImages/timan-logo.png"}/>
                        <div className={"header-search-content"}>
                            <input id={"header-search-box"} autoComplete={"off"}
                                   placeholder={"Tìm kiếm trên Timan ..."}/>
                            <AiOutlineSearch size={20} className={"search-icon"} />
                        </div>
                        <div className={"header-middle-right"}>
                            <div className={"header-middle-login"}>
                                <tag className={"header-middle-account"} >Đăng nhập </tag>
                                <tag className={"header-middle-account"} >Đăng ký</tag>
                            </div>
                            <tag className={"header-middle-order header-middle-btn"} >Theo dõi đơn hàng</tag>
                            <div className={"header-middle-cart header-middle-btn"}>
                                <MdLocalGroceryStore size={30}/>
                                <span className={"header-item-box"}>
                                    <i className={"header-cart-count"}>0</i>
                                </span>
                            </div>
                            <div className={"header-middle-favorite header-middle-btn"}>
                                <FaHeart size={25}/>
                                <span className={"header-item-box"}>
                                    <i className={"header-favorite-count"}>0</i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"header-bottom"}>
                    <div className={"header-bottom-content"}>
                        <ul className={"header-bottom-navbar"}>
                            <li className="header-navbar-item">
                                <a className="header-item-link" href="#">
                                    Trang Chủ
                                </a>
                            </li>
                            <li className="header-navbar-item">
                                <a className="header-item-link" href="#">
                                    Giày Nam
                                    <IoMdArrowDropdown size={15} className={"header-navbar-dropdown"}/>
                                </a>
                            </li>
                            <li className="header-navbar-item">
                                <a className="header-item-link" href="#">
                                    Giày Nữ
                                    <IoMdArrowDropdown size={15} className={"header-navbar-dropdown"}/>
                                </a>
                            </li>
                            <li className="header-navbar-item">
                                <a className="header-item-link" href="#">
                                    Thời Trang Nam
                                    <IoMdArrowDropdown size={15} className={"header-navbar-dropdown"}/>
                                </a>
                            </li>
                            <li className="header-navbar-item">
                                <a className="header-item-link" href="#">
                                    Thời Trang Nữ
                                    <IoMdArrowDropdown size={15} className={"header-navbar-dropdown"}/>
                                </a>
                            </li>
                            <li className="header-navbar-item">
                                <a className="header-item-link" href="#">
                                    Thời Trang Bé Yêu
                                </a>
                            </li>
                            <li className="header-navbar-item">
                                <a className="header-item-link" href="#">
                                    Cảnh Báo Lừa Đảo
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={"container"}>
                <div className={"container-banner"}>
                    <Banner />
                </div>
                <div className={"container-category"}>
                    <Category />
                </div>
                <div className={"container-sale"}>
                    <Sale />
                </div>
            </div>
            {renderRoutes(props.routes)}
        </div>
    )
}
export default DefaultPage