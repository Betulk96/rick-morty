"use client";
import React from "react";
import Image from "next/image"; // Next.js'in Image bileşeni için

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
      <Image
        src="/portal-rick-and-morty.gif" // public klasöründeki GIF dosyasının yolu
        alt="Loading animation"
        width={270} // GIF'in genişliği
        height={480} // GIF'in yüksekliği
        style={{ border: "none" }}
      />
    </div>
  );
};

export default Loading;
