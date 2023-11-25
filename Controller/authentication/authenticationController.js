// const { models } = require("../../Model/Definitions");
// const jwt = require("jsonwebtoken");
// const config = require("../../config.json");
// const tokens = [];
// const bcrypt = require("bcryptjs");
// module.exports = {
//   login: async (req, res) => {
//     const { email, password } = req.body;
//     let user = await models.users.findOne({ where: { email: email } });
//     console.log(user);
//     user = user.dataValues;
//     if (!user) {
//       return res.send("User does not exist");
//     }
//     if (user && bcrypt.compareSync(password, user.password)) {
//       const token = jwt.sign({ id: user.u_ID }, config.jwt, {
//         expiresIn: "20s",
//       });
//       tokens.push(token);
//       console.log(tokens);
//       return res.json({ Token: token });
//     }
//     return res.send("SOMETHING");
//   },
//   authenticate: (req, res, next) => {
//     const authheader = req.headers["authorization"];
//     const token = authheader && authheader.split(" ")[1];
//     if (!tokens.includes(token)) {
//       return res.send("Login Error");
//     } else {
//       jwt.verify(token, config.jwt, (err, data) => {
//         console.log(err);
//         if (err) {
//           return res.sendStatus(401);
//         }
//         console.log(data);
//         return next();
//       });
//     }
//   },
// };
