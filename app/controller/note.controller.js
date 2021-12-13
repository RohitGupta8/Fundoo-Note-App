const userService = require('../service/service.js')
const validation = require('../utilities/validation')

class Controller {
    register = (req, res) => {
        try {
            const user = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            };

            const registerValidation = validation.authRegister.validate(user)
            if (registerValidation.error) {
                return res.status(400).send({
                    success: false,
                    message: 'Wrong Input Validations',
                    data: registerValidation
                });
            }

            userService.registerUser(user, (error, data) => {
                if (error) {
                    return res.status(400).json({
                        success: false,
                        message: 'Try new..  User already registered....',
                    });
                } else {
                    return res.status(200).json({
                        success: true,
                        message: "SuccessFully !!!  registered......",
                        data: data,
                    });
                }
            });
        } catch (error) {
            return res.status(500).json({
                success: false, message: "Oops....Error While Registering",
                data: null,
            });
        }
    }

    login = (req, res) => {
        try {
            const userLoginInfo = {
                email: req.body.email,
                password: req.body.password
            };

            const loginValidation = validation.authLogin.validate(userLoginInfo);
            if (loginValidation.error) {
                res.status(400).send({
                    success: false,
                    message: loginValidation.error.message
                });
            }

            userService.userLogin(userLoginInfo, (error, data) => {
                if (error) {
                    return res.status(400).json({
                        success: false,
                        message: 'Oops ...Wrong Information entered....',
                        error
                    });
                }
                return res.status(200).json({
                    success: true,
                    message: 'Successfully.....!!! user log in....',
                    data: data
                });
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error while Login', error,
                data: null
            });
        }
    };

}
module.exports = new Controller();