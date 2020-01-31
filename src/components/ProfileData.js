// Dudes'data

//Basic info(Name, Age, Height, occupation, location)
// dudes = {
//     kyle:["Kyle",23,"5'11","Creative Director in a video game company.","British,has lived in SF for 3 years"],
//     alex:["Alex",27,"6","EM at a finTech","grew up in LA, SF for 8 yrs"],
//     nathan:["Nathan",30,"6'1","VP at an advertising company","NYC, SF for 5 yrs"] 
// }


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
        imgUrl:"https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
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

export default ProfileData

// const feedbacks = [
//     "You know exactly what I like",
//     "Hell yeah!",
//     "Cool",
//     "Legit",
//     "mmmkay"
// ]

// const prompts = {
//     welcome:"Come to know Kyle, Alec and Nathan! You will choose the guy you like the most in the end of the game and see if you guys are compatible by the options you choose during the game",
//     meet:"Start by meeting the charater first.",
//     chat:"What would you like to chat about?",
//     activity:"What would you like to do for the date?",
//     unlock:"You two have become more intimate. Here is a little thing about him...",
// }

// const rejections = {
//     no:"No!",
//     sex:"I would like to know you more before we go further.",
//     feelings:"I don't like to talk about my feeling.",
//     space:"I would like to be alone.",
//     boring: "That's boring."
// }

// const sweetLies = [
//     "You are so pretty and funny.\nI really enjoyed our date. Hope to see you soon!",
//     "I feel there's an unique connection between us.",
//     "I don't think I have ever felt this way before.",
//     "This is my first time.",
//     "I enjoy doing anything with you even just sitting around doing nothing",
//     "Nice boobs!",
//     "You are perfect the way you are.",
//     "I never lie"
// ]

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

const endings = {
    happy:" Yay! We are gonna have a football team of babies. ",
    sad: "You are gonna die alone in a tiny apartment and no one is gonna notice..."
}
