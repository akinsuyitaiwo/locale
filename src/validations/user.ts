import Joi from "joi"
import {ISignIn, IUser} from "../utilities/interface"


const options = {
	stripUnknown: true,
	abortEarly: false,
	errors: {
		wrap: {
			label: ""
		}
	}

};

const validateCreateUser = (create: IUser) => {
    const createUser = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email().required,
        password: Joi.string().required
    });
    return createUser.validate(create, options)
}

const validateSignIn = (signIn: ISignIn) => {
    const login = Joi.object({
        email: Joi.string().email().required,
        password: Joi.string().required
    });
    return login.validate(signIn, options);
}
export {validateCreateUser, validateSignIn}