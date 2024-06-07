import { TweetType, UserType } from "../types";
import { v4 as uuid } from "uuid";
import User from "./User";
import { userDB } from "../database/User.db";
import { tweetDB } from "../database/Tweet.db";

class Tweet {
  id: string;
  user: User;
  content: string;
  type: string;
  likes: UserType[] = [];

  constructor(tweet: TweetType) {
    if (tweet.type !== "normal" && tweet.type !== "reply") {
      throw new Error(`O tweet deve ser do tipo normal ou reply.`);
    }
    this.id = uuid();
    this.user = tweet.user;
    this.content = tweet.content;
    this.type = tweet.type;
  }

  show() {
    //Retorna o tweet inteiro
    return console.log({
      id: this.id,
      user: this.user,
      content: this.content,
      type: this.type,
      likes: this.likes.length,
    });
  }

  showLikes() {
    //Retorna a quantidade de likes
    if ((this.likes.length === 0)) {
      return console.log(`@${this.user.username}: ${this.content}\n`)
    } else if ((this.likes.length === 1)) {
      return console.log(
        `@${this.user.username}: ${this.content}\n   [@${this.likes[0].name} curtiu]`
      );
    } else {
      return console.log(
        `@${this.user.username}: ${this.content}\n   [@${this.likes[0].name} e mais ${this.likes.length-1} usuários curtiram isso]`
      );
    }
  }
}

export default Tweet;
