### Learning React.js
* Platform: LinkedIn Learning
* Instructor: Eve Porcello
* Duration: 1 hour

### Course Content
* What is React.js?
* Creating and rendering React elements
* Introducing JSX
* Creating a React component
* Rendering
* Managing state with hooks
* Using multi-state variables
* Fetching data
* Deploying a React app

### Chapter 1: getting started with React

#### [Chapter 1 Lesson 3] Touring a create-react-app project
* create-react-app exists to make the process of setting up a react app easier
* The package.json consists of all of the project dependencies - react, some testing libraries, some scripts to bundle/serve
* The source folder has all the files we use to create our application
* The public folder - all of our built files will be placed into that public folder when we're ready for production
* Another way to quickly get started with a react project is to start one on codesandbox.io -- tons of frameworks and templates

#### [Chapter 1 Lesson 4] Setting up React Developer Tools for Chrome
* To open on mac -- cmd + opt + J
* To open on windows -- control + shift + J
* Find tab that shows components --  shows us components on the page
* The React Icon in the Toolbar will be active if you're on a react website
* Life saver for debugging

#### [Chapter 1 Lesson 5] Setting up React Developer Tools for FireFox
* Right click + Inspect
* Components Tab
* The ReactJS documentation site itself is built in react
* Lots of components
* Having dev tool open is very important, it helps us develop

#### [Chapter 2 Lesson 1] Creating a React ELEMENT
* ReactDOM.render takes in two arguments -- 1) the element we want to render (React.createElement), and 2) where we want to render it (document.getElementByID)
* ReactDOM.render is somewhat outdates // Alternate: root.render ((React.createElement("h1", null, "hello"))

* React.createElement (tag, properties, children)
* React.createElement (h1, null, "hello)
* React.createElement ("p", {style: {color:"blue"}, "bananaphone"})

#### [Chapter 2 Lesson 2] Rendering multiple react elements
* So then, imagine you want to create an unordered list... you CAN do this through React.createElement(), by having the initial function create the UL, then in the third argument use React.createElement to create multiple LI elements.
* React.createElement("ul", null, React.createElement("li", null, "alpha"), React.createElement("li", null, "beta"), React.createElement("li", null, "gamma")).
* This works and can be used for rendering one or two elements. But it is very elementary and cumbersome. JSX resolves the issue with React.createElement()

#### [Chapter 2 Lesson 3] Introducing JSX
* JSX stands for JavaScript XML. It is a Javascript syntax extension that allows you to write HTML elements directly in Javascript. Hence, can be thought of as HTML for react.
* The browser can't read JSX ... When we use create-react-app, it downloads babel as a dependancy. Babel transpiles the JSX into something that can be read by the browser.
* When you paste your jsx into the babeljs.io transpiler, you'll see that it is a BUNCH of createElement calls.

#### [Chapter 2 Lesson 4] Understanding JSX features
* While JSX is similar to HTML, there are some differences

1) Can create variables, and dynamically change them.
<code>
const city = "madrid"
root.render(<p>Hello from {city}!</p>)
</code>

2) Can create objects, and dynamically use their values.
<code>
let city = "edison"
let state = "nj"

root.render(<p> {city.name} is in {city.country}!)
</code>

3) Can add classNames and ids and styles directly to the tags
* can write the styles in the public index.html file

#### TODO:
* look into code sandbox website






