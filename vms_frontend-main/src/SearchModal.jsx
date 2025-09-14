// import React, { useState, useMemo, useEffect, useRef } from "react";
// import { allNvrs } from "./data";
// import "./SearchModal.css";

// const SearchModal = ({
//   selectedNvr,
//   selectedCamera,
//   selectedDate,
//   onClose,
//   onStreamSelect,
// }) => {
//   const [startTime, setStartTime] = useState("");
//   const modalRef = useRef(null);

//   const handleTimeChange = (event) => {
//     setStartTime(event.target.value);
//   };

//   const formatDateToMMDDYYYY = (date) => {
//     if (!date) return "";

//     const d = new Date(date);
//     const month = String(d.getMonth() + 1).padStart(2, "0");
//     const day = String(d.getDate()).padStart(2, "0");
//     const year = d.getFullYear();

//     return `${day}/${month}/${year}`;
//   };

//   // Close modal when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         onClose(); // Close the modal if clicked outside
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [onClose]);

//   const filteredStreams = useMemo(() => {
//     if (!selectedNvr || !selectedCamera) return [];

//     const nvrData = allNvrs[selectedNvr.value];
//     const cameraData = nvrData?.cameras.find(
//       (cam) => cam.camera_id === selectedCamera.value
//     );

//     if (!cameraData) return [];

//     const formattedSelectedDate = formatDateToMMDDYYYY(selectedDate);
//     const dateRecordings = cameraData.recordings.find(
//       (rec) => rec.date === formattedSelectedDate
//     );

//     if (!dateRecordings) return [];

//     if (startTime) {
//       return dateRecordings.hourly_recordings.filter((recording) => {
//         const [startRecTime] = recording.time.split(" - ");
//         return startRecTime <= startTime;
//       });
//     }

//     return dateRecordings.hourly_recordings;
//   }, [selectedNvr, selectedCamera, selectedDate, startTime]);

//   const handlePlayStream = (streamUrl) => {
//     console.log("Stream URL:", streamUrl);
//     onClose();
//     onStreamSelect(streamUrl)
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content" ref={modalRef}>
//         <div className="modal-body">
//           <div className="modal-left-section">
          
//             <div className="input-label-group mb-2">
//               <label htmlFor="nvr">NVR:</label>
//               <input
//                 id="nvr"
//                 type="text"
//                 value={selectedNvr?.label || ""}
//                 readOnly
//               />
//             </div>

//             <div className="input-label-group mb-2">
//               <label htmlFor="camera">Camera:</label>
//               <input
//                 id="camera"
//                 type="text"
//                 value={selectedCamera?.label || ""}
//                 readOnly
//               />
//             </div>

//             <div className="input-label-group mb-2">
//               <label htmlFor="date">Selected Date:</label>
//               <input
//                 id="date"
//                 type="text"
//                 value={selectedDate || ""}
//                 readOnly
//               />
//             </div>

//             <div className="input-label-group mb-2">
//               <label htmlFor="time">Start Time:</label>
//               <input
//                 id="time"
//                 type="time"
//                 value={startTime}
//                 onChange={handleTimeChange}
//               />
//             </div>

//             <button>Search</button>

//             <div>
//               <button onClick={onClose}>Close</button>
//             </div>
//           </div>
//           <div className="modal-right-section">
//             {filteredStreams.length > 0 ? (
//               <table className="stream-table">
//                 <thead>
//                   <tr>
//                     <th>Time</th>
//                     <th>Stream</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredStreams.map((recording, index) => (
//                     <tr key={index}>
//                       <td>{recording.time}</td>
//                       <td>{selectedCamera.label} Stream</td>
//                       <td>
//                         <button
//                           onClick={() =>
//                             handlePlayStream(recording.streaming_url)
//                           }
//                         >
//                           Play
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             ) : (
//               <p>No recordings found for selected criteria.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchModal;


import React, { useState, useMemo, useEffect, useRef } from "react";
import { allNvrs } from "./data";
import "./SearchModal.css";

const SearchModal = ({
  selectedNvr,
  selectedCamera,
  selectedDate,
  onClose,
  onStreamSelect,
}) => {
  const [startTime, setStartTime] = useState("");
  const modalRef = useRef(null);

  const handleTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const formatDateToMMDDYYYY = (date) => {
    if (!date) return "";

    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const year = d.getFullYear();

    return `${day}/${month}/${year}`;
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const filteredStreams = useMemo(() => {
    if (!selectedNvr || !selectedCamera) return [];

    const nvrData = allNvrs[selectedNvr.value];
    const cameraData = nvrData?.cameras.find(
      (cam) => cam.camera_id === selectedCamera.value
    );

    if (!cameraData) return [];

    const formattedSelectedDate = formatDateToMMDDYYYY(selectedDate);
    const dateRecordings = cameraData.recordings.find(
      (rec) => rec.date === formattedSelectedDate
    );

    if (!dateRecordings) return [];

    if (startTime) {
      return dateRecordings.hourly_recordings.filter((recording) => {
        const [startRecTime] = recording.time.split(" - ");
        return startRecTime <= startTime;
      });
    }

    return dateRecordings.hourly_recordings;
  }, [selectedNvr, selectedCamera, selectedDate, startTime]);

  const handlePlayStream = (streamUrl) => {
    console.log("Stream URL:", streamUrl);
    onClose();
    onStreamSelect(streamUrl);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" ref={modalRef}>
      <div className="modal-top-header ">
        
        <span>Logs</span>
        <i className="fa-solid fa-xmark close-mark"  onClick={onClose}></i>
        </div>
        <div className="modal-body">

          <div className="modal-left-section">
          <h6 className="modal-subtitle">Search Conditions</h6>
            <div className="">
              <label htmlFor="nvr">NVR:
              <input
                id="nvr"
                type="text"
                value={selectedNvr?.label || ""}
                readOnly
              />
              </label>
            </div>

            <div className="">
              <label htmlFor="camera">Camera:
              <input
                id="camera"
                type="text"
                value={selectedCamera?.label || ""}
                readOnly
              />
              </label>
            </div>

            <div className="">
              <label htmlFor="date">Selected Date:
              <input
                id="date"
                type="text"
                value={selectedDate || ""}
                readOnly
              />
              </label>
            </div>

            <div className="">
              <label htmlFor="time">Start Time:
              <input
                id="time"
                type="time"
                value={startTime}
                onChange={handleTimeChange}
              />
            </label>

            </div>

            {/* <button className="search-date-btn">Search</button> */}

            <div>
              <button 
                onClick={onClose} 
                className="modal-btn mt-2"
              >
                Close
              </button>
            </div>
          </div>
          <div className="modal-right-section">
            
            {filteredStreams.length > 0 ? (
              <table className="streams-table">
                <thead>
                  <tr>
                    <th>Cam ID</th>
                    <th>Time</th>
                    <th>Stream</th>
                    <th className="play-btn-td">Action</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {filteredStreams.map((recording, index) => (
                    
                    <tr key={index}>
                      <td title={selectedCamera.value}>{selectedCamera.value}</td>
                      <td title={recording.time}>{recording.time}</td>
                      <td title={selectedCamera.label}>{selectedCamera.label} Stream</td>
                      <td className="play-btn-td" onClick={() =>
                            handlePlayStream(recording.streaming_url)
                          }>
                        <button
                          className="play-btn"
                          onClick={() =>
                            handlePlayStream(recording.streaming_url)
                          }
                        >
                          Play
                        </button>
                        {/* <i className="fa-solid fa-play play-button"></i> */}

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p style={{ color: '#fff', textAlign: 'center' }}>
                No recordings found for selected criteria.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;