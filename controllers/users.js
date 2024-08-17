import UserForum from "../models/UserForum.js";

// ler
export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserForum.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
