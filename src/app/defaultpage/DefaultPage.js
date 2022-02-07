import React from "react";
import {renderRoutes} from "react-router-config";
import "./DefaultPage.scss"
import 'font-awesome/css/font-awesome.min.css';
// import {ArrowRight, ArrowRightShort} from "react-bootstrap-icons";
import {FaArrowRight, FaHeart, FaTimes} from "react-icons/fa";
// import {AiOutlineSearch} from "react-icons/all";
import {AiFillCaretDown, AiOutlineDown, AiOutlineSearch} from "react-icons/ai"
import {MdLocalGroceryStore} from "react-icons/md";
import {FiMenu} from "react-icons/fi";
// import {faArrowAltCircleRight} from "@fortawesome/free-regular-svg-icons";
const DefaultPage = (props) => {
    return (
        <div className={"main"}>
            <div className={"container-liquid header"}>
                <div className={"container"}>
                    <div className={"row header-top"}>
                        <div className={"col-sm-4  item"}>
                            <FaArrowRight size={13} className={"icon"}/>
                            SALE OFF NỮ
                        </div>
                        <div className={"col-sm-4  item"}>
                            <FaArrowRight size={13} className={"icon"}/>
                            SALE OFF NAM
                        </div>
                        <div className={"col-sm-4 item"} style={{border: 'none'}}>
                            <FaArrowRight size={13} className={"icon"}/>
                            1900 638083
                        </div>
                        <div className={"disabled-header-top-btn"}>
                            <FaTimes size={13} style={{color: "white"}}/>
                        </div>
                    </div>
                </div>
                <div className={"header-middle"}>
                    <div className={"container header-middle-content"}>
                        <img className={"header-logo-large"} alt={""}
                             src={"https://timan.vn/Thumb.ashx?s=500&file=/UploadImages/timan-logo.png"}/>
                        <img className={"header-logo-small"} alt={""}
                             src={"https://timan.vn/Thumb.ashx?s=150&file=/UploadImages/timan-favicon.png"}/>
                        <div className={"header-search-content"}>
                            <input id={"header-search-box"} autoComplete={"off"}
                                   placeholder={"Tìm kiếm trên Timan ..."}/>
                            <AiOutlineSearch size={20} className={"search-icon"}/>
                        </div>
                        <div className={"header-middle-right"}>

                            <tag className={"btn"} style={{margin: '0px'}}>Đăng nhập /</tag>
                            <tag className={"btn"}> Đăng ký</tag>
                            <tag className={"btn"}> Theo dõi đơn hàng</tag>
                            <MdLocalGroceryStore className={"btn"} size={30}/>
                            <FaHeart className={"btn"} size={25}/>
                            <FiMenu className={"btn-menu"} onClick={() => {
                                console.log("okok", document.getElementById("nav-menu-small-screen"))
                                const element = document.getElementById("nav-menu-small-screen")
                                if (element.style.width === "0px")
                                    element.style.width = '300px'
                                else element.style.width = '0px'
                            }} size={25}/>
                        </div>
                    </div>
                </div>
                <div className={"header-bottom"}>
                    <ul className={"container nav-list"}>
                        <li className={"nav-item"}> Trang chủ</li>
                        <li className={"nav-item"}> Giày nam <AiFillCaretDown size={11}/></li>
                        <li className={"nav-item"}> Giày nữ <AiFillCaretDown size={11}/></li>
                        <li className={"nav-item"}> Thời trang nam <AiFillCaretDown size={11}/></li>
                        <li className={"nav-item"}> Thời trang nữ <AiFillCaretDown size={11}/></li>
                        <li className={"nav-item"}> Thời trang bé yêu</li>
                        <li className={"nav-item"}> Cảnh báo lừa đảo</li>

                    </ul>
                </div>
                <ul id={"nav-menu-small-screen"}>
                    <li className={"nav-item-sm"}> Trang chủ </li>
                    <li className={"nav-item-sm"}> Giày nam <AiOutlineDown className={"icon"} size={15}/></li>
                    <li className={"nav-item-sm"}> Giày nữ <AiOutlineDown className={"icon"} size={15}/></li>
                    <li className={"nav-item-sm"}> Thời trang nam <AiOutlineDown className={"icon"} size={15}/></li>
                    <li className={"nav-item-sm"}> Thời trang nữ <AiOutlineDown className={"icon"} size={15}/></li>
                    <li className={"nav-item-sm"}> Thời trang bé yêu</li>
                    <li className={"nav-item-sm"}> Cảnh báo lừa đảo</li>
                </ul>
            </div>
            {renderRoutes(props.route.routes)}
        </div>
    )
}
export default DefaultPage