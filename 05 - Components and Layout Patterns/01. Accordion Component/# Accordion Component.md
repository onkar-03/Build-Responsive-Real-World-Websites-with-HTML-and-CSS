## 01.0 Building an Accordion Component Part 1!!

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

## 02.0 Building an Accordion Component Part 2!!

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
