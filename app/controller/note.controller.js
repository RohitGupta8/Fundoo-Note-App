const userService = require('../service/service.js')

class Controller {
    register = (req, res) => {
        try {
            const user = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            };

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
}
module.exports = new Controller();