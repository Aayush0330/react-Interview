import { StrictMode } from "react";
import React from 'react'
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp(){
  return <h1>Custom React</h1>
}

const ClickIt = "  Just Click It"

const anotherElement = (
  <a href="https:google.com" target="_blank">Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com' , target: '_blank'},
  'Click to visit google',
  ClickIt
)

createRoot(document.getElementById("root")).render(
  <App />
);

