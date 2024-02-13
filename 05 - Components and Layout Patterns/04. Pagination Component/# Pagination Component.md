## 01.0 Building Pagination Component Part 1 !!

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
