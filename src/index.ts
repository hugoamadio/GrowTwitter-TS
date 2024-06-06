import { userDB } from "./database/User.db";
import { User } from "./model";

const admin = new User({email: "admin@gmail.com",name: "admin",pass: "123456789",username: "admin"})

const admin2 = new User({email: "admin2@gmail.com", name: "admin",pass: "3123123", username: "admin2"})