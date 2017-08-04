# FlexSlider

https://woocommerce.com/flexslider/

https://github.com/woocommerce/FlexSlider/wiki/FlexSlider-Properties

```html
<!-- Place somewhere in the <head> of your document -->
<link rel="stylesheet" href="flexslider.css" type="text/css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
<script src="jquery.flexslider.js"></script>
```
```html
<!-- Place somewhere in the <body> of your page -->
<div class="flexslider">
  <ul class="slides">
    <li>
      <img src="slide1.jpg" />
    </li>
    <li>
      <img src="slide2.jpg" />
    </li>
    <li>
      <img src="slide3.jpg" />
    </li>
  </ul>
</div>
```
```js
$(window).load(function() {
    $('.flexslider').flexslider();
  });
```
