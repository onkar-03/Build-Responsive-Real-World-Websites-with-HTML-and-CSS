# HTML Fundamentals

## 1.0 What is HTML ?

- **HTML :** **H**yper **T**ext **M**arkup **L**anguage
- A markup language used to describe content & structure of a Webpage
- Consists of elements that describe different contents like paragraphs, links, headings, etc...

## 1.1 What is an Element ?

`<p>This is a Paragraph </p>`

- Opening Tag : `<p>`
- Content : _This is a Paragraph_
- Closing Tag : `</p>`

## 1.2 HTML Document Structure :

- Using Emmet
- ! + Tab
- Used to create a Basic HTML Structure

  ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <!* "Contains Meta Data" *>
        <meta charset="UTF*8">
        <meta name="viewport" content="width=device*width, initial*scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <!* "Content Here" *>
    </body>
    </html>

  ```

## 2.0 Text Elements :

- 6 Sizes of Headings :
  - `<h1>"Content Here"</h1>`
  - `<h2>"Content Here"</h2>`
  - `<h3>"Content Here"</h3>`
  - `<h4>"Content Here"</h4>`
  - `<h5>"Content Here"</h5>`
  - `<h6>"Content Here"</h6>`
- Paragraph:

  - `<p>"Content Here"</p>`

- Comment :
  - `Ctrl + /`
  - Comments selected Texts
- Bold / Strong :
  - Used to Bold Texts
  - `<b>"Content Here"</b>  `
  - `<strong>"Content Here"</strong>`
- Italics / Emphasize :
  - Used to Italic Texts
  - `<i>"Content Here"</i> `
  - `<em>"Content Here"</em>`

## 3.0 More Text Elements

- **Lists**

  - Unordered List :

    ````
       <ul>
          <li>"Content Here" </li>
          <li>"Content Here" </li>
          <li>"Content Here" </li>
       </ul>```
    ````

  - Ordered List :

    ````
         <ol>
            <li>"Content Here" </li>
            <li>"Content Here" </li>
            <li>"Content Here" </li>
         </ol>```
    ````

## 4.0 Image Tag :

`<img src = "Image-Path" alt= "Alternate-Text" height = "100"  width = "100" />`

- src : Path of Image to Load
- alt : Alternate Text to Display incase Image doesn't Load

- **Attributes :**
  - Height : Used to set the height of Image in _Pixels_
  - Width : Used to set the width of Image in _Pixels_

## 5.0 Hyperlinks :

`<a href="Path to Required Page to Load" target="_blank" >"Name Of Link Here"</a> `

- **Attributes :**

  - target = "\_blank" : used to Load Page in a _New Window_
  - href : Contains the Path to Required Page

- **Place Holder href Link :**
  - If '#' used in href `href = "#"`
  - This '#' does not take us to any other _link_
  - It is used to Navigate to the _'Top' / 'Start'_ of the Page

## 6.0 HTML5 Semantic Tags :

Used To Structure our Page with Meaningful Semantic tags Provide Meaning to out Content

- Frequently Used :
  - `<nav> </nav>`
  - `<header> </header>`
  - `<article> </article>`
  - `<footer> </footer>`
  - `<aside> </aside>`
  - `<strong> </strong>`
  - `<em> </em>`
  - `<p> </p>`
  - `<nav> </nav>`
  - `<a href = ""> </a>` etc...
- **HTML Entities :**
  - Copyright Symbol &copy; : `&copy;`

## 7.0 Useful Extensions :

- **_Image Preview_**
- **_Color Highlighter_**
- **_Auto Rename Tag_**
- **_Live Server_**

## 8.0 Challenge 1 :

- _Create Aside Bar of Related Posts On blog.html Using Semantic tag_ `<aside> </aside>`

## 9. Challenge 2 :

- _Create Converse Shoe Sale Project_
