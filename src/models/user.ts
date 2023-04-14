import { Schema, model } from "mongoose";

interface IUser {
  name: string;
  phone: string;
}

const UserSchema = new Schema<IUser>({
  name: {
    type: String
  },
  phone: {
    type: String
  }
});

const UserModel = model<IUser>("User", UserSchema);

export default UserModel;
