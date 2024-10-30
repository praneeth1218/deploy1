import express from "express";
import {
  login,
  register,
  getUserHistory,
  addToHistory,
} from "../controllers/user.controller.js";
import {
  scheduleMeeting,
  getScheduledMeetings,
} from "../controllers/meetings.controller.js"; // Import the new controller

const router = express.Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/add_to_activity").post(addToHistory);
router.route("/get_all_activity").get(getUserHistory);
router.route("/schedule").post(scheduleMeeting); // Use the new meetings controller
router.route("/scheduled-meetings/:userID").get(getScheduledMeetings); // Use the new meetings controller

export default router;
