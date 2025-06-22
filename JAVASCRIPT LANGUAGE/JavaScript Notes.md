Date -> 19 / 12 / 2024

Js -> JavaScript
 
  # Scripting -> to add the functionality in which user are interaction or server side language or scripting language or programming language

  Intro ->

  1995 js -> Brendan Eich Founder of js
  -> Mocha
  -> LiveScript
  -> JavaScript
  -> ECMA Script

  # we used script tag for writing script

  # There are three types of variable
  1. var
  2. let
  3. const

  # var -> Redeclare and Reassign kr sakte hai var mai

  for example ->
  var a = 90;
  var a = 90;

  # let -> only Reassign kr sakte hai let mai

for example ->
  let a = 90;
  let a = 39;

  # const -> Not Redeclared and Reassign

for example ->
  
  const name = "Mohit";

# Date -> 21 / 12 / 2024

// Operator -> are special symbols

there are 3 types of operator

# unary
single -> ++ , -- increment or decrement
-> ++v , v++
-> --v , v--

# Binary
-> Arithmatics
+ , - , * , / , %

/ -> Quotient
% -> Remainder

-> Relational Operator

== , != , > , < , >= , <=

-> Logical
&& , || , !

-> Assignment
= , += , -= , *= , /= , %= 

# Ternary

? :

# prompt -> predefined function or ye user input lene k leye km aata hai

-> parseInt -> for converting any value into integer


# 23 / 12 / 2024
# Conditional Statement
if , else , ladder if else , switch

if else -> used for check one condition
ladder if else -> used for check multiple condition

# 24 / 12 / 2024
# Switch
-> used for check multiple condition

# 26 / 12 / 2024
# for Loop
-> used for execute any block of code for multiple time

# difference between parameter and arguments
parameter -> function ke andar define kiye gaye variable
argument -> function ke andar pass kiye gaye value
and function ke leye argument as a input km krta hai


# function
-> function is a block of code which can be called multiple time and used for reusability

1. without argument and no return value
2. with argument and no return value
3. with argument and with return value
4. without argument and with return value

# DOM -> document object model(pure document ko tree like structure mai bana deta hai)

it used for some change can be done html and css with respect to js

-> har element ko node bolenge like ( h1 , p and etc)
-> <h1> mohit </h1> = mohit is textnode 

# onclick  events -> it passed in the opening tag with attribute and function

# 3 types se target kr skate element node ko  in js mai

1.id
2.classname
3.tagname

# getElementById -> single element/node ko hi target krta hai or ye ek predefined function hai but eshi ko prefenrence dete hai pehle

# getElementsByClassName and getElementsByTagName -> return nodelist in array form 

# innerHTML -> ye content ko change kr deta hai inside html page it also change tag content like we given inside the html i tage , b tag etc

# textContent -> ye sirf tag ko hi change kregha ye esmai i tag or b tag nhi work krta hai


# Finding HTML Elements
# Method	Description
1.document.getElementById(id)	Find an element by element id
2.document.getElementsByTagName(name)	Find elements by tag name
3.document.getElementsByClassName(name)	Find elements by class name
4.Changing HTML Elements


# Property	Description
1.element.innerHTML =  new html content	Change the inner HTML of an element
2.element.attribute = new value	Change the attribute value of an HTML element

3.element.style.property = new style	Change the style of an HTML element
4.element.textContent = new text	Change the text content of an HTML element
 # Method	Description

element.setAttribute(attribute, value)	Change the attribute value of an HTML element
# Adding and Deleting Elements
 # Method	Description
1.document.createElement(element)	Create an HTML element
2.document.removeChild(element)	Remove an HTML element
3.document.appendChild(element)	Add an HTML element
4.document.replaceChild(new, old)	Replace an HTML element
5.document.write(text)	Write into the HTML output stream

# Date 3 Jan 2025

Ques-> what is hoisting
-> hoisting is a process in which variable and function declaration move to top of the code

Ques -> what is ES6 AND ECMA and full form 
-> ES6 -> ECMAScript 6
-> ECMA -> European Computer Manufacturers Association
-> ES6 is a version of ECMAScript which is a standard for scripting language
-> ECMAScript is a standard for scripting language

# SetAttribute -> agar kohi style ko add krna hai to use krenge it takes two argument (attribute name , attribue value) FOR EXAMPLE
head.setAttribute('bgcolor' ,'red')
etc

# DOM EVENTS -> it is a event which occur when we interact with html element
or action perform by the user

# javascript mai kohi class ko leke apply krna hai css to use krenghe

elementidname.classList.add('classname')

# form -> to get the input from the form so we used form 

or form automatic save hota hai usko rokne ke leye hm return false use krte hai 


# querySelector querySelector all -> indexing ki problem solve krne ke leye use kya gya hai

querySelector -> 
it is a method which return the first element which match the selector

querySelector all ->
it is a method which return all the element which match the selector

addEventListener ->
it is a method which add an event listener to the element or it used without used html agar kohi event fire krna hai to
it take two two argument eventname , function like
example
element.addEventListener('click' , function(){
  console.log('button clicked')
  })

# Array 
Need - > to stored multiple value in one variable
array -> collection of multiple value 

 . ordered - > position of element

 # for of loop -> it used for access the array element


 # Array predefined function

 1.push()-> it used for the add the element in the last index
 2.pop() -> it used for the delete the element in the last index
 3.unshift -> it add the element in the first index
 4.shift -> it remove the element in the first index
 5.splice -> it used for the add the element in the middle index
 6.slice -> it used for the get the element from the  middle of the array

 # Destructuring of array -> when we don't use the indexing value we access the element with the help of variable so we used destructring of array

 # spread Operator(...) -> it used for the merging the array element

 # object -> it is a  datatype used for stored multiple value
  { } denote , unordered , key value pair

  # nestedobject -> ek object ke under dusra object

  1 . in nested object we pass three thing

  like -> object , array , function

  # this -> ye bata ta hai usko refer krta ushi  or same object ke data
  ko
  # for in loop -> it fetch the object key  value or it print the object key value or also array index value

  # Method -> A method is a function definition stored as a property value

  Accessing Object Methods -> syntax 
  objectName.methodName();

  # Displaying javaScript Objects -> 
  first we will define inside the id or classname like <p id= "demo"></p>
  the we will create class object inside the js file 
  after that we will access object with the help of DOM events 

  # Array of object => it used for multiple value storedl like emp data

  # Arrow of function -> Arrow function is anonymous function 
  1.it used for code concise
  2.one line of funtion use krne k leye
  
  # syntax
  1.()=>{return}
  2.()=>()
  3.()=>
  4.=>

  # call back function -> kisi  function ke  object ke argument ke under dusre function ko call krte hai usko call back function kehte hai

  syntax -> function demo ( function()){

  }

  # map function -> array ke data ko fetch krke new array mai return kr deta hai
  1. it accept  argument vo argument hota hai function mean ek argument mai function accept krta hai

2. agar map function condition dete hai to ye sirf boolean value return kregha esleye hmm condition nhi dete hai map function mai

# filter function -> data ko filter out   krne k kam kregha kisi bhi specific condition pe means esmai apan condition de sakte hai

# setInterval is a  predefined function 
1.it accept two argument pehla function dusra timer


# setTimeout is also predefined function 
1. it also accept two similary to setInterval
2. it give only one time pop

# JSON.PARSE -> esmai jis type ka data pass karenge vo ushi format mai data convert krke de dega 

# JSON.stringify -> ye kohi object ke data ko string mai convert kr deta hai

# what is eventbubbling -> it is a process when event is happen on an element , then it first handle child and then parent then ancester of that.

# what is event deligation -> it is a technique of DOM to use one event listener on parent at the place of taking event listener on multiple child

# AOS(animation of scroll library ) LIBRARY ->  it  is  a type of scroll library

# for duration -> data-aos-duration = "1500"

-> important project

# vanta.js
# swiper.js
# sweetalert
# whatfont -> it is a extension in browser chrome it check font , style etc.
# coolers.com

# project information -> agar kohi user book now or buy now  pehle sign up page open kr phir  loign page 
-> login -> form page (booking)
-> insert -> pop up booking success
-> user -> booking data (cancel)

Front page -> navigation var -> Admin login
-> table page -> data all users
-> delete  / edit 

# QUESTION FOR  JAVASCRIPT FOR INTERVIEW

1. Differenct between let , var , const with scope
2.what is fade arrow function
3.what is hoisting
4.what is closure
5.what is event bubbling  
6. what is event deligation
7. what is event propogation
8.what is promise
9.why we use async a await
10. what is json
11.what is call back and hire order function
12. Difference between synchronous and asynchronou
13. Explain this keyword

# QUESTION FOR CSS AND HTML FOR INTERVIEW 
1.what is responsive
2.how to make are website responisve
3.differece between flex and grid
4.what is selectors and how many type of selectors
5.what is media query
6.explain box model
7. what is attributes



