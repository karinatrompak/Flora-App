import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserForum from "../models/UserForum.js";

// registo forum 
export const register = async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        picturePath,
        location,
      } = req.body;
  
      const salt = await bcrypt.genSalt(); //cria random salt para a incription
      const passwordHash = await bcrypt.hash(password, salt);
  
      const newUser = new UserForum({
        firstName,
        lastName,
        email,
        password: passwordHash,
        picturePath,
        location,
        viewedProfile: Math.floor(Math.random() * 10000),
        impressions: Math.floor(Math.random() * 10000),
      });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};

//login in
export const login = async (req,res) => {
  try {
    const { email, password } = req.body;
    const user = await UserForum.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "Utilizador não existe! "});

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Credenciais inválidos! "});

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};