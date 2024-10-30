
import express from "express";
import {
  scheduleMeeting,
  getScheduledMeetings,
  startNormalMeeting,
} from "../controllers/meetings.controller.js";

const router = express.Router();

// Route for scheduling a meeting
router.route("/schedule").post(scheduleMeeting);

// Route for fetching scheduled meetings
router.route("/scheduled-meetings/:userID").get(getScheduledMeetings);

// Route for starting a normal meeting (assuming you have a controller for this)
router.route("/start/:meetingID").post(startNormalMeeting);

export default router;
