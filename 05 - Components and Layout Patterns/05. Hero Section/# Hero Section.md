## 01.0 Building Hero Section Part 1 !!

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

## 02.0 Building Hero Section Part 2 !!

### What is `background-image` , `linear-gradient` & `background-size`??

#### background-image

The `background-image` CSS property is used to set one or more background images for an element. It specifies the URL(s) of the image(s) to be used as the background. This property can take multiple comma-separated values, and the images are stacked on top of each other, with the first one being the topmost layer.

#### Usage:

```css
element {
  background-image: url('image1.jpg'), url('image2.jpg');
}
```

### linear-gradient

The `linear-gradient` CSS function creates an image with a linear gradient. It generates a smooth transition between two or more colors along a straight line. This is often used in combination with the `background-image` property to create gradient overlays on background images.

#### Usage:

```css
element {
  background-image: linear-gradient(to right, #ff0000, #00ff00);
}
```

### background-size

The `background-size` CSS property is used to specify the size of a background image within its container. It determines how the image should be scaled or sized relative to the container. The `cover` value is commonly used to ensure the background image covers the entire container while maintaining its aspect ratio.

#### Usage:

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
