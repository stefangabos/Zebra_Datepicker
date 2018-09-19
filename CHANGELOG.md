## version 1.9.12 (TBA)

- fixed [#124](https://github.com/stefangabos/Zebra_Datepicker/issues/124) where, when resizing the window, the `onClose` event would fire multiple times - thanks [@kouts](https://github.com/kouts)!
- merged pull request [#125](https://github.com/stefangabos/Zebra_Datepicker/pull/125) by [mckey](https://github.com/mckey) fixing a bug when dynamically changing enabled/disabled dates

## version 1.9.11 (August 10, 2018)

- fixed [#112](https://github.com/stefangabos/Zebra_Datepicker/issues/112) - thanks [@AnthonyHache](https://github.com/AnthonyHache)!
- fixed [#122](https://github.com/stefangabos/Zebra_Datepicker/issues/122) and now `start_date` and `set_date` methods accepts their argument also as a JavaScript `Date` object; thanks [alexanderKikhaev](https://github.com/alexanderKikhaev)!
- fixed positioning of `AM/PM` when using 12-hour time format
- CSS is now minified even more by using [clean-css](https://github.com/jakubpawlowicz/clean-css)
- updated examples page

## version 1.9.9 (July 06, 2018)

- global defaults can now be set; see [#110](https://github.com/stefangabos/Zebra_Datepicker/issues/110) and [#94](https://github.com/stefangabos/Zebra_Datepicker/issues/94)
- setting the `readonly_element` property to `FALSE` will now unset the `readonly` attribute from the element, if present; see [#109](https://github.com/stefangabos/Zebra_Datepicker/issues/109)
- fixed a bug where on pages with multiple time pickers, selecting a time on one would select the time on all other time pickers that are empty; see [#115](https://github.com/stefangabos/Zebra_Datepicker/issues/115) and thank you [michealharrington](https://github.com/michealharrington)!
- added a new `disable_time_picker` property for explicitly disabling the time picker even if format includes time-related characters; see [#118](https://github.com/stefangabos/Zebra_Datepicker/issues/118)
- fixed an issue on Android devices; see [#116](https://github.com/stefangabos/Zebra_Datepicker/issues/116)
- allow accented chars in weekday name; see [#120](https://github.com/stefangabos/Zebra_Datepicker/issues/120)
- added version number as a public property - useful to find out the version number even if all you have is the minified source code; see [#96](https://github.com/stefangabos/Zebra_Datepicker/issues/96)

## version 1.9.8 (April 08, 2018)

- fixed some issues because of which the date picker was not working in IE6, 7 & 8
- fixed an issue where on iOS and Microsoft Edge the `next` and `previous` buttons in the header were rendered as emoji characters; see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11844964/
- fixed some issues with the icon's positioning if the target element was explicitly positioned and/or it had margins; the icon's position now depends on the element's padding but can also be set via the newly added `icon_margin`property
- for touch-enabled devices, when `readonly_element` is set to FALSE, wait for the virtual keyboard to appear before positioning the date picker; previously the date picker was being closed on this event
- the date picker is not closing anymore when the screen is dragged (on touch devices)
- fixed [#112](https://github.com/stefangabos/Zebra_Datepicker/issues/112)
- fixed [#104](https://github.com/stefangabos/Zebra_Datepicker/issues/104)
- fixed issue with the `onSelect` event being triggered multiple times if the time picker was enabled and not returning time when it should
- improved user experience in examples
- some documentation updates

## version 1.9.7 (December 03, 2017)

- the date picker now also works as a time picker by setting time-related parts in the `format` property
- the date picker can now also be shown when the parent element and/or the associated icon is focused by setting the newly add `open_on_focus` property to `TRUE`; see [#80](https://github.com/stefangabos/Zebra_Datepicker/issues/80)
- fixed a bug where clearing a date would not return focus to the parent element
- fixed memory leaks, see [#81](https://github.com/stefangabos/Zebra_Datepicker/issues/81), thanks to [@sszabolcs](https://github.com/sszabolcs)
- fixed value of "today" being cached; see [#83](https://github.com/stefangabos/Zebra_Datepicker/issues/83), thanks to [@CJDennis](https://github.com/CJDennis)
- fixed possible issues by adding more randomness for each date picker's internally used ID; see [#84](https://github.com/stefangabos/Zebra_Datepicker/issues/84)
- rewrote the SCSS for all the 3 themes and improved theming by introducing variables
- all the themes are now using a single sprite image instead of multiple images
- source code updates and tweaks because of which the plugin is now compatible with jQuery 1.7.0+ (previously it was compatible with jQuery 1.5.2+)
- improved user experience in examples
- some documentation updates

## version 1.9.6 (June 24, 2017)

- performance improvements and source code tweaks
- new folder structure
- the home of the library is now exclusively on GitHub
- files required in the build process are not included anymore when installing via npm nor when downloading from GitHub

## version 1.9.5 (May 13, 2016)

- fixed a bug when parent elements were having the "display" property set to "block
- fixed a bug with updating a dependent picker; thanks **anli-xsigns**
- added verification if custom class is defined or not, and added extra checks before traversing it; also if mootools is also present, it modifies arrays prototypes so they are not handled well with normal jquery methods if null; thanks **anli-xsigns**
- fixed some memory leaks when destroying the plugin; thanks to **Constantin Teodorescu** for reporting
- fixed a bug with custom classes not working anymore; thanks to **Sune Westphalen**
- optimized images size

## version 1.9.4 (January 25, 2016)

- images now have their own folder instead of being mixed with the stylesheets; thanks to **Maxime Pasquier**
- icon position can now be also set to the left of the element; thanks to **Jennifer** for suggesting
- added possibility to easily apply custom classes to date ranges - see the newly added *custom_classes* property; thanks to **Märt Tibar** for suggesting
- the library is now also available as a [npm package](https://www.npmjs.com/package/zebra_datepicker)
- fixed a bug that made impossible to install the library via [Bower](http://bower.io/)

## version 1.9.3 (January 11, 2016)

- when the "value" attribute of the element is set, use that instead of "start_date"; thanks **Vojtěch Biberle**
- fixed a bug where "header_navigation", "lang_clear_date" and "show_select_today" properties could not be updated via the "update" method; thanks **André Fiedler**
- fixed a bug where the paired date picker was not updated when users would manually enter a date in the first date picker; thanks **Toby** for reporting
- icon position is now updated when changing orientation on mobile devices; thanks to **chenghong** for suggesting
- added "clear_date" and "set_date" public methods; thanks **Jason Davis** for suggesting
- added new "open_icon_only" property which, when set to TRUE, will result in the date picker showing *only* when users click on the associated icon, and not on element focus
- dates prior to year 1000 are now disabled as this library cannot handle years below 1000
- better comnonjs-support; thanks **Stefan Schult**

## version 1.9.2 (April 30, 2015)

- fixed bug with the "views" property which was not working anymore since the previous release; thanks to **DJM75** for reporting!

## version 1.9.1 (April 13, 2015)

- fixed an issue where having more date pickers on a page and destroying one of the date pickers would remove the event handlers for all date pickers on the page; thanks to **lpproulx** for reporting
- date pickers can now also be injected in custom elements; previously date picker were always injected in the <body> element; very useful if you want the date picker to always open at a specific position; thanks to **Daniel Ivan** for suggesting
- the library is now compatible with AMD and CommonJS; thanks to **Andrzej Duś**
- added a new "onClose" event; thanks to **W. van Kuipers**
- added touchstart event for closing the date picker on a touchevent enabled browsers; thanks **W. van Kuipers**
- increased zIndex value to 1200, making the date picker usable with Twitter Bootstrap's modals; thanks to **Kiswono Prayogo**
- better fix for the issues in Firefox, solved in previous release, which made transitions to not work anymore; thanks to **René Jackowski**

## version 1.9.0 (November 14, 2014)

- added some CSS attributes for the main table, in order to override defaults set by some frameworks; thanks to **Paul Morganthall** for suggesting;
- added a new "default_position" property, useful for setting whether the date picker should, by default, appear above or below the element it is attached to;
- fixed an issue in latest versions of Firefox in which, even though the date picker is absolutely positioned, it takes up space in the layout; thanks to **Joost** for noticing;
- fixed a bug with paired date pickers where the second date picker's range was not depending on the first date picker's date *unless* a date in the first date picker was manually selected, and thus ignoring any default values; thanks to **Pascal Lindelauf**;
- fixed a bug with highlighting months where in "months" view, if current date was higher than the number of days in February, the month would not be highlighted; thanks to **Mark Tuor**;
- fixed a bug with where if a text box a date picker is attached to would be disabled at run-time, the date picker's calendar icon would remain "enabled" after calling the "update" method; thanks to **Frans** for reporting;
- datepicker visibility is now controlled from CSS;
- fixed an issue because of which the library was not compatible with jQuery 1.5.2+ (as stated) but required jQuery 1.7+ instead; thanks to **Martin Gaedeke** for spotting it and to **Prakhar Birla** for the fix;

## version 1.8.9 (May 20, 2014)

- added a new "header_captions" property, useful for customizing captions in the datepicker's header, for the 3 possible views: days, months, years; thanks to **Lodewyk** and **Ram** for suggesting;
- added a new "onOpen" event for executing callback functions when the date picker is shown;
- users can now always use the next/previous buttons; thanks to **Mozart** for suggesting;
- the "this" keyword in callbacks now correctly refer to the element the datepicker is attached to; thanks to **syahman** for reporting;
- when having a date formats without year, the "years" view will not be visible anymore; thanks to **MarkG**;
- the "onSelect" callback takes an extra argument - the ISO 8601 week number of the selected date;
- fixed a bug when having non ASCII characters in month names; thanks to **straightdog** and **Muhobrc** for reporting, and to **D-ominik** for providing a fix;
- fixed an issue with the "pair" attribute which, when given as a data attribute, would cause a JavaScript error; thanks to **Domenico Giambra**;
- fixed a bug with the iFrame shim in IE6 which was not working as expected and "selects" elements where shown above the date picker; thanks to **chenghong** for reporting;
- fixed a minor bug where the date picker would close for any key press not just for the ESC key; thanks to **nacho** for reporting;
- fixed a minor bug where, when looking at the "months" view, the selected month would always be highlighted even if the user would switch years; thanks to **Yoyee Zhu** for reporting;
- updated jQuery version in the examples folder to 1.11.1;

## version 1.8.8 (December 09, 2013)

- added integration with [Grunt](http://gruntjs.com/)
- the library is now available as a [Bower](http://bower.io/) package

## version 1.8.7 (November 28, 2013)

- added a new "header_navigation" property allowing custom HTML for the next/previous months buttons; thanks to **norlin**;
- fixed a minor bug with paired date pickers;
- minor performance tweaks;

## version 1.8.6 (October 05, 2013)

- added a new "strict" property which controls whether default values, in the input field the date picker is attached to, should be deleted if they are not valid according to "direction" and/or "disabled_dates", and which is set to FALSE by default; previously the plugin was always removing such dates; thanks **Morten**;
- fixed a bug width selectable dates of other months than the current one having an incorrect class attached to them;  thanks to **Khoomei** for spotting this!
- fixed a bug where when clearing dates of always-visible datepickers, the class indicating the "selected" state of cells was not being removed;
- removed some old code that was used back when the calendar icon was absolutely positioned and because of which the calendar icon was invisible if the parent element was placed in a parent element with "display: none"; thanks to **Michael Residori**;
- updated jQuery version used in examples to 1.10.2;

## version 1.8.5 (September 21, 2013)

- properties can now be set via data attributes; thanks to **Yuriy Silvestrov** who suggested this a long time ago;
- fixed a bug where if the "show_icon" property was set to FALSE an open date picker would not close upon window resize and therefore it would remain in an incorrect position if the parent element was to change position during the process; thanks **Marco**;

## version 1.8.4 (August 11, 2013)

- added a "destroy" method; thanks **TeckniX**;
- date picker now disappears upon window resize; previously it would remain in the same position upon window resize, even though the parent element could be repositioned in the process; thanks **hanneslinder**;
- fixed a position bug that appearing in newer versions of Firefox where Firefox sets the "display" property of &lt;input&gt; elements to "inline" instead of "inline-block" as do the other browsers; thanks to **discotizer**;

## version 1.8.3 (August 04, 2013)

- fixed a bug where the plugin would freeze for certain combinations of disabled/enabled dates; thanks **Yogesh**;
- fixed a bug where having two paired date picker with "direction" set to FALSE, the second date picker will not obey this rule once a date is selected in the first date picker; thanks **Shane M**;
- fixed a bug where when having paired date pickers, the "Today" button was sometimes available although it shouldn't have been; thanks **Matt**;
- fixed some indenting issues and the scope of some variables; thanks **W. van Kuipers**;
- fixed a few minor issues reported by JSFiddle's JSHint;
- minor update of source code regarding optimal usage of jQuery for creating the wrapper around the parent element;

## version 1.8.2 (July 02, 2013)

- fixed a bug where the calendar icon was in fact taking up space in page; due to this I completely changed the way the calendar icon is placed and hopefully I didn't brake it completely :)
- the date picker's "update" method is now automatically called upon page resize and thus taking care of the case when the date picker is attached to an element part of a fluid design

## version 1.8.1 (June 29, 2013)

- fixed a small bug where setting the "show_other_months" property to FALSE and having a full empty row of cells would result in the cells having the wrong height

## version 1.8.0 (June 28, 2013)

- fixed a bug where deciding whether the "next" and "previous" buttons should be shown, the script was not always working as expected; thanks **jojo**;
- fixed a bug where the date picker was not working in IE8 and below; thanks **sascha** and **Souli** for reporting;
- fixed a bug in the "metallic" theme;
- added a new property called "show_select_today" which when set to TRUE allows for quick selection of the current date; thanks **Matt Coady**; read more in the see the [documentation](http://stefangabos.ro/jquery/zebra-datepicker/#configuration);
- changed the name of the "always_show_clear" property to "show_clear_date" and it now can be true, false or 0 (zero), instead of just true or false; see the [documentation](http://stefangabos.ro/jquery/zebra-datepicker/#configuration);
- changed the caption of the "clear date" button from "Clear" to "Clear date";
- minor optimizations in the code;

## version 1.7.7 (May 26, 2013)

- fixed a bug where setting the "direction" property was not working as expected when having the "format" set to just years or months and "direction" was set to an array of 2 integers; like [2011-2013] when "format" was set to "Y"; thanks **Kai**;
- fixed a bug where sometimes the date picker was appearing too far to the right relative to the icon; thanks **Mark**;

## version 1.7.5 (May 06, 2013)

- additional fixes related to the buggy positioning of the date picker's icon when the date picker in scenarios involving different CSS resets and frameworks;
- fixed a bug affecting some more rarely used date formats; thanks **MSP**

## version 1.7.4 (May 05, 2013)

- fixed a bug where the date picker was broken if the page was having the "box-sizing" CSS property set to "border-box", which is the default for most of the CSS frameworks; read more at [http://paulirish.com/2012/box-sizing-border-box-ftw](http://paulirish.com/2012/box-sizing-border-box-ftw/);
- fixed a few bugs related to the positioning of the icon when the date picker was used together with different CSS frameworks and resets;

## version 1.7.3 (May 03, 2013)

- fixed a bug where having in the "disabled_dates" property a rule like ['* * * *'] (to disable all dates), and then, in the "enabled_dates" property having rules that enable only dates in the future, would send the script in an infinite loop; thanks **Miguel Avila**;
- fixed a bug where if a default value did not have days, months and years but only fragments (like, "Feb" or "February" when format was set to "F" or "M" respectively) the current date was used as default date instead; thanks **to MSP**;
- fixed a bug where, when searching for the first selectable date the library would sometimes fail and incorrectly show the month *after* the first selectable month;
- fixed a bug that was introduced in the previous version that could break the script if ranges were used in the "disabled_dates" or "enabled_dates" properties;
- fixed an issue where if the only the "months" view was visible, the user could still use the "next" and "previous" buttons to change years; thanks **MSP**

## version 1.7.1 (April 26, 2013)

- fixed a bug where, when the "select_other_months" property was set to TRUE, days selected from outside the current month would be wrong; thanks **MSP**;
- fixed an issue where the value of the "select_other_months" property was set to TRUE instead of FALSE as per documentation;

## version 1.7.0 (April 22, 2013)

- fixed an issue where after selecting a date, the focus would go to nowhere and you'd have to start tab-ing from the top of the page; now the focus goes to the element the date picker is attached to;
- fixed an issue where when setting a format like 'F', 'm', 'M' or 'n' (so, months only), users had to also pick a day; thanks **John**;
- fixed a bug where in IE7 & 6 the "Clear" button was alternatively visible/invisible for each change of year/month;
- added a new configuration option: "enabled_dates" which the reverse of the "disabled_dates" property, and which must be used together with the "disabled_dates" property; thanks to **Sascha**, **Pranav Goswami** and to all the others that suggested this;
- the calendar icon is not absolutely positioned anymore, and thus fixing all the issues that it was causing; thanks to all the people who kept insisting :)
- the "zero_pad" property is now FALSE by default;
- added 2 new configuration options: "show_other_months" which specified whether days belonging to other than the month being displayed should be shown, and "select_other_months" which specifies whether belonging to other than the month being displayed should be selectable; thanks to **Josh**;
- changed the &amp;laquo;, &amp;raquo; and &amp;nbsp; HTML entities to their numerical equivalents bacause they were apparently causing troubles in strict XHTML documents; thanks **Martin Luter**;
- optimized a bit the datepicker's stylesheets (also changed their names, so watch out when you're upgrading!); also, added a new stylesheet for use with [Twitter Bootstrap](http://twitter.github.io/bootstrap/);
- added in the documentation the fact that if month names are used with the "direction" property, these must be in English and not the values in the "months_abbr" property; thanks to **Manfred**;
- the plugin is now available on [GitHub](https://github.com/stefangabos/Zebra_Datepicker)!

## version 1.6.7 (January 28, 2013)

- fixed an issue due to which the plugin was not working with jQuery 1.9.0;

## version 1.6.6 (January 15, 2013)

- fixed a bug where the first selectable date was not computed if the "direction" property was a negative number; thanks to **Bastian Flinspach**;

## version 1.6.5 (January 12, 2013)

- fixed an issue where, for paired date pickers, only a single date picker could be set using the "pair" property; now any number of date pickers can be set, using a selector; thanks to **Morten**

## version 1.6.4 (January 08, 2013)

- fixed an error where using "D" in date's format would crash the script; thanks **James**

## version 1.6.3 (January 02, 2013)

- fixed a bug where when using paired date pickers and the second date picker would not have the "direction" property set to something different than "0", the second date picker's selectable dates would not get updated according to the values in the first date picker; thanks to **Martijn**
- fixed some bugs in the alternate CSS;

## version 1.6.2 (December 13, 2012)

- fixed a bug in example 7; thanks **Morten**
- fixed a bug where the *zero_pad* configuration option was being applied only to the days of the current month and not also to the few, non-seletable, days of the next month; thanks **Morten**

## version 1.6.1 (November 03, 2012)

- fixed a bug where using "M" (abbreviated month names) or "D" abbreviated day names in date format would result in the library returning the first three letters from months/days fullnames rather than the values given to the "months_abbr" and "days_abbr" properties; thanks to **mansoft**;
- added a new property: "show_icon" which when set to FALSE will disable the adding of the calendar icon to the elements the plugin is attached to; thanks to **maliang47**;
- the date picker's position is now computed relative to the calendar icon's top-right corner (instead of top-left corner as it was previously), unless the calendar icon is hidden when the position is calculated relative to the element's top-right corner; so, remember to adjust the "offset" property when updating the plugin!;
- the date picker will now open when clicking on the element the plugin is attached to regardless of the fact that the element is read only or not; thanks to **Nicky**;

## version 1.6 (October 28, 2012)

- fixed a bug where the algorithm for calculating the ISO 8601 week number was not working correctly; thanks to **Christian**;
- fixed a bug where if using the same starting and ending date for the "direction" configuration option, the date picker would behave as if there were no restrictions; thanks to **Sachin**;
- fixed a bug where when the system was set to a time zone where daylight saving time would occur at midnight, selecting the particular date where the daylight saving time was applied would result in the plugin returning the previous day; thanks to **Arvy**!
- a new "onClear" event is now available; a function attached to this event will be executed when a date is cleared; thanks to **Alan** for suggesting;
- added a new configuration option: "zero_pad"; setting it to FALSE will prevent the script from prefixing day numbers < 10 with zeroes (so, it will be "1" instead of "01"); thanks to **Nicky** for suggesting;
- added 2 new configuration options: "days_abbr" and "months_abbrs" for specifying custom abbreviations for days and month names (useful for languages where the abbreviation is not as simple as the first 2 or 3 letters); thanks to **RATI**!;
- the functions attached to the onSelect and onChange events will now receive an extra argument being a reference to the element the date picker is attached to, as a jQuery object;

## version 1.5 (September 30, 2012)

- a new "onChange" event is now triggered whenever the user changes the view (days/months/years), as well as when the user navigates by clicking on the "next"/"previous" icons in any of the views; the callback function called by this event takes two arguments - the view (days/months/years) and the "active" elements (not disabled) in that view, as jQuery elements allowing for easy customization and interaction with particular cells in the date picker's view; read more about this in the [configuration](http://stefangabos.ro/jquery/zebra-datepicker/#configuration) section; thanks to **Russell** for suggesting;
- fixed two bugs introduced in the previous version that made the icon to be incorrectly positioned in Internet Explorer 6, 7 & 8 and also made the library trigger a warning message in these browsers;
- fixed a bug where setting the "disabled_dates" attribute to something else other than an array, would trigger an error in Internet Explorer 6 & 7; thanks to **myapi**

## version 1.4.2 (September 22, 2012)

- fixed a bug where the icon would not be placed correctly if the element the plugin is attached to had margins;
- fixed some small bugs in the CSS and in the JavaScript code;
- calling the "update" method will now also recalculate the parent element's position and place the icon accordingly; use it when you show/hide/reposition the parent element or you alter the parent element's dimensions;

## version 1.4.1 (July 29, 2012)

- fixed a bug where, when two date pickers are paired, the second date picker's starting date was using the first date picker's date as starting date *only* after a date was selected in the first date picker and not also when the first date picker already had a default date; thanks to **j-Walker**
- fixed an issue where the current system date was not highlighted if it was disabled; thanks to **Kevin Twitchell**
- the week number is now shown according to the [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) standard; thanks to **David Moros** for the heads up;

## version 1.4 (July 08, 2012)

- fixed a bug where the date picker's icon was not centered vertically relative to the parent element;
- added the possibility to select only years and months or just years; this behavior will be automatically triggered when setting an appropriate format - something like "Y-m" will allow users to select only years/months, while something like "Y" will allow users to only select years;
- if the element the plugin is attached to is disabled, the icon for opening the date picker will be greyed out and the user will not be able to open the date picker; thanks **Todd**
- all sorts of imaginable combinations regarding starting and ending dates can now be set - look for the "direction" property in the configuration options for more information;
- two date picker's can now be "paired" so that one date picker's will use the value in the other as starting date; see the "pair" attribute;
- a callback function can now be set to be executed when the user selects a date; look for the "onSelect" property in the configuration options for more information;

## version 1.3.2 (April 20, 2012)

- included a second stylesheet for users who don't like the looks of the default one; thanks to **daniel** for reminding me about it;
- fixed icon position when inside the element on Opera; thanks **Daniel**;
- fixed a bug introduced in the last version that made disabling dates using , (commas) and - (dashes) impossible; thanks **Denis**;

## version 1.3.1 (April 07, 2012)

- fixed a bug where, starting with jQuery 1.7, the plugin was not working properly in IE6 & IE7; thanks to **Warren Taylor**;
- fixed a bug where the "Clear" button broke the date picker's layout in IE6 & IE7; thanks to **Warren Taylor**;

## version 1.3 (April 02, 2012)

- added a new property called "start_date" that can be used to specify a default starting date for the date picker, without having to set this value as the default value in the field the date picker is attached to; thanks to **Phill**;
- the date picker will now feature a button for clearing a previously selected date; this means that if the input the date picker is attached to is empty, and the user selects a date for the first time, this button will not be visible; once the user picked a date and opens the date picker again, this time the button will be visible; this button can be made permanently visible by setting the newly added "always_show_clear" property to TRUE; the caption of the button can be set through the newly added "lang_clear_date" property; thanks to **Marc**;
- the date picker can now be kept visible all the time by setting the newly added "always_visible" property to a jQuery element that will act as the date picker's container; thanks to **red** for suggesting this, and to everybody else for insisting :)
- fixed a bug where if the calendar icon didn't have any parents with "position: relative", it would appear at the very top of the page; thanks to **Primoz** and **nzn**;
- fixed a bug where pre-selected years and months were not highlighted if the date format didn't have days, months and years, but was something particular like "Y-m" or just "Y";
- fixed a bug where January was never highlighted in the month picker;

## version 1.2 (February 05, 2012)

- the icon for opening the datepicker is now, by default, *inside* the parent element rather than to its right; the old behaviour can still be achieved by setting the newly added "inside" property to FALSE;
- fixed a bug where the default view, as defined in the settings, was correctly used only the first time; subsequent clicks would open the datepicker in the "day picker" view, regardless of how it was set;
- fixed a bug where the currently selected years and months were not highlighted in the datepicker; only the current system year and month were highlighted previously;
- fixed a bug where, if a range of selectable dates was given, users could still navigate to years/months outside the given range (although no dates could be selected from these years/months as they were disabled);

## version 1.1.2 (September 11, 2011)

- fixed a bug where unavailable months and years could also be clicked and thus sending the user to a month with no selectable dates;

## version 1.1.1 (August 29, 2011)

- fixed a bug regarding event delegation that would crash the script in certain scenarios; thanks to **Sebi Popa** for spotting it!

## version 1.1 (August 24, 2011)

- fixed a bug where trying to re-initialize the date picker would attach an extra calendar icon and an extra date picker to the element; thanks to **Murat** for reporting;
- the "direction" property was enhanced and now can also be an array where the first value indicates the starting date and the direction of calendar, and the second value is the number of selectable days; thanks to **FranckM** for suggesting;
- week numbers can now also be shown using the *show_week_number* property (thanks to **Jorgen** for suggesting);
- if the *readonly_element* property is set to true (default), the date picker is also shown when the user clicks the input field; thanks to **Tomek** for suggesting;
- pressing the ESC key will now close the date picker;
- examples are now also available in the downloadable package;

## version 1.0, bugfix (May 27, 2011)

- a bug was fixed that prevented the script from using the date in the text box as default date

## version 1.0 (May 26, 2011)

- initial release
