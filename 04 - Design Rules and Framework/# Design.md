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

## 03.0 Web Design Rules #1 Typography :

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

#### Rule 1 : Use Good TypeFaces

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

#### Rule 2 : Use Good Font Sizes & Weight

- when choosing fonts-sizes, **limit choices**! Use a "**type scale**" tool or other **pre-defined range**

- Use a font size between 16px to 32px for **normal text**.

- For **long text**, try a size of 20px or bigger

- For **headlines**, you can generally big (50px+) and bold (600+), **depending on personality**

- For any text, don't use a font weight under 400(regular)

#### Rule 3 : Create a Good Reading Experience

- Use less than 75 characters in per line

- For normal-text, use a line height
  between 1.5 and 2. For big-text go below 1.5
  👉 The **smaller** / **longer** the text, the **larger** the line height need to be!

- Decrease letter spacing in headlines, if it looks unnatural

- Experiment with all caps for short titles. Make them small and bold and increase letter-spacing.

- Usually don't justify text (As a general practice, text is not _aligned_ or _formatted_ using justification)

- Don't center text blocks. small blocks are fine.

## 04.0 Implementing Typography :

Implementing the Typography Guidelines in out Project [Project](/index.html)

### Import Inter Font in Our Code :

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

#### Explanation:

- `_Inter_` at first means the default font-family is Inter.
- If the font family _Inter_ is unable to load from Google Fonts, then the second default sans-serif will be loaded.

### Decide the h1 Heading Size & Style:

- We can use the [Type-Scale Tool](https://typescale.com/).
- We can also use the standard decided by us, say something like this:

  ```css
  /* FONT SIZE SYSTEM (px) */
  10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98
  ```

### H1 Heading:

- Choose between 44px / 52px / 62px.
- Decrease the letter spacing to make it look more realistic (-1px).
- Decrease the line height, as larger the text, smaller the line height, say (1.1).

### Adjust the header-text Font Size :

- By default, the font size is 16px. Let's increase it to 18; it looked good.
- Adjust Line Height; for smaller texts, use a larger line height.
  - 1.5 / 1.6 both look fine.

### H2 Heading:

- Size smaller than the h1, i.e., 44px. Say 36px.
- Decrease the letter-spacing of the heading, say -0.5px.

### Title and Text of Features Block:

#### Title:

- Selecting a size smaller than the h2 for title, say 20px.

#### Text:

- Select a font size, say 18px, smaller than the title.
- Give the content some reading space by adding the same line height as before of -1.6px.
- Keep the line height consistent throughout the page generally.

### Heading & Text of Testimonial Box:

- Assigning a font size to it smaller than the h2, say 24px.
- Set up the same size and line height of 18px and -1.6px, as other text to the text of the testimonial box.

### H3 Heading& Price text :

- Size of h3 smaller than h2, say 24px.
- Increase the size of the char-price as it's a very important element in Product Selection, to say 20px.

### Footer Section:

- Font of the Footer is generally very small.
- As the default size is 16px, let's bring it down to say 14px / below.

## 05.0 Web Design Rules #2 Colors :

### Rule 1 : Choose the Right Color :

#### 1. Make the main color match your website's personality: colors convey meaning !

- 🔴 Red draws a lot of attention, and symbolizes power, passion, and excitement
- 🟠 Orange is less aggressive, and conveys happiness, cheerfulness, and creativity
- 🟡 Yellow means joy, brightness, and intelligence
- 🟢 Greens represents harmony, nature, growth, and health
- 🔵 Blue is associated with peace, trustworthiness, and professionalism
- 🟣 Purple conveys wealth, wisdom, and magic
- ⭕ Pink represents romance, care, and affection
- 🟤 Brown is associated with nature, durability and comfort

#### 2. Use a **_good color tone_**! Don't choose a random tone or CSS named colors.

Don't just go into a **_VS Code Color picker_** and use a random color from there / use one of the **_CSS named colors_**.

We have multiple **_Tools_** we can use for that ... they are basically list of good shades carefully designed to build beautiful interfaces :

**Tools Used :**

- [_Open Colors_](https://yeun.github.io/open-color/)
- [_Tailwind CSS_](https://tailwindcss.com/)
- [_Flat UI Colors 2_](https://flatuicolors.com/)

#### 3. You need at least two types of colors in your **_color palette_** : **_main color_** & **_grey color_**

##### _Main Colors_ :

- In the context of colors, the term "main color" could refer to primary colors. Primary colors are fundamental colors that cannot be created by mixing other colors together. The primary colors in the traditional color wheel are red, blue, and yellow. All other colors can be created by combining these primary colors.

##### _Grey Color_ :

- Grey is a neutral color that is created by mixing black and white. It is often considered achromatic, meaning it has no hue. Grey can have various shades, ranging from light grey to dark grey, depending on the ratio of black and white used in the mixture.

- Grey color doesn't mean it will be a true grey color, grey color can be a darker version of another color too

#### 4. With more experience, you can add more colors: accent (secondary) colors (use a tool)

##### Accent or Secondary Colors:

- In the context of color schemes, accent or secondary colors are those used to complement the primary colors. These colors add variety and depth to a design. Unlike primary colors, secondary colors are created by mixing primary colors.

- Common secondary colors include green (mix of blue and yellow), orange (mix of red and yellow), and purple (mix of red and blue).

- Using accent colors strategically can enhance visual appeal and create a balanced and harmonious design.

  **Tools Used :**

  [Coolors](https://coolors.co/)

#### 5. For diversity, create lighter and darker "versions" (**_tints and shades_**)

##### Tints and Shades:

In the realm of colors, tints and shades refer to variations in the lightness or darkness of a color.

- **Tints:** Tints are lighter versions of a color and are created by adding white to the base color. The more white added, the lighter the tint becomes. Tints often create a softer and pastel-like appearance.

- **Shades:** Shades, on the other hand, are darker versions of a color and are achieved by adding black to the base color. The more black added, the darker the shade becomes. Shades can add depth and richness to a color palette.

Understanding how to create _tints_ & _shades_ is essential in color theory and design, providing a range of tones to work with in creating visually appealing compositions.

_Shades are important for Secondary(Grey) colors as we use different shades of secondary colors for texts at different places & different states on the webpage_

- If we use Tailwind CSS then the _Tints_ & _Shades_ come along with the color

- If we create a color ourselves then we can create Tints & Shades using :

  [Tint & Shade Generator](https://maketintsandshades.com/)

### Rule 2 : When & How to use Colors ??

- #### 1. Use your **_main color_** to **_draw attention_** to the most important elements on the page

  Eg : the color of Button etc... colors represent the main color of the page

- #### 2. Use colors to add **_interesting accents_** or make **_entire components_** or sections stand out

- #### 3. You can try to use your color strategically in **_images and illustrations_**

### ✅ Colors & Topography Relationship !!

- #### 1. On dark colored backgrounds, **_try to use a tint of the background_** ("lighter version") for text

- #### 2. Text should usually not be completely black. **_Lighten it up_** it looks heavy and uninviting

- #### 3. Don't make text too light! Use a tool to check contrast between text and background colors

  👉 Contrast ratio needs to be at least 4.5:1 for normal text and 3:1 for large text (18px+)

  **Tool Used :**

  [Coolors](https://coolors.co/)

## 06.0 Implementing Colors :

Implementing the Colors Guidelines in out Project [Project](/index.html)

### Choosing a Base Color for our Webpage :

The Page contains a lot of elements that are green in color :

- The Chair
- Couch etc...

Also the page focuses a lot on environment & Health, so choosing green is optimal.

- **Remember :** 🟢 Greens represents harmony, nature, growth, and health.

  **_So let's go with Green color_**
  We will use an above mentioned tool ➡️ [_Open Colors_](https://yeun.github.io/open-color/)

👉 Green : **_#087f5b_**

### Choosing a Grey color :

👉 Grey : **#343a40**

### Styling '_shop chair_' Button State (:link & :visited) :

- As we know the Button of the page mainly contains the **_Main Color_** of the page

  - **background-color** : #087f5b
  - **color** : White
  - **text-decoration** : None
  - **text-transform** : uppercase;
  - **padding** : 16px & 32px (Button-Sizing)
  - **font-weight** : 500

### Styling '_shop chair_' Button State (:hover & :active) :

On _hovering_ we want the color to be a bit lighter hence choosing the tint of the same main color from open color

- color : #099268
- applying it for the :_hover_ and :_active_ states
- Keeping the Rest of the Properties same as it was for :_link_ & :_visited_

### Contrast Check :

- Now we as a Rule / Process do check the contrast between them.

## 07.0 Web Design Rules #3 Images & Illustrations:

### Rule 1: Use Good Images

1. Different types of images: product photos, storytelling photos, illustrations, patterns.

2. Use images to support your website's message and story, so only use relevant images!

3. Prefer original images. If not possible, use original-looking stock images (not generic ones!)

For good, original-looking images, you can refer to these pages:

- [Unsplash](https://unsplash.com/)
- [Pexels](https://www.pexels.com/)
- [Drawkit](https://www.drawkit.com/)
- [unDraw](https://unsplash.com/)

### Rule 2: Use Images Well

1. Try to show real people to trigger user's emotions.

2. If necessary, crop images to fit your message.

3. Experiment combining photos, illustrations, and patterns.

### Rule 3: Handling Text on Images

1. Darken or brighten images (completely or partially, using a gradient).

2. Position text into neutral image areas.

3. Put Text In a Box.

### Rule 4: Some Technical Details

1. To account for high-res screens, make image dimensions 2x as big as their displayed size.

   - **Scale Factor**:
     Actual pixels the screen contains / Pixels represented on the screen.
   - On high-resolution screens, the scale factor is 2x or even 3x; on "normal" screens, it's just 1x (1 physical pixel = 1 design pixel).

2. Compress images for a lower file size and better performance.

   - _Tool used to compress images nicely :_ [Squoosh](https://squoosh.app/)

## 08.0 Web Design Rules #4 Icons :

### Rule 1 : Use Good Icons

1. Use a good icon pack, there are tons of free and paid icons packs

**_Free Icon Packs_** :

- [Phorphoricons](https://phosphoricons.com/)
- [ionicons](https://ionic.io/ionicons)
- [iocon8](https://icons8.com/)
- [Heroicons](https://heroicons.com/)

2. Use only one icon pack. Don't mix icons from different icon packs

3. Use SVG icons or icon fonts. Don't use bitmap image formats (.jpg and .png)!

![Regular Image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjpsVvzkGzJt4Vm6PHsS04vPL4Qpl_iUPkx7zllqJBgHuhnmWpRNgS1Ob7G_Q4ekJZpZE&usqp=CAU)

- Regular Images

  - "Regular images": JPG, PNG, GIF
  - Do not scale become **unsharp** !

- Vector Images
  - SVG images are icons fonts
  - Scale **indefinitely**

4. Adjust to website personality! Roundness, weight and filled/outlined depend on typography

### Rule 2 : When to Use Icons

1. Use icons to **provide visual assistance** to text

2. Use icons for **product feature blocks**

3. Use icons **associated with actions,** and **label them** (unless no space or icon is 100% clear)

4. Use icons **as bullet points**

### Rule 3 : Use Icons Well

1. To keep icons neutral, **use same color** as text. To draw more attention, **use different color**

2. Don't confuse your users: icons need to make sense and **fit the text or action!**

3. Don't make icons larger than what they **were designed for**. If needed, **enclose them in a shape**

## 09.0 Implementing Icons :

### Which Icons to Use !!

Using Icons Pack from : [Heroicons](https://heroicons.com/)

Heroicons has SVG Icons Pack!!

Our website is having mostly _square_ images, containers, buttons etc..

The Icons on Heroicons are _round_ mostly ... although they are not the best fit fot the page but for now we are using them as they are easy to use

### How to add Icons to HTML File ??

1. Download the SVG File and then incorporate them in to the **_HTML Code_** just like regular **_Images_**.

Although this has a couple of limitations !!

2. Easy way is to copy the **_SVG Icons Code_** and use them directly.
   we need to paste the SVG Code before / after the heading / content wherever we want it to be

### How to Resize SVG Icons ??

1. Add a class to it as u wish to

2. style the height and width of the icon using CSS

### How to color Icons as our wish ??

- Outline Icons :

  - Using the _stroke_ property we can assign the colors to the icon outline

- Solid Icons :
  - Using the _fill_ property we can assign the colors to the icon outline

### Adding Icons to create Features Block in Feature Section (Outline Icons)

_The most common use case of Icons is to create Feature Blocks !!_

- Adding suitable Icons to list Items according to their text
- class named : features-icon
- height & width : 32px
- stroke : #087f5b

_Using stroke property to outline the icons with green matching the overall theme , color and structure of the page_

### Adding Visual Assistance to Text using Icons in best selling chair section

- Adding suitable Icons to list Items according to their text
- class named as : chair-icon
- Height & width : 24px
- stroke : #087f5b

## 10.0 Web Design Rules #5 Shadows :

### Some Concepts First !!

👉 After an era of 100% flat design, we're now **back to using shadows** in IJI design ("flat design 2.0")

👉 **Shadow creates depth (3D)**: the more shadow, the **further away from the interface** the element is

👉 Shadow can be used on **boxes** & **text**

### Use Shadows Well !!

1. You **don't have to use** shadows! Only use them if it makes sense for the **website personality**

   - Serious Design : Less / No Shadow
   - Playful / Fun Design : More Shadows

2. Use shadows **in small doses**: don't add shadows to every element!

3. Go light on shadows, don't make them **too dark**!

### Use Shadows in the Right Situation !!

1. Use **small shadows** for smaller elements that should stand out (to draw attention)
   Eg : Buttons, Images etc...

2. Use **medium-sized shadows** for larger areas that should stand out a bit more
   Eg : Page Sections, Product Cards on Website etc..

3. Use **large shadows** for elements that should really float above the interface
   Eg : navigation window, Popup window

4. Experiment with **changing shadows** on mouse interaction (click and hover)

👉 **_Bonus: Experiment with glows (colored shadows)_**

## 11.0 Implementing Shadows

_Adding shadow effect to Product cards containing different types of chairs!!_

### How to Add Shadow to Elements using box-shadow ??

**Box shadow** is a CSS (Cascading Style Sheets) property that allows you to add a shadow effect to an element. It is often used to give a visual depth and dimension to elements on a webpage.

The `box-shadow` property takes several values to define the shadow's appearance. Here is the basic syntax:

```css
box-shadow: h-offset v-offset blur spread color inset;
```

- `h-offset`: The horizontal offset of the shadow. Positive values move the shadow to the right, and negative values move it to the left.

- `v-offset`: The vertical offset of the shadow. Positive values move the shadow down, and negative values move it up.

- `blur`: The blur radius. A higher value creates a more blurred shadow.

- `spread`: The spread radius. This value can be positive or negative, and it determines whether the shadow expands or contracts.

- `color`: The color of the shadow.

- `inset`: An optional keyword. If present, the shadow will be inside the element, making it an inset shadow.

### Adding Shadows to **chair** class having the cards within it !!

- class : **chair**;
- h-offset : 0px;
- v-offset : 20px;
- blur : 30px;
- spread : 0;
- color : black; (opacity as per convenience)

Eg : box-shadow : 0 20px 30px 0 rgba(0, 0, 0, 0.7);

### How to add Shadows to Text using text-shadow ??

**Text shadow** is a CSS property used to add a shadow effect to text. The `text-shadow` property takes the following values:

Here we dont have the _spread_ option as in box-shadow.

```css
text-shadow: h-offset v-offset blur color;
```

- `h-offset`: The horizontal offset of the shadow. Positive values move the shadow to the right, and negative values move it to the left.

- `v-offset`: The vertical offset of the shadow. Positive values move the shadow down, and negative values move it up.

- `blur`: The blur radius. A higher value creates a more blurred shadow.

- `color`: The color of the shadow.

**Note** : _Although we are not adding shadows to text but we should know how can we o that if required_

## 12.0 Web Design Rules #6 Border-radius :

### Use Border Radius Well !!

1. Use border-radius to **increase the playfulness** and fun of the design, to make it **less serious**

2. Typefaces have a certain roundness: make sure that border-radius **matches that roundness**!

   _The Typeface we choose will have certain roundness so choose the border radius matching the typefaces_

   **Typefaces** :
   Typefaces, often referred to as fonts, are sets of characters that share a consistent design. They include letters, numbers, punctuation marks, and other symbols

3. Use border-radius on **buttons**, **images**, **around icons**, **standout sections** and **other elements**

## 13.0 Implementing Shadows

### How to add border-radius ??

The border-radius property in CSS is used to define rounded corners for an element's border box.

It allows you to control the curvature of the corners by specifying one to four values, each representing the radius of a quarter of the element's box.

Example :

```css
img {
  border-radius: 12px;
}
```

### Adding border-radius to Images !!

- border-radius : 12px;

```css
img {
  border-radius: 12px;
}
```

### Adding border-radius to testimonial-section !!

_Adding the same border-radius as the images that it contains_

- border-radius : 12px;

```css
.testimonial-section {
  border-radius: 12px;
}
```

### Adding border-radius to chair section containing Product Cards !!

- border-radius : 12px;

```css
.chair {
  border-radius: 12px;
}
```

### Removing border-radius from the bottom left & right of product card images !!

- border-bottom-left-radius: 0px;
- border-bottom-right-radius: 0px;

```css
.chair img {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
```

### Adding border-radius to Shop Chair button !!

- border-radius : 12px;

We can do this this looks good, But there are other ways to make the button look really good with border radius !!

1. When Element is **Square** :

- border-radius : 50%;

**_As the Element is not really square here we can use the second method !!_**

2. When Element isn't **Square** :

**_Assign a border radius bigger than the height of the element thats it it can any large number but must be bigger than the height of the element_**

- border-radius : 100px;

```css
.btn--big {
  border-radius: 100px;
}
```

## 14.0 Web Design Rules #7 White Spaces :

### Why WhiteSpace ??

1. The right amount of whitespace makes designs look **clean**, **modern** and **polished**

2. Whitespace communicates how different pieces of information are **related to one another**

3. Whitespace implies **invisible relationships between the elements** of a layout

### Where to Use Whitespace ??

1. Use tons of whitespace **between sections**

2. Use a lot of whitespace **between groups of elements** but less than the whitespace between **different sections **

3. Use whitespace **between elements**

4. Inside groups of elements, try to
   use whitespace instead of lines

### How much Whitespace to Use ??

1. **Law of Proximity** :
   The more some elements (or groups of elements) **belong together, the closer they should be**!

2. Start with **a lot Of whitespace**, maybe even too much! **Then remove whitespace** from there

   👆 _TOO much whitespace looks detached, too little looks too crammed_

3. Match **other design choices**. If you have big text or big icons, you need more whitespace

4. Try a hard rule, such as using **multiples of 16px** for all spacing

## 15.0 Web Design Rules #8 Visual Hierarchy :

### What is Visual Hierarchy ??

👉 Visual hierarchy is about **establishing which elements** of a design **are the most important ones**

👉 Visual hierarchy is about **drawing attention** to these most important elements

👉 Visual hierarchy is about **defining a "path" for users**, to **guide** them through the page

👉 We use a combination Of **position**, **size**,**colors**, **spacing**, **borders**, and **shadows** to establish a meaningful visual hierarchy between elements/components

### Visual Hierarchy Fundamentals !!

1. Position important elements **closer to the top the page**, where they get more attention

Eg : Logo, Navigation Tab, Heading, Call to Action Button

_In General Attention flows from Top ➡️ Bottom_

2. Use images mindfully, as they draw **a lot Of attention** (_larger images get more attention_)

3. Whitespace creates separation, so **use whitespace strategically** to emphasize elements

### Visual Hierarchy for Text Elements !!

1. For text elements, use **font size**, **font weight**, **color**, and **whitespace** to convey importance

2. What text elements to emphasize? **Titles**, **sub-titles**, **links**, **buttons**, **data points**, **icons**

   👆 You can also **de-emphasize** less important text, like **labels** or **secondary/additional information**

### Visual Hierarchy between Components !!

1. Emphasize an important component using **background color**, **shadow**, or **border** (or multiple)

2. Try emphasizing some component A over component B by **de-emphasizing component B**

3. What components to emphasize? **Testimonials**, **call-to-action sections**, **highlight sections**,**preview cards**, **forms**, **pricing tables important rows/columns in tables**, etc.
