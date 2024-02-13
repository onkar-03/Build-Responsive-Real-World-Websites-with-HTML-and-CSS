## 8.0 Flexbox Layout:

### 8.1 What is Flex Box ??

Flexbox, or the Flexible Box Layout, is a layout model in CSS that allows you to design complex layouts more efficiently and with less code.

It is a one-dimensional layout system that deals with laying out items within a container along a single axis, either horizontally or vertically

### 8.2 How to use Flex Box ??

**To use Flexbox all we need to do is use the flex property using display on a container say having a _class="container"_ having a bunch of child elements in it**

_Parent : Flex Container_
_Child Elements : Flex Items_

```css
.container {
  display: flex;
}
```

### 8.3 What does the _display:flex;_ Property do ??

The _display: flex;_ CSS property is used to create a flex container, turning an element's children into flex items

Flex containers enable a flexbox layout, allowing you to create more efficient and dynamic layouts for both _horizontal_ and _vertical_ alignment of elements.

**_IMPORTANT :_**

- The _display:flex;_ property lets the Flex Items take the space only as much as required by the content of the Child Elements
- the space refers to both the **_height_** and the **_Width_**
- However if there is a certain Height defined for the Parent Container of the Flex Items then the Flex Items take up all the Height of the Container in this case

### 8.4 Main VS Cross Axis !!

**Default Main & Cross Axis are :**

![Main VS Cross Axis](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*2k7hWdeIsF_Hor_5O4w1Mg.png)

- **NOTE** : _We can change the direction of Main and Cross Axis as our wish which we will se later_

### 8.4 Center Items Vertically using Flexbox Layout :

- the _align-items_ property of Flexbox is used to align Items Vertically inside the Parent Container

**_Values_** :

1. **Center**

- It is used to Centralize the Child Elements within the Parent Container
- The Child Elements get Centralized according to their respective height and width

```css
.container {
  display: flex;
  align-items: center;
}
```

2. **Flex Start**

- Aligns items to the start of the cross axis.
- For a row direction, it aligns items to the top.
- For a column direction, it aligns items to the left

```css
.container {
  display: flex;
  align-items: flex-start;
}
```

3. **Flex End**

- Aligns items to the end of the cross axis.
- For a row direction, it aligns items to the bottom.
- For a column direction, it aligns items to the right.

```css
.container {
  display: flex;
  align-items: flex-end;
}
```

4. **Baseline**

- Aligns items such that their baselines align.

5. **stretch**

- Default value.
- Stretches items to fill the container along the cross axis.
- If the height of items is not explicitly set, they will stretch to fill the container height.

**_Examples :_**

![Alternate text of Image](https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg)

### 8.4 Center Items Horizontally using Flexbox Layout :

- the _justify-content_ property of Flexbox is used to align Items Horizontally inside the Parent Container

**_Values_** :

1. **flex-start (default):**

- This is the default value.
- Items are packed at the start of the main axis.

2. **flex-end:**

- Items are packed at the end of the main axis.

3. **center:**

- Items are centered along the main axis.

4. **space-between:**

- Items are evenly distributed along the main axis.
- The first item is at the start, the last item is at the end, and the remaining items are distributed in between.

5. **space-around:**

- Items are evenly distributed along the main axis, with equal space around them.
- This means there is half the space at the start and end compared to the space between items.

6. **space-evenly:**

- Items are evenly distributed along the main axis with equal space around them, including at the start and end.

**_Examples :_**

![Alternate text of Image](https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg)

## 9.0 The Flexbox Overview :

### What is FLexbox ??

- Flexbox is a set of related CSS properties for building 1-dimensional layouts
- The main idea behind flexbox is that empty space inside a container element can be automatically divided by its child elements
- Flexbox makes it easy to automatically align items to one another inside a parent container, both horizontally and vertically
- Flexbox solves common problems such as _vertical centering_ and creating _equal-height_ columns
- Flexbox is perfect for replacing floats, allowing us to write fewer and cleaner HTML and CSS code

### Important Flexbox Terminologies :

- Flex Container :
- Flex Items :
- Cross Axis :
- Main Axis :

**_Reference :_**
![Diagram](https://lh5.googleusercontent.com/vz6uey5WXlH3TOp46P4Q0jOE8ZPZphyJkn32br3b_JVRDvDObKNlAJXYeHoD8Gn1_V4D9_Kd5mSzLFPKEnkPb6a87Xsr9CvkLt-I6_qR6BL0QDp3RGrvWe0DFOIyKrNvZLaZmRoI)

### CSS Properties Related to Flex Container :

- gap : **0** | <length>
  ➡️ To **_create space between items_**, without using margin

- justify content : **flex-start** | flex-end | center | space-between | space-around | space-evenly
  ➡️ To align items along main axis (**horizontally**,by default)

- align items :**stretch** | flex-start | flex-end | center | baseline
  ➡️ To align items along cross axis (**vertically**,by default)

- flex-direction : **row** | row-reverse | column | column-reverse
  ➡️ To define which is the Main Axis

- flex-wrap : **no-wrap** | wrap | wrap-reverse
  ➡️ To allow items to **_wrap into a new line_** if they are too large

- align-content : **stretch** | flex-start | flex-end | center | space-between | space-around
  ➡️ Only applies when there are **_multiple line_** _(flex-wrap:wrap)_

### CSS Properties Related to Flex Items :

- align-self : **auto** | stretch | flex-start | flex-end | center | baseline
  ➡️ to **overwrite** align-items for individual flex items
  ➡️ auto means it inherits the same form the align-items property no changes, it would seem like nothing changed at all if its auto as align-items value / style still holds firm and upright

- flex-grow : **0** | <integer>
  ➡️ To allow an element **_to grow_** (0 means no, 1+ means yes)
  ➡️ It is used in Flexbox layouts to specify how much an item should grow relative to the other items within the same flex container along the main axis.

- flex-shrink : **1** | <integer>
  ➡️ To allow an element **_to shrink_** (0 means no, 1+ means yes)

- flex-basis : **auto** | <length>
  ➡️ To define an items's width, **_instead of the width_** property

- flex : **0 1 auto** | <length>
  ➡️ **_Recommended_** shorthand for flex-grow,-shrink,-basis

- order : **0** | <integer>
  ➡️ Zero is the _default_ for all items
  ➡️ Controls order of items, -1 makes item **_first_**,1 makes it **last**

**_NOTE : ALL Bold Property Values are Default Values_**

## 10.0 Spacing & Aligning Flex Items : (Working on flex.html)

### Aligning Flex Items :

**Using _align-self_ :**

- Used to place selected Flex Items at a specific position,
- used to **overwrite** align-items for individual flex items

```css
.element-1 {
  align-self: flex-start;
}
```

```css
.element-5 {
  align-self: flex-end;
}
```

### Assigning Order to Flex Items :

Using _order:_

- Used to prioritize the order of elements in the Flex Container
- The order property in Flexbox is used to control the order in which flex items are displayed within the flex container
- The Larger the Number, Lesser is the Priority
- The Smaller the Number, Higher is the Priority

### Spacing Flex Items Using _gap:_

- Flex Container Property
- Used to add spaces between Items in a Flex Container

**_NOTE : Using Margin was the Older way to add spacing between Items which is now done by gap Property_**

## 11.0 The Flex Property :

### flex-basis :

➡️ Default value : auto;

```css
.container {
  flex-basis: auto;
  flex-basis: 200px;
}
```

➡️ Used to decide the width of Items

➡️ Not rigid but a recommendation to browser to implement a certain width, the browser may / may not follow this recommendation depending upon the size of the content

### flex-shrink :

➡️ Default value : 1

```css
.container {
  flex-shrink: 1;
}
```

➡️ Say we defined a width of 200px which is too big to fit all the elements in the container

➡️ flexbox is by default allowed to shrink elements if they dont fit the container via **_flex-shrink:1;_**

➡️ However if we want to disable it we can do it as this

```css
.container {
  flex-shrink: 0;
}
```

### flex-grow :

```css
.container {
  flex-grow: 1;
}
```

**Applied on a Bunch of Flex Items :**

➡️ If we apply it on a bunch of items then **_flex-grow:1;_** makes them all of the same size.

➡️ If value is 2/3/4/5 etc.. when a bunch of flex-items are selected no effect all take up equal space without any empty space in-between

**Applied on an Individual Flex Items :**

➡️ The flex-grow property is used in Flexbox layouts to specify how much an item should grow relative to the other items within the same flex container along the main axis.

➡️ if flex-grow: 1; / 2; for an individual item then this means that that specific item would take 2X the empty space of the flex-container as compared to what all the others items would get

**Shorthand Notation:**

```css
.element--1 {
  flex: flex-grow flex-shrink flex-basis;
}
```

## 12. Adding Flexbox to Blog Project :

- Make the heading and the nav bar side by side using flex box
  - place each of them at one corner of the main-header container using the space-between property
- Format the Related Posts Container such that
  - image and the author info are side by side
  - vertically aligned
  - remove margins

## 13.0 Building Overall Page Layout using Flexbox :

1.  Create a new container to enclose the article and the aside blocks

2.  Assigned it as _flex_

3.  Assigned width of 825 and 300 pixels to both article and aside containers using _flex-basis_ as the width of the main container is 1200px

4.  Assigned a _gap_ of 75 pixels between the 2 blocks

5.  Remove the margin assigned to the article and give a combined margin-bottom to both article and aside containers by declaring margin inside the newly created container wrapping up both the article and the aside containers

6.  We can see that the Aside container takes up all the height of the main container due to the default value stretch of the align-items hence to make it occupy only the content space in terms of height we declare it as flex-start

## 14.0 Challenge #2 :

_Build Converse Project Using Flexbox_

Create this Project using Flexbox : [Converse Project](<[URL](https://codepen.io/jonasschmedtmann/pen/c8e97f50f726b8e57ff58068647cde00)>)
