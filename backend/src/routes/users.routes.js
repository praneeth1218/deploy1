import express from "express";
import {
  login,
  register,
  getUserHistory,
  addToHistory,
  scheduleMeeting,
  getScheduledMeetings,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/add_to_activity").post(addToHistory);
router.route("/get_all_activity").get(getUserHistory);
router.route("/schedule").post(scheduleMeeting);
router.route("/scheduled-meetings").get(getScheduledMeetings); // New route for fetching scheduled meetings

export default router;
