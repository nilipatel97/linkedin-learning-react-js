import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  React.createElement("h1", null, "good morning!!!")
);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(
  React.createElement("div", {style: {backgroundColor:"pink"}}, React.createElement("h2", {style:{color: "green"}}, "good afternoon!!!!~"))
)



  // ReactDOM.render -- takes 2 arguments (what, where) or (react.createElement, document.getElementByID).
  // react.createElement -- takes three arguments -- tag name, any properties, and children


  //ReactDOM.createRoot(document.getElement) ---
  // 1) so get an element by ID
  // 2) pass it into the createRoot function
  // 3) store that root in a const

  // root.render(React.createElement(a,b,c))

  //CONCLUSION -- react.createElement calls get very unweildy ... jsx helps with this