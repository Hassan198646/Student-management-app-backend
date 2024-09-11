import user from "../models/user.js";

export default function user(app) {
  const { createUser } = user();
  const user_base_url = "/api/user";
  
  app.post(`${user_base_url}`, async(req,res)=>{
    try{
        console.log(response)
        const response = createUser(req.body);
        console.log(response)
        res.status(201).json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: false, error: "Internal Server Error" });
    }

  })
}
