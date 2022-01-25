import React from "react";
import "./SelectionListsBox.scss"
import Selection from "./component/Selection";
const listTest = [
    {
        title:"Giày Tây Nam",
        img:"https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/dep-nam-1.jpg"
    },
    {
        title:"Giày Lười Nữ",
        img:"https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/giay-luoi-nu.jpg"
    },
    {
        title:"Giày Cao Gót",
        img:"https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/giay-cao-got.jpg"
    },
    {
        title:"Giày Công Sở Nam",
        img:"https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/nsp5-min.jpg"
    },
    {
        title:"Giày Cao Gót",
        img:"https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/giay-cao-got.jpg"
    },
    {
        title:"Giày Công Sở Nam",
        img:"https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/nsp5-min.jpg"
    }
]
const SelectionListsBox = (props)=>{
    const showListSelections=(list)=>{
        return(
            <div className={"selections-lists-content"}>
                {list.map(item=>{
                    return(
                        <Selection selection={item}/>
                    )
                })}
            </div>
        )
    }
    return(
        <div className={"body-box"}>
            {showListSelections(listTest)}
        </div>
    )
}
export default SelectionListsBox