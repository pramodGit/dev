import * as User from "../models/user.model.js";

export const create = async (req, res) => {
  try {
    const result = await User.createUser(req.body);
    res.json({ success: true, id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const list = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};