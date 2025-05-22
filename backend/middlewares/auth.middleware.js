const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const blacklistTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");

module.exports.authUser = async (req, res, next) => {
  try {
    // Extract token from cookies or Authorization header
    const token = req.headers.authorization.split(" ")[1] || req.cookies.token;

    // Check if token exists
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token: token });
    if (isBlacklisted) {
      return res.status(401).json({ message: "Unauthorized " });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);
    const user = await userModel.findById(decoded._id).select("-password"); // Exclude password

    // Check if user exists
    if (!user) {
      return res.status(401).json({ message: "Unauthorized - User not found" });
    }

    // Attach user to request for further processing
    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token =
  (req.headers.authorization && req.headers.authorization.split(" ")[1]) ||
  req.cookies.token;

  
  if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    
    const isBlacklisted = await blacklistTokenModel.findOne({ token: token });
  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized " });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);
    const captain = await captainModel.findById(decoded._id);
    req.captain = captain;
    return next();
  }
  catch (err) {
    res.status(401).json({ message: "Unauthorized - User not found" });
  }
};
