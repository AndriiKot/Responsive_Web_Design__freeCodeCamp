
<a id=top></a>

# Building a Magazine

<details>
      <summary>
        <h4>Follow Links Steps</h4>
      </summary>
       
<table>
  <thead>
    <tr><th><a href="https://github.com/AndriiKot/Desing__CSS_Grid_by_Building_a_Magazine__freeCodeCamp//tree/main/steps/__000__title_" target="_self">Step 0</a></th><th><a href="https://github.com/AndriiKot/Desing__CSS_Grid_by_Building_a_Magazine__freeCodeCamp//tree/main/steps/__001__step__" target="_self">Step 1</a></th><th><a href="https://github.com/AndriiKot/Desing__CSS_Grid_by_Building_a_Magazine__freeCodeCamp//tree/main/steps/__002__step__" target="_self">Step 2</a></th><th><a href="https://github.com/AndriiKot/Desing__CSS_Grid_by_Building_a_Magazine__freeCodeCamp//tree/main/steps/__003__step__" target="_self">Step 3</a></th><th><a href="https://github.com/AndriiKot/Desing__CSS_Grid_by_Building_a_Magazine__freeCodeCamp//tree/main/steps/__004__step__" target="_self">Step 4</a></th><tr><th><a href="https://github.com/AndriiKot/Desing__CSS_Grid_by_Building_a_Magazine__freeCodeCamp//tree/main/steps/__005__step__" target="_self">Step 5</a></th><th><a href="https://github.com/AndriiKot/Desing__CSS_Grid_by_Building_a_Magazine__freeCodeCamp//tree/main/steps/__006__step__" target="_self">Step 6</a></th><th><a href="https://github.com/AndriiKot/Desing__CSS_Grid_by_Building_a_Magazine__freeCodeCamp//tree/main/steps/__007__step__" target="_self">Step 7</a></th><th><a href="https://github.com/AndriiKot/Desing__CSS_Grid_by_Building_a_Magazine__freeCodeCamp//tree/main/steps/__008__step__" target="_self">Step 8</a></th><th><a href="https://github.com/AndriiKot/Desing__CSS_Grid_by_Building_a_Magazine__freeCodeCamp//tree/main/steps/__009__step__" target="_self">Step 9</a></th><tr><th><a href="https://github.com/AndriiKot/Desing__CSS_Grid_by_Building_a_Magazine__freeCodeCamp//tree/main/steps/__010__step__" target="_self">Step 10</a></th><th><a href="https://github.com/AndriiKot/Desing__CSS_Grid_by_Building_a_Magazine__freeCodeCamp//tree/main/steps/__011__step__" target="_self">Step 11</a></th></tr>
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
<p>Below your <code>.heading</code> element, create a new <code>section</code> element with the <code>class</code> set to <code>text</code>. Within that, create a <code>p</code> element with the <code>class</code> set to <code>first-paragraph</code> and the following text:</p>
<details class="code-details" open=""><summary class="code-details-summary">Example Code</summary><pre class="language-markup" tabindex="0" role="region" aria-label=" code example"><code class="language-markup">Soon the freeCodeCamp curriculum will be 100% project-driven learning. Instead of a series of coding challenges, you'll learn through building projects - step by step. Before we get into the details, let me emphasize: we are not changing the certifications. All 6 certifications will still have the same 5 required projects. We are only changing the optional coding challenges.
</code></pre></details>
</section>
</details>

<h4>preview</h4>
    <img src="https://github.com/AndriiKot/Desing__CSS_Grid_by_Building_a_Magazine__freeCodeCamp/blob/main/images/previews/preview_step011.png" alt="preview_step011">
  

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
          <p class="author-name">By <a rel="noreferrer" href="https://freecodecamp.org" target="_blank">freeCodeCamp</a></p>
          <p class="publish-date">March 7, 2019</p>
        </div>
        <div class="social-icons">
          <a href="https://www.facebook.com/freecodecamp"><i class="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com/freecodecamp"><i class="fab fa-twitter"></i></a>
          <a href="https://instagram.com/freecodecamp"><i class="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/school/free-code-camp"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://www.youtube.com/freecodecamp"><i class="fab fa-youtube"></i></a>
        </div>
      </section>
      <section class="text">
       <p class="first-paragraph">
          Soon the freeCodeCamp curriculum will be 100% project-driven learning. 
          Instead of a series of coding challenges, 
          you'll learn through building projects - step by step. 
          Before we get into the details, let me emphasize: 
          we are not changing the certifications. All 6 certifications 
          will still have the same 5 required projects. 
          We are only changing the optional coding challenges.
       </p>
      </section>
    </main>
  </body>
</html>

```



[back to top](#top)


</details>