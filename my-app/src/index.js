import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/* 
Consider a scenario where we want to render an unordered list with many items
*/

//METHOD 1

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  React.createElement(
    "ul",
    { style: { color: "blue" } },
    React.createElement("li", null, "Hot Dogs"),
    React.createElement("li", null, "Hamburgers"),
    React.createElement("li", null, "Pizza"),
    React.createElement("li", null, "Sushi")
  )
);

// here is create UL (ul, style, children(create 1, create 2, create 3))

// this is very heavy

// jsx helps with this! jsx lets you write tags directly in the JavaScript

// METHOD 2

const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(
  <ul>
    <li>Hot Dogs</li>
    <li>Hamburgers</li>
    <li>Pizza</li>
    <li>Sushi</li>
  </ul>
);

// Since we are using create-react-app, we have a tool called babel which transpiles code so that it can be understood by the browser. It allows us to use new syntax that might not be supported by the browser yet.
// Because of create-react-app and babel, we can add html tags directly to the reactDOM.render method. The browser doesn't just render these tags easily.
// Babel compiles the code into a format that is compatible with the browser.
// Essentially, babel takes the tags from the jsx and converts it into the many createElement calls.
// Can go to babel.com and paste the jsx code and see what turns up!

let president = "Obama";

const root3 = ReactDOM.createRoot(document.getElementById("root3"));

root3.render(
  <h1 className="cool-text">Make way for President {president}!</h1>
);

/***************************** *************************************** */

let city = {
  name: "Madrid",
  country: "Spain",
};

const root4 = ReactDOM.createRoot(document.getElementById("root4"));

root4.render(
  <h1 id="heading">
    {city.name} is in {city.country}!
  </h1>
);

/***************************** [3.1] Creating a React Component*************************************** */
function Hello() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p> Let's build something cool!</p>
    </div>
  );
}

const root5 = ReactDOM.createRoot(document.getElementById("root5"));

root5.render(<Hello />);

/**Note:
 * - components must be capitalized in React
 * - a react component is actually a function
 * - the return statement has all of your HTML and should be wrapped in a div
 * */

/***************************** [3.2] Understanding Properties*************************************** */
// with props, we can display dynamic data within a component
function Hello2(props) {
  // pass in allof the attributes
  console.log(props);
  return (
    <div>
      <h1>Welcome to {props.library}!</h1>
      <p> Let's build something cool!</p>
      <p>
        {" "}
        My name is {props.name}, I am {props.age} and my favorite flavor of ice
        cream is {props.flavor}.
      </p>
    </div>
  );
}

const root6 = ReactDOM.createRoot(document.getElementById("root6"));

root6.render(
  <Hello2 library="react" name="Nili" flavor="chocolate chip" age={24} /> //give birth to attributes
);

/***************************** [3.3] Composing Components *************************************** */

const root7 = ReactDOM.createRoot(document.getElementById("root7"));

function Lake({ name }) {
  return (
    <div>
      <h3>Location: {name}</h3>
    </div>
  );
}

function App() {
  return (
    <div>
      <React.StrictMode>
        <Lake name="Lake Tahoe" />
        <Lake name="Angora Lake" />
        <Lake name="Shirley Lake" />
      </React.StrictMode>
    </div>
  );
}

root7.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/***************************** [3.4] Rendering Lists *************************************** */

const root8 = ReactDOM.createRoot(document.getElementById("root8"));

const lakeList = ["Echo Lake", "Maude Lake", "Cascade Lake"];

function App2({ lakes }) {
  return (
    <div>
      {lakes}

      <ul>
        {lakes.map((lake, id) => {
          return (
            <div key={id}>
              <li>{lake}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

root8.render(
  <React.StrictMode>
    <App2 lakes={lakeList} />
  </React.StrictMode>
);

/**
 * - Create Lake list array
 * - Pass it to the <App> as an attribute
 * - Pass the lakes array attribute in, and map through it to create list items.
 */

/***************************** [3.5] Rendering Lists of Objects & [3.6] Adding Keys *************************************** */

const root9 = ReactDOM.createRoot(document.getElementById("root9"));

const medList = [
  { id: "1", name: "Lipitor", generic: "Atorvastatin" },
  { id: "2", name: "Gabapentin", generic: "Neurontin" },
  { id: "3", name: "Synthroid", generic: "Levothyroxine" },
];

function App3({ medications }) {
  return (
    <div>
      <ul>
        {medications.map((med) => {
          return (
            <div key={med.id}>
              <p>
                The generic for <b>{med.name}</b> is <em>{med.generic}</em>.
              </p>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

root9.render(
  <React.StrictMode>
    <App3 medications={medList} />
  </React.StrictMode>
);

/***************************** [3.7] Conditional Rendering *************************************** */

const root10 = ReactDOM.createRoot(document.getElementById("root10"));

function Beach({ beachName }) {
  return (
    <div>
      <h2>Visit {beachName}!</h2>
    </div>
  );
}

function SkiResort({ skiName }) {
  return (
    <div>
      <h2>Visit {skiName}!</h2>
    </div>
  );
}

function App4(props) {
  if (props.season === "summer") {
    return <Beach beachName="Point Pleasant Beach" />;
  } else if (props.season === "winter") {
    return <SkiResort skiName="Blue Mountain" />;
  } else {
    return <h2>"Sorry we are not open during that season.</h2>;
  }
}

root10.render(<App4 season="summer" />);

/***************************** [3.8] Conditional Rendering --- Ternary Syntax ******************** */

const root11 = ReactDOM.createRoot(document.getElementById("root11"));

function Beach2({ beachName2 }) {
  return (
    <div>
      <h2>Visit {beachName2}!</h2>
    </div>
  );
}

function SkiResort2({ skiName2 }) {
  return (
    <div>
      <h2>Visit {skiName2}!</h2>
    </div>
  );
}

function App4b({ season }) {
  return season === "summer" ? (
    <Beach2 beachName2="Sandy Hook Beach" />
  ) : season === "winter" ? (
    <SkiResort2 skiName2="Grizzly Bear Ski Resort" />
  ) : (
    <h2>"Sorry we are not open during that season.</h2>
  );
}
root11.render(<App4b season="winter" />);

/***************************** [3.8] React Fragments *************************************** */
const root12 = ReactDOM.createRoot(document.getElementById("root12"));

function Beach3({ beachName }) {
  return (
    <div>
      <h2>Visit {beachName}!</h2>
    </div>
  );
}

function SkiResort4({ skiName }) {
  return (
    <div>
      <h2>Visit {skiName}!</h2>
    </div>
  );
}

root12.render(
  <>
    <Beach3 beachName="Pink Sand Beach" />
    <SkiResort4 skiName="chocolate ski lounge" />
  </>
);

// NOTES: Adjacent React Components must be wrapped in a <div> or <React.Fragment> or <></>

/*------------------------------------------------------------------------------------------ */
/************************ Chapter 4: React State with Hooks ******************************** */
/*------------------------------------------------------------------------------------------ */


/***************************** [4.1] Array Destructuring *********************************** */

// here's a variable with an array

const pH = ["basic", "neutral", "acidic"];

console.log(pH[1]);

// heres it is destructured

const [junk] = ["popcorn", "pretzel", "pineapple"];

console.log(junk); // "popcorn"

// will match the variable to the position; dont have to create variable to each position

const [ , moderate] = ["basic", "economy", "business"];

console.log(moderate);

/******************************** [4.2] Using useState ************************************** */

/** Notes:
 * - If there is any sort of change (in property or state), the react component, will rerender.
 * - Here, we are learning how to incorporate state values in our application
 * 
 * - A hook is a function that allows you to add some functionality to the component.
 * - So useState is a built-in hook that we can use to handle state changes in our application
 * - The first value that is returned from the useState function is the state value
 * - The second value is a function that we can use to change that state value
 * - If you're handling any state inside your component, useState is a powerful utility
 * 
 * - PROPS are passed to a function, and STATES are managed within a function. BOTH rerender the component
 */

 const root13 = ReactDOM.createRoot(document.getElementById("root13"));

 function UseStateExample1() {
   const [status, setStatus] = useState("Welcome"); // first value is state value, second value is function to update the state value. Can set a default status
   return (
     <div>
       <h2>Status: {status}</h2>
       <button onClick ={() => setStatus("We're Open")}>Open</button>
       <button onClick ={() => setStatus("Back in 5")}>Break</button>
       <button onClick ={() => setStatus("We're Closed")}>Closed</button>
     </div>
   );
 }
 
 root13.render(
   <UseStateExample1></UseStateExample1>
 );

 /******************************** [4.3] Using multiple state variables ************************************** */
 const root14 = ReactDOM.createRoot(document.getElementById("root14"));

 function UseStateExample2() {
   const [year, setYear] = useState(2050);
   const [manager, setManager] = useState ("Jamie");
   const [status, setStatus] = useState("Welcome"); // first value is state value, second value is function to update the state value. Can set a default status
   return (
     <div>
       <h3>Year: {year}</h3>
       <button onClick={() => setYear(year +1)}>Change Year</button>

       <h3>Manager on Duty: {manager}</h3>
       <button onClick={() => setManager("Kevin")}>New Manager</button>
       
       <h3>Status: {status}</h3>
       <button onClick ={() => setStatus("We're Open")}>Open</button>
       <button onClick ={() => setStatus("Back in 5")}>Break</button>
       <button onClick ={() => setStatus("We're Closed")}>Closed</button>
     </div>
   );
 }
 
 root14.render(
   <UseStateExample2></UseStateExample2>
 );