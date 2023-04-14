import mongoose from "mongoose";

export function connect() {
  mongoose
    .connect(
      "mongodb+srv://hoangphuc91dtt:phuchoang112233@cluster0.y5elmgl.mongodb.net/demo_cv"
    )
    .then(() => console.log("Connected!"));
}
