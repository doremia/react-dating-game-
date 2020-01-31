import React, { Component } from "react"

import ChoiceButton from "./ChoiceButton"
import ProfileIcon from "./ProfileIcon"


const activityChoices = [
    "Yoga", 
    "Hiking",
    "Martial Arts", 
    "Love Making", 
    "Art Museum", 
    "Cooking Class",
    "Grocery Shopping", 
    "Process of love making",
    "Reddit Browsing",
    "Roast each other"
]

const chatChoices = [
    "Trump", 
    "Feelings", 
    "Travel", 
    "Food", 
    "Family", 
    "Global Warming",
    "The most disturbing subreddit",
    "Memes",
    "Dating history",
    "Traumas",
    "Our future",
    "Childhood"
]

const fakeUser = {
    imgUrl : "https://www.navigo.com.au/wp-content/uploads/2016/05/derpy-awesome-adorable-dogs-29-1.jpg",
    name:"SexyBomb",
    age:26
}

class UserRow extends Component {
    constructor(){
        super()
        this.state={
            chat:["","","",""],
            activity:""
        }
    }

    makeChat() {
        this.setState(prevState=> {
            prevState.chat.map((option)=><ChoiceButton choice={prevState.chat}/>)
        }

        )
    }

    doThings() {
        activityChoices.map()
    }



    render(){
        const buttonStyle = {

            background: "#3498db",
            width: "180px",
            padding: "4px 0",
            position: "relative",
            left: "50%",
            top: "50%",
            transform: "translateX(-50%) translateY(-50%)",
            borderRadius: "3px"
        }

        const buttonText = {
            fontFamily: 'Roboto',
            textAlign: "center",
            textTransform: "uppercase",
            color: "#FFF",
            userSelect: "none"
          }
  
        return(
            <div className="user-row" style={{display:"flex"}}>
                <ProfileIcon icon={fakeUser} />
                <div>
                    <button style= {buttonStyle} onClick={ this.makeChat } > 
                        <p style={ buttonText }> Chat </p> 
                    </button>
                    <button style= {buttonStyle} onClick={ this.doThings } > 
                        <p style={ buttonText }> Do things </p>
                    </button>
                </div>
            </div>
        )
    }
}

export default UserRow