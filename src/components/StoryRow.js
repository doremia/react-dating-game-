import React, { Component } from "react"
import StoryBox from "./StoryBox"



const scenes = {
   sex: "And again, as before, she unzipped my fly, took out my penis, and put it in her mouth. The one thing different from before was that she did not take off her own clothing. She wore Kumiko’s dress the whole time. I tried to move, but it felt as if my body were tied down by invisible threads. I felt myself growing big and hard inside her mouth.",
   encounter:"Jacob and I first met in the 6th grade when we were 11yo. We grew up together as best friends. It wasn’t until our college years that we both noticed how cute the other had become ? We truly fell in love right away and I am forever thankful I get to grow old with such a hardworking, selfless, fun, goofy man."
}

const prompts = {
    welcome:"Come to know Kyle, Alec and Nathan! \ \ You will choose the guy you like the most in the end of the game and see if you guys are compatible by the options you choose during the game",
    meet:"Start by meeting the charaters first. \  Click the buttons below \  Do things : To choose an activity to do together, \ Chat: To choose a topic of chat",
    chat:"What would you like to chat about?",
    activity:"What would you like to do for the date?",
    unlock:"You two have become more intimate. Here is a little thing about him...",
}

const endings = {
    happy:" Yay! We are gonna have a football team of babies. ",
    sad: "You are gonna die alone in a tiny apartment and no one is gonna notice..."
}


class StoryRow extends Component {
    constructor(){
        super()

        this.state={
            prompt:"welcome",
            scene: scenes["encounter"],
            ending: "sad"
        }

        // this.showEndings = this.showEndings.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    // showEndings() {
    //     this.setSate(prevState=> ({ending: "sad"}))
    //     return (this.state.ending)
    // }
    handleClick(){
        if (this.state.prompt === "welcome") {
            this.setState({ prompt: "meet" })
            return (this.state.prompt) 
        } 
        else if (this.state.prompt === "meet") {
            this.setState({ prompt: "chat"})
            return (this.state.prompt)
        }
          
        else if (this.state.prompt === "chat") {
            this.setState({ prompt: "activity"})
            return (this.state.prompt) 
        }              
    }

    render(){

        return(
            <div className="story" style={{ display:"flex" }}>
                <StoryBox text={ prompts[this.state.prompt] } onClick={ this.handleClick } />

                <StoryBox 
                    imgUrl="https://static.wixstatic.com/media/3559fc_9d146ef9d5df4f3d9b4f95ba043bae4e~mv2_d_2250_1688_s_2.gif"/>
                
                <StoryBox text={ endings[this.state.ending] } onClick={ this.showEndings } />
            </div>
        )
    }
}

export default StoryRow