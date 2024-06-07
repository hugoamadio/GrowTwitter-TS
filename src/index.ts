import { tweetDB } from "./database/Tweet.db";
import { userDB } from "./database/User.db";
import { Tweet, User } from "./model";

const admin = new User({email: "admin@gmail.com",name: "admin",pass: "123456789",username: "admin"})
const admin2 = new User({email: "admin2@gmail.com", name: "admin",pass: "3123123", username: "admin2"})
const admin3 = new User({email: "admin3@gmail.com", name: "admin",pass: "dk2nmdsa", username: "admin3"})

const tweet1 = new Tweet({content: "conteúdo do 1° tweet.", type: "normal", user: admin})
const tweet2 = new Tweet({content: "conteúdo do 2° tweet", type: "normal", user: admin})
const tweet3 = new Tweet({content: "conteúdo do 3° tweet", type: "reply", user: admin})
const tweet4 = new Tweet({content: "conteúdo do 4° tweet", type: "normal", user: admin2})

admin.sendTweet(tweet1)
admin.sendTweet(tweet2)
admin.sendTweet(tweet3)

admin.followUser(admin2)
admin.followUser(admin3)
admin.likeTweet(tweet4)
admin3.likeTweet(tweet4)
admin2.replyTweet(tweet2, admin2)
