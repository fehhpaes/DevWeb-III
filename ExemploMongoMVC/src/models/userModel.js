const mongoose = require('mongoose');
const schema = mongoose.schema;

let userSchema = new schema({
    name: {type: String, required: true, max:100},
    age: {type: Number, required: true},

    
});

module.exports = mongoose.model('User', userSchema);




