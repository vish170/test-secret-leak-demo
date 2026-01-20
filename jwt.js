const jwt = require("jsonwebtoken");


const JWT_SECRET = "acme-sec-test-super-long-jwt-secret-for-scanning-only-123456789";


function generateToken(user) {
return jwt.sign(
{
id: user.id,
role: user.role,
org: "airtel_test",
email: user.email
},
JWT_SECRET,
{ expiresIn: "12h" }
);
}


module.exports = { generateToken, JWT_SECRET };