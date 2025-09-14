import React, { useEffect, useState } from "react";
import "./VideoAreaSection.css";
import { liveStreamList } from "./data";
import VideoAreaSection from "./VideoAreaSection";
import "./LiveAreaSection.css";

const LiveAreaSection = ({ selectedNvr, selectedLayout }) => {
  const pageSize = parseInt(selectedLayout?.value || 4, 10); // Default to 4 if no layout is selected
  const [currentPage, setCurrentPage] = useState(1);
  const [classValue, setClassValue] = useState("singleLiveCam");
  console.log(selectedLayout.value);
  const [heightValue, setHeightValue] = useState("80vh");

  // Total streams from the liveStreamList
  const streams = liveStreamList.cameras;
  const totalPages = Math.ceil(streams.length / pageSize);

  // Get the streams for the current page
  const paginatedStreams = streams.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Handle navigation
  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1 || 1); // Default to 1 if totalPages is 0
    }
  }, [totalPages]);
  

  useEffect(() => {
    if (pageSize == 1) {
      setClassValue("singleLiveCam");
      setHeightValue("80vh");
    } else if (pageSize == 2) {
      setClassValue("dualLiveCam");
      setHeightValue("80vh");
    } else if (pageSize == 4) {
      setClassValue("quadLiveCam");
      setHeightValue("40vh");
    } else if (pageSize == 6) {
      setClassValue("sixLiveCam");
      setHeightValue("40vh");
    } else if (pageSize == 8) {
      setClassValue("eightLiveCam");
      setHeightValue("40vh");
    } else if (pageSize == 16) {
      setClassValue("sixteenLiveCam");
      setHeightValue("19.5vh");
    } else {
      setClassValue("singleLiveCam");
      setHeightValue("80vh");
    }
  }, [pageSize, selectedLayout]);



  

  return (
    <div className="live-area-section">
      <div className="live-area-section-top">
        {/* <div className="m-2">Live Streams</div > */}
        {/* <nav aria-label="Pagination" className="customPaginationLive justify-content-end">
        <ul className="pagination pagination-sm ">
          <li
            className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => goToPage(currentPage - 1)}
          >
            <span className="page-link">&lsaquo;</span>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index + 1}
              className={`page-item ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => goToPage(index + 1)}
            >
              <span className="page-link">{index + 1}</span>
            </li>
            
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
            onClick={() => goToPage(currentPage + 1)}
          >
            <span className="page-link">&rsaquo;</span>
          </li>
        </ul>
      </nav> */}
        <nav
          aria-label="Pagination"
          className="customPaginationLive justify-content-end"
        >
          <ul className="pagination pagination-sm">
           
            <li
              className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              onClick={() => goToPage(currentPage - 1)}
            >
              <span className="page-link">&lsaquo;</span>
            </li>

            <li className="page-item disabled">
              <span className="page-link pageNumArea">
                {currentPage} of {totalPages}
              </span>
            </li>

         
            <li
              className={` page-item ${
                currentPage === totalPages ? "disabled" : ""
              } `}
              onClick={() => goToPage(currentPage + 1)}
            >
              <span className="page-link">&rsaquo;</span>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className="stream-grid"
        // style={{
        //   display: "flex",
        //   flexWrap: "wrap",
        // }}
      >
        {paginatedStreams.map((stream) => (
          <div key={stream.camera_id} className={classValue + " stream-item"}>
            <p className="cameraTitleLive">{stream.camera_name}</p>
            <VideoAreaSection
              streamUrl={stream.streaming_url}
              heightValue={heightValue}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveAreaSection;
