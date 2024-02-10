# Learning about Components

## 01.0 From Elements to Webpage !!

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
