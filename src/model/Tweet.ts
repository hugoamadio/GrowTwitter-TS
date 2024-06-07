import { TweetType } from "../types"
import { v4 as uuid } from "uuid"
import User from "./User"

class Tweet{
    id: string
    user: User
    content: string
    type: string

    constructor(tweet: TweetType){
        if(tweet.type !== "normal" && tweet.type !== "reply"){
            throw new Error(`O tweet deve ser do tipo normal ou reply.`)
        }
        this.id = uuid()
        this.user = tweet.user
        this.content = tweet.content
        this.type = tweet.type
    }

    show(){
        return console.log({id: this.id, user: this.user, content: this.content, type: this.type})
    }
}

export default Tweet