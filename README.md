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

```
const city = "madrid"
root.render(<p>Hello from {city}!</p>)
```

2) Can create objects, and dynamically use their values.

```
let city = "edison"
let state = "nj"

root.render(<p> {city.name} is in {city.country}!)
```

3) Can add classNames and ids and styles directly to the tags
* can write the styles in the public index.html file

#### [Chapter 3 Lesson 1] Creating a React COMPONENT
* A react component is a function that returns some UI

1) Here's a very simple React Component -- the component function, and the render function using the component
* The contents in the return block of the function should be wrapped in a singular <div>
* React components must be capitalized

```
function Hello() {
    return <div> <h1> Welcome to React!</h1> <p>Let's build something cool!</p> </div>
}

ReactDOM.render(<Hello />, getElementByID("root"))
```

#### [Chapter 3 Lesson 2] Understanding properties
* Can use props to display dynamic data within a component
* First add all the properties you desire to the the React Component tag itself
* Then pass props into the function.
* Then replace all hard coded values with {props.age}

```
function Hello(props) {
    return <div> <h1> Welcome to the {props.courseName} Course!</h1> <p>My name is {props.name}. I am {props.age} years old. And I'll be your instructor! Let's build something cool!</p> </div>
}

ReactDOM.render(<Hello courseName="React" name= "Nili" age= {24} />, getElementByID("root"))
```

* Can also pass functions
```
function Hello(props) {
    return <div> <h1> Welcome to the {props.courseName} Course!</h1> <p>My name is {props.name}. I am {props.age} years old. There are {Objects.keys(props).length} props being used in this demo. And I'll be your instructor! Let's build something cool!</p> </div>
}

ReactDOM.render(<Hello courseName="React" name= "Nili" age= {24} />, getElementByID("root"))
```

* Will also see the values from the props object destructured
```
function Hello({courseName, name, age}) {
    return <div> <h1> Welcome to the {courseName} Course!</h1> <p>My name is {name}. I am {age} years old. There are {Objects.keys(props).length} props being used in this demo. And I'll be your instructor! Let's build something cool!</p> </div>
}

ReactDOM.render(<Hello courseName="React" name= "Nili" age= {24} />, getElementByID("root"))
```

* So to recap, the props object provides data to a component to be displayed
* So think of the react component as a FUNCTION that takes in data as an argument, and returns React elements to create a user interface.

#### [Chapter 3 Lesson 3] Composing components
* Generally, we like to put compoents together to create a larger user interface.
* React is really good with composing components

* In the example, the App is responsible for rendering the lake.
* The lake function is super generic, and the details about the lake name come from where it is rendered.


#### TODO:
* look into code sandbox website






