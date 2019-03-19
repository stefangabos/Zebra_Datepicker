<img src="https://raw.githubusercontent.com/stefangabos/zebrajs/master/docs/images/logo.png" alt="zebrajs" align="right">

# Zebra Datepicker &nbsp;[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Zebra%20Datepicker%20-%20a%20super-lightweight,%20highly%20configurable,%20cross-browser%20date/time%20picker%20jQuery%20plugin&url=https://github.com/stefangabos/Zebra_Datepicker&via=stefangabos&hashtags=jquery,datepicker,timepicker,calendar,javascript)

*A super-lightweight, highly configurable, cross-browser date/time picker jQuery plugin*

[![npm](https://img.shields.io/npm/v/zebra_datepicker.svg)](https://www.npmjs.com/package/zebra_datepicker) [![Total](https://img.shields.io/npm/dt/zebra_datepicker.svg)](https://www.npmjs.com/package/zebra_datepicker) [![Monthly](https://img.shields.io/npm/dm/zebra_datepicker.svg)](https://www.npmjs.com/package/zebra_datepicker) [![JSDelivr](https://data.jsdelivr.com/v1/package/npm/zebra_datepicker/badge?style=rounded)](https://www.jsdelivr.com/package/npm/zebra_datepicker) [![License](https://img.shields.io/npm/l/zebra_datepicker.svg)](https://github.com/stefangabos/Zebra_Datepicker/blob/master/LICENSE.md)

Zebra_Datepicker is a small yet and highly configurable date picker / time picker jQuery plugin, meant to enrich forms by adding the date/time picker functionality to them. This jQuery plugin will automatically add a calendar icon to the indicated input fields which, when clicked, will open the attached date picker. Users can easily jump between months and years due to the date picker's intuitive interface. The selected date will be entered in the input field using the date format of choice, configurable in the date picker's options.

## Features

 - it is small – it weights around 30KB minified (9.1KB gzipped) offering the best ratio of features per used bytes
 - it is both a date picker as well as a time picker
 - it's cross-browser – works in every major browser; works also in Internet Explorer 6!
 - has a default color scheme that blends-in well with almost any design, and it's easily customizable through the well-organized CSS file; two additional themes are included, one of them being for use with <a href="http://twitter.github.io/bootstrap/">Twitter Bootstrap</a>
 - offers an intuitive interface allowing for easy navigation through months and years
 - offers an intuitive mechanism for disabling dates and date ranges using a syntax similar to cron's syntax
 - supports defining of custom weekend days for countries that don't have the weekend on Saturday and Sunday
 - supports most of date formats you can think of, borrowing the syntax of PHP's date function
 - supports all sorts of combinations for starting and ending dates
 - date pickers can be "paired" – where one or more date pickers will use the value of another date picker as starting date
 - supports internationalization
 - supports RTL languages
 - works by automatically attaching a small calendar icon to the indicated input fields which displays the attached date picker when clicked.
 - it's compatible with AMD and CommonJS

[![Themes](https://raw.github.com/stefangabos/Zebra_Datepicker/master/examples/themes.png)](https://stefangabos.github.io/Zebra_Datepicker/)

## Demo

See the [demos](https://stefangabos.github.io/Zebra_Datepicker/)

## Requirements

Zebra Datepicker has no dependencies other than jQuery 1.7.0+ and requires that the page you are using the plugin on to have a strict doctype like:

```html
<!doctype html>
```

## Installation

Zebra Datepicker is available as a [npm package](https://www.npmjs.com/package/zebra_datepicker). To install it use:

```bash
# the "--save" argument adds the plugin as a dependency in packages.json
npm install zebra_datepicker --save
```

Zebra Datepicker is also available as a [Bower package](http://bower.io/). To install it use:

```bash
# the "--save" argument adds the plugin as a dependency in bower.json
bower install zebra_datepicker --save
```

## How to use

First, load jQuery from a CDN and provide a fallback to a local source like:

```html
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script>window.jQuery || document.write('<script src="path/to/jquery-3.3.1.js"><\/script>')</script>
```

Load the Zebra Datepicker jQuery plugin:

```html
<script src="path/to/zebra_datepicker.min.js"></script>
```

Alternatively, you can load Zebra Datepicker from [JSDelivr CDN](https://www.jsdelivr.com/package/npm/zebra_datepicker) like this:
```html
<!-- for the most recent version, not recommended in production -->
<script
  src="https://cdn.jsdelivr.net/npm/zebra_datepicker@latest/dist/zebra_datepicker.min.js"></script>

<!-- for a specific version -->
<script
  src="https://cdn.jsdelivr.net/npm/zebra_datepicker@1.9.6/dist/zebra_datepicker.min.js"></script>

<!-- replacing "min" with "src" will serve you the non-compressed version -->
```

Load the style sheet file from a local source

```html
<link rel="stylesheet" href="path/to/theme/zebra_datepicker.min.css">
```

...or from [JSDelivr CDN](https://www.jsdelivr.com/package/npm/zebra_datepicker)

```html
<!-- for the most recent version of the "default" theme -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/zebra_datepicker@latest/dist/css/default/zebra_datepicker.min.css">

<!-- for the most recent version of the "bootstrap" theme -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/zebra_datepicker@latest/dist/css/bootstrap/zebra_datepicker.min.css">

<!-- replacing "min" with "src" will serve you the non-compressed version -->
```

> Zebra Datepicker is also available on [cdnjs](https://cdnjs.com/libraries/Zebra_datepicker), one of the most famous free and public web front-end CDN services

Now, within the DOM-ready event, attach the Zebra Datepicker plugin to a `<input type="text">` control

```javascript
$(document).ready(function() {

    // assuming the controls you want to attach the plugin to
    // have the "datepicker" class set
    $('input.datepicker').Zebra_DatePicker();

});
```

This will attach a calendar and to the specified element(s). Clicking the icon, will make the date picker visible.

To get a reference to the instance of Zebra DatePicker attached to an element do:

```javascript
var datepicker = $('selector').data('Zebra_DatePicker');
```

## Configuration options

## Properties

> All parameters are optional.

*Note that any of the properties below may also be set via data attributes. To do this you have prefix the name of the property you want to set with `data-zdp_`. One important thing to remember is that if the value of the property is an array you’ll have to use double quotes inside the square brackets and therefore single quotes around the attribute. See [example](https://stefangabos.github.io/Zebra_Datepicker/#data-attributes).*

<table width"100%">
    <thead>
    <tr>
        <th>Property</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td valign="top"><a name="always_visible"></a><strong>always_visible</strong></td>
        <td valign="top"><em>mixed</em></td>
        <td valign="top"><code>false</code></td>
        <td valign="top">
            Should the date picker be always visible?<br>
            Setting this property to a jQuery element will result in the date picker being always visible, the indicated element acting as the date picker's container;<br><br>
            Setting this property to boolean <code>true</code> will result in the date picker not closing when selecting a date but only when the user clicks outside the date picker.
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="container"></a><strong>container</strong></td>
        <td valign="top"><em>jQuery</em></td>
        <td valign="top"><code>$('body')</code></td>
        <td valign="top">
            By default, the date picker is injected into the document's <code>&lt;body&gt;</code> element; use this property to tell the library to inject the date picker into a custom element - useful when you want the date picker to open at a specific position.
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="container"></a><strong>current_date</strong></td>
        <td valign="top"><em>mixed</em></td>
        <td valign="top"><code>false</code></td>
        <td valign="top">
            By default, the current date (the value of <em>Today</em>) is taken from the system where the date picker is run on.<br>Set this to a date in the format of <code>YYYY-MM-DD</code> to use a different date.
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="custom_classes"></a><strong>custom_classes</strong></td>
        <td valign="top"><em>Array</em></td>
        <td valign="top"><code>false</code></td>
        <td valign="top">
            Dates that should have custom classes applied to them.<br>
            An object in the form of<br><br>
            <code>{</code><br>
            <code>'myclass1': [dates_to_apply_the_custom_class_to],</code><br>
            <code>'myclass2': [dates_to_apply_the_custom_class_to]</code><br>
            <code>}</code><br><br>
            ...where <em>dates_to_apply_the_custom_class_to</em> is an array of dates in the same format as required for the <code>disabled_dates</code> property.<br><br>
            Custom classes will be applied <strong>only in the day picker view</strong> and not on month/year views! Also note that the class name will have the <em>"_disabled"</em> suffix added if the day the class is applied to is disabled.<br><br>
            In order for the styles in your custom classes to be applied, make sure you are using the following syntax:<br><br>
            <code>.Zebra_DatePicker .dp_daypicker td.myclass1 { .. }</code><br>
            <code>.Zebra_DatePicker .dp_daypicker td.myclass1_disabled { .. }</code>
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="days"></a><strong>days</strong></td>
        <td valign="top"><em>Array</em></td>
        <td valign="top"><code>['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']</code></td>
        <td valign="top">
            Days of the week, Sunday to Saturday.
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="days_abbr"></a><strong>days_abbr</strong></td>
        <td valign="top"><em>mixed</em></td>
        <td valign="top"><code>false</code></td>
        <td valign="top">
            Abbreviated names of days.<br><br>
            By default, the abbreviated name of a day consists of the first 2 letters from the day's full name. While this is common for most languages, there are also exceptions for languages like Thai, Loa, Myanmar, etc. where this is not correct. For these cases, specify an array with the abbreviations to be used for the 7 days of the week; leave it <code>false</code> to use the first 2 letters of a day's name as the abbreviation.
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="default_position"></a><strong>default_position</strong></td>
        <td valign="top"><em>string</em></td>
        <td valign="top"><code>'above'</code></td>
        <td valign="top">
            The position of the date picker relative to the element it is attached to.<br><br>
            Note that, regardless of this setting, the date picker's position will be automatically adjusted to fit in the view port, if needed.<br><br>
            Possible values are <code>above</code> and <code>below</code>.<br><br>
            <blockquote>This property will be ignored if <code>always_visible</code> or <code>container</code> properties are set!</blockquote>
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="direction"></a><strong>direction</strong></td>
        <td valign="top"><em>mixed</em></td>
        <td valign="top"><code>0</code></td>
        <td valign="top">Direction of the calendar<br><br>
            <ul>
                <li><code>n</code> (a positive integer) creates a future-only calendar beginning at n days after the reference date<sup><a href="#reference_date">1</a></sup></li>
                <li><code>-n</code> (a negative integer) creates a past-only calendar ending n days before the reference date</li>
                <li><code>0</code> creates a calendar with no restrictions</li>
                <li>boolean <code>true</code> creates a future-only calendar starting with the reference date</li>
                <li>boolean <code>false</code> for a past-only calendar ending on the reference date</li>
            </ul>
            You may also set this property to an array with two elements in the following combinations:<br><br>
            <ul>
                <li>first item is boolean <code>true</code> (calendar starts on the reference date), a <code>positive integer</code> (calendar starts n days after the reference date), or a <code>valid date</code> given in the format defined by the <code>format</code> attribute (calendar starts at the specified date), and the second item is boolean <code>false</code> (the calendar has no ending date), a <code>positive integer</code> (calendar ends n days after the starting date), or a <code>valid date</code> given in the format defined by the <code>format</code> attribute and which occurs after the starting date (calendar ends at the specified date)<br><br></li>
                <li>first item is boolean <code>false</code> (calendar ends on the reference date), a <code>negative integer</code> (calendar ends n days before the reference date), or a <code>valid date</code> given in the format defined by the <code>format</code> attribute (calendar ends at the specified date), and the second item is a <code>positive integer</code> (calendar ends n days before the ending date), or a <code>valid date</code> given in the format defined by the <code>format</code> attribute and which occurs before the starting date (calendar starts at the specified date)</li>
            </ul>
            Examples:<br><br>
            <code>[1, 7]</code> calendar starts tomorrow and ends seven days after that<br>
            <code>[true, 7]</code> calendar starts on the <em>reference date</em> and ends seven days after that<br>
            <code>['2013-01-01', false]</code> calendar starts on January 1st 2013 and has no ending date ("format" is YYYY-MM-DD)<br>
            <code>[false, '2012-01-01']</code> calendar ends on the <em>reference date</em> and starts on January 1st 2012 ("format" is YYYY-MM-DD)<br><br>
            <blockquote>Note that <code>disabled_dates</code> property will still apply!</blockquote><br>
            <blockquote><a name="reference_date"></a>The <code>reference date</code> is the current date unless the date picker is the <code>pair</code> of another date picker, case in which the reference date is the date selected in that date picker.</blockquote>
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="disable_time_picker"></a><strong>disable_time_picker</strong></td>
        <td valign="top"><em>boolean</em></td>
        <td valign="top"><code>false</code></td>
        <td valign="top">By default, setting a format that also involves time (<code>h</code>, <code>H</code>, <code>g</code>, <code>G</code>, <code>i</code>, <code>s</code>, <code>a</code>, <code>A</code>) will automatically enable the time picker. If you want to use a format that involves time but you don't want the time picker, set this property to <code>true</code>.
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="disabled_dates"></a><strong>disabled_dates</strong></td>
        <td valign="top"><em>mixed</em></td>
        <td valign="top"><code>false</code><br><small>no disabled dates</small></td>
        <td valign="top">
            An array of disabled dates in the following format: <code>'day month year weekday'</code> where <em>weekday</em> is optional and can be <code>0-6</code> (Saturday to Sunday).<br><br>
            The syntax is similar to cron's syntax: the values are separated by spaces and may contain <code>*</code> (asterisk) <code>-</code> (dash) and <code>,</code> (comma) delimiters.<br><br>
            Examples:<br><br>
            <code>['1 1 2012']</code> would disable January 1, 2012<br>
            <code>['* 1 2012']</code> would disable all days in January 2012<br>
            <code>['1-10 1 2012']</code> would disable January 1 through 10 in 2012<br>
            <code>['1,10 1 2012']</code> would disable January 1 and 10 in 2012<br>
            <code>['1-10,20,22,24 1-3 *']</code> would disable 1 through 10, plus the 22nd and 24th of January through March for every year<br>
            <code>['* * * 0,6']</code> would disable all Saturdays and Sundays<br>
            <code>['01 07 2012', '02 07 2012', '* 08 2012']</code> would disable 1st and 2nd of July 2012, and all of August of 2012<br><br>
            <blockquote>DISABLING ALL DATES AND NOT SPECIFYING AT LEAST ONE ENABLED DATE WILL SEND THE SCRIPT INTO AN INFINITE LOOP SEARCHING FOR AN ENABLED DATE TO DISPLAY!</blockquote>
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="enabled_dates"></a><strong>enabled_dates</strong></td>
        <td valign="top"><em>mixed</em></td>
        <td valign="top"><code>false</code><br><small>all dates enabled</small></td>
        <td valign="top">
            An array of enabled dates in the same format as required for <code>disabled_dates</code> property. To be used together with the <code>disabled_dates</code> property by first setting the <code>disabled_dates</code> property to something like <code>[* * * *]</code> <em>(which will disable everything)</em> and the setting the <code>enabled_dates</code> property to, say, <code>[* * * 0,6]</code> to enable just weekends.
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="enabled_hours"></a><strong>enabled_hours</strong></td>
        <td valign="top"><em>mixed</em></td>
        <td valign="top"><code>false</code><br><small>all hours are selectable</small></td>
        <td valign="top">
            An array of selectable hours.<br><br>
            <em>Makes sense only when <code>format</code> contains one of the following characters: <code>H</code>, <code>G</code>, <code>h</code>, <code>g</code>. Valid values are between <code>0-24</code> (not padded with <code>0</code>!) when <code>format</code> contains <code>H</code> or <code>G</code> characters, and between <code>1-12</code> (not padded with <code>0</code>!) when <code>format</code> contains <code>h</code> or <code>g</code> characters.</em>
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="enabled_minutes"></a><strong>enabled_minutes</strong></td>
        <td valign="top"><em>mixed</em></td>
        <td valign="top"><code>false</code><br><small>all minutes are selectable</small></td>
        <td valign="top">
            An array of selectable minutes.<br><br>
            <em>Makes sense only when <code>format</code> contains the <code>i</code> character. Valid values are between <code>0-59</code> (not padded with <code>0</code>!)
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="enabled_seconds"></a><strong>enabled_seconds</strong></td>
        <td valign="top"><em>mixed</em></td>
        <td valign="top"><code>false</code><br><small>all seconds are selectable</small></td>
        <td valign="top">
            An array of selectable seconds.<br><br>
            <em>Makes sense only when <code>format</code> contains the <code>s</code> character. Valid values are between <code>0-59</code> (not padded with <code>0</code>!)
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="first_day_of_week"></a><strong>fast_navigation</strong></td>
        <td valign="top"><em>boolean</em></td>
        <td valign="top"><code>true</code></td>
        <td valign="top">
            Allows the users to quickly navigate through months and years by clicking on the date picker's top label.
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="first_day_of_week"></a><strong>first_day_of_week</strong></td>
        <td valign="top"><em>integer</em></td>
        <td valign="top"><code>1</code><br><small>Monday</small></td>
        <td valign="top">
            Week's starting day.<br>
            Valid values are <code>0</code> to <code>6</code>, Sunday to Saturday.
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="format"></a><strong>format</strong></td>
        <td valign="top"><em>string</em></td>
        <td valign="top"><code>'Y-m-d'</code></td>
        <td valign="top">
            Format of the returned date.<br><br>
            Accepts the following characters for date formatting: <code>d</code>, <code>D</code>, <code>j</code>, <code>l</code>, <code>N</code>, <code>w</code>, <code>S</code>, <code>F</code>, <code>m</code>, <code>M</code>, <code>n</code>, <code>Y</code>, <code>y</code>, <code>h</code>, <code>H</code>, <code>g</code>, <code>G</code>, <code>i</code>, <code>s</code>, <code>a</code>, <code>A</code>, borrowing the syntax from PHP's <a href="http://php.net/manual/en/function.date.php">date</a> function.<br><br>
            If <code>format</code> property contains time-related characters (<code>g</code>, <code>G</code>, <code>h</code>, <code>H</code>, <code>i</code>, <code>s</code>, <code>a</code>, <code>A</code>), the time picker will be automatically enabled.<br><br><blockquote>If you want to use a format that involves time but you don't want the time picker, set the <code>disable_time_picker</code> property to true.</blockquote>
            Note that when setting a date format without days (<code>d</code>, <code>j</code>), the users will be able to select only years and months, and when setting a format without months and days (<code>F</code>, <code>m</code>, <code>M</code>, <code>n</code>, <code>t</code>, <code>d</code>, <code>j</code>), the users will be able to select only years. Similarly, setting a format that contains only time-related characters, will result in users being able to only select time.<br><br><blockquote>Setting a time format containing <code>a</code> or <code>A</code> (12-hour format) but using <code>H</code> or <code>G</code> as the hour's format will result in the hour's format being automatically changed to <code>h</code> or <code>g</code>, respectively.</blockquote>
            Also note that the value of the <code>view</code> property may be overridden if it is the case (i.e. a value of <code>days</code> for the <code>view</code> property makes no sense if the date format doesn't allow the selection of days).
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="header_captions"></a><strong>header_captions</strong></td>
        <td valign="top"><em>object</em></td>
        <td valign="top">
            <code><small>header_captions: {</small></code><br>
            <code><small>days: 'F, Y',</small></code><br>
            <code><small>months: 'Y',</small></code><br>
            <code><small>years: 'Y1 - Y2'</small></code><br>
            <code><small>}</small></code>
            </small>
        </td>
        <td valign="top">
            Captions in the date picker's header, for the 3 applicable views: <code>days</code>, <code>months</code>, <code>years</code><br><br>
            For each of the 3 views the following special characters may be used borrowing from PHP's <a href="http://php.net/manual/en/function.date.php">date</a> function's syntax: <code>m</code>, <code>n</code>, <code>F</code>, <code>M</code>, <code>y</code> and <code>Y</code>; any of these will be replaced at runtime with the appropriate date fragment, depending on the currently viewed date. two more special characters are also available <code>Y1</code> and <code>Y2</code> (upper case representing years with 4 digits, lowercase representing years with 2 digits) which represent <code>currently selected year - 7</code> and <code>currently selected year + 4</code> and which are used only in the <code>years</code> view.<br><br>
            Even though any of these special characters may be used in any of the 3 views, you should use <code>m</code>, <code>n</code>, <code>F</code>, <code>M</code> for the <code>days</code> view and <code>y</code>, <code>Y</code>, <code>Y1</code>, <code>Y2</code>, <code>y1</code>, <code>y2</code> for the <code>months</code> and <code>years</code> view or you may get unexpected results!<br><br>
            Text and HTML can also be used, and will be rendered as it is, as in the example below (the library is smart enough to not replace special characters when used in words or HTML tags):<br><br>
            <code>header_captions: {</code><br>
            <code>&nbsp;&nbsp;&nbsp;&nbsp;days:     'Departure:&lt;br&gt;F, Y',</code><br>
            <code>&nbsp;&nbsp;&nbsp;&nbsp;months:   'Departure:&lt;br&gt;Y',</code><br>
            <code>&nbsp;&nbsp;&nbsp;&nbsp;years:    'Departure:&lt;br&gt;Y1 - Y2'</code><br>
            <code>}</code><br><br>
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="icon_margin"></a><strong>icon_margin</strong></td>
        <td valign="top"><em>mixed</em></td>
        <td valign="top"><code>false</code></td>
        <td valign="top">
            The left and right white-space around the icon<br><br>
            If the <code>inside</code> property is set to <code>true</code> then the target element's padding will be altered so that the element's left or right padding (depending on the value of <code>icon_position</code>) will be <code>2 x icon_margin</code> plus the icon's width.<br><br>
            If the <code>inside</code> property is set to <code>false</code>, then this will be the distance between the element and the icon.<br><br>
            Leave it to <code>false</code> to use the element's existing padding
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="icon_position"></a><strong>icon_position</strong></td>
        <td valign="top"><em>string</em></td>
        <td valign="top"><code>'right'</code></td>
        <td valign="top">
            Icon's position.<br>
            Accepted values are <code>left</code> and <code>right</code>
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="inside"></a><strong>inside</strong></td>
        <td valign="top"><em>boolean</em></td>
        <td valign="top"><code>true</code></td>
        <td valign="top">
            Should the icon for opening the date picker be inside the element?<br><br>
            If set to <code>false</code>, the icon will be placed to the right of the parent element, while if set to <code>true</code> it will be placed to the right of the parent element, but <em>inside</em> the element itself
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="lang_clear_date"></a><strong>lang_clear_date</strong></td>
        <td valign="top"><em>string</em></td>
        <td valign="top"><code>'Clear'</code></td>
        <td valign="top">
            the caption for the <em>Clear</em> button.
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="months"></a><strong>months</strong></td>
        <td valign="top"><em>array</em></td>
        <td valign="top"><code>['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],</code></td>
        <td valign="top">
            Month names
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="months_abbr"></a><strong>months_abbr</strong></td>
        <td valign="top"><em>mixed</em></td>
        <td valign="top"><code>false</code></td>
        <td valign="top">
            Abbreviated names of months.<br><br>
            By default, the abbreviated name of a month consists of the first 3 letters from the month's full name. While this is common for most languages, there are also exceptions for languages like Thai, Loa, Myanmar, etc. where this is not correct. For these cases, specify an array with the abbreviations to be used for the months of the year; leave it <code>false</code> to use the first 3 letters of a month's name as the abbreviation.
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="navigation"></a><strong>navigation</strong></td>
        <td valign="top"><em>Array</em></td>
        <td valign="top"><code>navigation: ['&amp;#9664;', '&amp;#9654;', '&amp;#9650;', '&amp;#9660;']</code></td>
        <td valign="top">
            HTML to be used for the previous/next and up/down buttons, in that order.
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="offset"></a><strong>offset</strong></td>
        <td valign="top"><em>array</em></td>
        <td valign="top"><code>[5, -5]</code></td>
        <td valign="top">The offset, in pixels (x, y), to shift the date picker's position relative to the top-right of the icon that toggles the date picker or, if the icon is disabled, relative to the top-right corner of the element
        the plugin is attached to.<br><br>
        Note that this only applies if the position of the calendar, relative to the browser's viewport, doesn't require the date picker to be placed automatically so that it is visible!
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="open_icon_only"></a><strong>open_icon_only</strong></td>
        <td valign="top"><em>boolean</em></td>
        <td valign="top"><code>false</code></td>
        <td valign="top">
            When set to <code>true</code>, the date picker will show only when users click on the associated icon, and not also when clicking the associated element.
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="open_on_focus"></a><strong>open_on_focus</strong></td>
        <td valign="top"><em>boolean</em></td>
        <td valign="top"><code>false</code></td>
        <td valign="top">
            Set this property to <code>true</code> if you want the date picker to be shown when the parent element (if <code>open_icon_only</code> is not set to <code>false</code>) or the associated calendar icon (if <code>show_icon</code> is set to <code>true</code>) receive focus.
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="pair"></a><strong>pair</strong></td>
        <td valign="top"><em>object</em></td>
        <td valign="top"><code>false</code><br><small>not paired with another date picker</small></td>
        <td valign="top">
            If set as one or more jQuery elements with Zebra Datepicker attached, those particular date pickers will use the current date picker's value as starting date<br><br>
            Note that the rules set in the <code>direction</code> property will still apply but the reference date will not be the current system date but the value selected in the current date picker.<br><br>
            <blockquote>Use this property only on the date picker containing the "starting date" and not also on the one with the "ending date", or the <code>direction</code> property of the second date picker will not work as expected!<blockquote>
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="readonly_element"></a><strong>readonly_element</strong></td>
        <td valign="top"><em>boolean</em></td>
        <td valign="top"><code>true</code></td>
        <td valign="top">
            Should the element the calendar is attached to, be read-only?<br><br>
            If set to <code>true</code>, a date can be set only through the date picker and cannot be entered manually.
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="rtl"></a><strong>rtl</strong></td>
        <td valign="top"><em>boolean</em></td>
        <td valign="top"><code>false</code></td>
        <td valign="top">
            Whether text should be drawn from right to left.
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="select_other_months"></a><strong>select_other_months</strong></td>
        <td valign="top"><em>boolean</em></td>
        <td valign="top"><code>false</code></td>
        <td valign="top">
            Should days from previous and/or next month be selectable when visible?<br><br>
            Note that if the value of this property is set to <code>true</code>, the value of <code>show_other_months</code> will be considered <code>true</code> regardless of the actual value!
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="show_clear_date"></a><strong>show_clear_date</strong></td>
        <td valign="top"><em>mixed</em></td>
        <td valign="top"><code>0</code></td>
        <td valign="top">
            Should the <em>Clear date</em> button be visible?<br><br>
            Accepted values are:<br><br>
            <ul>
                <li><code>0</code> - the button for clearing a previously selected date is shown only if a previously selected date already exists; this means that if there's no date selected, this button will not be visible; once the user picked a date and opens the date picker again, this time the button will be visible.</li>
                <li><code>true</code> will make the button visible all the time</li>
                <li><code>false</code> will disable the button</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="show_icon"></a><strong>show_icon</strong></td>
        <td valign="top"><em>boolean</em></td>
        <td valign="top"><code>true</code></td>
        <td valign="top">
            Should a calendar icon be added to the elements the plugin is attached to?<br><br>
            When set to <code>true</code> the plugin will attach a calendar icon to the elements the plugin is attached to.
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="show_other_months"></a><strong>show_other_months</strong></td>
        <td valign="top"><em>boolean</em></td>
        <td valign="top"><code>true</code></td>
        <td valign="top">
            Should days from previous and/or next month be visible?
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="show_select_today"></a><strong>show_select_today</strong></td>
        <td valign="top"><em>mixed</em></td>
        <td valign="top"><code>'Today'</code></td>
        <td valign="top">
            Should the <em>Today</em> button be visible?<br><br>
            Setting this property to anything but a boolean <code>false</code> will enable the button and will use the property's value as caption for the button. Setting it to <code>false</code> will disable the button.
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="show_week_number"></a><strong>show_week_number</strong></td>
        <td valign="top"><em>mixed</em></td>
        <td valign="top"><code>false</code></td>
        <td valign="top">
            Should the ISO 8601 week number be displayed?<br><br>
            Anything other than <code>false</code> will enable this feature, and use the given value as column title. For example, <code>show_week_number: 'Wk'</code> would enable this feature and have <em>Wk</em> as the column's title.
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="start_date"></a><strong>start_date</strong></td>
        <td valign="top"><em>mixed</em></td>
        <td valign="top"><code>false</code></td>
        <td valign="top">
            A default date to start the date picker with<br><br>
            Must be specified in the format defined by the <code>format</code> property, or as a JavaScript Date object<br><br>
            If you have a date format that contains time and you need to set a default time but the date should be the current date, here's one way of doing it:<br><br>
            Prior to version <code>1.9.11</code>:<br><br>
            <code>var date = new Date(); // have this somewhere</code><br><br>
            <code>// set the start_date property like</code><br>
            <code>start_date: date.getFullYear() + '-' +</code><br>
            <code>&nbsp;&nbsp;(date.getMonth() + 1 < 10 ? '0' : '') +</code><br>
            <code>&nbsp;&nbsp;(date.getMonth() + 1) + '-' +</code><br>
            <code>&nbsp;&nbsp;(date.getDate() < 10 ? '0' : date.getDate()) +</code><br>
            <code>&nbsp;&nbsp;' 12:00'</code><br><br>
            Starting with version <code>1.9.11</code>:<br><br>
            <code>start_date: new Date()</code><br><br>
            <blockquote>Note that this value is used only if there is no value in the field the date picker is attached to!</blockquote>
            <blockquote>The property's value can be a JavaScript Date object since version 1.9.11</blockquote>
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="strict"></a><strong>strict</strong></td>
        <td valign="top"><em>boolean</em></td>
        <td valign="top"><code>false</code></td>
        <td valign="top">
            Should default values, in the input field the date picker is attached to, be deleted if they are not valid according to <code>direction</code> and/or <code>disabled_dates</code>?
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="view"></a><strong>view</strong></td>
        <td valign="top"><em>string</em></td>
        <td valign="top"><code>'days'</code></td>
        <td valign="top">
            How should the date picker start:<br><br>
            Valid values are <code>days</code>, <code>months</code>, <code>years</code> and <code>time</code>.<br><br>
            Note that the date picker is always cycling <code>days -> months -> years</code> when clicking in the date picker's header, and <code>years -> months -> days</code> when selecting dates (skipping the views that are missing because of the date's format)<br><br>
            The value of the <code>view</code> property may be overridden if the date's format requires so! (i.e. <code>days</code> for the <code>view</code> property makes no sense if the date format doesn't allow the selection of days)
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="weekend_days"></a><strong>weekend_days</strong></td>
        <td valign="top"><em>Array</em></td>
        <td valign="top"><code>[0, 6]</code><br><small>Saturday and Sunday</small></td>
        <td valign="top">
            Days of the week that are considered <em>weekend days</em><br>
            Valid values are <code>0</code> to <code>6</code>, Sunday to Saturday.
        </td>
    </tr>
    <tr>
        <td valign="top"><a name="zero_pad"></a><strong>zero_pad</strong></td>
        <td valign="top"><em>boolean</em></td>
        <td valign="top"><code>false</code></td>
        <td valign="top">
            Should day numbers < 10 be padded with zero?<br>
            When set to <code>true</code>, day numbers < 10 will be prefixed with <code>0</code>.
        </td>
    </tr>
    </tbody>
</table>

## Events

#### `onChange`

Callback to be executed whenever the user changes the view (days/months/years/time), as well as when the user navigates by clicking on the <code>next/previous</code> icons in any of the views;

The callback function receives 2 arguments

- the current view (`days`, `months`, `years` or `time`)
- an array containing the <em>active</em> elements (not disabled) from the view, as jQuery elements, allowing for easy customization and interaction with particular cells in the date picker's view

The `this` keyword inside the callback function refers to the element the date picker is attached to, as a jQuery object.

For simplifying searching for particular dates, each element gets a `date` data attribute whose format depends on the value of the `view` argument as follows:

- `YYYY-MM-DD` for elements in the `days` view
- `YYYY-MM` for elements in the `months` view
- `YYYY` for elements in the `years` view

> Note that this data attribute is not also set for elements in the `time` view.

Here's how we could highlight the 24<sup>th</sup> day of each month of each year:

```javascript
$('selector').Zebra_DatePicker({

    //  execute a function whenever the user changes the view
    //  (days/months/years), as well as when the user
    //  navigates by clicking on the "next"/"previous" icons
    //  in any of the views
    onChange: function(view, elements) {

        //  on the "days" view...
        if (view === 'days') {

            //  iterate through the active elements in the view
            elements.each(function() {

                //  to simplify searching for particular dates,
                //  each element gets a "date" data attribute which
                //  is the form of:
                //  - YYYY-MM-DD for elements in the "days" view
                //  - YYYY-MM for elements in the "months" view
                //  - YYYY for elements in the "years" view

                //  so, because we're on a "days" view,
                //  let's find the 24th day using a regular
                //  expression (notice that this will apply to
                //  every 24th day of every month of every year)
                if ($(this).data('date').match(/\-24$/))

                    // and highlight it!
                    $(this).css({
                        backgroundColor:    '#C40000',
                        color:              '#FFF'
                    });

            });

        }

    }

});
```

#### `onClear`

Callback function to be executed when the user clicks the <em>Clear</em> button.

The callback function takes no arguments. The `this` keyword inside the callback function refers to the element the date picker is attached to, as a jQuery object.

#### `onClose`

Callback function to be executed when the date picker is closed.

The callback function takes no arguments. The `this` keyword inside the callback function refers to the element the date picker is attached to, as a jQuery object.

#### `onOpen`

Callback function to be executed when the date picker is shown.

The callback function takes no arguments. The `this` keyword inside the callback function refers to the element the date picker is attached to, as a jQuery object.

#### `onSelect`

Callback function to be executed when a date is selected.

The callback function takes 3 arguments:

- the date in the format specified by the <code>format</code> attribute
- the date in <code>YYYY-MM-DD</code> format and additionally hours, minutes and seconds if time picker is enabled
- the date as a JavaScript Date object

`this` inside the callback function refers to the element the date picker is attached to, as a jQuery object

## Methods

First, get a reference to the plugin like

```javascript
var datepicker = $('selector').data('Zebra_DatePicker');
```

Then call a method like
```javascript
datepicker.update();
```

#### `clear_date()`

Clears the selected date (if any)

#### `destroy()`

Removes the plugin from an element

#### `set_date(date)`

Sets the value of the element the date picker is attached to, to the specified date;

The date must be in the format defined by the <code>format</code> property <strong>or</strong> a JavaScript <code>Date</code> object.

The date will not be set if it is disabled (either because of <code>disabled_dates</code> or because of <code>direction</code> properties)

<blockquote>The method's argument can be a JavaScript <code>Date</code> object since version <code>1.9.11</code></blockquote>

#### `show()`

Shows the date picker (unless the <code>always_visible</code> property is set to <code>true</code>)

#### `hide()`

Hides the date picker (unless the <code>always_visible</code> property is set to <code>true</code>)

#### `update([options])`

Updates configuration options at run-time, and recalculates date picker's icon position relative to the parent element. You should call this method whenever you show/hide/reposition the parent element, or alter the parent element's dimensions.

The method accepts an optional argument - an object with configuration options to update:

```javascript
var datepicker = $('selector').data('Zebra_DatePicker');
datepicker.update({
    direction: 1
});
```

If you just want to update the icon's position, simply call the method without any arguments:

```javascript
var datepicker = $('selector').data('Zebra_DatePicker');
datepicker.update();
```

## Global options

If you have multiple date pickers that share common options you can set these options like this:

```javascript
// this needs to be called only once and does
// not have to be called from within a "ready" block!
$.fn.Zebra_DatePicker.defaults = {
    // any valid options
}
```

Any options set like this will be applied to **all** the newly created date picker. Obviously, options set at the creation of any new date picker would overwrite the respective defaults.

## Support the development of this project

[![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://www.paypal.me/stefangabos)

## Sponsors

Cross browser/device testing is done with

[![BrowserStack](https://github.com/stefangabos/Zebra_Dialog/raw/master/examples/browserstack.png)](https://www.browserstack.com/)
