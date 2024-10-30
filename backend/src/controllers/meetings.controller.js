import { Meeting } from "../models/meeting.model.js";

// Controller for scheduling a meeting
export const scheduleMeeting = async (req, res) => {
  const { hostID, meetingCode, startTime } = req.body;

  try {
    const newMeeting = new Meeting({
      user_id: hostID,
      meetingCode,
      date: new Date(startTime), // Convert startTime to a Date object
    });

    await newMeeting.save();
    return res.status(201).json({ message: "Meeting scheduled successfully!" });
  } catch (error) {
    console.error("Error scheduling meeting:", error);
    return res.status(500).json({ message: "Failed to schedule meeting" });
  }
};

// Controller for getting scheduled meetings for a user
export const getScheduledMeetings = async (req, res) => {
  const { userID } = req.params; // Get userID from request parameters

  try {
    const meetings = await Meeting.find({ user_id: userID }); // Fetch meetings by user_id
    return res.status(200).json({ meetings });
  } catch (error) {
    console.error("Error fetching scheduled meetings:", error);
    return res
      .status(500)
      .json({ message: "Failed to fetch scheduled meetings" });
  }
};
