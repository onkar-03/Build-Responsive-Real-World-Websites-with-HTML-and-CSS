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
