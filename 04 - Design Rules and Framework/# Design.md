# Enhancing Visual Design: Applying Design Rules to Existing Webpage

The primary objective is to **elevate the visual design** of an existing webpage by implementing design principles within the provided HTML and CSS files. The desired outcome is a refined and visually appealing user interface.

## 01.0 Project Overview:

### Steps for Analysis:

1. **HTML File (`index.html`):**

   - Examine the overall structure of the HTML document.
   - Identify key sections such as `<header>`, `<nav>`, `<section>`, `<blockquote>`, `<footer>`, etc.
   - Understand the purpose of each section and the hierarchy of elements.

2. **CSS File (`style.css`):**
   - Review the CSS file to understand the styling applied to HTML elements.
   - Identify and analyze selectors for elements like `body`, `header`, `nav`, `section`, `blockquote`, `footer`, etc.
   - Examine the use of colors, fonts, margins, and padding for each element.

### HTML Element Analysis Report :

- [HTML File](./index.html)

During the analysis of the HTML file, several new HTML elements were identified. Here is an overview of the usage and purpose of these elements:

#### `<section>` Element:

- The `<section>` element is used to define sections within the HTML document. It helps in structuring the content by grouping related elements together.
- Sections are often used to organize content and provide a semantic meaning to the structure.

  Example :

  ```html
  <section>
    <h2>Section Heading</h2>
    <p>This is a section of your page. Use it to organize content.</p>
    <span>This is a span within the section.</span>
  </section>
  ```

#### `<span>` Element:

- The `<span>` element is an _inline container_ that is used to apply styles to specific portions of text or content. It does not inherently change the structure or layout but can be styled using CSS to add emphasis or apply specific formatting.

  **Example:**

  ```html
  <span>This is a span within the section.</span>
  ```

#### `<blockquote>` Element:

- The `<blockquote>` element is used to represent a section that is quoted from another source. It is typically used to emphasize or highlight quoted text, providing a visual indication that the content is a quotation.

  **Example:**

  ```html
  <blockquote>
    <p>Here is a quote or citation. Use blockquote for emphasis.</p>
  </blockquote>
  ```

## 02.0 Overview of Web Design and Website Personalities :

### Web Design VS Web Developers

- **Web Designers:** They create the _overall look and feel_ of the website.

- **Web Developers:** They implement the design using HTML, CSS & JavaScript Code.

_The Goal of this section is to build a good designer as well as developer of websites_

### Why Take Design Seriously?

- **Good Design:**

  - ✅ Creates an immediate and lasting good impression of the brand or product.
  - ✅ Makes the user trust the brand right away.
  - ✅ Increases the user's perceived value of the brand or product.
  - ✅ Gives users exactly what they were looking for when coming to the site, e.g. purchasing a product or finding information.

- **Bad Design:**
  - ❌ Makes users believe the brand doesn't really care about their product or service.
  - ❌ Makes the user insecure about trusting the brand.
  - ❌ Makes the brand or product seem "cheap".
  - ❌ Leaves users confused, and makes it hard for them to reach their goal.

### Anyone Can Learn Good Design!!

Good web design is not **subjective/creative**. Anyone can learn basics by following a **framework/system**.

### What Kind of Framework/System Will Teach Me This?

**Steps:**

1. Analyze 100's of well-designed websites & deconstruct those 100's of websites.
2. Distill them into easy-to-learn & easy-to-apply **rules**.
3. These rules are divided into 9 different areas of design: **ingredients**.
4. Rules will be applied based on **website personality**.

### Web Design Ingredients We Will Learn :

- _Typography_
- _Colors_
- _Images / Illustrations_
- _Icons_
- _Shadows_
- _Border-radius_
- _Whitespace_
- _Visual Hierarchy_
- _User Experience_
- _Components / Layout_

_Design Decisions for each are based on website personality._

### Overview of Website Personalities :

- **Serious/Elegant :**

  For luxury and elegance, based on thin serif typefaces, golden or pastel colors, and big high-quality images.

- **Minimalist/Simple :**

  Focuses on the essential text content, using small or medium-sized sans-serif black text, lines, and few images and icons.

- **Plain/Neutral :**

  Design that gets out of the way by using neutral and small typefaces, and a very structured layout. Common in big corporations.

- **Bold/Confident :**

  Makes an impact, by featuring big and bold typography, paired with confident use of big and bright-colored blocks.

- **Calm/Peaceful :**

  For products and services that care, transmitted by calming pastel colors, soft serif headings, and matching images/illustrations.

- **Startup/Upbeat :**

  Widely used in startups, featuring medium-sized sans-serif typefaces, light-grey text and backgrounds, and rounded elements.

- **Playful/Fun :**

  Colorful and round designs, fueled by creative elements like hand-drawn icons or illustrations, animations, and fun language.

_But the Idea is that Different Design decisions depend upon what website personality we want for our design._

## Website Design Rules #1 Typography :

Lets start with the most Important Design Ingredient of all "Typography"

This Section might have the most number of Rules among all of the Rules.

### What is Typography ??

"Typography is the art & technique of arranging type to make written language **legible** , **readable** & **appealing** when displayed."

OR

"Typography is all about making the text **beautiful** & **easy to read**"

### Serif VS Sans-Serif

When it comes to typography, the choice between serif and sans-serif fonts plays a crucial role in defining the visual tone and readability of text. Here's a breakdown of the key differences between serif and sans-serif fonts:

### Serif Fonts:

**Description:**

- Serif fonts have small lines or decorative features at the ends of their characters, known as serifs.
- Serifs can be bracketed, unbracketed, or slab-like, influencing the font's overall appearance.

**Characteristics:**

- Traditional and classic appearance.
- Enhance readability in printed material.
- Commonly used for body text in books and newspapers.
- Good for Long Text
- Conveys Trustworthiness

**Examples:**

- Times New Roman
- Georgia
- Garamond

### Sans-serif Fonts:

**Description:**

- Sans-serif fonts, as the name suggests, lack the serifs or decorative strokes at the ends of characters.
- They have a cleaner and more modern appearance.

**Characteristics:**

- Modern look & feel
- Contemporary and clean design.
- Simple
- Well-suited for digital screens and modern interfaces.
- Often used for headlines, logos, and web content.
- - Easy to choose for beginner Designers

**Examples:**

- Arial
- Helvetica
- Calibri

**Serif VS Sans-Serif :**

![Serif VS Sans-Serif](/img/Serif%20vs%20Sans-Serif.png)

### Choosing Between Serif and Sans-serif:

**Readability:**

- Serif fonts are considered more readable in printed material due to the guiding effect of serifs along the text flow.
- Sans-serif fonts are often preferred for digital screens, where resolution and pixel clarity can make them more readable.

**Aesthetic and Style:**

- Serif fonts convey a sense of tradition, formality, and timelessness.
- Sans-serif fonts exude a modern, clean, and minimalistic aesthetic.

**Usage Scenarios:**

- Serif fonts are suitable for traditional and formal contexts, such as books, academic papers, and long-form content.
- Sans-serif fonts are commonly used in digital media, websites, user interfaces, and contemporary design.

**Combination:**

- Designers often use a combination of serif and sans-serif fonts for visual contrast, such as using a serif font for body text and a sans-serif font for headers.

In summary, the choice between serif and sans-serif fonts depends on the context, medium, and desired visual impact. Each type brings its own set of characteristics, influencing the overall design and communication of textual content.

#### Rule 1 use Good TypeFaces :

1. **Use Good TypeFaces** :

- Use only good & popular typefaces and play it safe.

**Sans-Serif :**

- _Inter_
- _Open Sans_
- _Roboto_
- _Montserrat_
- _Work Sans_
- _Lato_

**Serif :**

- Merriwweather
- Aleo
- Playfair Display
- Cormorant
- Cardo
- Lora

_All these fonts are Free of cost and can be found on Google Fonts / Font Quirrel_

Many Designers think that using multiple typefaces are necessary to design a webpage but thats not actually true.

- It's okay to use just one typeface per page! If you want more , limit to 2 typefaces.

- Choose the **right typeface** according to your website personality:

👉 Choose the right personality for your website.
👉 Decide between a serif and sans-serif typeface
👉 Experiment with all the "good" typefaces to see which one best fits your websites message
👉 You can keep trying different typefaces as you design and build the page

2. **Use Good Font Sizes & Weight** :

- when choosing fonts-sizes, **limit choices**! Use a "**type scale**" tool or other **pre-defined range**

- Use a font size between 16px to 32px for **normal text**.

- For **long text**, try a size of 20px or bigger

- For **headlines**, you can goreally big (50px+) and bold (600+), **depending on personality**

- For any text, don't use a font weight under 400(regular)

3. **Create a Good Reading Experience** :

- Use less than 75 characters in per line

- For normal-text, use a line height
  between 1.5 and 2. For big-text go below 1.5
  👉 The **smaller** / **longer** the text, the **larger** the line height need to be!

- Decrease letter spacing in headlines, if it looks unnatural

- Experiment with all caps for short titles. Make them small and bold and increase letter-spacing.

- Usually don't justify text (As a general practice, text is not _aligned_ or _formatted_ using justification)

- Don't center text blocks. small blocks are fine.

## Implementing Typography :

Implementing the Typography Guidelines in out Project [Project](/index.html)

**Import Inter Font in Our Code** :

- Trying to give it a **clean** & **modern** look.
- Using Sans-serif Type face
- Common one for architectural pages : _Inter_
- Choosing Base Weight 400 , Bold (700) , Medium (500) , Semi-Bold(600)
- Copy the `<link>` given by google font
- Paste it in the `<head>`

[Google Fonts](https://fonts.google.com/?query=Rasmus+Andersson&stroke=Sans+Serif)

Assign Font :

```css
body {
  font-family: 'Inter', sans-serif;
}
```

## Explanation:

- `_Inter_` at first means the default font-family is Inter.
- If the font family _Inter_ is unable to load from Google Fonts, then the second default sans-serif will be loaded.

## Decide the h1 Heading Size & Style:

- We can use the [Type-Scale Tool](https://typescale.com/).
- We can also use the standard decided by us, say something like this:

  ```css
  /* FONT SIZE SYSTEM (px) */
  10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98
  ```

## H1 Heading:

- Choose between 44px / 52px / 62px.
- Decrease the letter spacing to make it look more realistic (-1px).
- Decrease the line height, as larger the text, smaller the line height, say (1.1).

### Adjust the Header Font:

- By default, the font size is 16px. Let's increase it to 18; it looked good.
- Adjust Line Height; for smaller texts, use a larger line height.
  - 1.5 / 1.6 both look fine.

## H2 Heading:

- Size smaller than the h1, i.e., 44px. Say 36px.
- Decrease the letter-spacing of the heading, say -0.5px.

## Title and Text of Features Block:

### Title:

- Selecting a size smaller than the h2 for title, say 20px.

### Text:

- Select a font size, say 18px, smaller than the title.
- Give the content some reading space by adding the same line height as before of -1.6px.
- Keep the line height consistent throughout the page generally.

## Heading & Text of Testimonial Box:

- Assigning a font size to it smaller than the h2, say 24px.
- Set up the same size and line height of 18px and -1.6px, as other text to the text of the testimonial box.

## Heading 3 and Price Text:

- Size of h3 smaller than h2, say 24px.
- Increase the size of the char-price as it's a very important element in Product Selection, to say 20px.

## Footer Section:

- Font of the Footer is generally very small.
- As the default size is 16px, let's bring it down to say 14px / below.
