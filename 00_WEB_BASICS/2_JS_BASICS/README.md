# JS Basics - Youstart Labs

Read the Basics of JS  -  Slides given on Youstart Labs site:

* Understand Variables, Functions, Type of data structures and basic control structure like if/else,for etc.
* Understand in-built functions like Math, Random, Timers etc.
* Practise programming in Javascript using given assignments.

## JS resources

* Slides on Youstart Labs course page
* Mozilla Developer Documents [Tutorial](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
* jQuery functions we are using : [.text()](https://www.w3schools.com/jquery/jquery_dom_set.asp), [.html()](https://www.w3schools.com/jquery/jquery_dom_set.asp), [.val()](https://www.w3schools.com/jquery/jquery_dom_set.asp) , [.attr()](https://www.w3schools.com/jquery/html_attr.asp), [.css()](https://www.w3schools.com/jquery/jquery_css.asp), [.append()](https://www.w3schools.com/jquery/jquery_dom_add.asp), [.clone()](https://www.w3schools.com/jquery/html_clone.asp)

## Assignment 3 - JS Problems

### All problems should be submitted in one file like `index.js` with every solution as a function e.g. problem 1 can have `function solution1(){ your code }` . ** marked problem are most important.

1. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

2. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

```javascript
 [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
```

3. Write a JavaScript program to find the largest of three given integers.

4. Write a JavaScript program to capitalize the first letter of each word of a given string.

5. Write a JavaScript program to check if a given positive number is a multiple of 3 or a multiple of 7.

6. ** It is found by comparing two DNA strands and counting how many of the nucleotides are different from their equivalent in the other string.Find out the difference in 2 strings. How many chars are different ?

```javascript
GAGCCTACTAACGGGAT
CATCGTAATGACGGCCT
^ ^ ^  ^ ^    ^^
```

7. Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma, "every letter") is a sentence using every letter of the alphabet at least once. The best known English pangram is "The quick brown fox jumps over the lazy dog." The alphabet used is ASCII, and case insensitive, from 'a' to 'z' inclusively.

8. Determine if a word or phrase is an isogram.

An isogram (also known as a "nonpattern word") is a word or phrase without a repeating letter.

Examples of isograms:

```javascript
lumberjacks
background
downstream
```

The word isograms, however, is not an isogram, because the s repeats.

9. Convert a long phrase to its acronym.Techies love their TLA (Three Letter Acronyms). Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).

10. ** Create a JSON data object for Facebook news feed, should have data for author name, author image, post content, list of likes, comments and share etc. Now you must be able to query these  :

      a. Check how many posts are there by a particular user in your feed ? <br>
      b. How many likes on 5th post ?<br>
      c. Who are the users who liked 5th post ?<br>
      d. Who is the First user to like 5th post ?<br>
      e. How many users are there who have both commented and liked 5th post. Also show list of those users.<br>
      f. Find out the person who has commented most on your feed. (In top 10 posts)<br>

11. Create a JS object representing your facebook friendlist.

      a. Delete friends who have fake as first name. ( e.g fake singh)<br>
      b. Add 2 more friends to your friendlist at a time.<br>
      c. print all friends in your friendlist sorted by Name.<br>
      d. print all friends in your friendlist sorted by Length of Name( # of chars)<br>
      e. print initials of all your friends (Virat Kohli becomes VK)<br>
      f. print only friends who have same first names<br>

## Assignment 4 - (Mini Project)

### Photogram

This task will only change gallery page in your project. Aim of task is to create a user interface in which you can upload a new card in your photo gallery. We will try to make only few things dynamic `user picture`, `main picture`, `caption`, `name of author`.

#### Steps to follow :

* You can use `Upload Image` button to make `onclick` call to function which has your complete logic of adding card.
* You can use JS prompts to take user input. Read more about prompt in JS [here](https://www.w3schools.com/jsref/met_win_prompt.asp).
* For example, if you have to capture `caption` use something like

```javascript
var caption  =  prompt("enter your caption");
```

* Select the Photo Card `div` using jQuery, make sure you select the right `div`.
* Using jQuery you have to clone the `div`. If you don't clone the `div` same `div` will be modified everytime and a new copy will not be created. Use jQuery `.clone()` method to create a clone of selected `div`.
* Now change `user picture`, `main picture`, `caption`, `name of author` in selected clone. To change all fields you need to have an `id` or `class` at right place.
* For images you can use a URL from internet rather than using a local file `https://placeimg.com/500/333/nature` - use this for main picture.`https://placeimg.com/128/128/people` - use this for user image.
* Finally, add the cloned div to your `row-cards` div (which contains all your cards). This you can do using jQuery `.append()` function.

* Tada !! finally you will get a dynamic photo timeline in which you can add as many as photo cards as you wish.  Although this timeline will be temporary and will vanish if your refresh the page.

### E-Shoppie

This task will only change product list page in your project. Aim of task is to make a user interface through which you can upload more such products in your ecommerce page. We will try to make only few things dynamic `product picture`, `product name`, `brand`, `price`.

#### Steps to follow :

* You can use `Add a new Product` button to make `onclick` call to function which has your complete logic of adding products.
* You can use JS prompts to take user input. Read more about prompt in JS [here](https://www.w3schools.com/jsref/met_win_prompt.asp).
* For example, if you have to capture `product name` use something like

```javascript
var prodName  =  prompt("enter your product name");
```

* Select the Card div using jQuery, make sure you select the right div.
* Using jQuery you have to clone the `div`. If you don't clone the `div` same `div` will be modified everytime and a new copy will not be created. Use jQuery `.clone()` method to create a clone of selected `div`.
* Now change `product picture`, `product name`, `brand`, `price` in selected clone. To change all fields you need to have an `id` or `class` at right place.
* For images you can use a URL from internet rather than using a local file `https://placeimg.com/420/350/tech` - use this for main product picture.
* Finally, add the cloned div to your `row-cards` div (which contains all your cards). This you can do using jQuery `.append()` function.

* Tada !! finally you will get a dynamic product list in which you can add as many as product as you wish.  Although this list will be temporary and will vanish if your refresh the page.

### Bloggr

This task will only change blog thumbnail list page in your project. Aim of task is to make a user interface through which you can upload more such blog cards. We will try to make only few things dynamic `blog picture`, `blog title`, `user name`, `user picture`.

#### Steps to follow :

* You can use `Add a new Blog` button to make `onclick` call to function which has your complete logic of adding blog.
* You can use JS prompts to take user input. Read more about prompt in JS [here](https://www.w3schools.com/jsref/met_win_prompt.asp).
* For example, if you have to capture `blog title` use something like

```javascript
var blogTitle  =  prompt("enter your blog title");
```

* Select the Card div using jQuery, make sure you select the right div.
* Using jQuery you have to clone the `div`. If you don't clone the `div` same `div` will be modified everytime and a new copy will not be created. Use jQuery `.clone()` method to create a clone of selected `div`.
* Now change `blog picture`, `blog title`, `user name`, `user picture` in selected clone. To change all fields you need to have an `id` or `class` at right place.
* For images you can use a URL from internet rather than using a local file `https://placeimg.com/500/333/any` - use this for `blog picture`.`https://placeimg.com/128/128/people` - use this for `user picture`.
* Finally, add the cloned div to your `row-cards` div (which contains all your cards). This you can do using jQuery `.append()` function.

* Tada !! finally you will get a dynamic blog list in which you can add as many as blog as you wish.  Although this list will be temporary and will vanish if your refresh the page.

### Twtr

This task will only change edit user profile and add new tweets to your page. Aim of task is to make a user interface through which you can edit user information. We will try to make only few things editable `cover picture`, `user bio`, `user name`, `user picture`. Also we will make user tweet through given input text box.

#### Steps to follow :

* You can use `Edit Profile` button to make `onclick` call to function which has your complete logic of editing profile.
* You can use JS prompts to take user input. Read more about prompt in JS [here](https://www.w3schools.com/jsref/met_win_prompt.asp).
* For example, if you have to capture `user name` use something like

```javascript
var username  =  prompt("enter your user name");
```

* Now change `cover picture`, `user bio`, `user name`, `user picture` in selected elements. To change all fields you need to have an `id` or `class` at right place.
* For images you can use a URL from internet rather than using a local file `https://placeimg.com/500/333/any` - use this for `cover picture`.`https://placeimg.com/128/128/people` - use this for `user picture`.

* Tada !! finally you will be able to edit user profile. Although these edits will be temporary and will vanish if your refresh the page.
* There is one more task you can complete after this. You have to add a new tweet from given input box.
* Select using jQuery the `<li>` item which corresponds to one tweet, make sure you select the right element.
* Using jQuery you have to clone the `<li>`. If you don't clone the `li` same `li` will be modified everytime and a new copy will not be created. Use jQuery `.clone()` method to create a clone of selected `li`.
* Change the main `text` of clone `li` using `.text()` function. 
* Finally, add the cloned `li` to your `ul`  (which contains all your tweets). This you can do using jQuery `.append()` function. You can run this complete functionality of clone and addidng using `tweet` button given in front of input box. [Actual theme shows camera - change the logo if you want]

## Optional Assignment

This is only for those who have successfully completed all assignments.

* Create a form using bootstrap - for all the fields you have used in prompts.
* Remove the prompts and now use this form to submit the new Card to your project.
* Optionally, you can hide or show this form on click of button. So, that form will only be visible when you try to add new item.

## For practice 

* More pratice problems in basic JS [Here](https://www.freecodecamp.org/map#nested-collapseBasicJavaScript)
* More practice probles in object and arrays in JS [Here](https://www.freecodecamp.org/challenges/declare-javascript-objects-as-variables)
