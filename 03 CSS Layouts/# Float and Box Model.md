# Float & Box Model

## 3.0 Using Float Layout:

**Example :**

```css
.container {
  float: left;
}
```

```css
.container {
  float: right;
}
```

## 3.1 What does Float do?

- Used to represent elements in a side-by-side layout.

## 3.2 What happens when an element is Floated?

- When an element is floated, it is taken out of the normal flow of the document and moved to the left or right as far as possible in the containing element.
- It's like as if the elements are removed from the page / detached from the parent.

## 3.3 What if all the child elements of a parent are floated?

- If all the child elements of the parent are floated, it's the same as the parent losing its height in this case, as the elements are not on the page anymore.
- We can check this by inspecting the parent element.
- Only what's left is the padding margin of the parent if applied any to it.
- _This is called a Collapsing Element!!_

## 3.4 What happens to elements around the floating element?

- When an element is floated, text and inline elements will wrap around the element.
- The floating element is not even on the page and does not affect the surrounding elements.
- The elements do not start after the floating element; rather, they start from the very beginning of the page width, which we can see by inspecting the content wrapped around the floating element.
- We can say that the element is behind the floating element, and the content of the element starts after the floating element.

## 3.5 How to start the surrounding element after the floating element?

- _If we want that the element around the floating element starts after the floating element, then we set the surrounding element too as a float element._

## 3.6 Float VS Absolute Elements

### Similarity

- Elements are removed out of the normal flow.

### Differences

- **Absolute Positioning:**
  - No impact on surrounding elements.
- **Floating Element:**
  - Text and inline elements will wrap around the floating element.
  - Also, the container does not adjust its height according to the floating elements.
  - Rather collapses if all the child elements are floated of the parent.

## 4.0 Collapsing Element in Float Layout:

- When you use the float property on elements, it can lead to issues where the parent element collapses, especially if all of its child elements are floating.

### 4.1 How to Avoid Collapsing of Parent Element?

- We use the _clear_ property in CSS to control the behavior of an element concerning floating elements:

  - **clear: left;**
  - **clear: right;**
  - **clear: both;**

#### Method 1:

- _"This Involves Creating an empty element inside the parent element"_

  - Create an empty child element of the parent (e.g., _div_).
  - Attach a class named (e.g., _clear_) to it.
  - Attach CSS property of clear to it in the CSS file.
  - Use _left_, _right_, or _both_ attribute values with it to specify in which direction you want to avoid floating of elements.

```html
<header class="main-header clear-fix">
  <h1>📘 The Code Magazine</h1>
  <nav>Content</nav>
  <div class="clear"></div>
</header>
```

```css
.clear {
  clear: both;
}
```

### Method 2: "clearfix" Technique

- **Method 2 Explanation:**
  - Using the _clearfix_ Technique.
  - Add a class named _clear-fix_ to the parent element whose height is collapsing.
  - Use the Pseudo Element ::after with the _clear-fix_ class.
  - This ::after Pseudo Element does the same as creating an empty element at the very end of the parent element.
  - Set the `clear` property with _left_, _right_, or _both_ values.

```html
<header class="main-header clear-fix"></header>
```

```css
.clear-fix::after {
  clear: both;
}
```

### Method 3: Using Another Child Element

- **By using another child element which isn't floating and assigning a class (e.g., 'clear') to it, we can avoid wrapping up of other non-floating elements around floating elements.**

- Assign a class to that element (e.g., 'container').
- Use the **clear: both;** property inside the CSS for that element's class to disable its wrapping up around the Floating Elements.

```css
.container {
  clear: both;
}
```

### 4.2 What Does the _clear_ Property Do?

The `clear` property allows you to specify on which side of an element floating elements should not be allowed. This prevents the floated elements from wrapping around the specified side of the element with the `clear` property.

### 4.2 What Does the _clear_ Property Do?

- The `clear` property allows you to specify on which side of an element floating elements should not be allowed.
- This prevents the floated elements from wrapping around the specified side of the element with the `clear` property.

### 4.3 Important Points to Remember

- Pseudo Elements must contain the _content_ attribute even if it's just empty.
- Pseudo Elements like **::after** & **::before** are by default inline elements.
- Clearing floats like this works only for **block** level elements.
- Hence, we must convert the Pseudo Elements to **block** level Elements.

**Proper Code:**

```css
.clear-fix {
  content: '';
  display: block;
  clear: both;
}
```

## 5.0 Build a Simple Float Layout (Blog Project)

1. **Float the Article and Related Posts Side by side**
2. **Maintain a gap between Article and Related Posts**
   - Margin isn't the Best way to do it
   - Rather we decrease the size of the article container to provide some space between them
3. **Footer shouldn't Float**
4. **Footer remains at the very bottom as before**

---

**_Changes to be made are:_**

- Changing the Width of the container to say 800px -> 1200px
- Width assigned to the article and aside container according to the new container size
- Space given between the article and aside container
- Using the _clear_ CSS property on footer child Element using **Method 3** to place it at the bottom only

### 5.1 Why use Flexbox & Grid if we have Float?

- Floats were originally designed for things like wrapping text around images; they were often misused for layout purposes, leading to various issues and limitations.
- Grid and Flexbox are modern layout techniques in CSS that offer more powerful and flexible options compared to the traditional float-based layouts.

## 6.0 Learning Box Model / Box Sizing:

The Box Model consists of the content, padding, border, and margin of an element, and each part contributes to the overall size of the element.

In CSS, the `box-sizing` property is used to control how the total width and height of an element are calculated, taking into account the content, padding, and border.

The two most common values for the box-sizing property are:

- **box-sizing: content-box;**
- **box-sizing: border-box;**

### 6.1 Default Behavior of Box Model:

**box-sizing: content-box;**

- This is the default value.
- The width and height properties apply only to the content of the element, excluding padding & border.
- Changes to the width and height directly affect the content box; we can see that by inspecting the element that the box model is greater in size than the assigned width and height for the content.

**Width and Height Calculations in _box-sizing: content-box;_ :**

- **Final Element Width :** = Left Border + Left Padding + Width + Bottom Border + Right Padding + Right Border
- **Final Element Height :** = Top Border + Top Padding + Height + Bottom Padding + Bottom Border

### 6.2 Border-Box behavior of Box Model:

**box-sizing: border-box;**

- In this model, the width and height properties include the content, padding, and border of the element.
- Changes to the width and height directly affect the entire box, including padding and border.
- This model can be more convenient for layout purposes, especially when dealing with fixed-size elements.

**Width and Height Calculations in _box-sizing: border-box;_ :**

- **Final Element Width :** = Width assigned to Container
- **Final Element Height :** = Height assigned to Container

**_Changes to be Made:_**

- Aside container `box-sizing` changed to border-box.
- Article container `box-sizing` changed to border-box.

_As the box model by default we want is border-box for all the containers hence we assign it in a universal selector for a simple global reset._

## 7.0 Challenge #1 :

- _Converse Project using Float and Box-sizing_
