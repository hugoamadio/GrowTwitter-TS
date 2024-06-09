import { User } from "../model"
import UserType from "./UserType"

interface TweetType{
    id?: string
    user: User
    content: string
    type: string
    likes?: UserType[]
}

export default TweetType