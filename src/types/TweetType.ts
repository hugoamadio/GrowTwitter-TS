import { User } from "../model"

interface TweetType{
    id?: string
    user: User
    content: string
    type: string
    likes?: User[]
    replies?: User[]
}

export default TweetType