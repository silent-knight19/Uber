const UserModel = require("../models/UserModel");

const registerUser = async ({email,password,fullname})=>{
    if(!email || !password || !fullname){
        throw new Error("All fields are required");
    }
    const user=UserModel.create({
        
        fullname:{
            firstName,
            lastName
        },
        email,
        password,
        
    })
    return user;
}
  

module.exports = { registerUser };
