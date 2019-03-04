import ReactDOM from "react-dom";
import React from "react";
import EditorContainer from "./js/components/container/Editorcontainer.jsx";
import './js/components/container/style.css';

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<EditorContainer />, wrapper) : false;

