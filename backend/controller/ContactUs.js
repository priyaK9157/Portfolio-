
const mailSender = require("./mailSender");
const {contactUsEmail} = require("./template");
exports.ContactUsController = async (req, res) => {
  try{
    
    const {email,name,message} = req.body;
    
    const response=await mailSender(
    email,
    "Message Sent We Will Contact You Soon",
    contactUsEmail(email,name,message)
    )
    return res.json({
        success:true,
        messege:"task done"
    })
  }
  catch(error){
    return res.json({
      success:false,
      messege:"task not done"
    })
  }
}