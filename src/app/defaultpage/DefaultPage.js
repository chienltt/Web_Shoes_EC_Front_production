import React from "react";
import {renderRoutes} from "react-router-config";
import "./DefaultPage.scss"
import 'font-awesome/css/font-awesome.min.css';
// import {ArrowRight, ArrowRightShort} from "react-bootstrap-icons";
import {FaArrowRight, FaHeart, FaTimes} from "react-icons/fa";
// import {AiOutlineSearch} from "react-icons/all";
import {AiOutlineSearch} from "react-icons/ai"
import {MdLocalGroceryStore} from "react-icons/md";
// import {faArrowAltCircleRight} from "@fortawesome/free-regular-svg-icons";
const DefaultPage = (props) => {
    return (
        <div className={"main"}>
            <div className={"header"}>
                <div className={"header-top"}>
                    <div className={"list-item"}>
                        <div className={"item"}>
                            <FaArrowRight size={13} className={"icon"}/>
                            SALE OFF NỮ
                        </div>
                        <div className={"item"}>
                            <FaArrowRight size={13} className={"icon"}/>
                            SALE OFF NAM
                        </div>
                        <div className={"item"} style={{border: 'none'}}>
                            <FaArrowRight size={13} className={"icon"}/>
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

                            <tag className={"btn"} style={{margin:'0px'}} >Đăng nhập </tag> / <tag className={"btn"}  > Đăng ký</tag>
                            <tag className={"btn"}> Theo dõi đơn hàng  </tag>
                            <MdLocalGroceryStore className={"btn"} size={30}/>
                            <FaHeart className={"btn"} size={25}/>
                        </div>
                    </div>
                </div>
            </div>
            {renderRoutes(props.routes)}
        </div>
    )
}
export default DefaultPage