const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Spectacular');
//                                      |
//                                 database name

const Schema = mongoose.Schema; //creating object schema

const Queries = new Schema({
   //heading : dataType
  name: String,
  phone: String,
  email: String,
  message: String,
});
const logins = new Schema({

   username: String, 
   password: String,
});
//                     collection Name
const user = mongoose.model('Contact', Queries);      //creating object user
//                                  schema(required to be given)


const login = mongoose.model('Login', logins);

async function run(data){

    // console.log("This is what i got in data",data);
    if(data == {})
      {
        console.log("Data was empty");
        return;
      } 
    else{
    const new_user = await user.create(data);
    new_user.save(()=>{
        console.log("document saved successfullly. This is the document-> ",new_user); // this will be printed after doc is saved.
    }); // It is done actually save the document in mongoDB.
    return new_user;
  }
}

// login.findOne(data,(err,docs)=>
// {
//   if (err){
//     console.log(err);
// }
// else{
//     if (docs){
//       console.log("This is True ",docs);
//       return true;
//     }
//     else {
//       console.log("This is False ",docs);
//       return false;
//     }
// }
// });

function addData(data)
{
    const logg = new login(data); 
    logg.save(()=>{
        console.log("document saved successfullly. This is the document-> ",logg); // this will be printed after doc is saved.
    });
}
// addData({username: "sharmayuvraj2001@gmail.com", password : "qwe"});
// my_data = {};
// const new_user = run(my_data);

module.exports = {
      run :run,
      login:login
            };


