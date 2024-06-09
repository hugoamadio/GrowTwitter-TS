import { User } from "../model"

interface TweetType{
    id?: string
    user: User
    content: string
    type: string
    likes?: User[]
}

export default TweetType