## 01.0 Building Carousel Component Part 1!!

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

## 02.0 Building Carousel Component Part 2!!

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

#### Dot Navigation System

In this part of the project, we implemented a dot navigation system using HTML and CSS. The purpose of this navigation is to provide a visual indicator for users to navigate through content or slides. Below are the key changes made:

#### HTML Changes

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

#### CSS Changes:

##### General Button Styling:

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

##### Button Icon Styling:

The `.btn-icon` class styles the icon within the button, specifying its height, width, and stroke color.

```css
.btn-icon {
  height: 24px;
  width: 24px;
  stroke: #087f5b;
}
```

##### Right-Aligned Button Styling:

The `.btn--right` class positions the button to the right of its container and vertically centers it using absolute positioning and a transform.

```css
.btn--right {
  right: 0px;

  /* Vertical Centering with Absolute Positioning and Transform */
  top: 50%;
  transform: translate(50%, -50%);
}
```

##### Left-Aligned Button Styling:

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

##### Dots Container Styling:

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

##### Dot Button Styling:

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

##### Filled Dot Styling:

The `.dot--fill` class fills one of the dot buttons with a different background color, indicating a specific state.

```css
.dot--fill {
  background-color: #087f5b;
}
```
