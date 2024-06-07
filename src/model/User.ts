import { tweetDB } from "../database/Tweet.db";
import { userDB } from "../database/User.db";
import { TweetType, UserType } from "../types";
import { v4 as uuid } from "uuid";
import Tweet from "./Tweet";

class User {
  private id: string;
  name: string;
  email: string;
  username: string;
  pass: string;
  following: any[] = []

  constructor(user: UserType) {
    const verifyUser = userDB.find((item) => item.username === user.username);
    if (verifyUser) {
      throw new Error(`Usuario já existe`)
    }
    this.id = uuid();
    this.name = user.name;
    this.email = user.email;
    this.username = user.username
    this.pass = user.pass;
    userDB.push(user)
  }

  followUser(user: any){
    if(user.id === this.id){
      throw new Error("Você não pode seguir você mesmo.")
    }
    return this.following.push(user)
  }

  getFollowingList(){
    return this.following.forEach(item => console.log(item.id))
  }

  sendTweet(tweet: TweetType){
      return tweetDB.push(tweet)
  }

  showTweets(){
    tweetDB.forEach(item => {
      if(item.user.id === this.id && item.type === "normal"){
        return console.log(`@${this.username}: ${item.content}\n     <likes>\n     <replies>`)
      }
    })
  }

  likeTweet(tweet: Tweet){
    if(tweet.user.username === this.username){
      throw new Error("Você não pode curtir seu próprio tweet.")
    }
    tweet.likes.push(this.id)
  }

}

export default User;
