import React, { useState, useEffect } from "react";
import { FaCamera } from "react-icons/fa";
import Select from "react-select";
import "./Sidebar.css";
import { allNvrs } from "./data";
import cctv_icon from "../static/cctv_icon.png";


const Sidebar = ({
  setSelectedNvr,
  setSelectedCamera,
  selectedCamera,
  activeMenu,
  selectedLayout,
  setSelectedLayout,
}) => {
  console.log(activeMenu);
  const [nvrOptions, setNvrOptions] = useState([]);
  const [cameraOptions, setCameraOptions] = useState([]);

  const layoutOptions = [
    { value: "1", label: "1X1 (1 Cam)" },
    { value: "2", label: "1X2 (2 Cams)" },
    { value: "4", label: "2X2 (4 Cams)" },
    { value: "6", label: "2X3 (6 Cams)" },
    { value: "8", label: "2X4 (8 Cams)" },
    { value: "16", label: "4X4 (16 Cams)" },
  ];

  // const [selectedLayout, setSelectedLayout] = useState(layoutOptions[0]);

  const handleLayoutChange = (selectedOption) => {
    setSelectedLayout(selectedOption);
    console.log("Selected Layout:", selectedOption);
  };

  useEffect(() => {
    const options = Object.keys(allNvrs).map((nvr) => ({
      value: nvr,
      label: nvr.toUpperCase(),
    }));
    setNvrOptions(options);
  }, []);

  const handleNvrChange = (selectedOption) => {
    setSelectedNvr(selectedOption);

    const cameras =
      allNvrs[selectedOption.value]?.cameras.map((camera) => ({
        value: camera.camera_id,
        label: camera.camera_name,
      })) || [];

    setCameraOptions(cameras);
    setSelectedCamera(null); // Reset selected camera when NVR changes
  };

  return (
    <div className="sidebar">
      <div className="mb-2">Select NVR:</div>
      <Select
        options={nvrOptions}
        onChange={handleNvrChange}
        placeholder="Select an NVR"
        isSearchable={true}
        classNamePrefix="custom-select"
        className="mb-3"
      />

      {activeMenu == "Playback" ? (
        ""
      ) : (
        <div className="grid-select-container ">
          <div className="mb-2">Grid:</div>

          <Select
            options={layoutOptions}
            defaultValue={layoutOptions[0]} // Set default value to '1X1'
            onChange={handleLayoutChange}
            classNamePrefix="custom-select"
            placeholder=""
            isSearchable={false} 
            className=""
          />
        </div>
      )}

      <div className="mb-2 mt-5">Cameras:</div>

      <ul className="sidebar-menu mb-3">
        {cameraOptions.map((cam) => (
          <li
            key={cam.value}
            className={`menu-item ${
              selectedCamera?.label === cam?.label && activeMenu == "Playback" ? "active" : ""
            }`}
            onClick={() => setSelectedCamera(cam)}
          >
            <img src={cctv_icon } alt="cameraicon" className="cctv_icon"></img>
            <span>{cam.label}</span>
          </li>

        ))}
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>222</li>
      </ul>
    </div>
  );
};

export default Sidebar;
