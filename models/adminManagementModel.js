const mongoose = require ('mongoose');
const bcrypt = require ('bcrypt');    // secure-Password
const SaltRounds = parseInt (process.env.SALT_ROUNDS);  //hashes and convert mix strings

// Date
const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
const time = today.getTime();
//Start Block Schema Creating
const AdminRegisterSchema = mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true, unique:true},
    password: { type: String, required: true},
    saltString: { type:String },
    status: { type:Number, default:1 },
    createdDate: {
        type: String,
        default: `${year}-${month}-${day}-${time}`,
    }
},{timestamps:true}) //find last login updated time

AdminRegisterSchema.pre('save', async function (next) {

    try {
        const Salt = await bcrypt.genSalt(SaltRounds);
        const HashedPassword = await bcrypt.hash(this.password, Salt);

        this.password = HashedPassword;
        this.saltString = Salt;
        next();
    } catch (error) {
        return ({
            Message: error.message,
            Data: false,
            Result: null
        })
    }
});
// End Block Schema Creating

// Exporting The Schema
module.exports = mongoose.model('AdminRegisterCollection',AdminRegisterSchema);
