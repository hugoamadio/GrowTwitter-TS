import { tweetDB } from "./database/Tweet.db";
import { userDB } from "./database/User.db";
import { Tweet, User } from "./model";

const admin = new User({email: "admin@gmail.com",name: "admin",pass: "123456789",username: "admin"})
const admin2 = new User({email: "admin2@gmail.com", name: "admin",pass: "3123123", username: "admin2"})

const tweet1 = new Tweet({content: "conteúdo do 1° tweet.", type: "normal", user: admin})
const tweet2 = new Tweet({content: "conteúdo do 2° tweet", type: "normal", user: admin})
const tweet3 = new Tweet({content: "conteúdo do 3° tweet", type: "reply", user: admin})

admin.sendTweet(tweet1)
admin.sendTweet(tweet2)
admin.sendTweet(tweet3)

admin.showTweets()