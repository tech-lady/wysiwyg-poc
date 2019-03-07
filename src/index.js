import React from "react";
import ReactDOM from "react-dom";
import EditorContainer from "./js/components/container/EditorContainer.jsx";
import './css/style.css';

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<EditorContainer />, wrapper) : false;
