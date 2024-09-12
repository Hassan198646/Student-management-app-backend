const user = require('../models/user')
module.exports = function(app){
  const { createUser } = user;
  const user_base_url = "/api/user";
  
  app.post(`${user_base_url}`, async(req,res)=>{
    try{
        const response = await createUser(req.body);
        console.log(response)
        res.status(200).json(response);
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: false, error: "Internal Server Error" });
    }
  })
} 


