import express from "express";
import { isLoggedIn } from "../middlewares";
import Bookmark from "../models/bookmark";
import Location from "../models/location";

const router = express.Router();

// 로그인한 사용자 정보 조회
router.get("/me", isLoggedIn, async (req, res) => {
  const user = req.user;
  res.json({
    id: user.id,
    nick: user.nick,
    profileImage: `https://k.kakaocdn.net/dn/${user.snsId}/img.jpg`,
  });
});

// 북마크 목록 조회
router.get("/:id/bookmarks", isLoggedIn, async (req, res) => {
  const userId = req.params.id;

  try {
    const bookmarks = await Bookmark.findAll({
      where: { user_id: userId },
      include: [
        {
          model: Location,
          attributes: [
            "id",
            "name",
            "description",
            "latitude",
            "longitude",
            "imageUrl",
          ],
        },
      ],
    });
    res.json(bookmarks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch bookmarks" });
  }
});

// 북마크 추가
router.post("/:id/bookmarks", isLoggedIn, async (req, res) => {
  const userId = req.params.id;
  const { location_id } = req.body;

  try {
    const bookmark = await Bookmark.create({ user_id: userId, location_id });
    res.status(201).json({ message: "Bookmark added successfully", bookmark });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add bookmark" });
  }
});

// 북마크 삭제
router.delete("/:id/bookmarks/:location_id", isLoggedIn, async (req, res) => {
  const { id: userId, location_id } = req.params;

  try {
    const result = await Bookmark.destroy({
      where: { user_id: userId, location_id },
    });
    if (!result) {
      return res.status(404).json({ message: "Bookmark not found" });
    }
    res.json({ message: "Bookmark removed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to remove bookmark" });
  }
});

export default router;
