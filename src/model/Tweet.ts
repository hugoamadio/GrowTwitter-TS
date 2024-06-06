import { TweetType } from "../types"
import { v4 as uuid } from "uuid"

class Tweet{
    id: string
    content: string
    type: string

    constructor(tweet: TweetType){
        this.id = uuid()
        this.content = tweet.content
        this.type = tweet.type
    }
}