import express from "express";
import Location from "../models/location";

const router = express.Router();

// 모든 장소 반환
router.get("/", async (req, res) => {
  try {
    const locations = await Location.findAll();
    res.json(locations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch locations" });
  }
});

// 특정 장소 상세 조회
router.get("/:id", async (req, res) => {
  try {
    const location = await Location.findByPk(req.params.id);
    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }
    res.json(location);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch location details" });
  }
});

export default router;
