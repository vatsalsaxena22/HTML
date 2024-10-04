<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" width="100px" /> 

# HTML Complete Notes
---

## HTML Introduction

### HTML First Program:

**Hello World!**, create a file named index.html and write -

        <html>Hello World!</html>

### HTML Basic Layout:

        <html>
        <head>
          <title> Page Title </title>
        </head>
        <body>
          <h1> Heading </h1>
          <p> Paragraph </p>
        </body>
        </html>

### HTML Versions:
 <img src="https://www.tutorialspoint.com/html/images/html-version-release-year.jpg" alt="HTML Versions">

### Parts of HTML:
Tags - <tag> Content.... </tag>

Attributes - `<tag attribute="key: value;">` or `<tag attribute="value;">`

Elements - `<tag attribute="key: value;"> Content.... </tag>` or Tag + Attribute

### Best Editor for HTML:
1. VS Code
2. Sublime Text 3
3. Web Storm IDE
4. Notepad++

## HTML Basics

### Document Type Declaration:

`<!DOCTYPE html>` - Defines HTML 5 version

### HTML tag:
`<html>` - html starts here
`</html>` - html ends here

### Head tag:
Contains meta data
`<head>` - head starts here
`</head>` - head ends here

### Title tag:
`<title> Site Title </title>`

### Body tag:
Contains Body content
`<body>` - body starts here
`</body>` - body ends here

### Headings:
`<h1>....</h1>`
`<h2>....</h2>`
`<h3>....</h3>`
`<h4>....</h4>`
`<h5>....</h5>`
`<h6>....</h6>`

### Paragraph:
`<p>....</p>`

### Link:
`<a href="url">....</a>`

### Line Break:
`<br />`

### Horizontal line:
`<hr />`

### View HTML Source Code:
#### View HTML Source Code:
Click <kbd>CTRL + U</kbd> in an HTML page, or right-click on the page and select "View Page Source". This will open a new tab containing the HTML source code of the page.

#### Inspect an HTML Element:
Right-click on an element (or a blank area), and choose "Inspect" to see what elements are made up of (you will see both the HTML and the CSS). You can also edit the HTML or CSS on-the-fly in the Elements or Styles panel that opens.

### Comments:
        <!-- comment -->
Shortcut - <kbd>CTRL + /</kbd>

### Blocks Elements:
`<h1>----<h6>` `<p>` `<div>` `<hr>` `<header>` `<nav>` `<main>` `<footer>` `<section>` `<article>` `<ul>` `<ol>` `<li>` `<dl>` `<dt>` `<dd>` `<table>` `<form>`

### Inline Elements:
`<a>` `<span>` `<img>` `<br>` `<button>` `<input>` `<select>` `<b>` `<i>` `<q>` `<sub>` `<sup>` `<textarea>`

## HTML Formatting

### Physical Tags:
These tags directly impact the visual appearance of the text, altering font styles, sizes, and other visual properties.

`<b>` - bold

`<i>` - italic

### Logical Tags:
These tags denote the logical or semantic value of the text. They convey meaning without directly affecting the visual appearance.

`<strong>` - strong

`<em>` - emphasize

### Formatting Tags:
`<sub>`
`<sup>`
`<mark>`
`<del>`
`<ins>`

### Quotation tags:
`<q>`
`<blockquote>`
`<cite>`
`<abbr title="">`
`<address>`
`<bdo dir="ltr">`
`<bdo dir="rtl">`

## HTML Table
HTML tables allow web developers to arrange data into rows and columns.

### Tags:
`<table>` - table tag

`<tr>` - table row tag

`<th>` - table header tag

`<td>` - table data tag

### Basic Layout:
        <table>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
          <tr>
            <td>Arvind</td>
            <td>11223344</td>
            <td>a123@mail.com</td>
          </tr>
          <tr>
            <td>Bhanu</td>
            <td>123123</td>
            <td>b111@mail.com</td>
          </tr>
          <tr>
            <td>Chandan</td>
            <td>12344321</td>
            <td>c121@mail.com</td>
          </tr>
        </table>

### Simple Table:

| Name	        | Phone	        | Email         |
| ------------- | ------------- | ------------- |
| Arvind	| 11223344	| a123@mail.com |
| Bhanu 	| 123123	| b111@mail.com |
| Chandan	| 12344321	| c121@mail.com |

### Rowspan and Colspan:
#### Rowspan:
`<td rowspan="2">....</td>`

#### Colspan:
`<td colspan="3">....</td>`

## HTML List

### Tags:
`<ul>` - Unordered List

`<ol>` - Ordered List

`<li>` - List Item

`<dl>` - Description List

`<dt>` - Description Title

`<dd>` - Description Data

### Unordered List:

- Apple
- Banana
- Mango
- Orange
- Grapes
 
### Ordered List:

1. Lion
2. Tiger
3. Leopard
4. Wolf
5. Fox
6. Elephant
7. Rhino
8. Bear

### Description List:

Noun -

Noun is the name of a person, place or things. e.g. Ram, Book, Kanpur etc.

Pronoun -
  
The word which used in place of noun is called Pronoun. e.g. He, She, It etc.

### Nested List:
* Bus
* Car
  * Sedan
  * SUV
    * Off-roader
    * Crossover
  * Hatchback
  * MUV
* Bike
* Scooter

## HTML Form

### Tags:
`<form>` `<label>` `<input>` `<select>` `<option>` `<textarea>`

### Form Example:

        <form action="" method="">
                <label for="fullName">Full Name:</label>
                <input type="text" name="fullName" id="" />
                <br />
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" />
                <br />
                <label for="Phone">Phone:</label>
                <input type="tel" name="phone" id="" />
                <br />
                <label for="message">Message:</label>
                <textarea name="message" id=""></textarea>
                <br />
                <input type="submit" value="Submit">
        </form>

### Input Types:

      <label for="">Button</label>
      <input type="button" name="" value="Button" id="">
      <br />
      <label for="">Checkbox</label>
      <input type="checkbox" name="" value="Check" id="">
      <br>
      <label for="">Color</label>
      <input type="color" name="" id="">
      <br>
      <label for="">Date</label>
      <input type="date" name="" id="">
      <br>
      <label for="">Date Time</label>
      <input type="datetime" name="" id="">
      <br>
      <label for="">Date Time Local</label>
      <input type="datetime-local" name="" id="">
      <br>
      <label for="">Email</label>
      <input type="email" name="" id="">
      <br>
      <label for="">File</label>
      <input type="file" name="" id="">
      <br>
      <label for="">Image</label>
      <input type="image" name="" id="">
      <br>
      <label for="">Month</label>
      <input type="month" name="" id="">
      <br>
      <label for="">Number</label>
      <input type="number" name="" id="">
      <br>
      <label for="">Password</label>
      <input type="password" name="" id="">
      <br>
      <label for="">Radio</label>
      <input type="radio" name="" id="">
      <br>
      <label for="">Range</label>
      <input type="range" name="" id="">
      <br>
      <label for="">Reset</label>
      <input type="reset" name="" id="">
      <br>
      <label for="">Search</label>
      <input type="search" name="" id="">
      <br>
      <label for="">Submit</label>
      <input type="submit" name="" id="">
      <br>
      <label for="">Tel</label>
      <input type="tel" name="" id="">
      <br>
      <label for="">Text</label>
      <input type="text" name="" id="">
      <br>
      <label for="">Time</label>
      <input type="time" name="" id="">
      <br>
      <label for="">URL</label>
      <input type="url" name="" id="">
      <br>
      <label for="">Week</label>
      <input type="week" name="" id="">

## HTML Media
## HTML Style
## HTML Script
## HTML Advance
## HTML Grapics
## HTML APIs
## HTML Full Stack
