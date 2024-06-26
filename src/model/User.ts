import { tweetDB } from "../database/Tweet.db";
import { userDB } from "../database/User.db";
import { TweetType, UserType } from "../types";
import { v4 as uuid } from "uuid";
import Tweet from "./Tweet";
import TweetNormal from "./TweetNormal";
import TweetReply from "./TweetReply";

class User {
  private id: string;
  name: string;
  email: string;
  username: string;
  pass: string;
  following: User[] = [];

  constructor(user: UserType) {
    const verifyUser = userDB.find((item) => item.username === user.username);
    if (verifyUser) {
      throw new Error(`Usuario já existe`);
    }
    this.id = uuid();
    this.name = user.name;
    this.email = user.email;
    this.username = user.username;
    this.pass = user.pass;
    userDB.push(user);
  }

  getId() {
    return this.id;
  }

  followUser(user: User) {
    //Adiciona o usuario a seguir no array following da classe
    if (user.id === this.id) {
      throw new Error("Você não pode seguir você mesmo.");
    }
    return this.following.push(user);
  }

  getFollowingList() {
    //Percorre o array following exibindo cada item do array
    return this.following.forEach((item) => console.log(item.id));
  }

  sendTweet(tweet: TweetType) {
    //Adiciona o tweet passado no database tweetDB
    const newTweet = new TweetNormal(tweet);
    return tweetDB.push(newTweet);
  }

  showTweets() {
    //Mostra todos os tweets do tipo normal
    tweetDB.forEach((item) => {
      if (item.user.id === this.id && item.type === "normal") {
        // tweetDB.find(item => item.user.username === this.username)
        return console.log(
          `@${this.username}: ${item.content}\n     <${item.likes?.length}>\n     <replies>`
        );
      }
    });
  }

  showFeed() {
    tweetDB.forEach((item) => {
      if (item.user.id === this.id) {
        // tweetDB.find(item => item.user.username === this.username)
        return console.log(
          `@${this.username}: ${item.content}\n     <${item.likes?.length}>\n     <replies>`
        );
      }
    });
  }

  likeTweet(tweet: Tweet) {
    //Adiciona o user que curtiu no array likes da classe Twet
    if (tweet.user.username === this.username) {
      throw new Error("Você não pode curtir seu próprio tweet.");
    }
    tweet.likes.push(this);
  }

  replyTweet(tweet: Tweet, content: string) {
    //Copia o tweet a ser replicado adicionando ele no DB tweetDB com o User atualizado
    if (tweet.user.username === this.username) {
      throw new Error("Não é possivel replicar seu próprio tweet");
    }
    const newTweet = new TweetReply({
      content: content,
      type: "reply",
      user: this,
    });
    tweet.replies.push(newTweet);
    const holder = new TweetReply({
      id: newTweet.id,
      user: newTweet.user,
      content: newTweet.content,
      type: newTweet.type,
      likes: newTweet.likes,
      replies: newTweet.replies,
    })
    return tweetDB.push(holder);
  }

  showFeedTweets() {
    tweetDB.forEach((tweet) => {
      if (tweet.user.username === this.username) {
        console.log(`@${this.username}: ${tweet.content}`);
        let likes = tweet.likes.length;
        console.log(`[${likes} Likes]`);
        tweet.replies.forEach((reply) => {
          console.log(`>${reply.user.username}: ${reply.content}`);
        });
      }
    });
  }
  
}

export default User;
