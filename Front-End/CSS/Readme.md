# CSS Tutorial

  Here we will learn everything about CSS, how to deal with it and Some tricks in writing it.

## Agenda

- [What is CSS?](https://github.com/nadamedhat27/Full-Stack/tree/main/Front-End/CSS#what-is-CSS)


----------------------------------------------------------------

- ## What is CSS?

  - A short for Cascade Style Sheet.
  - Language to create the presentation and visuals (Fonts, Colors, Margins, Images, etc.).
  - Levels: 1, 2, 3.


----------------------------------------------------------------

- ## Why CSS?
  
  If you are looking for working as Web Designer, UI Developer or Front-End Developer then you well need CSS as a background before you get in deep with the previous job titles.

----------------------------------------------------------------

- ## Prerequisites
  
  Learn HTML, CSS is used to style the HTML structure you wrote before so, you should learn how to deal with HTML before you learn CSS.

----------------------------------------------------------------

- ## How to import CSS into HTML
  
  we have 3 methods to style the HTML with CSS or to apply our CSS styles to the HTML structure:
  
  1. **Inline Method:** We just add the style inside the target element.
      
      ```html
      <div style="background-color: blue;">
      ```

  2. **Internal Method:** We create a new element `<style>` and we add the style inside it.
      ```html
        <style>
        div {
          background-color: blue;
        } 
        </style>
      ```
  3. **External Method:** We add the path of the CSS file containing all our CSS styles inside the `<link>` element. 
      ```html 
        <link rel="stylesheet" href="path/to/the/file">
      ```

----------------------------------------------------------------

- ## Basic Syntax
  As shown above, the main syntax for writing CSS is as follows:
  
  ```
    Selector {
      Property: Value;
      another-property: Value;
    }
  ```
  so we are going to learn what are the selectors and properties and how to add values to the properties.

----------------------------------------------------------------

- ## Selectors
  Selectors are divided into 3 types:
  
  1. **Element name:** Just type the target element name and start styling.
      
      ```css 
        div {
          // style
        }
      ```
  2. **Class name:** First you need to specify the class name for the target element in the html code and then use this class name with a `.` before it.
      ```css
        .firstclass {
          // style
        }
      ``` 
  3. **ID name:** Same as above, you need to specify the ID for the target element in the html code and then use this ID name with a `#` before it.
      ```css
      #firstID {
        // style
      }
      ```

  - So, what is the difference between ID and class?

    :arrow_right: the class attribute can be specified to more than one element making them as a group and we can style them all together with the same code, on the other hand, the ID attribute can be specified to a single element only and styling this ID means that we style this element only.
