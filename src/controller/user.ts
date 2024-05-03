import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { successResponse, errorResponse, handleError } from "../utilities/responses";
import model from "../model";
import jwtHelper from "../utilities/jwt";
import User from "../model/user";

const {generateToken} = jwtHelper;

export const createUser = async (req: Request, res: Response) => {
    try {
        const {username, email, password} = req.body;
        const emailExist = await model.User.findOne({where: {email}})
        if(emailExist){
            return errorResponse(res, 409, "Email already exists. Please sign up with a different email");
        }
        const passwordHash = await bcrypt.hash(password, 10)
        const user = await model.User.create({
            username,
            email,
            password: passwordHash
        });
        return successResponse(res, 201, `${username}'s Locale account created successfully`, user)

    } catch (error) {
        return errorResponse(res, 500, "Internal server error")
    }
}

export const loginUser = async (req: Request, res: Response) =>{
    try {
        const { email, password } = req.body;
        const user = await model.User.findOne({ where : { email}});
        if(!user){
            return errorResponse(res, 404, "Email entered does not exist. Please sign up")
        }
        const correctPassword = await bcrypt.compare(password, user.password);
        if(!correctPassword){
            return errorResponse(res, 404, "Incorrect password. Please put in the correct password")
        }
        const token = await generateToken({ id: user.id, email });
        const userDetails = {
            id: user.id, email
        };
        return successResponse(res, 200, `${user.username} Logged in successfully`, { userDetails, token});
    } catch (error) {
        return errorResponse(res, 500, "Internal server error")
    }
}