
<a id=top></a>

# Building a Magazine

<details>
      <summary>
        <h4>Follow Links Steps</h4>
      </summary>
       
<table>
  <thead>
    <tr><th><a href="https://github.com/AndriiKot/Desing__CSS_Grid_by_Building_a_Magazine__freeCodeCamp//tree/main/steps/__000__title_" target="_self">Step 0</a></th><th><a href="https://github.com/AndriiKot/Desing__CSS_Grid_by_Building_a_Magazine__freeCodeCamp//tree/main/steps/__001__step__" target="_self">Step 1</a></th><th><a href="https://github.com/AndriiKot/Desing__CSS_Grid_by_Building_a_Magazine__freeCodeCamp//tree/main/steps/__002__step__" target="_self">Step 2</a></th><th><a href="https://github.com/AndriiKot/Desing__CSS_Grid_by_Building_a_Magazine__freeCodeCamp//tree/main/steps/__003__step__" target="_self">Step 3</a></th><th><a href="https://github.com/AndriiKot/Desing__CSS_Grid_by_Building_a_Magazine__freeCodeCamp//tree/main/steps/__004__step__" target="_self">Step 4</a></th><tr><th><a href="https://github.com/AndriiKot/Desing__CSS_Grid_by_Building_a_Magazine__freeCodeCamp//tree/main/steps/__005__step__" target="_self">Step 5</a></th><th><a href="https://github.com/AndriiKot/Desing__CSS_Grid_by_Building_a_Magazine__freeCodeCamp//tree/main/steps/__006__step__" target="_self">Step 6</a></th><th><a href="https://github.com/AndriiKot/Desing__CSS_Grid_by_Building_a_Magazine__freeCodeCamp//tree/main/steps/__007__step__" target="_self">Step 7</a></th></tr>
  </thead>
  <tbody>
  </tbody>
</table>
</details>


<details>
      <summary>
        <h4>Description of the Task</h4>
      </summary>
       <h3>Step  7</h3>

<section>
<p>After your <code>header</code> element, create a <code>div</code> with the <code>class</code> set to <code>author</code>.</p>
<p>Within that <code>div</code>, create a <code>p</code> element with the <code>class</code> set to <code>author-name</code> and give it the text <code>By freeCodeCamp</code>. Wrap the <code>freeCodeCamp</code> portion in an <code>a</code> element with the <code>href</code> set to <code>https://freecodecamp.org</code>, and the <code>target</code> set to <code>_blank</code>.</p>
<p>Below that, add a second <code>p</code> element with the class <code>publish-date</code> and the text <code>March 7, 2019</code>.</p>
</section>
</details>

<h4>preview</h4>
    <img src="https://github.com/AndriiKot/Desing__CSS_Grid_by_Building_a_Magazine__freeCodeCamp/blob/main/images/previews/preview_step007.png" alt="preview_step007">
  

[back to top](#top)


<table>
  <thead>
      <tr><th height=33 width=100>CSS</th><th height=33 width=100>HTML5</th></tr>
  </thead>
  <tbody>
      <tr><td height=100 width=100><a href=https://www.w3.org/Style/CSS/ target="_self"><img src=https://github.com/AndriiKot/iconsSVG_and_linksDocs/blob/main/svg/css.svg alt=CSS></a></td><td height=100 width=100><a href=https://html.spec.whatwg.org/multipage/ target="_self"><img src=https://github.com/AndriiKot/iconsSVG_and_linksDocs/blob/main/svg/html.svg alt=HTML5></a></td></tr>
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
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Anton%7CBaskervville%7CRaleway&display=swap" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
    <link rel="stylesheet" href="./styles.css" />
    <title>Magazine</title>
  </head>
  <body>
    <main>
      <section class="heading">
        <header class="hero">
          <img class="hero-img" width="400" loading="lazy"src="https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png" alt="freecodecamp logo">
          <h1 class="hero-title">OUR NEW CURRICULUM</h1>
          <p class="hero-subtitle">Our efforts to restructure our curriculum with a more project-based focus</p>
        </header>
        <div class="author">
          <p class="author-name">By <a href="https://freecodecamp.org" target="_blank">freeCodeCamp</a></p>
          <p class="publish-date">March 7, 2019</p>
        </div>
      </section>
    </main>
  </body>
</html>

```



[back to top](#top)


</details>