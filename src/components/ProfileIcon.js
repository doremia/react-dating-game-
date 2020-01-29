import React from "react"


function ProfileIcon(props) {
   
    return (
        <div> 
            <img className="image-cover" onClick = {()=>{props.potato(props.icon)}} src={props.icon.imgUrl}/> 
            <h3> {props.icon.name} </h3>
            <p> {props.icon.age} </p>
        </div>
    )
}

export default ProfileIcon



// class ChoiceButton extends React.Component {

//     constructor() {
//         super()
//         this.state = {}
//     }

//     render () {
//         <button> </button>
//     }
// }

// export default Choicebutton