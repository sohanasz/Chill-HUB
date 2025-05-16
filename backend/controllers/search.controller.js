import User from "../models/user.model.js";

export const Search = async (req, res) => {
  try {
    const { userQuery } = req.body;
    console.log("QUERY", userQuery);

    const users = await User.find({
      fullName: { $regex: userQuery.toString(), $options: "i" },
      username: { $regex: userQuery.toString(), $options: "i" },
    });

    console.log("USERS", users);

    const searched = users.map((user) => {
      return {
        username: user.username,
        fullName: user.fullName,
        Img: user.profileImg,
      };
    });

    return res.status(200).json({
      message: "Search Successful",
      users: searched,
    });
  } catch (err) {
    console.log(err, "OCCURED");
  }
};
