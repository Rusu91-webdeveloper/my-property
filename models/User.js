import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Email is required"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    image: { type: String },
    // Referencing the Property model
    bookmarks: [{ type: Schema.Types.ObjectId, ref: "Property" }],
  },
  {
    // It Creates automatically an timestamp created at and deleted at
    timestamps: true,
  }
);

const User = models.User || model("User", UserSchema);
export default User;
