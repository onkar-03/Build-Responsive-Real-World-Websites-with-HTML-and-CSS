# Learning about Components

## 01.0 Web Design Rules #10 Part 1 Elements and Components !!

### 1. Elements :

- #### HTML (HyperText Markup Language) :

  - Define the structure and content of your webpage using HTML elements.
  - Examples include `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`, `<p>`, `<h1>`, etc.

- #### CSS (Cascading Style Sheets) :

  - Style your HTML elements using CSS.
  - Examples include setting colors, fonts, margins, padding, etc.

- #### JavaScript :

  - Add interactivity to your webpage using JavaScript.
  - Examples include handling user input, dynamic content, and making your webpage responsive.

### 2. Components :

- Break down your webpage into reusable components. This is especially relevant if you're using a framework like React, Vue, or Angular.

- Components encapsulate both the HTML structure and CSS styles, and sometimes even the JavaScript logic, making your code modular and maintainable.

### 3. Layout :

- #### CSS Flexbox/Grid:

  - Use Flexbox or Grid layout systems to arrange and align your components within sections of your webpage.
  - These provide flexible and powerful ways to create responsive layouts.

- #### CSS Media Queries:

  - Implement media queries in CSS to make your webpage responsive to different screen sizes and devices.

### 4. Webpage :

- #### HTML Structure:

  - Combine your components into the overall structure of your webpage.
  - Organize sections like header, navigation, main content, sidebar, and footer.

- #### CSS Styling:

  - Apply global styles to your webpage.
  - Ensure a consistent design by styling elements that are used across multiple components.

- #### JavaScript Integration:

  - Integrate any JavaScript functionalities that enhance the user experience, such as form validation, dynamic content loading, or interactive features.

- ### Testing:

  - Test your webpage in different browsers and devices to ensure compatibility.

- ### Deployment:

  - Choose a hosting solution and deploy your webpage for public access.

## Gallery Index : Elements, Section,Patterns

### Elements

1. Text
2. Buttons
3. Images
4. Input elements
5. Tags

### Components

1. Breadcrumbs
2. Pagination
3. Alert and status bars
4. Statistics
5. Gallery
6. Feature box
7. Preview and profile cards
8. Accordion
9. Tabs
10. Carousel
11. Customer testimonials
12. Customer logos
13. Featured-in logos
14. Steps
15. Forms
16. Tables
17. Pricing tables
18. Modal windows

### Section Components

1. Navigation
2. Hero section
3. Footer
4. Call-to-action section
5. Feature row

### Layout Patterns

1. Row of boxes or cards
2. Grid of boxes or cards
3. Z-pattern
4. F-pattern
5. Single-column
6. Sidebar
7. Multi-column/magazine
8. Asymmetry/Experimental

## 02.0 Building an Accordion Component Part 1!!

### Learned what is `flex-direction: column`; ??

When using Flexbox in CSS, you can control the layout of your elements using various properties. Let's explore the `flex-direction`, `align-items`, `justify-content`, and the main and cross axes.

#### `flex-direction`

The `flex-direction` property defines the direction in which the flex container's main axis and cross axis are placed. By default, it is set to `row`. If you want a column layout, you would set it to `column`.

**_This makes the "main axis" run vertically and the "cross axis" run horizontally._**

```css
.container {
  display: flex;
  flex-direction: column;
}
```

#### `align-items`

The `align-items` property controls how items are aligned on the cross axis. When using `flex-direction: column`, it aligns items horizontally. Common values are `flex-start`, `flex-end`, `center`, `stretch`, etc.

```css
.container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Align items in the center horizontally */
}
```

#### `justify-content` with `flex-direction: column`

The `justify-content` property controls how items are aligned on the main axis. When `flex-direction` is set to `column`, it affects the vertical alignment of items within the flex container.Common values are `flex-start`, `flex-end`, `center`, `space-between`, `space-around`.

Example:

```css
.container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center items vertically along the main axis */
}
```

#### Main Axis and Cross Axis

When `flex-direction` is set to `column`, the main axis runs vertically, and the cross axis runs horizontally. This is opposite when `flex-direction` is set to `row`.

- **Main Axis:** The primary axis along which flex items are placed. For `flex-direction: column`, it's vertical.
- **Cross Axis:** The perpendicular axis to the main axis. For `flex-direction: column`, it's horizontal.

```css
.container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Align items in the center horizontally */
  justify-content: space-between; /* Space between items vertically */
}
```

In summary:

- **Main Axis (column):** Top to bottom.
- **Cross Axis (column):** Left to right.

## 03.0 Building an Accordion Component Part 2!!

Using **_CSS Grid_** to align Items in the Accordion as per our requirement ....

1. Provided a Light Grey box-shadow to te Accordion Item container !!

   ```css
   .item {
     box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);
   }
   ```

2. Provided padding to the content inside the box !!

   ```css
   .item {
     box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);
     padding: 24px;
   }
   ```

3. Created 3 Columns for placing out accordion content !!

   ```css
   .item {
     display: grid;
     grid-template-column: auto 1fr auto;
   }
   ```

`auto` : Takes only the space required by the content  
 `1fr` : takes the rest of the space left after the 1<sup>st</sup> & 2<sup>nd</sup> columns have taken the required spaces

4. Placed the hidden-box content in second column !!

   ```css
   .hidden-box {
     grid-column: 2;
   }
   ```

5. Provided column gap, row-gap & aligned items in the center !!

   ```css
   .item {
     box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);
     padding: 24px;
     display: grid;
     grid-template-columns: auto 1fr auto;
     column-gap: 24px;
     row-gap: 32px;
     align-items: center;
   }
   ```

6. Created 2 more Item container 01 & 02 !!

7. Hide content of each of the accordion using display property !!

   ```css
   .hidden-box {
     grid-column: 2;
     display: none;
   }
   ```

8. Removed the Colors from all the numbers and text !!

- Did this by commenting out the color property inside the .number and .text class

  ```css
  .number,
  .text {
    font-size: 24px;
    font-weight: 500;
    /* color: #087f5b; */
  }
  ```

9. Displaying the hidden-box of 02 Item !!

- Created a new class named open apart from the items class

  ```html
  <div class="item open"></div>
  ```

- displayed the hidden-box of open class as block

  ```css
  .open .hidden-box {
    display: block;
  }
  ```

10. Added border-top & color to Item 02 !!

- Colored the Number and the Heading of the Item 02
- Added border-top to Item 02 which is displayed open

  ```css
  .open {
    border-top: 4px solid #087f5b;
  }

  .open .number {
    color: #087f5b;
  }
  .open .text {
    color: #087f5b;
  }
  ```

Final O/P : [Accordion](./01-accordion.html)

## 04.0 Building an Table Component Part 1!!

### Are Tables used these days ??

- _Firstly "**Tables**" are not used a lot these days. However, they were used in the early days quite a bit to build layouts._

- _But now with "**FlexBox**" and "**CSS Grid**" we have better ways to build layouts_

### What are Table used for nowadays ??

- _Tables still have a place in HTML. Especially when we are trying to represent a dataset it is done using a table._

- _It's the most **semantic** way for datasets !!_

### How to use Table ??

#### HTML Tables

Tables in HTML are used to organize data into rows and columns. The basic structure of an HTML table consists of the following elements:

1. **`<table>`**: This element defines the start of the table.
2. **`<tr>`**: Stands for "table row" and is used to define a row in the table.
3. **`<th>`**: Represents a table header cell. It is used to label the column or row.
4. **`<td>`**: Stands for "table data" and is used to define a standard cell in the table.

   ##### Example :

   ```html
   <table>
     <tr>
        <th>Chair</th>
        <th>The Laid Back</th>
        <th>The Worker Bee</th>
        <th>The Chair 4/2</th>
     </tr>
       <tr>
         <th>Width</th>
         <td>80 cm</td>
         <td>60 cm</td>
         <td>220 cm</td>
       </tr>
       <tr>
         <th>Depth</th>
         <td>70 cm</td>
         <td>65 cm</td>
         <td>80 cm</td>
       </tr>
       <tr>
         <th>Weight</th>
         <td>16 kg</td>
         <td>22 kg</td>
         <td>80 kg</td>
       </tr>
     </tbody>
   </table>
   ```

In this example :

The `<table>` element defines the start of the table.
Each `<tr>` element represents a row.

`<th>` elements are used for headers, and `<td>` elements are used for data cells.
This will produce a table with two columns and three rows.

Attributes:
colspan and rowspan: These attributes can be used in `<th>` and `<td>` elements to span multiple columns or rows.

```html
<td colspan="2">Spanning Two Columns</td>
<td rowspan="2">Spanning Two Rows</td>
```

5.  `<thead>` Element

    The `<thead>` element is used to group the header content of a table. It typically contains one or more `<tr>` (table row) elements, each with `<th>` (table header) elements.

    ```html
    <table>
      <thead>
        <th>Chair</th>
        <th>The Laid Back</th>
        <th>The Worker Bee</th>
        <th>The Chair 4/2</th>
      </thead>
      <tr>
        <th>Width</th>
        <td>80 cm</td>
        <td>60 cm</td>
        <td>220 cm</td>
      </tr>
      <tr>
        <th>Depth</th>
        <td>70 cm</td>
        <td>65 cm</td>
        <td>80 cm</td>
      </tr>
      <tr>
        <th>Weight</th>
        <td>16 kg</td>
        <td>22 kg</td>
        <td>80 kg</td>
      </tr>
    </table>
    ```

6.  `<tbody>` Element :

    The `<tbody>` element is used to group the body content of a table. It should contain one or more `<tr>` elements, each representing a row, and containing `<td>` (table data) elements.

    ```html
    <table>
      <thead>
        <th>Chair</th>
        <th>The Laid Back</th>
        <th>The Worker Bee</th>
        <th>The Chair 4/2</th>
      </thead>
      <tbody>
        <tr>
          <th>Width</th>
          <td>80 cm</td>
          <td>60 cm</td>
          <td>220 cm</td>
        </tr>
        <tr>
          <th>Depth</th>
          <td>70 cm</td>
          <td>65 cm</td>
          <td>80 cm</td>
        </tr>
        <tr>
          <th>Weight</th>
          <td>16 kg</td>
          <td>22 kg</td>
          <td>80 kg</td>
        </tr>
      </tbody>
    </table>
    ```

Including `<thead>` and `<tbody>` elements in a table is not mandatory, but it enhances the structure, making it more semantically meaningful and aiding in accessibility.

These elements are particularly useful when working with large tables or when implementing features like fixed headers in CSS.

_Tables are a versatile tool for structuring and presenting data
in HTML_

## 05. Building Table Component Part 2 !!

### Table Component Styling Updates :

#### Body Styling

The overall styling for the entire page has been enhanced. The body now uses the 'Inter' font family for a modern and clean look. Text color has been set to a subtle grey (#343a40), providing improved readability. The line height is set to 1, ensuring consistent spacing between lines. The content is centered using Flexbox with the `justify-content: center` property.

```css
body {
  font-family: 'Inter', sans-serif;
  color: #343a40;
  line-height: 1;
  display: flex;
  justify-content: center;
}
```

#### Table Styling

The table component has undergone several updates to improve its appearance and functionality.

- The table width has been set to 800px, and it now maintains a margin of 100px from the top for better alignment within the page.

```css
table {
  width: 800px;
  margin-top: 100px;
  border-collapse: collapse;
  font-size: 18px;
}
```

- Padding for table cells (`th` and `td`) has been adjusted to provide more spacious and aesthetically pleasing cell dimensions. Text alignment is set to the left.

```css
th,
td {
  padding: 16px 24px;
  text-align: left;
}
```

#### Header Styling

Table header (`thead th`) now features improved styling for better visibility. The text color is set to white, and the background color is a distinct green shade (#087f5b). The header cells have a width of 25% each.

```css
thead th {
  color: white;
  background-color: #087f5b;
  width: 25%;
}
```

#### Alternating Row Colors

Alternate rows in the table body have been updated for better differentiation. Odd rows now have a light grey background (#f8f9fa), while even rows have a slightly different shade (#e9ecef).

These styling enhancements aim to provide a more cohesive and visually appealing presentation for the table component, contributing to an improved user experience.

```css
tbody tr:nth-child(odd) {
  background-color: #f8f9fa;
}

tbody tr:nth-child(odd) {
  background-color: #e9ecef;
}
```

## 06.0 Building Carousel Component Part 1!!

### Carousel Component Documentation

#### HTML Changes (index.html)

1. Head Section

   - Added meta tags for character set and viewport settings.
   - Included title tag for the document.
   - Imported the 'Inter' font with different weights (400, 500, 600, 700).
   - Linked the external CSS file (03-style.css).

2. Body Section

   - Created a div with the class 'carousel' to contain the carousel component.
   - Added an image, blockquote for testimonial text, and buttons for navigation.

#### CSS Changes (03-style.css)

1. Spacing System and Font Size System

   - Defined a spacing system (px) and font size system (px) for consistent layout and typography.

2. General Styles

   - Applied a global reset to remove default margin, padding, and set box-sizing to border-box for all elements.
   - Set the font family to 'Inter', a sans-serif font.
   - Changed the text color to a grey shade (#343a40) for better readability.
   - Set the line height of the body to 1.

3. Carousel Styles

   - Set a fixed width of 800px for the carousel container.
   - Centered the carousel using the margin trick (auto on left and right margins).
   - Added a background color (#087f5b), border-radius, and padding for styling.
   - Adjusted the padding-left for better alignment.
   - Used flex properties for the carousel container, aligning items and setting the gap between them.

4. Image Styles

   - Set a fixed height of 200px for the images.
   - Added border-radius for a rounded corner effect.
   - Applied a scale transformation to slightly enlarge the images.

5. Testimonial Text Styles

   - Set the font size to 18px, font weight to 500, and line height to 1.5 for the testimonial text.
   - Adjusted the margin-bottom for spacing.
   - Changed the text color to a lighter shade (#e6f6f5).

6. Testimonial Author and Job Styles

- Set font sizes and colors for testimonial author and job information.

### Conclusion

These changes enhance the styling, structure, and readability of the carousel component, making it visually appealing and consistent.

## 06.0 Building Carousel Component Part 2!!

### Vertical and Horizontal Centering with Absolute Positioning and Translate Transform

#### Vertical Centering:

1. **Absolute Positioning:**

   - Set the element's position to `absolute`.

2. **Top 50%:**

   - Set the `top` property to `50%`.

3. **Translate Y-axis:**
   - Use `translateY(-50%)` as a `transform` property.

#### Horizontal Centering:

1. **Absolute Positioning:**

   - Set the element's position to `absolute`.

2. **Left or Right 50%:**

   - Choose either `left` or `right` and set it to `50%`.

3. **Translate X-axis:**
   - Use `translateX(-50%)` as a `transform` property.

#### Combined Vertical and Horizontal Centering:

- To center both vertically and horizontally, use a combination of `top` (or `bottom`) and `left` (or `right`) set to `50%`, along with `translateY(-50%)` and `translateX(-50%)` transforms.

##### Example:

```css
.centered-element {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### What is `&nbsp` used for in HTML ??

`&nbsp;` is an HTML entity that stands for "non-breaking space." In HTML, regular spaces are collapsed, meaning that if you have multiple consecutive spaces, they will be treated as a single space when rendered in the browser. On the other hand, a non-breaking space is a space character that prevents the browser from collapsing multiple spaces into one.

Here's a brief explanation:

- **Regular Space (` `):** HTML collapses consecutive spaces into a single space.

- **Non-Breaking Space (`&nbsp;`):** This entity represents a space that is not collapsed. It creates a space character without allowing the browser to compress it.

One common use case for `&nbsp;` is when you want to add extra space between words or elements, and you want to ensure that the browser maintains that space. For example, you might use it to ensure that two words or elements are always separated by at least one space, regardless of the formatting or available space.

```html
<p>This is some text.&nbsp;This is some more text.</p>
```

### HTML Changes

## Dot Navigation System

In this part of the project, we implemented a dot navigation system using HTML and CSS. The purpose of this navigation is to provide a visual indicator for users to navigate through content or slides. Below are the key changes made:

### HTML Changes

```html
<div class="dots">
  <button class="dot dot--fill">&nbsp;</button>
  <button class="dot">&nbsp;</button>
  <button class="dot">&nbsp;</button>
  <button class="dot">&nbsp;</button>
</div>
```

- The dot--fill class is added to the first button, indicating its active state. This distinction helps users easily identify the current position in the navigation sequence.

- This setup enhances user experience by offering a clear and intuitive visual representation of navigation points.

### CSS Changes:

#### General Button Styling:

The `.btn` class styles a generic button, defining its background color, size, circular border, positioning, shadow, and cursor behavior.

```css
.btn {
  background-color: #fff;
  border: none; /* Removing Default Border of the Icon */
  height: 40px;
  width: 40px;
  border-radius: 100px; /* Circular Border */
  position: absolute; /* Absolute Positioning */
  display: flex;
  justify-content: center;
  align-items: center; /* Center Icons */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); /* Button shadow */
  cursor: pointer; /* Cursor Change to Mouse pointer */
}
```

#### Button Icon Styling:

The `.btn-icon` class styles the icon within the button, specifying its height, width, and stroke color.

```css
.btn-icon {
  height: 24px;
  width: 24px;
  stroke: #087f5b;
}
```

#### Right-Aligned Button Styling:

The `.btn--right` class positions the button to the right of its container and vertically centers it using absolute positioning and a transform.

```css
.btn--right {
  right: 0px;

  /* Vertical Centering with Absolute Positioning and Transform */
  top: 50%;
  transform: translate(50%, -50%);
}
```

#### Left-Aligned Button Styling:

The `.btn--left` class positions the button to the left of its container and vertically and horizontally centers it using absolute positioning and a transform.

```css
.btn--left {
  left: 0px;

  /* Vertical Centering with Absolute Positioning and Transform we use top; 50% & translate Y Direction 50%*/

  /* Horizontal center we use  translate in X direction as -50% */
  top: 50%;
  transform: translate(-50%, -50%);
}
```

#### Dots Container Styling:

The `.dots` class styles a container for the dot buttons, placing it at the bottom center and adding some spacing between the buttons.

```css
.dots {
  /* Absolute Position buttons */
  position: absolute;

  /* Centering Buttons on the X Axis   */
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 32px);

  /* Display Buttons side by side */
  display: flex;
  gap: 12px;
}
```

#### Dot Button Styling:

The `.dot` class styles individual dot buttons with a circular shape, a border, and a cursor pointer.

```css
.dot {
  width: 12px;
  height: 12px;
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid #087f5b;
  cursor: pointer;
}
```

#### Filled Dot Styling:

The `.dot--fill` class fills one of the dot buttons with a different background color, indicating a specific state.

```css
.dot--fill {
  background-color: #087f5b;
}
```

## 07.0 Building Pagination Component !!

### HTML Overview

The pagination component is structured using a combination of buttons and links, along with SVG icons for navigation. It allows users to navigate through different pages.

### Elements Breakdown

#### 1. Container (.pagination)

- The main container div with the class `pagination` wraps all the pagination elements.

#### 2. Left Navigation Button (.btn.btn--left)

- A left navigation button (`<button>`) with the classes `btn` and `btn--left`.
- Contains an SVG icon with an arrow pointing to the left, allowing users to navigate to the previous page.

#### 3. Numbered Pages (a.numbers)

- Each numbered page is represented by an anchor (`<a>`) element with the class `numbers`.
- The `href="#"` attribute is added for the sake of completeness but may be updated with actual links.
- Pages 1 through 6 are individually numbered, and page 3 has an additional class `number--filled` to indicate the current active page.
- Page 23 is also included, and ellipsis (`...`) is used to indicate a gap in page numbers.

#### 4. Ellipsis (.dots)

- A span element with the class `dots` is used to represent an ellipsis, indicating there are more pages between the visible numbers.

#### 5. Right Navigation Button (.btn.btn--right)

- Similar to the left navigation button, this button (`<button>`) has the classes `btn` and `btn--right`.
- Contains an SVG icon with an arrow pointing to the right, allowing users to navigate to the next page.

### CSS Changes

#### General Styles

- Updated the `body` styling to set the text color to the Grey color (#343a40).
- Added `line-height: 1;` to the `body` for better text rendering.

#### Pagination Container Styles

- Set the `width` of the `.pagination` container to 600px.

- Centering Elements using the Margin Method `margin: 100px auto;`

- Displaying Content side by side using the Flex box property

- Aligning items at the center horizontally and vertically using `justify-content` and `align-items` as `center`

- Adjusted the `gap` property to provide space between the numbers.

#### Button Styles

- Removed Background and border of the Icons used

- Provided a `width` and `height` to teh buttons elements

- Adjusted the `border-radius` of the `.btn` class to create circular buttons.

- Changed the hover effect for `.btn` to have a background color of #087f5b, white stroke & changed the pointer to cursor

- Updated the `.btn-icon` stroke color on hover to match the button background.

- Provided a `Height` and `Width` to the button icons

- Centered the Left and Right buttons vertically using `align-items` and `justify-content` properties

#### Number Styles

- Updated the font size of `.numbers` to `18px`.

- Updated the Color to Grey, text-decoration as none & cursor to pointer

- Added circular styling to the numbers py creating a square container around the Numbers ad using `border-radius: 50%;` to provide Circular Background.

- Centered the Numbers / Individual elements vertically using `align-items` and `justify-content` properties of flex-Box

- Adjusted the hover effect for `.numbers` to have a background color of #087f5b, cursor to pointer & white text color.

#### Filled Number Styles

- Created a new class `.number--filled` to represent the filled/active state of a number.

- Added a background color of #087f5b and white text color to the `.number--filled` class.

- Used `!important` to ensure the color overrides other styles.

#### Dots Styling

- Set the color of the dots to #868e96.

#### Additional Notes

- Utilized flexbox for centering and spacing elements within the pagination container.
- Applied the Inter font family to the entire document.
- Defined spacing and font size systems using comments for reference.

## 08.0 Web Design Rules #10 Part 2 Section Components & Layout Patterns!!

### Section Components:

1. **Navigation Section:**

   - Provides a structured menu for easy website navigation.
   - Typically placed at the top of the webpage.
   - Contains links to important pages or sections within the website.

2. **Hero Section:**

   - _Text on One Side & Image on Another:_
     - Presents a compelling visual with text overlay.
   - _Background Image and Text on Top:_
     - Utilizes a full-page background image with text overlaid.
   - _Hybrid Hero Section:_
     - Combines elements of the above two styles for a unique presentation.

3. **Footer Section:**

   - _Sitemap:_
     - Includes a comprehensive list of links to all website pages.
   - _Social Icons:_
     - Displays icons linking to social media profiles.
   - _Submit Form:_
     - May include a form for actions like signing up for newsletters.

4. **Call-To-Action Section:**

   - Encourages users to take a specific action.
   - _Standout Design:_
     - Uses visual hierarchy and distinct colors to grab attention.
   - _Customer Logos:_
     - Displays logos of satisfied customers for credibility.
   - _Highlight Features:_
     - Showcases key product features, e.g., money-back guarantees.
   - _Contact Us:_
     - Often includes a contact form or direct contact information.

5. **Feature Rows:**
   - Displays information, images, and buttons in a row format.
   - _Testimonials:_
     - Integrates customer testimonials to build trust.

### Layout Patterns:

1. **Row of Boxes / Cards:**

   - Arranges content in a horizontal line of rectangular or square boxes.

2. **Grid of Boxes / Cards:**

   - Organizes content in a two-dimensional grid structure.

3. **Aside: Nesting Patterns in Components:**

   - Embeds one component within another, creating a hierarchical structure.

4. **Z-Pattern:**

   - Follows a reading pattern resembling the letter 'Z,' guiding the user's eye.

5. **F-Pattern:**

   - Emulates the shape of the letter 'F' for optimal reading flow.

6. **Single Column:**

   - Presents content in a single vertical column.

7. **Sidebar:**

   - Includes a supplementary column alongside the main content for additional information or navigation.

8. **Multi Column / Magazine Layout:**

   - Divides content into multiple columns, similar to a magazine format.

9. **Asymmetry / Experimental:**
   - Introduces irregular layouts for a unique and artistic presentation.

## 09.0 Building Hero Section Part 1 !!

### HTML Code

1. `<!DOCTYPE html>`: Declares the document type and version of HTML being used (HTML5 in this case).
2. `<html lang="en">`: Defines the root element of the HTML document with the language attribute set to English.
3. `<head>`: Contains metadata about the HTML document, such as character set and viewport settings.

   - `<meta charset="UTF-8" />`: Specifies the character encoding for the document as UTF-8.
   - `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`: Sets the viewport properties for responsive design.
   - Font links for _Rubik_ font with different weights (400, 500, and 700).
   - `<title>`: Sets the title of the HTML document to "Hero Section".
   - `<link rel="stylesheet" href="./05-style.css" />`: Links an external CSS file named "05-style.css" to the HTML document.

4. `<body>`: Contains the content of the HTML document.
   - `<header>`: Represents the header section of the webpage.
     - `<nav>`: Defines a navigation section within the header.
       - `<div class="logo">`: Placeholder for the website logo.
       - `<div class="navigation">`: Placeholder for navigation links.
     - Another `<div class="container">` containing heading, paragraph, and a call-to-action button.
   - `<section>`: Represents a generic section in the document.
     - Another `<div class="container">` containing a heading and a paragraph.

### CSS Code

1. `*`: Applies styles to all elements, setting margin and padding to 0, and using the border-box box model.
2. `body`: Sets the font family for the entire document to Rubik and text color to #343a40 (a shade of grey).
3. `.container`: Styles elements with the class "container" to have a fixed width of 1200px and be horizontally centered using auto margins.
4. `header`: Applies styles to the header element, setting a background color of orange and a height of 100 viewport height units (100vh).
5. `nav`: Styles the navigation element with a font size of 20px, font weight of 700, flex display, and space-between justification.
6. `h1`, `p`, `.btn`, `h2`: Sets font sizes and margins for various heading and text elements in the document.
7. `section`: Styles the section element with padding, margin, and a background color of #f7f7f7.

The CSS also includes a color system and comments indicating a spacing and font size system for consistency across the design.

Note: The color system comments at the end are not currently utilized in the provided code, but they may be placeholders for future use or documentation.

## 10.0 Building Hero Section Part 2 !!

### What is `background-image` , `linear-gradient` & `background-size`??

## background-image

The `background-image` CSS property is used to set one or more background images for an element. It specifies the URL(s) of the image(s) to be used as the background. This property can take multiple comma-separated values, and the images are stacked on top of each other, with the first one being the topmost layer.

### Usage:

```css
element {
  background-image: url('image1.jpg'), url('image2.jpg');
}
```

## linear-gradient

The `linear-gradient` CSS function creates an image with a linear gradient. It generates a smooth transition between two or more colors along a straight line. This is often used in combination with the `background-image` property to create gradient overlays on background images.

### Usage:

```css
element {
  background-image: linear-gradient(to right, #ff0000, #00ff00);
}
```

## background-size

The `background-size` CSS property is used to specify the size of a background image within its container. It determines how the image should be scaled or sized relative to the container. The `cover` value is commonly used to ensure the background image covers the entire container while maintaining its aspect ratio.

### Usage:

```css
element {
  background-size: cover;
}
```

### Header Section Styling

#### HTML Changes

In the HTML structure, a new container class `header-container` has been added to the existing container. This class encapsulates the header content and facilitates styling adjustments.

```html
<div class="container header-container">
  <!-- ... existing content ... -->
</div>
```

### CSS Changes

#### Header Styling

##### Height and Background:

- Positioned `relative` to center position the child element marked as `absolute`

- The background is a linear gradient overlay on the specified background image (`hero.jpg`). This gradient darkens the image, enhancing text visibility.

##### Background Size:

- `background-size: cover;` ensures the background image covers the entire header, maintaining its aspect ratio.

##### Text Color:

- The text within the header is set to white for improved contrast.

#### Navigation Styling

#### Header Container Styling

##### Container Width:

- The width of the `header-container` is set to a fixed value of 1200px.

##### Positioning and Centering:

- The `header-container` is positioned absolutely within the header.

- The 50% left and top positions, along with `transform: translate(-50%, -50%)`, ensure the container is centered both horizontally and vertically.

#### Header Container Inner Styling

##### Text Alignment:

- A new class `header-container-inner` is introduced to control the width of the text content and align it to the left side of the image.

#### Summary

These changes collectively enhance the visual appeal of the header section. The use of absolute positioning and the transform property ensures responsive centering, while the background styling and overlay contribute to a more aesthetically pleasing design.
