import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext"; // Adjust the import path as necessary

function ScheduleMeeting() {
  const { userData } = useContext(AuthContext); // Access userData from context
  const [meetingCode, setMeetingCode] = useState(""); // New state for meeting code
  const [startTime, setStartTime] = useState("");

  // Make sure to get the actual user ID
  const userID = userData.id; // Assuming userData has an 'id' property

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/schedule-meeting", {
        hostID: userID,
        meetingCode,
        startTime,
      }); // Include meetingCode in the request
      alert("Meeting scheduled successfully");
      // Reset the form fields after scheduling
      setMeetingCode("");
      setStartTime("");
    } catch (error) {
      console.error("Error scheduling meeting", error);
      alert("Failed to schedule meeting");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Meeting Code:</label>
      <input
        type="text"
        value={meetingCode}
        onChange={(e) => setMeetingCode(e.target.value)} // Handle meeting code input
        required
      />
      <label>Start Time:</label>
      <input
        type="datetime-local"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        required
      />
      <button type="submit">Schedule Meeting</button>
    </form>
  );
}

export default ScheduleMeeting;
