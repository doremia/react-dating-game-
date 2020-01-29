import React, { Component } from "react"

import ProfileIcon from "./ProfileIcon"
import TextBox from "./TextBox"

const ProfileData = [
    {
        id:1,
        name:"Kyle",
        age:23,
        imgUrl:"https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg",
        job:"Creative Director, Twitch",
        activities:["Moives","Cooking","Reading","Tea","Wine tasting"],
        chatInterests:[],
        qualities:["Quiet sometimes","Dry humor","Great fashion taste","Rigid","Career-driven"],
        greetings:["Good Day!", "..."]
    },

    {
        id:2,
        name:"Alec",
        age:27,
        imgUrl:"https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg",
        job:"Executive, Goldman Sachs",
        activities:["Dogs","Concerts","Outdoosy stuff","Watch Rick and Morty"],
        chatInterests:[],
        qualities:["Affectionate","Easy-going","Cuddly","Playful"],
        greetings:["You up", "Wasssup!!!", "Woof!"]
    },

    {
        id:3,
        name:"Nathan",
        age:30,
        imgUrl:"https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg",
        job:"Doctor,  Doctors without borders",
        activities:["Independent movies","meditaion","Pixar","Plants","Makes good steaks"],
        chatInterests:[],
        qualities:["Caring","No Alcohol","Loving","Minimalist"],
        greetings:["Drink water", "You should donate blood"]
    }
]


class CharactersRow extends Component {
    constructor(){
        super()
        this.state = {
            info: ProfileData,
            greeting: null
        }
    }

    greet = (icon) => {
        console.log("call back")

        this.setState(
            {greeting : icon.greetings[0]} )
    }

    

    render(){
        const icons = ProfileData.map(icon => 
            <ProfileIcon style={{display:"inline"}} potato={this.greet} icon={icon} />                   
        )

        return(
            <div className="wrapper" style={{display:"flex"}}>

                { icons }
                {this.state.greeting ? <TextBox text={this.state.greeting} /> : null}
            </div>
        )
    }
}


export default CharactersRow