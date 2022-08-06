const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    firstName: {
        type: String,
        requires: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ["user", "staff", "manager", "admin"],
        default: "user"
    },
    token: {
        type: String
    }
},
    {
        timestamps: true
    }
);

const User = mongoose.model('user', UserSchema);

module.exports = User;