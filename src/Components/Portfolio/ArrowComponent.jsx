import React from "react";


export const NextArrow = (props) => {
    //const {className, style,on Click}=props;
    return (
        <>
        <div 
        className={props.className}
        style= {{...props.style, backgroundColor: "black"}}
        onClick={props.onClick}
        />
        </>
    )
}

export const PrevArrow = (props) => {
    return (
        <>
        <div
         className={props.className}
        style= {{...props.style, backgroundColor: "black"}}
        onClick={props.onClick}/>
        </>
    )
}

