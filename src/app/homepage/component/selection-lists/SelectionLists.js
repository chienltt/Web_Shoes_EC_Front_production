import React from "react";
import {RiOrganizationChart} from "react-icons/ri";
import "./SelectionLists.scss"
import SelectionListsBox from "./SelectionListsBox";
const SelectionLists = (props) => {
    return (
        <div className={"selections-lists-main"}>
            <div className={"title"}><RiOrganizationChart size={27}/>
                <div style={{marginLeft: '10px'}}>Danh mục sản phẩm</div>
            </div>
            <SelectionListsBox/>
        </div>
    )
}
export default SelectionLists