import React from "react";

export default function ProjectCard({ screen, title }) {
  return (
    <div>
      <img
        src={screen}
        className="p-2 m-0"
        style={{
          border: "1px solid #baff29",
          borderImage: "linear-gradient(45deg, #baff29 0%, #3fea2f 100%)",
          borderImageSlice: "1",
        }}
        alt="Proyecto personal"
      />
      <p className="text-center text-2xl mt-5 text-white">{title}</p>
    </div>
  );
}
