
<a id=top></a>

# City Skyline

<details>
      <summary>
        <h4>Follow Links Steps</h4>
      </summary>
       
<table>
  <thead>
    <tr><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__000__title_" target="_self">Step 0</a></th><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__001__step__" target="_self">Step 1</a></th><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__002__step__" target="_self">Step 2</a></th><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__003__step__" target="_self">Step 3</a></th><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__004__step__" target="_self">Step 4</a></th><tr><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__005__step__" target="_self">Step 5</a></th><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__006__step__" target="_self">Step 6</a></th><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__007__step__" target="_self">Step 7</a></th><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__008__step__" target="_self">Step 8</a></th><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__009__step__" target="_self">Step 9</a></th><tr><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__010__step__" target="_self">Step 10</a></th><th><a href="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp//tree/main/steps/__011__step__" target="_self">Step 11</a></th></tr>
  </thead>
  <tbody>
  </tbody>
</table>
</details>


<details>
      <summary>
        <h4>Description of the Task</h4>
      </summary>
       <h3>Step  11</h3>

<section>
<p>Nest four <code>div</code> elements in the <code>.bb1</code> container. Give them the classes <code>bb1a</code>, <code>bb1b</code>, <code>bb1c</code>, and <code>bb1d</code> in that order. This building will have four sections.</p>
</section>
</details>

<h4>preview</h4>
    <img src="https://github.com/AndriiKot/Desing___City_Skyline___freeCodeCamp/blob/main/images/previews/preview_step011.png" alt="preview_step011">
  
<table>
  <thead>
      <tr><th height=33 width=100>HTML5</th><th height=33 width=100>CSS</th></tr>
  </thead>
  <tbody>
      <tr><td height=100 width=100><a href=https://html.spec.whatwg.org/multipage/ target="_self"><img src=https://github.com/AndriiKot/iconsSVG_and_linksDocs/blob/main/svg/html.svg alt=HTML5></a></td><td height=100 width=100><a href=https://www.w3.org/Style/CSS/ target="_self"><img src=https://github.com/AndriiKot/iconsSVG_and_linksDocs/blob/main/svg/css.svg alt=CSS></a></td></tr>
  </tbody>
</table>

[back to top](#top)



<details open>
  <summary>
    <h4>index.html</h4>
  </summary>



```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="styles.css">
    <title>City Skyline</title>
  </head>
  <body>
    <div class="background-buildings">
      <div class="bb1">
        <div class="bb1a"></div>
        <div class="bb1b"></div>
        <div class="bb1c"></div>
        <div class="bb1d"></div>
      </div>
    </div>
  </body>
</html>
```



[back to top](#top)


</details>

<details open>
  <summary>
    <h4>styles.css</h4>
  </summary>



```css
* {
  border: 1px solid black;
  box-sizing: border-box;
}

body {
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.background-buildings {
  width: 100%;
  height: 100%;
}

.bb1 {
  width: 10%;
  height: 70%;
}

```



[back to top](#top)


</details>