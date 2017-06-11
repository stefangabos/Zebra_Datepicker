<img src="https://raw.githubusercontent.com/stefangabos/zebrajs/master/docs/images/logo.png" alt="zebrajs" align="right">

# Zebra_Datepicker

*A super-lightweight, highly configurable, cross-browser date picker jQuery plugin*

[![npm](https://img.shields.io/npm/v/zebra_datepicker.svg)](https://www.npmjs.com/package/zebra_datepicker) [![Total](https://img.shields.io/npm/dt/zebra_datepicker.svg)](https://www.npmjs.com/package/zebra_datepicker) [![Monthly](https://img.shields.io/npm/dm/zebra_datepicker.svg)](https://www.npmjs.com/package/zebra_datepicker) [![License](https://img.shields.io/npm/l/zebra_datepicker.svg)](https://www.npmjs.com/package/zebra_datepicker)

Zebra_Datepicker is a small yet and highly configurable datepicker jQuery plugin, meant to enrich forms by adding the datepicker functionality to them. This jQuery plugin will automatically add a calendar icon to the indicated input fields which, when clicked, will open the attached datepicker. Users can easily jump between months and years due to the datepicker's intuitive interface. The selected date will be entered in the input field using the date format of choice, configurable in the datepicker's options.

## Features

 - it is small – it weights around 25KB minified(7.9KB gzipped) offering the best ratio of features per used bytes
 - it's cross-browser – works in every major browser; works also in Internet Explorer 6!
 - it's compatible with AMD and CommonJS
 - has a default color scheme that blends-in well with almost any design, and it's easily customizable through the well-organized CSS file; two additional themese are included, one of them being for use with <a href="http://twitter.github.io/bootstrap/">Twitter Bootstrap</a>
 - offers an intuitive interface allowing for easy navigation through months and years
 - offers an intuitive mechanism for disabling dates and date ranges using a syntax similar to cron's syntax
 - supports defining of custom weekend days for countries that don't have the weekend on Saturday and Sunday
 - supports most of date formats you can think of, borrowing the syntax of PHP's date function
 - supports all sorts of combinations for starting and ending dates
 - date pickers can be "paired" – where one or more date pickers will use the value of another date picker as starting date
 - supports internationalization
 - works by automatically attaching a small calendar icon to the indicated input fields which displays the attached datepicker when clicked.

![Themes](https://raw.github.com/stefangabos/Zebra_Datepicker/master/examples/themes.png)

## Requirements

Zebra_Datepicker has no dependencies other than jQuery 1.7.0+ and requires that the page you are using the plugin on to have a strict doctype like:

```html
<!doctype html>
```

## Installation

Zebra_Datepicker is available as a [npm package](https://www.npmjs.com/package/zebra_datepicker). To install it use:

```
npm install zebra_datepicker
```

Zebra_Datepicker is also available as a [Bower package](http://bower.io/). To install it use:

```
bower install zebra_datepicker
```

## How to use

First, load jQuery from a CDN and provide a fallback to a local source like:

```html
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>window.jQuery || document.write('<script src="path/to/jquery-3.2.1.js"><\/script>')</script>
```

Load the Zebra_Datepicker jQuery plugin:

```html
<script src="path/to/zebra_datepicker.min.js"></script>
```

Alternatively, you can load Zebra_Datepicker from [JSDelivr CDN](https://www.jsdelivr.com/) like this:
```html
<!-- for the most recent version -->
<script src="https://cdn.jsdelivr.net/gh/stefangabos/Zebra_Datepicker/dist/zebra_datepicker.min.js"></script>

<!-- for a specific version -->
<script src="https://cdn.jsdelivr.net/gh/stefangabos/Zebra_Datepicker@1.9.6/dist/zebra_datepicker.min.js"></script>

<!-- replacing "min" with "src" will serve you the non-compressed version -->
```

Load the style sheet file from a local source

```html
<link rel="stylesheet" href="path/to/theme/zebra_datepicker.min.css">
```

...or from [JSDelivr CDN](https://www.jsdelivr.com/)

```html
<!-- for the most recent version of the "default" theme -->
<link rel="stylesheet" href=="https://cdn.jsdelivr.net/gh/stefangabos/Zebra_Datepicker/dist/css/default/zebra_datepicker.min.css">

<!-- for the most recent version of the "bootstrap" theme -->
<link rel="stylesheet" href=="https://cdn.jsdelivr.net/gh/stefangabos/Zebra_Datepicker/dist/css/bootstrap/zebra_datepicker.min.css">

<!-- replacing "min" with "src" will serve you the non-compressed version -->
```

Now, within the DOM-ready event, attach the Zebra_Datepicker plugin to a `<input type="text">` control

```javascript
$(document).ready(function() {

    // assuming the controls you want to attach the plugin to
    // have the "datepicker" class set
    $('input.datepicker').Zebra_DatePicker();

});
```

This will attach a calendar and to the specified element(s). Clicking the icon, will make the date picker visible.

To get a reference to the instance of Zebra_DatePicker attached to an element do:

```javascript
var $zdp = $('#element').data('Zebra_DatePicker');
```

