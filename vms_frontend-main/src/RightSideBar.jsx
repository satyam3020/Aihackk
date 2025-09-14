// // import React, { useState } from "react";
// // import Calendar from 'react-calendar';
// // import 'react-calendar/dist/Calendar.css';
// // import "./RightSideBar.css";

// // const RightSideBar = () => {
// //   const [selectedDate, setSelectedDate] = useState(new Date());

// //   // Handle calendar date change
// //   const handleDateChange = (date) => {
// //     setSelectedDate(date);
// //   };

// //   // Handle search button click
// //   const handleSearch = () => {
// //     console.log("Selected Date:", selectedDate);
// //     alert(`Searching for: ${selectedDate}`);
// //   };

// //   return (
// //     <>
// //       <div className="right-sidebar">
// //         <h3>Select a Date</h3>
// //         <Calendar value={selectedDate} onChange={handleDateChange} />
        
// //         <button onClick={handleSearch}>Search</button>
// //       </div>
// //     </>
// //   );
// // };

// // export default RightSideBar;


// import React, { useState } from "react";
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import "./RightSideBar.css";

// const RightSideBar = ({ onSearch }) => {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <div className="right-sidebar">
//       <h6 className="mb-2">Select a Date</h6>
//       <Calendar value={selectedDate} onChange={handleDateChange} />
      
//       <button className="search-date-btn mt-3" onClick={() => onSearch(selectedDate)}>Search</button>
//     </div>
//   );
// };

// export default RightSideBar;


import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Search, Camera, Calendar, Clock, Download } from "lucide-react";
import VideoAreaSection from "./VideoAreaSection.jsx";
import "./RightSideBar.css";
import { allNvrs } from "./data";

const RightSideBar = ({ selectedCamera, setCurrentStreamUrl, selectedNvr,onStreamSelect,

  
 }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [recordingLink, setRecordingLink] = useState("");
  const [logs, setLogs] = useState([]);

  console.log("Selected NVR & Camera:", selectedNvr, selectedCamera);

  const handleSearch = () => {
    if (!selectedNvr || !selectedCamera) {
      alert("Please select an NVR and a camera first.");
      return;
    }

    // Format date to "dd/mm/yyyy"
    const newFormattedDate = selectedDate.toISOString().split("T")[0].split("-").reverse().join("/");
    setFormattedDate(newFormattedDate);

    const nvrData = allNvrs[selectedNvr.value];
    if (!nvrData) {
      alert("NVR not found.");
      return; 
    }

    const cameraData = nvrData.cameras.find(cam => cam.camera_name === selectedCamera.label);
    if (!cameraData) {
      alert("Camera not found.");
      return;
    }

    // Find recordings for the selected date
    let recordingsForDate = cameraData.recordings.find(rec => rec.date === newFormattedDate);
    if (!recordingsForDate) {
      setLogs([]);
      setRecordingLink("");
      alert("No recordings found for the selected date.");
      return;
    }

    let filteredLogs = recordingsForDate.hourly_recordings;

    // Apply time filters
    if (startTime && !endTime) {
      filteredLogs = filteredLogs.filter(log => log.time.split(" - ")[0] >= startTime.trim());
    } else if (startTime && endTime) {
      filteredLogs = filteredLogs.filter(log => {
        const [logStart, logEnd] = log.time.split(" - ");
        return logStart >= startTime.trim() && logEnd <= endTime.trim();
      });
    }

    setLogs(filteredLogs);

    if (filteredLogs.length === 0) {
      setRecordingLink("");
      alert("No recordings found for the selected time.");
    }
  };

  const handleLogClick = (url) => {
    setRecordingLink(url);
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",url)
    onStreamSelect(url);
  };

  return (
    <div className="right-sidebar">
      <div>
         {selectedCamera ? selectedCamera.label : "No Camera Selected"}
      </div>

      <div className="date-container">
        {/* <Calendar className="icon" /> */}
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="yyyy/MM/dd"
          className="date-picker"
        />
      </div>

      <div className="time-input-container">
        <div className="time-input-box">
          <Clock className="icon" />
          <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="time-input" />
        </div>
        <div className="time-input-box">
          <Clock className="icon" />
          <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="time-input" />
        </div>
      </div>

      <button onClick={handleSearch} className="search-button">
        <Search className="inline-block" /> Search
      </button>

      <div className="logs-container">
        {logs.length > 0 ? (
          <div>
            <h4>Found Logs:</h4>
            <ul className="logs-list">
              {logs.map((log, index) => (
                <li key={index} className="log-item" onClick={() => handleLogClick(log.streaming_url)}>
                  <span >
                    {formattedDate} {log.time}
                  </span>
                  <Download className="download-icon" />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-gray-400">No recordings found for the selected time.</p>
        )}
      </div>

      {recordingLink && (
        <div className="recording-section">
          <h4>Recording Found:</h4>
          <a href={recordingLink} target="_blank" rel="noopener noreferrer" className="recording-link">
            View Recording
          </a>
        </div>
      )}
    </div>
  );
};

export default RightSideBar;
