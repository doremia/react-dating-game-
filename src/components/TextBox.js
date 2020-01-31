import React from "react"

function TextBox(props) {
    const speechStyle={
        marginLeft:"30px"
    }

    return (
        <div className="speech-bubble">
            <p className="speech" style={speechStyle} > {props.text} </p>
        </div>
    )
}

export default TextBox