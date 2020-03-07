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
    "Roast each other",
    "Watch Anime",
    "Doing leetcode"
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
            showChat: false,
            showAct: false,
            chat:[],
            chatIndex:[0,4],
            activity:[],
            actIndex:[0,4]
        }

        this.makeChat = this.makeChat.bind(this)
        this.doThings = this.doThings.bind(this)
    }

    makeChat() { 
        let start = this.state.chatIndex[0] 
        let end = this.state.chatIndex[1] 
        const options = chatChoices.slice(start,end)
        if (start >= 8 ) { this.setState({chatIndex:[0, 4],
                chat:options})}
        else {
            this.setState({
                chatIndex:[start+4, end+4],
                chat:options
        })}
    

    }
    

    doThings() {
        let start = this.state.actIndex[0] 
        let end = this.state.actIndex[1] 
        const options = activityChoices.slice(start,end)
        if (start >= 8 ) { this.setState({actIndex:[0, 4],
                activity:options})}
        else {
            this.setState({
                actIndex:[start+4, end+4],
                activity:options
        })}
             
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

        const choiceBtnStyle = {
                display: "inline-flex"
            }

        const optionButtons = this.state.chat.map( option => <ChoiceButton key={option} choice={ option }/>) 

        const thingsButtons = this.state.activity.map( option => <ChoiceButton key={option} choice={option} />)
        

  
        return(
            <div className="user-row" style={{display:"flex"}}>
                <ProfileIcon icon={fakeUser} />
                <div>
                    <button style= {buttonStyle} onClick={ this.makeChat } > 
                        <p style={ buttonText }> Chat </p> 
                    </button>
                    <div style= {choiceBtnStyle} > { optionButtons } </div>
                    <button style= {buttonStyle} onClick={ this.doThings } > 
                        <p style={ buttonText }> Do things </p>
                    </button>
                    <div style= {choiceBtnStyle} > { thingsButtons } </div>
                </div>
            </div>
        )
    }
}

export default UserRow