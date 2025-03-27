
# REACTJS NOTES ( DATE START -> 20 FEB 2025) 

1. React ->  it is a library of javascript for faster developing 
2. 2011 main banaye gyi thi or open source kr diya tha 2013
3. jordan walk ye facebook ke developer the
4.  There are two form for React 
 # React Dom -> it used for web development
 # React Native -> it used for mobile development

 5. React works on SPA(single page application Architecture) and Components based Architecture
 6. Single page mean ek page pe multiple page render ho rahe hoge
 7. Rendering -> ek page pe multple page h rahe ho

 # Difference between framework and library
 
 1. FRAMEWORK -> it is a set of rule 
 # we cannot change but add something

 2. Library ->  user can change the code according to developing

# we can create react app with the help of Bundler
# Bundeler ( vite ) -> 
it take less memory approx 50 se 60 mb

# Dependencie -> 
ki agr react ka project bana rahe to boo kohn kohn se library use kr raha hai

# vite ke help se react chalahenghe 
for creating react project some command below follow
# cmd command ->
agar project banana ho to 
1. npm create  vite@latest
# agar node module ka folder banana ho to
2. npm install ( npm full from -> node package manager)
# agar run krana ho to project ko
3. npm run dev

# Folder Structure

1. node modules  folder -> ke under packages , dependencies and library aayenghe

# bebble is a compiler -> it convert javascript code to React mai

2. public folder -> static files rehti hai like images

3. src folder -> it is a main folder  esmai files create karenghe

4. package.json folder -> agar kabhi bhi apan kohi bhi library use krte hai to uski library install hogi es folder mai

5. package-lock.json -> jo bhi library hogi unki details hogi eske under like kaha se har rahi hai , konse src ha rahi hai etc.

# App.jsx -> is root element emai upon render only components krahenge

# import and export there are two type between the files
1.default -> agr ek hi function hai javascript mai to default  use krenghe
2.named -> agr multiple function ko krna hai to name use krenghe 

# jsx(javascript xml) -> jab html and javascript ke code sath m chalana ho to jsx use krenghe.
. it provide html like code
. it return only single element

#Homework
# what is Fragments
ans->In ReactJS, a Fragment is like an invisible wrapper or parent. If  we group multiple elements together without adding an extra <div> to the HTML. so we used Fragments


# Difference between npm and npx

npm -> stand for Node package Manager
. npm used when you want to install package permanently
.command -> npm install lodash

npx -> stands for Node package Execute
.npx used when you want to run a package without installing it
.npx create-react-app my-app


# jsx Rules for writing -> 

# 1. Return a Single Parent Element
example -> 
return (
  <>
    <h1>Hello</h1>
    <p>Welcome to React.</p>
  </>
);

 # 2. Use className Instead of class
example ->
<p className="text-red">Hello</p>


 # 3.Close All Non-container Tags Properly
example ->
<img src="logo.png" alt="Logo" />
<br />

 # 4.JavaScript Expressions Must Be Inside {}
To insert JavaScript code inside JSX, wrap it in curly braces {}.
example ->
const name = "John";
return <h1>Hello, {name}!</h1>;

# 5.Use camelCase for HTML Attributes
example ->
<button onClick={handleClick}>Click Me</button>


# 6.Conditional Rendering Uses Ternary Operator or &&
# Using Ternary Operator:


const isLoggedIn = true;
return <h1>{isLoggedIn ? "Welcome Back!" : "Please Sign In"}</h1>;

# Using && Operator:
const isAdmin = true;
return <>{isAdmin && <p>Admin Panel</p>}</>;









<div>
<h1>Hello Mohit</h1>
<p>loremljakdfjas;fds ff</p>
</div>

or  we used fragments it denote <>(empty div)
<>
<h1>mohit yadafdf </h1>
<p>loafdlafjsdojfsdflkjsokfj<p>
</>

App.jsx -> Main.jsx -> index.html yahi follow hota hai criteria

# COMPONENTS -> section ko react mai components bolte hai or enhi components ki file create hoti hai

There are two types of components 
1.Functional components -> nowdays we used Functional components only
2.class components -> 

# kabhi bhi apan import krahenge components ko to usko use krahenge is in tag use krahenghe

# props -> it is a properties  and the combination of attribute and arguments/parameter.

# Attribute -> property of tag
.jab ek components se dusre components mai data transfer krna ho to properties ka use krte hai
.data flow parent to child

# variable -> ye function ke neeche and return ke uppar banaega

# Attribute -> use krete hai jaha se value ko bejna ho 
# Argument/parameter -> use krte hai jaha value ko get krna ho


# props driling -> agar parent se data sab child mai pass hote hue ja rah hai to usko props drilling kehte


# Question
1. what is virtual DOM 
ans -> The Virtual DOM (VDOM) is a lightweight, in-memory representation of the actual DOM (Document Object Model) used in web development, primarily by frameworks like React, Vue.js, and Svelte. It helps optimize UI updates by minimizing direct manipulation of the real DOM, which can be slow and inefficient.

2. Diference between virtual DOM AND Real DOM
ans -> 
# VIRTUAL DOM
1.It is a lightweight copy of the original DOM
2. It is maintained by javascript libraries
3. Performance is fast and UX is optimised   
# REAL DOM
1.it is tree representation of HTML elements
2.it is maintained by the browser after parsing HTML Element
3.Performance is slow and the UX quality is low


# Hooks -> special type of functions provided by react
jab bhi html mai UI pe km kran ho to hooks use karengh

.ui update -> state -> hook -> useState
.state -> jaha ui pe change krna ho usko state kehte hai
. useState( ye Hooks ek) -> ui ko update krne ke leye useState use krte hai

# Rules 
1. hook declare -> top of the function
2. hook import krna hai pehle
syntax : 

let [variable,function] = useState(initial_value)


# initial value -> variable ki value hoti hai

# navigation(router) -> one components to another components jana or rendering components main.jsx

.react-router-dom -> ek libarary hai jo navigate ka km krta hai
1. command to install -> npm i react-router-dom
# using -> it use for the rendering the components

. After installing react-router-dom 
# there are three main things in react-router-dom
These are components 
1.BrowserRouter -> use main.jsx
# ye routing ko enable kr dega takki sarre components use kr sakke or link

# jo bhi components render hoge bo url pe honge 
. To create url with the help of Routes and Route

2.Routes ->  use App.jsx
3.Route ->  use App.jsx
# we passed two attribute 
A. Path -> espe konsa components render hoga
B. element
Link
Outlet-> ye middle mai navigation bar and footer ke beech mai componetns ko render karhegha
or it render child components


# Bootstrap -> it is a framework of  css and js
   # COMMAND FOR INSTALL -> npm i  react-bootstrap bootstrap

   -> After that import bootstrap folder in main.jsx
    import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
 # ye sab components main aahegi bootstrap mai
1 container and container-fluid-> . it divide 12 parts
. Container Fluid it take width 100% and container - margin choodtha hai left and right thoda thoda
.Col-sm -> mobile ke leye chlta hai
.Col-md -> tab ke leye chalegha
.Col-lg -> Desktop ke leye chalegha

# React Bootstrap  website


# useEffect Hooks (  means sideeffect over components )-> API hit krna ho tabb hooks use krte hai 

why use useEffect Hooks -> jab pura components load ho jahe web page usek baad api hit krenghe


1. it takes two arguments
 # useEFfect(callbackfunction , depenedencies in arrray format []) -> agar hmm useEffect ek hi barr render krana ho to empty dependenices use krenghe
 2. dependinceis  -> useEffect kis kis par dependent hai 

# context api -> props  ko solve krna ke leye props drilling banaya gya hai

. it also flow data parent to child

1. In context api  three things main

a. create 
b. provider
c.consumer

# useContext HOoks -> consumer ko solve krne ke leye ye hooks ka use krte hai 

# useNavigate HOoks -> ye use ho ti navigate krane k leye 
. it return  function  kohi bhi function name de sakte hai like 
# let navigator = useNavigate()

 navigator is a function



// FORM // 

 # onChange -> it is event it call function because it is a event

 . onChange jese hi event fire krega ye ek object pass kregha function ko

 . preventDefault -> is a function ye form submit hone ko rokegha 