// const UserData = require('./userModel');
// const userController = {};

// userController.checkUser = (req,res,next) => {
//   UserData.findOne({login: req}, (err, user)=>{
//     user.preferences = {};
//       if(err){
//         res.send({error: "error with saving user"});
//       }else if(!user){
//         let user = new UserData(req);

//         for(var key in Sources){
//           user.preferences[key] = false;
//         }

//         user.save(function(err){
//         if(err){
//           res.send({error: "error with saving user"});
//         }else{
//           next();
//         }
//       })
//       }else{
//         let profileNewsSources = Object.keys(user.preferences);
//         res.locals.user = user;
//         for(var key in Sources){
//           if (profileNewsSources.includes(key)!==true){
//             user.preferences[key] = false;
//           }
//         }
//         next();
//       }
//   });
// }