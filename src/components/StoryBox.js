import React from "react"

function StoryBox(props) {

    const storyStyle ={
        position: "relative",
        background: "whitesmoke",
        borderRadius: "1.0em",
        width: "350px",
        height: "250px",
        margin: "50px"
    }

    const textStyle = {
        margin:"20px"
    }
    
    return (
        <div className="story-box" style= { storyStyle} >
            { props.imgUrl ? <img src={ props.imgUrl } style={{width:"350px", height:"250px"}} alt="dog"/> :
            <p className="story-text" style={ textStyle } > {props.text} </p> }
        </div>
    )
}

export default StoryBox