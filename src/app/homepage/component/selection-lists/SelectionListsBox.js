import React, {useState, useEffect} from "react";
import "./SelectionListsBox.scss"
import Selection from "./component/Selection";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

const listTest = [
    {
        title: "Giày Tây Nam",
        img: "https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/dep-nam-1.jpg"
    },
    {
        title: "Giày Lười Nữ",
        img: "https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/giay-luoi-nu.jpg"
    },
    {
        title: "Giày Cao Gót",
        img: "https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/giay-cao-got.jpg"
    },
    {
        title: "Giày Công Sở Nam",
        img: "https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/nsp5-min.jpg"
    },
    {
        title: "Giày Cao Gót",
        img: "https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/giay-cao-got.jpg"
    },
    {
        title: "Giày Công Sở Nam",
        img: "https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/nsp5-min.jpg"
    },
    {
        title: "Giày Tây Nam",
        img: "https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/dep-nam-1.jpg"
    },
    {
        title: "Giày Lười Nữ",
        img: "https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/giay-luoi-nu.jpg"
    },
    {
        title: "Giày Cao Gót",
        img: "https://timan.vn/Thumb.ashx?s=250&file=/UploadImages/shops/giay-cao-got.jpg"
    }
]
const SelectionListsBox = (props) => {
    const [widthItem, setWidthItem] = useState(0)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    let loading = false
    window.addEventListener('resize', () => {
        setScreenWidth(window.innerWidth)
    })
    useEffect(() => {
        const elementItem = document.getElementsByClassName("selection-item")[0]
        const style = window.getComputedStyle(elementItem)
        const width = style.getPropertyValue("width").replace('px', '')
        setWidthItem(Number(width))
    }, [screenWidth])
    const changeTranslateListSelections = (oldValue, extraValue) => {
        const element = document.getElementsByClassName("selections-lists-content")[0]
        element.style.transform = `translate(${oldValue + extraValue}px,0)`
    }
    const onclickPreSwapBtn = () => {
        // const btn = document.getElementsByClassName("swap-btn pre")[0]
        // btn.disabled = true
        // setTimeout(()=>{
        //     btn.disabled = false
        // },300)
        if (loading === false) {
            loading = true
            setTimeout(() => {
                loading = false
            }, 150)
            const element = document.getElementsByClassName("selections-lists-content")[0]
            const style = window.getComputedStyle(element)
            const transform = style.getPropertyValue("transform").match(/(-?[0-9]+)/g)
            const translateX = Number(transform[4])
            changeTranslateListSelections(translateX, -widthItem)
        }
    }
    const onclickNextSwapBtn = () => {
        if (loading === false) {
            loading = true
            setTimeout(() => {
                loading = false
            }, 150)
            const element = document.getElementsByClassName("selections-lists-content")[0]
            const style = window.getComputedStyle(element)
            const transform = style.getPropertyValue("transform").match(/(-?[0-9]+)/g)
            const translateX = Number(transform[4])
            changeTranslateListSelections(translateX, widthItem)
        }
        // setTimeout(()=>{
        //     btn.disabled = false
        // },300)
        // const btn = document.getElementsByClassName("swap-btn next")[0]
        // console.log("okok",btn)
        // btn.disabled = true
    }
    const showListSelections = (list) => {
        return (
            <div className={"selections-lists-content"}>
                {list.map(item => {
                    return (
                        <Selection selection={item}/>
                    )
                })}
            </div>
        )
    }
    return (
        <div className={"body-box"}>
            {showListSelections(listTest)}
            <div className={"swap-btn pre"} onClick={() => onclickPreSwapBtn()}><IoIosArrowBack
                style={{color: 'white'}} size={22}/></div>
            <div className={"swap-btn next"} onClick={() => onclickNextSwapBtn()}><IoIosArrowForward
                style={{color: 'white'}} size={22}/></div>
        </div>
    )
}
export default SelectionListsBox;