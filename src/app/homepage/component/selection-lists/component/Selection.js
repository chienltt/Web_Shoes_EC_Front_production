import React from "react";
import "./Selection.scss"

const Selection = (props) => {
    const selection = props.selection
    return (
        <div className={"selection-item"}>

            <div className={"selection-item-image"}>
                <img className={"img"} alt={""} src={selection.img}/>
            </div>
            <div className={"selection-item-title"}>{selection.title}</div>
        </div>
    )
}
export default Selection