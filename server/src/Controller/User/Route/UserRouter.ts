import express from "express";
import CreateUser from "../API/Create";
import LoginUser from "../API/Login";
import UpdateUser from "../API/Update";
import DeleteUser from "../API/Delete";
import Get from "../API/Get";
import ForgetPass from "../API/ForgetPass";


const UserRouter = express.Router();

UserRouter.get("/all",new Get().getAll);
UserRouter.get("/",new Get().getOne);
UserRouter.get("/get-RecId",new Get().getRecId);
UserRouter.post("/create",new CreateUser().createUser); 
UserRouter.post("/add",new CreateUser().addUser); 
UserRouter.get("/access",new LoginUser().loginUser)
UserRouter.put("/update",new UpdateUser().updateUser)
UserRouter.put("/group/add",new UpdateUser().updateGroup)
UserRouter.put("/password/reset",new UpdateUser().updatePassword);
UserRouter.put("/otp/verify",new ForgetPass().validateOTP);
UserRouter.delete("/delete",new DeleteUser().deleteUser);
UserRouter.delete("/group/remove",new DeleteUser().removeGroup);
UserRouter.put("/password/forget",new ForgetPass().forgetPass);


export default UserRouter;