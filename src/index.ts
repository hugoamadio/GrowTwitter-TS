import { userDB } from "./database/User.db";
import { User } from "./model";

const admin = new User({email: "admin@gmail.com",name: "admin",pass: "123456789",username: "admin"})

const user1 = admin.registerUser({
    email: "usuario1@gmail.com",
    name: "usuario1",
    pass: "senhausuario1",
    username: "usuario1"
})

