
import User from "../models/User.js";
import bcrypt from "bcrypt";

const signIn = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    if ((!email && !username) || !password) {
      return res.status(400).json({
        message: "Please provide an email or username and a password.",
      });
    }

    const user = email
      ? await User.findByEmail(email)
      : await User.findByUsername(username);

    if (!user) {
      return res.status(401).json({
        message: "Invalid login credentials.",
      });
    }

    res.status(200).json({
      message: "Sign in successful.",
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      },
    });
    

  } catch (error) {
    console.error("Sign in error:", error);

    return res.status(500).json({
      message: "Server error.",
    });
  }
};

export { signIn };
