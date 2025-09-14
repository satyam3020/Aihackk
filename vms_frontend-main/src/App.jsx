import { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import RightSideBar from "./RightSideBar";
import SearchModal from "./SearchModal";
import VideoAreaSection from "./VideoAreaSection";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.min.css";

import VideoPlayerWithCustomTimes from "./VideoPlayerWithCustomTimes";
import Navbar from "./Navbar";
import LiveAreaSection from "./LiveAreaSection";

function App() {
  const [selectedNvr, setSelectedNvr] = useState(null);
  const [selectedCamera, setSelectedCamera] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentStreamUrl, setCurrentStreamUrl] = useState(null);

  const [activeMenu, setActiveMenu] = useState("Live View"); // State to track active menu
  const [selectedLayout, setSelectedLayout] = useState({ value: "1", label: "1X1" });
  
  
  
  const handleSearch = (date) => {
    if (!selectedNvr || !selectedCamera) {
      alert("Please select an NVR and a Camera before searching.");
      return;
    }
    setSelectedDate(date);
    setShowModal(true);
  };

  const handleStreamSelection = (streamUrl) => {
    setCurrentStreamUrl(streamUrl);
  };

  return (
    <div className="app-outter-container">
      <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="app-container">
        {/* <VideoPlayerWithCustomTimes startTime="07:00" endTime="08:00" /> */}

        <Sidebar
          setSelectedNvr={setSelectedNvr}
          setSelectedCamera={setSelectedCamera}
          selectedCamera={selectedCamera}
          activeMenu={activeMenu}
          selectedLayout={selectedLayout} 
          setSelectedLayout={setSelectedLayout}
        />
        {activeMenu === "Playback" ? (
          <VideoAreaSection streamUrl={currentStreamUrl} />
        ) : (
          <LiveAreaSection 
            selectedNvr = {selectedNvr}
            selectedLayout={selectedLayout}
          
          />
        )}
        {activeMenu === "Playback" && ( // Only show RightSideBar if activeMenu is "Playback"
          <RightSideBar onSearch={handleSearch}
          selectedNvr={selectedNvr}
          selectedCamera={selectedCamera}
          onStreamSelect={handleStreamSelection}
          
          
          />
        )}
        {showModal && (
          <SearchModal
            selectedNvr={selectedNvr}
            selectedCamera={selectedCamera}
            selectedDate={selectedDate}
            onStreamSelect={handleStreamSelection}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
