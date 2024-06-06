import { userDB } from "../database/User.db";
import { UserType } from "../types";
import { v4 as uuid } from "uuid";

class User {
  id: string;
  name: string;
  email: string;
  username: string;
  pass: string;

  constructor(user: UserType) {
    const verifyUser = userDB.find((item) => item.username === user.username);
    if (verifyUser) {
      throw new Error(`Usuario já existe`)
    }
    this.id = uuid();
    this.name = user.name;
    this.email = user.email;
    this.username = user.username
    this.pass = user.pass;

    userDB.push(user)
  }
}

export default User;
