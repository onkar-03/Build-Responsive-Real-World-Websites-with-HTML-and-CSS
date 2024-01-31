## 15.0 Introduction to Grid Layout :

### What is Grid Layout ??

Grid layout is a type of layout system in web design that allows you to create complex two-dimensional layouts with rows and columns.

It's part of the CSS (Cascading Style Sheets) specification and provides a way to structure and align content on a webpage. The grid layout system makes it easier to create responsive and flexible designs.

### How to use Grid Layout ??

To use Grid, all we need to do is use the grid property using display on a container, say having a _class="container"_ with a bunch of child elements in it.

**NOTE : Here We also need to define the columns and the rows here in grid layout using the _grid-template-columns_ and _grid-template-rows_**

_Parent : Grid Container_
_Child Elements : Grid Items_

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 75px 75px 75px;
}
```

### What does the `display: grid;` Property do?

The `display: grid;` CSS property is used to create a grid container, turning an element's children into grid items.

Grid containers enable a grid layout, allowing you to create more efficient and dynamic layouts.

Items take up only the space required by the content like inline elements.

**IMPORTANT:**

- If we have an item with a specific height, for example, `150px`.
- If we have only defined the number of columns and not the rows, then the row with the element having a fixed size of `150px` makes the other elements of the row also stretch fully to `150px`.

- Also, if we define the height of rows too and it's greater than, say, `150px`.
- Then all the elements of the row, except the element with a fixed size, would stretch fully.
- Only the element with the size of `150px` would not stretch fully as its size is fixed.

### Adding Gap / Margin in Grid Layout:

To add margin/gap in the grid, we use the same `gap` property, same as that of flexbox.

Sometimes, you may encounter `grid-gap` being used, which is totally fine; it's the same as `gap`. Initially, it was named `grid-gap`, but now it's used as `gap` instead.

```css
.container {
  display: grid;
  gap: 20px;
}
```

Whats different here is we can assign gaps separately for _columns_ & _rows_ in here :

```css
.container {
  display: grid;
  column-gap: 20px;
  row-gap: 20px;
}
```

## 16.0 CSS Grid Overview:

### What is CSS Grid?

- CSS Grid is a set of CSS properties for building 2-dimensional layouts.

- The main idea behind CSS Grid is that we divide a container element into rows and columns that can be filled with its child elements.

- In two-dimensional contexts, CSS Grid allows us to write less nested HTML and easier-to-read CSS.

- CSS Grid is not meant to replace flexbox! Instead, they work perfectly together. Need a 1D layout? Use flexbox. Need a 2D layout? Use CSS Grid.

### Basic CSS Grid Terminologies:

- Grid Container
- Grid Items
- Row Axis
- Column Axis

**Reference:**
![Diagram](./css%20grid%20terminologies.png)

- Grid Lines
- Grid Cells
- Gutters / Gaps
- Grid Tracks (Can be both Rows / Columns)

**Reference:**
![Diagram](./css%20grid%20terminologies%202.png)

### CSS Properties Related to Grid Container:

- **grid-template-rows: <track size>**
- **grid-template-columns: <track size>**
  ➡️ To establish the grid **row and column tracks**, One length unit for each track. Any unit can be used, new **fr (fraction)** fill unused space.

- **gap: 0** | <length>
- **row-gap: 0** | <length>
- **column-gap: 0** | <length>
  ➡️ To **_create empty space_** between tracks i.e rows / columns.

- **justify-content: start** | center | end |
- **align-content: start** | center | end |
  ➡️ To align **_grid inside grid container_**. Only applies if the container is larger than the grid.

### CSS Properties Related to Grid Items:

- **grid-column: <start line> / <end line>** | span <number>
- **grid-row: <start line> / <end line>** | span <number>
  ➡️ To **place a grid item** into a specific cell, based on line numbers.  
  span keyword can be used to span an item across more cells.

- **justify-items: stretch** | start | center | end |
- **align-items: stretch** | start | center | end
  ➡️ To align items inside rows/columns (**_horizontally / vertically_**).

- **justify-self: stretch** | center | end |
- **align-self: stretch** | center | end |
  ➡️ To **overwrite** justify-items/align-items for a single item among the grid items.

## 17.0 Sizing Grid Columns and Rows:

We have already learned how to create rows and columns using the grid layout.

Assigning sizes in pixels is a rigid parameter as the rows are not flexible in size.

There is a special parameter in grid called the _fr_ parameter stands for **_fraction_**.

### What is _"fr"_?

- In CSS Grid, the fr unit stands for "fractional unit" and is used to define a flexible portion of the available space within a grid container.
- It allows you to create responsive and flexible layouts by specifying how the available space should be distributed among the grid items.

```css
.container {
  display: grid;
  grid-column-template: 1fr 1fr 2fr;
}
```

Now the columns will have a 1:1:2 ratio of empty space sharing.

- It is similar to _flex-grow_ as it also uses the same logic of assigning the empty space to the items on the basis of values assigned to it.

**NOTE:** _fr_ is generally used for columns but can also be used for rows.

### How to have Columns of the Same Width using _fr_?

Set all the columns width as _1fr_; now all the columns will have the same size. Now they have the same share of the empty spaces in the container.

```css
.container {
  display: grid;
  grid-column-template: 1fr 1fr 1fr;
}
```

**NOTE** : _We can check the sizes of the containers by inspecting elements_

### How to Make a Column Take Only the Necessary Space Required by It?

We can do this by using the _auto_ keyword for that column.

```css
.container {
  display: grid;
  grid-column-template: 1fr 1fr auto;
}
```

➡️ _Now here the last Column will take only the width required by the content of the column_

### _'repeat'_ Function in Grid:

The `repeat` function in CSS Grid is used to repeat a pattern of column or row sizes within the grid definition.

It allows you to avoid repeating the same value multiple times when defining the columns or rows of your grid.

Instead of writing this:

```css
.container {
  display: grid;
  grid-column-template: repeat(3, 1fr);
}
```

We can write this :

```css
.container {
  display: grid;
  grid-column-template: repeat (3, 1fr);
}
```

### Using _fr_ with Rows:

Using _fr_ here is the same thing.

### How to Have Rows of the Same Width using _fr_?

A. If there is a row with a fixed height then that height is taken as _1fr_ here.

```css
.row1 {
  height: 150px;
}

.container {
  display: grid;
  grid-row-template: 1fr 1fr;
}
```

Now the rows will have 150px as 1fr, and all the rows will have the height of 150px.

B. If no such fixed height for any row exists, then the row height will be of the same size as that of the cell having the largest content size in it.

C. If we add a height to the container, then we added a lot of empty space which will now be acquired by the row height.

```css
.container {
  display: grid;
  grid-row-template: 1fr 1fr;
  height: 600px;
}
```

Here now the rows as set to _1f_ means that they both will have the same height

```css
.container {
  display: grid;
  grid-row-template: 1fr 2fr;
  height: 600px;
}
```

**Here now the _row2_ will have 2X the height of _row1_**

### How to make a row take only the necessary space required by it ??

Using the _auto_ keyword we can make the row take only the necessary space required by it to represent the content

If we declare a row as auto then the height of the row is same as the space it need to represent the content

## 18.0 Placing an Spanning Grid

To place items at a particular position knowing about grid lines is very important :

![Grid Lines](./Grid%20Lines%20to%20position%20and%20span.png)

We can clearly see that :

- The Line Number starts from 1 to Last Index ( Right-to-Left)

- The Line Number also starts from -1 -to -Last Index (Left-to-Right)

### Placing Items at a particular position :

For placing items at a particular position we use :

- **_grid-column: start/end_**
- **_grid-row: start/end_**

```css
.element-5 {
  grid-column: 2/3;
  grid-row: 1/2;
}
```

➡️ _This will place the 5<sup>th</sup> Element in the First Row and Second Column_

**Remember** : _If the end is just the next Number say 2/3 or 1/2 etc...in such cases skipping the end will also have no effect_

```css
.element-5 {
  grid-column: 2;
  grid-row: 1;
}
```

➡️ _This will also place the 5<sup>th</sup> Element in the First Row and Second Column_

### Spanning Items :

To span items there are two ways :

**_Method 1_ :**

We specify the end row / column number up to which we wan the row / column to expand :

```css
.element-5 {
  grid-column: 2/4;
  grid-row: 1/3;
}
```

➡️ _This will span the 5<sup>th</sup> Element from column 2 to column 3 & row 1 to row 2_

**_Method 2_ :**

Instead of using the End Line Number we can use the _span_ keyword to do the same task :

```css
.element-5 {
  grid-column: 2 / span 2;
  grid-row: 1 / span 2;
}
```

**Remember** : _span 2 includes the start in its span length . This means that the span 2 stands for spanning from row 1 - 2 an column 2 - 3_

### Spanning until the Last Index / Line Number :

There are three ways to do it :

**_Method 1_ :**

Define the end Line Number such as :

Say we have the last Line Number as 5 !!

```css
.element-5 {
  grid-column: 2/5;
  grid-row: 1/3;
}
```

**_Method 2_ :**

use the span keyword to span until the last Index / Line Number :

Say we still have the last Line Number as 5 !!

```css
.element-5 {
  grid-column: 2 / span 4;
  grid-row: 1/3;
}
```

**_span 4 means : span from 2 - 5 columns_**

**_Method 3_ :**

Using the Negative Index (-1):

As we can see that the last Index/Line Number is -1 always in the Grid Layout from the above image.

So instead of calculating the number of columns/rows to span or keeping track of the last Index/Line Number, we can use the -1 to denote the last line in the Grid Layout.

```css
.element-5 {
  grid-column: 2/-1;
  grid-row: 1/3;
}
```

## Aligning Grid Items & Tracks:

To align tracks inside the container and distribute empty space, we use:

- **justify-content: start | center | end**
- **align-content: start | center | end**
  ➡️ To align **_grid inside grid container_**.

To align items inside cells and move items around inside cells, we use:

- **justify-items: stretch | start | center | end**
- **align-items: stretch | start | center | end**
  ➡️ To align items inside rows/columns (**_horizontally / vertically_**).

To overwrite _justify-items: & align-items_ and style items individually, we use:

- **justify-self: stretch | center | end**
- **align-self: stretch | center | end**
  ➡️ To **overwrite** justify-items/align-items for a single item among the grid items.

## Building Simple Blog Post Layout using Grid:

Using Grid Layout for 2-Dimensional page Structure. Not removing the Flexbox use on author-related posts and heading sections.

[Blog Project]()

## Challenge Converse Project using Grid Layout:

[Converse Project](https://codepen.io/jonasschmedtmann/pen/wvgREqP/ddc3ec3843c753ee03e9525df6c4a1f1)
