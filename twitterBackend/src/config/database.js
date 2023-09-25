import mongoose from 'mongoose';

 export const connect=() =>{ 
    mongoose.connect('mongodb+srv://sny2771999:twitterCodeWell006@cluster0.t7ty2um.mongodb.net/')
    .then(()=>{console.log("connected to database")})
    .catch((err) =>{console.log(err);})
}

export default connect;