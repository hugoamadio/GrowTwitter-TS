import { userDB } from "../database/User.db"
import { UserType } from "../types"
import {v4 as uuid} from "uuid"

class User{
    id: string
    name: string
    email: string
    username: string
    pass: string

    constructor(user: UserType){
        this.id = uuid()
        this.name = user.name
        this.email = user.email
        this.username = user.username
        this.pass = user.pass
    }

    registerUser(user: UserType){
        const verifyUser = userDB.find(item => item.username === user.username)
        if(!verifyUser){
            return userDB.push(user)
        } else {
            return console.log("Esse usúario já está cadastrado em nosso sistema.")
        }
    }
}

export default User