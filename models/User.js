const { Schema, model } = require('mongoose');
const moment = require('moment');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
},
    {
        toJson: {
            virtuals: true,
        },
        id: false
    }
);

const User = model('User', userSchema);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length
});

module.exports = User;

