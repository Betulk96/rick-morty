"use client";
import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      {/* <Image src="/images/loader.gif" width={100} height={100} /> */}

      <iframe
        src="https://giphy.com/embed/IgA2AJscUx3gTfITIY"
        width="270"
        height="480"
        style={{ border: "none" }}
        frameBorder="0"
        allowFullScreen
        title="loading-animation"
      ></iframe>
    </div>
  );
};

export default Loading;
