import { User } from "../model"

interface UserType{
    id?: string
    name: string
    email: string
    username: string
    pass: string
    following?: User[]
}

export default UserType