import { TweetType, UserType } from "../types";
import User from "./User";
import { v4 as uuid } from 'uuid'

abstract class Tweet {
  id: string;
  user: User;
  content: string;
  type: string;
  likes: User[] = [];
  replies: Tweet[] = []

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
    const tweet = `@${this.user.username}: ${this.content}\n    <${this.likes.length} likes>\n    <Replys>`
    return console.log(tweet);
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

  showReplies(){
    console.log(`@${this.user.username}: ${this.content}`)
    this.replies.forEach(item => {
      console.log(`> ${item.user.username}: ${item.content}`)
    })
}

}
export default Tweet;
