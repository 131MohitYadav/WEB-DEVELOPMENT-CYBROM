// FRONT-END DEVELOPMENT CLASS NOTES

#Date - 8 / 11 / 2024

 1 .website - > collection of webpages.

 2.webpage -> collection of data,information etc.

 3.software -> collection of programmes is called software


// TYPES OF SOFTWARE 

 Application software - like Instagram,whatsapp

System software - like window , android


 //Markup language - browser understand  , no error while running the files

// Hypertext - link the pages

// HTML - > are used for design the structuring  or layout of website

// Tags -> There are two types of tag 
 
1 . container tag - jiske under content likte hai
2. Non-container tag - opposite 

##################################################################
# Date 11 / 11 / 2024

 list - > there are two types 

 ordered list 
 unordered list

Attribute -> It change the behavior of tag or property of tag

bgcolor -> it is a Attribute that used in body tag only

##################################################################
# Date 12 / 11 / 2024
 u tag -> for underline
 i tag -> for italic font
 b tag -> for bold
 mark -> for highlighting tag
height and width -> also Attribute of ministate tag
alt -> alternate tag

There are two type of tag
1. inline tag = According to element lete hai  width and height
2. block tag = width 100% rehti hai

##################################################################
# Date -> 13 / 11 / 2024
Audio and video tag Attribute -> controls , autoplay , loop , muted
Audio and video are inline tags
hr tag -> used for lining

##################################################################
# Date -> 14 / 11 / 2024
table tag -> To make the data
th -> table  heading tag
td -> table data tag
tr -> table row tag
colspan -> it is a Attribute which is used for column collpased

#######################################################################
# Date ->  15 / 11 / 2024
rowspan tag -> row collpased
In table tag -> we can change height or width but
in th tag we onlychanged height or width

form tag -> used for the making form 
inside the form tag -> we used some more tag like 

label tag -> give the label like Enter Name
input tag -> used for input the data or type = text and number like 
Mohit yadav , 87945682 

################################################################3
Date -> 16 / 11 / 24

placeholder -> it used in inside the input tag it gives the direction or instruct what to write inside the input text field
1. When we used radio Attribute in the form firstly if select all radio button but when we passed name Attribute inside the input field it select one similarly to checkbox
2.select tag -> are used for choosing
3.required Attribute used for -> it does not save or submit the empty form 

#####################################################################
Date -> 17 / 11 / 24

legend tag -> ye fieldset tag m used hota hai 

textarea tag -> ye box create kr deta for feedback

Action Attribute -> it used for rendering the page like when we sign up then we open the login page hmm ye cheez action duara kr sakte hai

<a> anger tag -> are used for link the multiple pages 
anger tag are used any inside the tags

########################################################

 CSS START

Date -> 19 / 11 / 24

CSS -> cascading style sheet
css are used three types 
1.inline-> it used with in a tag
2.internal -> it used with in a page
3.external -> used with in all web page

Selector -> it used in css 
1. id selector -> #idname
2.class selector -> .classname
3.tag selector -> tagname
4.universal selector -> *
5.grouping selector -> mixed of class  and id selector 

hmm css mai tag ko element bolte hai

#################################################################
Date -> 20 / 11 / 24

In css we passed property and value
like -> property: value; // color: red;
PROPERTY 
1.text-align -> it used for the alignment of the text like center , right , left
2.font-size -> it used for the increase the size of the font like 10px , 20px
3.text-decoration -> it used for the underline , overline , line-through and or ye by default solid aata hai
4.text-decoration-style -> dashed , dotted , double , wavy.

#########################################################################3

Date -> 22 / 11 / 24
git  and github 

how to create account in github and add files 
how to download gitbash

#####################################################################################
Date -> 23 / 11 / 24

git bash command
# ye command github pe bar bar files save krne ke leye use hogi

1.git add . -> it used for add all files in the repository
2.git add filename -> it used for add specific file in the repository
3.git commit -m "message" -> it used for commit the file in the repository
4.git push -u origin master -> it used for push the file in the repository


############################################################################3
Date -> 25 / 11 / 24

1.text-shadow-> it used for the shadow inside the tag 
for example -> text-shadow : 3px 4px 2px color red ; // 

3px -> used for horizontal
4p -> used for vertical
2px -> used for blur
red -> used for color

2.text-transform -> inside the text transform we passed value like 
capitalize -> ye fist letter ko capitalize kr dega
uppercase -> ye pure text ko capital kr dega 
lowercase -> ye pure text ko small kr dega

3.div tag or section tag -> it used for the divide the structure of webpage
it takes width 100% ye ek block tag hai

##################################################################

Date 26 / 11 / 2024
# TEXT-FORMATTIN PROPERTIES
Google Fonts -> use kese krte hai 
first download the font
second add the font in the html file like <link>
third use the font in the css file like font-family : 'font name' , sans-serif ;

# BOX-MODEL
padding -> esko inside the container use krte hai 
Agar hmai charo direction mai same padding chaheye to sirf padding use krenge

padding: 12px 120px; // 12px chalegi top to bottom and 120px left to right
 
#########################################################################

Date -> 27 / 11 / 24

# BOX-MODEL 
1.margin -> esko outside the container use krte hai
Agar hmai charo direction mai same margin chaheye to sirf margin use kren

2.border: 3px solid green; // 3px-> thickness of border , type of border , color
emai bhi 4 types of border direction hote hai
border-top
border-left
border-right
border-bottom or agar nahi chaheye border to 
border: none;

esmai -> border de sakte hai solid , dashed , dotted , double

3.border-radius -> ye corner ko curve krne ke leye use kreghe

# hum ek corner ko bhi curve kr sakte hai with the help of these property
border-top-left-radius
border-top-right-radius
border-bottom-left-radius
border-bottom-right-radius

4.box-shadow-> it take 5 values and text-shadow take 4 values 

box-shadow-> 4px 3px 2px 3px red; // 
4px -> horizontal
3px -> vertical
2px -> blur
3px -> spread
red 

# flex-box

5.display-flex (column ko row mai convert krdeta hai)->  agar kohi container or div or section  or esmai agar columns wise child hai to  wo display flex rowwise arrange kr dega 

display-flex sirf parent mai hi lagega

6.justify-content(ye row ke leye use hoti hai )  or gap -> ye  row mai space dene ke leye use hota hai display flex mai or ye sirf tabhi km krega jab display-flex use krneghe
 or 
 gap: 23px ; use kr sakte hai (space dene ke leye km krta hai)
justify-content -> space-around or space-evenly or space-between

#######################################################################
Date => 28 / 11 / 2024

1.align-item ( ye columns ke leye use hoti hai): center or start or end use kr sakte hai; // ye columns ke  item ko center mai lane ke leye use hota hai 

#flex model

2.<nav> tag ( semantic tag) -> it used for navigation bar or menu bar 

######################################################
Date => 30 / 11 / 2024

h1.eight -> 100Vh (view port height) , it used to assign column height 

2.response website -> works on all type of devices(all screen)

3.flex-wrap: wrap; make website responsive to all devices.

4.We can make two class in one class by taking space between both class value

5.if we take value wrap-reverse at the place of wrap in flex-wrap tag it will reverse the element 

##############################################

Date -> 4 Dec 2024

1.header tag -> used for navbar and hero tag 
2.hero tag -> used for hero section
3. .some css tag used to insert image in the background of any container 

4.background-image: url(address of image that we wanted on background);
5. background-repeat: no-repeat; -> not repeat the image 
6. background-size: cover; -> cover the whole background with image
7. background-position: center; -> center the image in the background

# Cdn => content deliver network

# To use icon we go to the font awesome(website or Google font) then select free and search for the icon and then copy html code and past where we want that icon in website

.we can also choose animated icon
And then go to the font awesome cdn and copy firstlink and past after inside head tag

#################################################################

Date -> 9/12/2024

1.Psuedo Element -> it denote two colon :: , esmai or property use hoti hai css mai 
like -> kohi class name .head1::first-letter -> esmai apan kohi bhi color and design kr skte first letter ka. etc.

2.Position -> absolute , relative , sticky

absolute -> it used only body se hi margin km upper or niche or left or right kregah box ka

####################################################################

Date-> 10/12/2024

1.position: fixed ; -> ye fixed ho jahega when we scrol id doesnt move (navigation bar mai used hota hai)

2.position: sticky; -> ye bhi fixed ho jata hai jab scrol krte hai but with the help margin top,bottom,right,left-> 0 px esleye dete hai taki sticky ho jahe jab bo opx toch krega
(navigation bar mai used hota hai)

3. Animation -> it denote @keyframes and animation name

######################################################################

Date -> 11 / 12 / 2024

1.slider -> used with animation we give animation state in percentage and inside the animation we give background-image: url() ;  in each percentage state;

#####################################################################

Date -> 12 / 11 / 2024 

@media screen and (max-width: 100px) -> website ko responsive ka krane ke leye use hota

display:none; use display pe nhi dekhe

Date -> 13 / 11 / 2024

flex ko resonsive krne ke leye hm flex wrap use krte hai parent child mai or @media screen use kr skate flex-direction: columns; use krege