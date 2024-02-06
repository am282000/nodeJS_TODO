import jwt from "jsonwebtoken";

export const sendCookie = (user, res, statusCode, msg) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY);
  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000, //15 min
      sameSite:
        process.env.NODE_ENVIRONMENT === "Development" ? "lax" : "none", // can be acces on different origins
      secure:
        process.env.NODE_ENVIRONMENT === "Development" ? false : true, // when sucere used as none , secure must be true
    })
    .json({ success: true, msg });
};
