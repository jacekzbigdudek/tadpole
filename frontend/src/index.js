import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";

/* 
Create the root node of the React DOM, and associate it with a node in the 
regular DOM in the public/index.html file, where it's identified by id="root".
*/
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
