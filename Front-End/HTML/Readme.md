# HTML Tutorial

  Here we will learn the HTML Elements, Its types, and usage.

- ## General in writing the code

  - We can write the code in more than one line for clarity.
  - any spaces between words you write will be translated in the webPage as a single space only.

- ## General to all elements
  
  - Our code in html is case insensitive.
  - Every element has opening and closing tags like  `<html>` (opening) `</html>` (closing).
  - But there are elements that is self closed like `<meta />` and `<b />`.
  - All elements can have attributes, some of them are specialized to a specific element and the other are general to all elements.  <br />
  Some general attributes like ( name, class, id ).

  - Attributes can be added to any element like this `<element attribute="value">`, and not always we need the value.

  - No difference between single and double quotes in writing the values of attribute, both are same in the webPage, and if the value is only one word you can discard quotes.

    ```html
    <meta charset=u tf-8 />

    <meta http-equiv='X-UA-Compatible' content='IE=edge' />

    <meta name="description" content="This is my toturial, learn html easily." />
    ```

    But if we have **SPACES** in the value of an attribute, then we must use quotes (single or double).

----------------------------------------------------------------

- ## Comments

   Comments are written like:
  
    ```html
    <!-- Comments --> 
    ```

    and this for both single and multi-line comments
    and we write them when we write code that isn't completely clear or new to this language, Comments helps you and your teammates to understand your code very well.

----------------------------------------------------------------

- ## DOCTYPE
  
   DocType is not an element but it's an instruction for
    the browser, for example

    ```html
    <!DOCTYPE html>
    ```

    is referred for HTML5 standard mode and this line is important (Must be written) and without it browser will run the page in [quirks mode](https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode).

----------------------------------------------------------------

- ## HTML Element

    The `<html>` tag is the root of any webPage.
    <br /> 
    It's written like:

    ```html
    <html>
      Some Content  
    </html> 
    ```

    it has 2 elements **ONLY** (Head and Body).

<br />

----------------------------------------------------------------

- ## Head Element

    The `<head>` element has all meta data about the page (Like Styling, Scripts, and any addition data).
    <br />
    It's written like:

    ```html
    <head>
      Some Content
    </head> 
    ```

    And now we will learn the elements written inside the Head Element.

    <br />

  ----------------------------------------------------------------

  - ### Meta Elements

      The `<meta>` tag is self closed tag that has the additional data about the webPage and insturctoins, it has some attributes (has some additional characteristics about that element) like charset or content.
      <br />
      <br />

      ```html
      <meta charset=u tf-8 />
      ```

      Here charset attribute holds the type of language you want to use (utf-8 holds English and Arabic).
      
      <br />

      ```html
      <meta name="description" content="This is my toturial, learn html easily." />

      <meta name='viewport' content='width=device-width, initial-scale=1' />
      ```

      The name attribute can be description like this which holds the description that appears in searching and under the title of the page.

      <br />

  ----------------------------------------------------------------

  - ### Title Element

      the Title element holds the title of the page that appears above in the tabs bar.
      <br />
      It's written like:

      ```html
      <title>
        Some title
      </title>
      ``` 

----------------------------------------------------------------

- ## Body Element
  
  The Body element has all contents of the webPage
  <br /> 
  like `<p>`, `<dev>` or anything

    <br />

  ----------------------------------------------------------------

  - ### Heading Elements

      Headings are ordered from h1 (Biggest) to h6 (Smallest), h1 is the first level of headings and is the biggest title and when we want to add subtitles to it we use h2 which is level 2 and so on.

      <br />

      It's written like:

      ```html
      <h1>heading 1</h1>
      <h2>heading 2</h2>
      <h3>heading 3</h3>
      <h4>heading 4</h4>
      <h5>heading 5</h5>
      <h6>heading 6</h6>
      ```

      The output is:
      <br />
      ![Headings](./imgs/Headings.png)

  ----------------------------------------------------------------

  - ### Paragraph Element
  
      the `<p>` element is a Block Element that means it have special spaces above, below, right and left, like an unseen box which makes the content clear for the user to read in the webPage.
      <br />
      Is written like:

      ```html
      <p>
        Some Content
      </p>
      ```

      Examples:

      ```html
      <p class="one"> this is my paragraph </p>
      <p class='two' hidden> this is my second paragraph </p>
      ```

      The output is:
      <br />
      ![Headings](./imgs/Paragraph.png)
      <br />
      Note: The second paragraph is not visible because it has an attribute called hidden.
