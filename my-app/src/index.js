import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/* 
Consider a scenario where we want to render an unordered list with many items
*/

//METHOD 1

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  React.createElement("ul", {style: {color:"blue"}}, 
    React.createElement("li", null, "Hot Dogs"),
    React.createElement("li", null, "Hamburgers"),
    React.createElement("li", null, "Pizza"),
    React.createElement("li", null, "Sushi"),
  ),
);

// here is create UL (ul, style, children(create 1, create 2, create 3))

// this is very heavy 

// jsx helps with this! jsx lets you write tags directly in the JavaScript

// METHOD 2

const root2 = ReactDOM.createRoot(document.getElementById('root2'));

root2.render(
  <ul>
    <li>Hot Dogs</li>
    <li>Hamburgers</li>
    <li>Pizza</li>
    <li>Sushi</li>
  </ul>
)

// Since we are using create-react-app, we have a tool called babel which transpiles code so that it can be understood by the browser. It allows us to use new syntax that might not be supported by the browser yet.
// Because of create-react-app and babel, we can add html tags directly to the reactDOM.render method. The browser doesn't just render these tags easily.
// Babel compiles the code into a format that is compatible with the browser.
// Essentially, babel takes the tags from the jsx and converts it into the many createElement calls.
// Can go to babel.com and paste the jsx code and see what turns up!

let president = "Obama";

const root3 = ReactDOM.createRoot(document.getElementById('root3'));

root3.render(
  <h1>Make way for President {president}!</h1>
)

let city = {
  name: "Madrid",
  country: "Spain"

};

const root4 = ReactDOM.createRoot(document.getElementById('root4'));

root4.render(
  <h1>{city.name} is in {city.country}!</h1>
)
