const bcrypt = require("bcrypt")
async function run() {
    let salt = await bcrypt.genSalt(10)
    let result =await bcrypt.hash("123456", salt)
    console.log(salt);
    console.log(result);
}
run()