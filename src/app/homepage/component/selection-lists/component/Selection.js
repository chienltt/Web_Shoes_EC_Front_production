import React from "react";
import "./Selection.scss"
const Selection = (props) => {
    const selection = props.selection
    console.log("okok", selection)
    return (
        <div className={"selection-item"}>
            <img className={"selection-item-image"}  alt={""} src={selection.img}/>
            <div className={"selection-item-title"}>{selection.title}</div>
        </div>
    )
}
export default Selection