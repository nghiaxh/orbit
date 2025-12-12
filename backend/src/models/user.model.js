import mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    birthday: {
        type: Date,
        // required: true,
    },
    address: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        // required: true,
    },
    phone: {
        type: String,
        // required: true,
    },
    bio: {
        type: String,
    }
});

const User = mongoose.model("User", userSchema);

export default User;