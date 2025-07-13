// src/About.js
import React from "react";

const image = "https://i.imgur.com/mV8PQxj.gif"; // ✅ use the expected image URL

export default function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>This is a short bio.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}
