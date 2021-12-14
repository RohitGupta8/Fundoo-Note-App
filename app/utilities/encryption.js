const bcrypt = require('bcrypt');
let saltRounds = 10;
let salt = bcrypt.genSaltSync(saltRounds);

class helperClass {
    hashedPassword = (password) => {
        return bcrypt.hashSync(password, salt);
    }
    comparePassword = (password, result) => {
        return bcrypt.compareSync(password, result);
    }
}

// module.exports = { hashedPassword,comparePassword};
module.exports = new helperClass();