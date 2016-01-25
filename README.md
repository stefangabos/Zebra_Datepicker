##Zebra_Datepicker

####A super-lightweight, highly configurable, cross-browser date picker jQuery plugin

Zebra_Datepicker is a small, compact and highly configurable datepicker jQuery plugin, meant to enrich forms by adding the datepicker functionality to them. This jQuery plugin will automatically add a calendar icon to the indicated input fields which, when clicked, will open the attached datepicker. Users can easily jump between months and years due to the datepicker’s intuitive interface. The selected date will be entered in the input field using the date format of choice, configurable in the datepicker’s options.

##Features

 - it is small – it weights around 23KB minified offering the best ratio of features per used bytes
 - it’s compact – unlike other datepickers, this datepicker is one-file only
 - it’s cross-browser – works in every major browser; works also in Internet Explorer 6 where it uses an iFrameShim to stay above select controls
 - it’s compatible with AMD and CommonJS
 - has a default color scheme that blends-in well with almost any design, and it’s easily customizable through the well-organized CSS file; two additional themese are included, one of them being for use with <a href="http://twitter.github.io/bootstrap/">Twitter Bootstrap</a>
 - offers an intuitive interface fast and easy navigation through months and years
 - offers an intuitive mechanism for disabling dates and date ranges using a syntax similar to cron‘s syntax
 - supports defining of custom weekend days for countries that don’t have the weekend on Saturday and Sunday
 - supports most of date formats you can think of, borrowing the syntax of PHP’s date function
 - supports all sorts of combinations for starting and ending dates
 - date pickers can be “paired” – where one or more date pickers will use the value of another date picker as starting date
 - supports internationalization
 - works by automatically attaching a small calendar icon to the indicated input fields which displays the attached datepicker when clicked.

![Themes](https://raw.github.com/stefangabos/Zebra_Datepicker/master/public/images/themes.png)

## Requirements

Zebra_Datepicker has no dependencies other than jQuery 1.5.2+ but requires that the page you are using the plugin on to have a strict doctype like:

```html
<!doctype html>
```

## How to use

Zebra_Datepicker is available as a [Bower package](http://bower.io/). To install it use:

```
bower install zebra_datepicker
```

Zebra_Datepicker is also available as a [npm package](https://www.npmjs.com/). To install it use:

```
npm install zebra_datepicker
```

Load the latest version of jQuery from a CDN and provide a fallback to a local source, like:

```html
<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
<script>window.jQuery || document.write('<script src="path/to/jquery-1.12.0.js"><\/script>')</script>
```

Load the Zebra_Datepicker jQuery plugin:

```html
<script type="text/javascript" src="path/to/zebra_datepicker.js"></script>
```

Load the stylesheet:

```html
<link rel="stylesheet" href="path/to/zebra_datepicker.css" type="text/css">
```

Now, within the DOM-ready event, attach the Zebra_Datepicker plugin to a &lt;input type=”text”> control

```javascript
$(document).ready(function() {

    // assuming the controls you want to attach the plugin to
    // have the "datepicker" class set
    $('input.datepicker').Zebra_DatePicker();

});
```

This will attach a calendar icon to the specified element(s). Clicking the icon, will make the date picker visible.

To get a reference to the instance of Zebra_DatePicker attached to an element do:

```javascript
var $zdp = $('#element').data('Zebra_DatePicker');
```

Configuration options and demos on the **[project's homepage](http://stefangabos.ro/jquery/zebra-datepicker/)**
