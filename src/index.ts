import { tweetDB } from "./database/Tweet.db";
import { userDB } from "./database/User.db";
import { Tweet, User } from "./model";

const marcos = new User({email: "marcos@gmail.com",name: "marcos",pass: "123456789",username: "usuarioMarcos"})
const italo = new User({email: "italo@gmail.com", name: "italo",pass: "3123123", username: "usuarioItalo"})
const vanessa = new User({email: "vanessa@gmail.com", name: "vanessa",pass: "dk2nmdsa", username: "usuarioVanessa"})
const anderson = new User({email: "anderson@gmail.com", name: "anderson", pass: "dkasdkas", username: "usuarioAnderson"})


const tweet1 = new Tweet({content: "conteúdo do 1° tweet.", type: "normal", user: marcos})
const tweet2 = new Tweet({content: "conteúdo do 2° tweet", type: "normal", user: marcos})
const tweet3 = new Tweet({content: "conteúdo do 3° tweet", type: "reply", user: marcos})
const tweet4 = new Tweet({content: "conteúdo do 4° tweet", type: "normal", user: italo})

marcos.sendTweet(tweet1)
marcos.sendTweet(tweet2)
marcos.sendTweet(tweet3)

marcos.followUser(italo)
marcos.followUser(vanessa)
marcos.likeTweet(tweet4)
vanessa.likeTweet(tweet4)
anderson.likeTweet(tweet4)
anderson.likeTweet(tweet1)
vanessa.likeTweet(tweet1)
italo.replyTweet(tweet2, italo)

// tweet1.showLikes()