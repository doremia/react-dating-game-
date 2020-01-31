import React from "react"


function ProfileIcon(props) {

    const iconStyle = {
        textAlign:"center",
        marginLeft:"20px"
    }

    const nameStyle = {
        marginBlockEnd: 0,
        marginBlockStart: 0
    }
   
    const ageStyle = {
        marginBlockEnd: 0,
        marginBlockStart: 0
    }   
    return (
        <div className="icon" style={iconStyle} > 
            <img className="image-cover" onClick = {()=>{props.potato(props.icon)}} src={props.icon.imgUrl} alt="dog"/> 
            <h3 className="icon-name" style={nameStyle} > {props.icon.name} </h3>
            <p className="icon-age" style={ageStyle} > {props.icon.age} </p>
        </div>
    )
}

export default ProfileIcon
