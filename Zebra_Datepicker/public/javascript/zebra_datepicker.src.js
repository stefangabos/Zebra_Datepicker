;
(function ($) {
    'use strict';

    $.Zebra_DatePicker = function (element, options) {
        var defaults = {
            //  setting this property to a jQuery element, will result in the date picker being always visible, the indicated
            //  element being the date picker's container;
            always_visible: false,
            //  by default, the date picker is injected into the <body>; use this property to tell the library to inject
            //  the date picker into a custom element - useful when you want the date picker to open at a specific position
            //
            //  must be a jQuery element
            //
            //  default is $('body')
            container: $('body'),
            //  days of the week; Sunday to Saturday
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            //  by default, the abbreviated name of a day consists of the first 2 letters from the day's full name;
            //  while this is common for most languages, there are also exceptions for languages like Thai, Loa, Myanmar,
            //  etc. where this is not correct; for these cases, specify an array with the abbreviations to be used for
            //  the 7 days of the week; leave it FALSE to use the first 2 letters of a day's name as the abbreviation.
            //
            //  default is FALSE
            days_abbr: false,
            //  the position of the date picker relative to the element it is attached to. note that, regardless of this
            //  setting, the date picker's position will be automatically adjusted to fit in the viewport, if needed.
            //
            //  possible values are "above" and "below"
            //
            //  default is "above"
            default_position: 'above',
            //  direction of the calendar
            //
            //  a positive or negative integer: n (a positive integer) creates a future-only calendar beginning at n days
            //  after today; -n (a negative integer); if n is 0, the calendar has no restrictions. use boolean true for
            //  a future-only calendar starting with today and use boolean false for a past-only calendar ending today.
            //
            //  you may also set this property to an array with two elements in the following combinations:
            //
            //  -   first item is boolean TRUE (calendar starts today), an integer > 0 (calendar starts n days after
            //      today), or a valid date given in the format defined by the "format" attribute, using English for
            //      month names (calendar starts at the specified date), and the second item is boolean FALSE (the calendar
            //      has no ending date), an integer > 0 (calendar ends n days after the starting date), or a valid date
            //      given in the format defined by the "format" attribute, using English for month names, and which occurs
            //      after the starting date (calendar ends at the specified date)
            //
            //  -   first item is boolean FALSE (calendar ends today), an integer < 0 (calendar ends n days before today),
            //      or a valid date given in the format defined by the "format" attribute, using English for month names
            //      (calendar ends at the specified date), and the second item is an integer > 0 (calendar ends n days
            //      before the ending date), or a valid date given in the format defined by the "format" attribute, using
            //      English for month names  and which occurs before the starting date (calendar starts at the specified
            //      date)
            //
            //  [1, 7] - calendar starts tomorrow and ends seven days after that
            //  [true, 7] - calendar starts today and ends seven days after that
            //  ['2013-01-01', false] - calendar starts on January 1st 2013 and has no ending date ("format" is YYYY-MM-DD)
            //  [false, '2012-01-01'] - calendar ends today and starts on January 1st 2012 ("format" is YYYY-MM-DD)
            //
            //  note that "disabled_dates" property will still apply!
            //
            //  default is 0 (no restrictions)
            direction: 0,
            //  an array of disabled dates in the following format: 'day month year weekday' where "weekday" is optional
            //  and can be 0-6 (Saturday to Sunday); the syntax is similar to cron's syntax: the values are separated by
            //  spaces and may contain * (asterisk) - (dash) and , (comma) delimiters:
            //
            //  ['1 1 2012'] would disable January 1, 2012;
            //  ['* 1 2012'] would disable all days in January 2012;
            //  ['1-10 1 2012'] would disable January 1 through 10 in 2012;
            //  ['1,10 1 2012'] would disable January 1 and 10 in 2012;
            //  ['1-10,20,22,24 1-3 *'] would disable 1 through 10, plus the 22nd and 24th of January through March for every year;
            //  ['* * * 0,6'] would disable all Saturdays and Sundays;
            //  ['01 07 2012', '02 07 2012', '* 08 2012'] would disable 1st and 2nd of July 2012, and all of August of 2012
            //
            //  default is FALSE, no disabled dates
            disabled_dates: false,
            //  an array of enabled dates in the same format as required for "disabled_dates" property.
            //  to be used together with the "disabled_dates" property by first setting the "disabled_dates" property to
            //  something like "[* * * *]" (which will disable everything) and the setting the "enabled_dates" property to,
            //  say, "[* * * 0,6]" to enable just weekends.
            enabled_dates: false,
            //  week's starting day
            //
            //  valid values are 0 to 6, Sunday to Saturday
            //
            //  default is 1, Monday
            first_day_of_week: 1,
            //  format of the returned date
            //
            //  accepts the following characters for date formatting: d, D, j, l, N, w, S, F, m, M, n, Y, y borrowing
            //  syntax from PHP's "date" function.
            //
            //  note that when setting a date format without days ('d', 'j'), the users will be able to select only years
            //  and months, and when setting a format without months and days ('F', 'm', 'M', 'n', 'd', 'j'), the
            //  users will be able to select only years; likewise, when setting a date format with just months ('F', 'm',
            //  'M', 'n') or just years ('Y', 'y'), users will be able to select only months and years, respectively.
            //
            //  also note that the value of the "view" property (see below) may be overridden if it is the case: a value of
            //  "days" for the "view" property makes no sense if the date format doesn't allow the selection of days.
            //
            //  default is Y-m-d
            format: 'Y-m-d',
            //  captions in the datepicker's header, for the 3 possible views: days, months, years
            //
            //  for each of the 3 views the following special characters may be used borrowing from PHP's "date" function's
            //  syntax: m, n, F, M, y and Y; any of these will be replaced at runtime with the appropriate date fragment,
            //  depending on the currently viewed date. two more special characters are also available Y1 and Y2 (upper
            //  case representing years with 4 digits, lowercase representing years with 2 digits) which represent
            //  "currently selected year - 7" and "currently selected year + 4" and which only make sense used in the
            //  "years" view.
            //
            //  even though any of these special characters may be used in any of the 3 views, you should use m, n, F, M
            //  for the "days" view and y, Y, Y1, Y2, y1, y2 for the "months" and "years" view or you may get unexpected
            //  results!
            //
            //  Text and HTML can also be used, and will be rendered as it is, as in the example below (the library is
            //  smart enough to not replace special characters when used in words or HTML tags):
            //
            //  header_captions: {
            //      'days':     'Departure:<br>F, Y',
            //      'months':   'Departure:<br>Y',
            //      'years':    'Departure:<br>Y1 - Y2'
            //  }
            //
            //  Default is
            //
            //  header_captions: {
            //      'days':     'F, Y',
            //      'months':   'Y',
            //      'years':    'Y1 - Y2'
            //  }
            header_captions: {
                'days': 'F, Y',
                'months': 'Y',
                'years': 'Y1 - Y2'
            },
            //  HTML to be used for the previous month/next month buttons
            //
            //  default is ['&#171;','&#187;']
            header_navigation: ['&#171;', '&#187;'],
            //  should the icon for opening the datepicker be inside the element?
            //  if set to FALSE, the icon will be placed to the right of the parent element, while if set to TRUE it will
            //  be placed to the right of the parent element, but *inside* the element itself
            //
            //  default is TRUE
            inside: true,
            //  the caption for the "Clear" button
            lang_clear_date: 'Clear date',
            //  months names
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            //  by default, the abbreviated name of a month consists of the first 3 letters from the month's full name;
            //  while this is common for most languages, there are also exceptions for languages like Thai, Loa, Myanmar,
            //  etc. where this is not correct; for these cases, specify an array with the abbreviations to be used for
            //  the months of the year; leave it FALSE to use the first 3 letters of a month's name as the abbreviation.
            //
            //  default is FALSE
            months_abbr: false,
            //  the offset, in pixels (x, y), to shift the date picker's position relative to the top-right of the icon
            //  that toggles the date picker or, if the icon is disabled, relative to the top-right corner of the element
            //  the plugin is attached to.
            //
            //  note that this only applies if the position of element relative to the browser's viewport doesn't require
            //  the date picker to be placed automatically so that it is visible!
            //
            //  default is [5, -5]
            offset: [5, -5],
            //  if set as a jQuery element with a Zebra_DatePicker attached, that particular date picker will use the
            //  current date picker's value as starting date
            //  note that the rules set in the "direction" property will still apply, only that the reference date will
            //  not be the current system date but the value selected in the current date picker
            //  default is FALSE (not paired with another date picker)
            pair: false,
            //  should the element the calendar is attached to, be read-only?
            //  if set to TRUE, a date can be set only through the date picker and cannot be entered manually
            //
            //  default is TRUE
            readonly_element: true,
            //  should days from previous and/or next month be selectable when visible?
            //  note that if the value of this property is set to TRUE, the value of "show_other_months" will be considered
            //  TRUE regardless of the actual value!
            //
            //  default is FALSE
            select_other_months: false,
            //  should the "Clear date" button be visible?
            //
            //  accepted values are:
            //
            //  - 0 (zero) - the button for clearing a previously selected date is shown only if a previously selected date
            //  already exists; this means that if the input the date picker is attached to is empty, and the user selects
            //  a date for the first time, this button will not be visible; once the user picked a date and opens the date
            //  picker again, this time the button will be visible.
            //
            //  - TRUE will make the button visible all the time
            //
            //  - FALSE will disable the button
            //
            //  default is "0" (without quotes)
            show_clear_date: 0,
            //  should a calendar icon be added to the elements the plugin is attached to?
            //
            //  default is TRUE
            show_icon: true,
            //  should days from previous and/or next month be visible?
            //
            //  default is TRUE
            show_other_months: true,
            //  should the "Today" button be visible?
            //  setting it to anything but boolean FALSE will enable the button and will use the property's value as
            //  caption for the button; setting it to FALSE will disable the button
            //
            //  default is "Today"
            show_select_today: 'Today',
            //  should an extra column be shown, showing the number of each week?
            //  anything other than FALSE will enable this feature, and use the given value as column title
            //  i.e. show_week_number: 'Wk' would enable this feature and have "Wk" as the column's title
            //
            //  default is FALSE
            show_week_number: false,
            //  a default date to start the date picker with
            //  must be specified in the format defined by the "format" property, or it will be ignored!
            //  note that this value is used only if there is no value in the field the date picker is attached to!
            start_date: false,
            //  should default values, in the input field the date picker is attached to, be deleted if they are not valid
            //  according to "direction" and/or "disabled_dates"?
            //
            //  default is FALSE
            strict: false,
            //  how should the date picker start; valid values are "days", "months" and "years"
            //  note that the date picker is always cycling days-months-years when clicking in the date picker's header,
            //  and years-months-days when selecting dates (unless one or more of the views are missing due to the date's
            //  format)
            //
            //  also note that the value of the "view" property may be overridden if the date's format requires so! (i.e.
            //  "days" for the "view" property makes no sense if the date format doesn't allow the selection of days)
            //
            //  default is "days"
            view: 'days',
            //  days of the week that are considered "weekend days"
            //  valid values are 0 to 6, Sunday to Saturday
            //
            //  default values are 0 and 6 (Saturday and Sunday)
            weekend_days: [0, 6],
            //  when set to TRUE, day numbers < 10 will be prefixed with 0; set to FALSE if you don't want that
            //
            //  default is TRUE
            zero_pad: false,
            //  callback function to be executed whenever the user changes the view (days/months/years), as well as when
            //  the user navigates by clicking on the "next"/"previous" icons in any of the views;
            //
            //  the callback function called by this event takes 3 arguments - the first argument represents the current
            //  view (can be "days", "months" or "years"), the second argument represents an array containing the "active"
            //  elements (not disabled) from the view, as jQuery elements, allowing for easy customization and interaction
            //  with particular cells in the date picker's view, while the third argument is a reference to the element
            //  the date picker is attached to, as a jQuery object (deprecated - use the "this" keyword inside the callback
            //  function to refer to the element the date picker is attached to)
            //
            //  for simplifying searching for particular dates, each element in the second argument will also have a
            //  "date" data attribute whose format depends on the value of the "view" argument:
            //  - YYYY-MM-DD for elements in the "days" view
            //  - YYYY-MM for elements in the "months" view
            //  - YYYY for elements in the "years" view
            //
            //  the "this" keyword inside the callback function refers to the element the date picker is attached to!
            onChange: null,
            //  callback function to be executed when the user clicks the "Clear" button
            //  the callback function takes a single argument:
            //  -   a reference to the element the date picker is attached to, as a jQuery object (deprecated - use the
            //      "this" keyword inside the callback function to refer to the element the date picker is attached to)
            //
            //  the "this" keyword inside the callback function refers to the element the date picker is attached to!
            onClear: null,
            //  callback function to be executed when the date picker is shown
            //  the callback function takes a single argument:
            //  -   a reference to the element the date picker is attached to, as a jQuery object (deprecated - use the
            //      "this" keyword inside the callback function to refer to the element the date picker is attached to)
            //
            //  the "this" keyword inside the callback function refers to the element the date picker is attached to!
            onOpen: null,
            //  callback function to be executed when a date is selected
            //  the callback function takes 5 arguments:
            //  -   the date in the format specified by the "format" attribute;
            //  -   the date in YYYY-MM-DD format
            //  -   the date as a JavaScript Date object
            //  -   a reference to the element the date picker is attached to, as a jQuery object (deprecated - use the
            //      "this" keyword inside the callback function to refer to the element the date picker is attached to)
            //  -   the ISO 8601 week number of the selected date
            //
            //  the "this" keyword inside the callback function refers to the element the date picker is attached to!
            onSelect: null
        };

        // private properties
        var view, datepicker, icon, header, daypicker, monthpicker, yearpicker, cleardate, current_system_month, current_system_year, current_system_day, first_selectable_month, first_selectable_year, first_selectable_day, selected_month, selected_year, default_day, default_month, default_year, enabled_dates, disabled_dates, shim, start_date, end_date, last_selectable_day, last_selectable_year, last_selectable_month, daypicker_cells, monthpicker_cells, yearpicker_cells, views, clickables, selecttoday, footer, show_select_today, timeout;

        var plugin = this;

        plugin.settings = {};

        // the jQuery version of the element
        // "element" (without the $) will point to the DOM element
        var $element = $(element);

        /**
        *  Constructor method. Initializes the date picker.
        *
        *  @return void
        */
        var init = function (update) {
            // unless we're just updating settings
            if (!update) {
                // merge default settings with user-settings (
                plugin.settings = $.extend({}, defaults, options);

                for (var data in $element.data())
                    // if data attribute's name starts with "zdp_"
                    if (data.indexOf('zdp_') === 0) {
                        // remove the "zdp_" prefix
                        data = data.replace(/^zdp\_/, '');

                        // if such a property exists
                        if (undefined !== defaults[data])
                            // update the property's value
                            // (note that for the "pair" property we need to convert the property to an element)
                            plugin.settings[data] = (data == 'pair' ? $($element.data('zdp_' + data)) : $element.data('zdp_' + data));
                    }
            }

            // if the element should be read-only, set the "readonly" attribute
            if (plugin.settings.readonly_element)
                $element.attr('readonly', 'readonly');

            // determine the views the user can cycle through, depending on the format
            // that is, if the format doesn't contain the day, the user will be able to cycle only through years and months,
            // whereas if the format doesn't contain months nor days, the user will only be able to select years
            var date_chars = {
                days: ['d', 'j', 'D'],
                months: ['F', 'm', 'M', 'n', 't'],
                years: ['o', 'Y', 'y']
            }, has_days = false, has_months = false, has_years = false, type = null;

            for (type in date_chars)
                // iterate through the characters of each block
                $.each(date_chars[type], function (index, character) {
                    // if current character exists in the "format" property
                    if (plugin.settings.format.indexOf(character) > -1)
                        // set to TRUE the appropriate flag
                        if (type == 'days')
                            has_days = true;
                        else if (type == 'months')
                            has_months = true;
                        else if (type == 'years')
                            has_years = true;
                });

            // if user can cycle through all the views, set the flag accordingly
            if (has_days && has_months && has_years)
                views = ['years', 'months', 'days'];
            else if (!has_days && has_months && has_years)
                views = ['years', 'months'];
            else if (has_days && has_months && !has_years)
                views = ['months', 'days'];
            else if (!has_days && !has_months && has_years)
                views = ['years'];
            else if (!has_days && has_months && !has_years)
                views = ['months'];
            else
                views = ['years', 'months', 'days'];

            // if the starting view is not amongst the views the user can cycle through, set the correct starting view
            if ($.inArray(plugin.settings.view, views) == -1)
                plugin.settings.view = views[views.length - 1];

            // parse the rules for disabling dates and turn them into arrays of arrays
            // array that will hold the rules for enabling/disabling dates
            disabled_dates = [];
            enabled_dates = [];

            var dates;

            for (var l = 0; l < 2; l++) {
                // first time we're doing disabled dates,
                if (l === 0)
                    dates = plugin.settings.disabled_dates;
                else
                    dates = plugin.settings.enabled_dates;

                // if we have a non-empty array
                if ($.isArray(dates) && dates.length > 0)
                    // iterate through the rules
                    $.each(dates, function () {
                        // split the values in rule by white space
                        var rules = this.split(' ');

                        for (var i = 0; i < 4; i++) {
                            // if one of the values is not available
                            // replace it with a * (wildcard)
                            if (!rules[i])
                                rules[i] = '*';

                            // if rule contains a comma, create a new array by splitting the rule by commas
                            // if there are no commas create an array containing the rule's string
                            rules[i] = (rules[i].indexOf(',') > -1 ? rules[i].split(',') : new Array(rules[i]));

                            for (var j = 0; j < rules[i].length; j++)
                                // if item contains a dash (defining a range)
                                if (rules[i][j].indexOf('-') > -1) {
                                    // get the lower and upper limits of the range
                                    var limits = rules[i][j].match(/^([0-9]+)\-([0-9]+)/);

                                    // if range is valid
                                    if (null !== limits) {
                                        for (var k = to_int(limits[1]); k <= to_int(limits[2]); k++)
                                            // if value is not already among the values of the rule
                                            // add it to the rule
                                            if ($.inArray(k, rules[i]) == -1)
                                                rules[i].push(k + '');

                                        // remove the range indicator
                                        rules[i].splice(j, 1);
                                    }
                                }

                            for (j = 0; j < rules[i].length; j++)
                                rules[i][j] = (isNaN(to_int(rules[i][j])) ? rules[i][j] : to_int(rules[i][j]));
                        }

                        // add to the correct list of processed rules
                        // first time we're doing disabled dates,
                        if (l === 0)
                            disabled_dates.push(rules);
                        else
                            enabled_dates.push(rules);
                    });
            }

            var date = new Date(), reference_date = (!plugin.settings.reference_date ? ($element.data('zdp_reference_date') && undefined !== $element.data('zdp_reference_date') ? $element.data('zdp_reference_date') : date) : plugin.settings.reference_date), tmp_start_date, tmp_end_date;

            // reset these values here as this method might be called more than once during a date picker's lifetime
            // (when the selectable dates depend on the values from another date picker)
            start_date = undefined;
            end_date = undefined;

            // extract the date parts
            // also, save the current system month/day/year - we'll use them to highlight the current system date
            first_selectable_month = reference_date.getMonth();
            current_system_month = date.getMonth();
            first_selectable_year = reference_date.getFullYear();
            current_system_year = date.getFullYear();
            first_selectable_day = reference_date.getDate();
            current_system_day = date.getDate();

            // check if the calendar has any restrictions
            // calendar is future-only, starting today
            // it means we have a starting date (the current system date), but no ending date
            if (plugin.settings.direction === true)
                start_date = reference_date;
            else if (plugin.settings.direction === false) {
                // it means we have an ending date (the reference date), but no starting date
                end_date = reference_date;

                // extract the date parts
                last_selectable_month = end_date.getMonth();
                last_selectable_year = end_date.getFullYear();
                last_selectable_day = end_date.getDate();
            } else if ((!$.isArray(plugin.settings.direction) && is_integer(plugin.settings.direction) && to_int(plugin.settings.direction) > 0) || ($.isArray(plugin.settings.direction) && (((tmp_start_date = check_date(plugin.settings.direction[0])) != null) || plugin.settings.direction[0] === true || (is_integer(plugin.settings.direction[0]) && plugin.settings.direction[0] > 0)) && (((tmp_end_date = check_date(plugin.settings.direction[1])) != null) || plugin.settings.direction[1] === false || (is_integer(plugin.settings.direction[1]) && plugin.settings.direction[1] >= 0)))) {
                // if an exact starting date was given, use that as a starting date
                if (tmp_start_date != null)
                    start_date = tmp_start_date;
                else
                    // figure out the starting date
                    // use the Date object to normalize the date
                    // for example, 2011 05 33 will be transformed to 2011 06 02
                    start_date = new Date(first_selectable_year, first_selectable_month, first_selectable_day + (!$.isArray(plugin.settings.direction) ? to_int(plugin.settings.direction) : to_int(plugin.settings.direction[0] === true ? 0 : plugin.settings.direction[0])));

                // re-extract the date parts
                first_selectable_month = start_date.getMonth();
                first_selectable_year = start_date.getFullYear();
                first_selectable_day = start_date.getDate();

                // if an exact ending date was given and the date is after the starting date, use that as a ending date
                if (tmp_end_date != null && +tmp_end_date >= +start_date)
                    end_date = tmp_end_date;
                else if (!tmp_end_date != null && plugin.settings.direction[1] !== false && $.isArray(plugin.settings.direction))
                    // figure out the ending date
                    // use the Date object to normalize the date
                    // for example, 2011 05 33 will be transformed to 2011 06 02
                    end_date = new Date(first_selectable_year, first_selectable_month, first_selectable_day + to_int(plugin.settings.direction[1]));

                // if a valid ending date exists
                if (end_date) {
                    // extract the date parts
                    last_selectable_month = end_date.getMonth();
                    last_selectable_year = end_date.getFullYear();
                    last_selectable_day = end_date.getDate();
                }
            } else if ((!$.isArray(plugin.settings.direction) && is_integer(plugin.settings.direction) && to_int(plugin.settings.direction) < 0) || ($.isArray(plugin.settings.direction) && (plugin.settings.direction[0] === false || (is_integer(plugin.settings.direction[0]) && plugin.settings.direction[0] < 0)) && (((tmp_start_date = check_date(plugin.settings.direction[1])) != null) || (is_integer(plugin.settings.direction[1]) && plugin.settings.direction[1] >= 0)))) {
                // figure out the ending date
                // use the Date object to normalize the date
                // for example, 2011 05 33 will be transformed to 2011 06 02
                end_date = new Date(first_selectable_year, first_selectable_month, first_selectable_day + (!$.isArray(plugin.settings.direction) ? to_int(plugin.settings.direction) : to_int(plugin.settings.direction[0] === false ? 0 : plugin.settings.direction[0])));

                // re-extract the date parts
                last_selectable_month = end_date.getMonth();
                last_selectable_year = end_date.getFullYear();
                last_selectable_day = end_date.getDate();

                // if an exact starting date was given, and the date is before the ending date, use that as a starting date
                if (tmp_start_date != null && +tmp_start_date < +end_date)
                    start_date = tmp_start_date;
                else if (!tmp_start_date != null && $.isArray(plugin.settings.direction))
                    // figure out the staring date
                    // use the Date object to normalize the date
                    // for example, 2011 05 33 will be transformed to 2011 06 02
                    start_date = new Date(last_selectable_year, last_selectable_month, last_selectable_day - to_int(plugin.settings.direction[1]));

                // if a valid starting date exists
                if (start_date) {
                    // extract the date parts
                    first_selectable_month = start_date.getMonth();
                    first_selectable_year = start_date.getFullYear();
                    first_selectable_day = start_date.getDate();
                }
                // if there are disabled dates
            } else if ($.isArray(plugin.settings.disabled_dates) && plugin.settings.disabled_dates.length > 0)
                for (var interval in disabled_dates)
                    // only if there is a rule that disables *everything*
                    if (disabled_dates[interval][0] == '*' && disabled_dates[interval][1] == '*' && disabled_dates[interval][2] == '*' && disabled_dates[interval][3] == '*') {
                        var tmpDates = [];

                        // iterate through the rules for enabling dates
                        // looking for the minimum/maximum selectable date (if it's the case)
                        $.each(enabled_dates, function () {
                            var rule = this;

                            // if the rule doesn't apply to all years
                            if (rule[2][0] != '*')
                                // format date and store it in our stack
                                tmpDates.push(parseInt(rule[2][0] + (rule[1][0] == '*' ? '12' : str_pad(rule[1][0], 2)) + (rule[0][0] == '*' ? (rule[1][0] == '*' ? 31 : new Date(rule[2][0], rule[1][0], 0).getDate()).toString() : str_pad(rule[0][0], 2)), 10));
                        });

                        // sort dates ascending
                        tmpDates.sort();

                        // if we have any rules
                        if (tmpDates.length > 0) {
                            // get date parts
                            var matches = (tmpDates[0] + '').match(/([0-9]{4})([0-9]{2})([0-9]{2})/);

                            // assign the date parts to the appropriate variables
                            first_selectable_year = parseInt(matches[1], 10);
                            first_selectable_month = parseInt(matches[2], 10) - 1;
                            first_selectable_day = parseInt(matches[3], 10);
                        }

                        break;
                    }

            // if first selectable date exists but is disabled, find the actual first selectable date
            if (is_disabled(first_selectable_year, first_selectable_month, first_selectable_day)) {
                while (is_disabled(first_selectable_year)) {
                    // if calendar is past-only,
                    if (!start_date) {
                        // decrement the year
                        first_selectable_year--;

                        // because we've changed years, reset the month to December
                        first_selectable_month = 11;
                        // otherwise
                    } else {
                        // increment the year
                        first_selectable_year++;

                        // because we've changed years, reset the month to January
                        first_selectable_month = 0;
                    }
                }

                while (is_disabled(first_selectable_year, first_selectable_month)) {
                    // if calendar is past-only
                    if (!start_date) {
                        // decrement the month
                        first_selectable_month--;

                        // because we've changed months, reset the day to the last day of the month
                        first_selectable_day = new Date(first_selectable_year, first_selectable_month + 1, 0).getDate();
                        // otherwise
                    } else {
                        // increment the month
                        first_selectable_month++;

                        // because we've changed months, reset the day to the first day of the month
                        first_selectable_day = 1;
                    }

                    // if we moved to a following year
                    if (first_selectable_month > 11) {
                        // increment the year
                        first_selectable_year++;

                        // reset the month to January
                        first_selectable_month = 0;

                        // because we've changed months, reset the day to the first day of the month
                        first_selectable_day = 1;
                        // if we moved to a previous year
                    } else if (first_selectable_month < 0) {
                        // decrement the year
                        first_selectable_year--;

                        // reset the month to December
                        first_selectable_month = 11;

                        // because we've changed months, reset the day to the last day of the month
                        first_selectable_day = new Date(first_selectable_year, first_selectable_month + 1, 0).getDate();
                    }
                }

                while (is_disabled(first_selectable_year, first_selectable_month, first_selectable_day)) {
                    // if calendar is past-only, decrement the day
                    if (!start_date)
                        first_selectable_day--;
                    else
                        first_selectable_day++;

                    // use the Date object to normalize the date
                    // for example, 2011 05 33 will be transformed to 2011 06 02
                    date = new Date(first_selectable_year, first_selectable_month, first_selectable_day);

                    // re-extract date parts from the normalized date
                    // as we use them in the current loop
                    first_selectable_year = date.getFullYear();
                    first_selectable_month = date.getMonth();
                    first_selectable_day = date.getDate();
                }

                // use the Date object to normalize the date
                // for example, 2011 05 33 will be transformed to 2011 06 02
                date = new Date(first_selectable_year, first_selectable_month, first_selectable_day);

                // re-extract date parts from the normalized date
                // as we use them in the current loop
                first_selectable_year = date.getFullYear();
                first_selectable_month = date.getMonth();
                first_selectable_day = date.getDate();
            }

            // get the default date, from the element, and check if it represents a valid date, according to the required format
            var default_date = check_date($element.val() || (plugin.settings.start_date ? plugin.settings.start_date : ''));

            // if there is a default date, date picker is in "strict" mode, and the default date is disabled
            if (default_date != null && plugin.settings.strict && is_disabled(default_date.getFullYear(), default_date.getMonth(), default_date.getDate()))
                // clear the value of the parent element
                $element.val('');

            // updates value for the date picker whose starting date depends on the selected date (if any)
            if (!update && (undefined !== start_date || default_date != null))
                update_dependent(undefined !== start_date ? start_date : default_date);

            // if date picker is not always visible
            if (!plugin.settings.always_visible) {
                // if we're just creating the date picker
                if (!update) {
                    // if a calendar icon should be added to the element the plugin is attached to, create the icon now
                    if (plugin.settings.show_icon) {
                        // strangely, in Firefox 21+ (or maybe even earlier) input elements have their "display" property
                        // set to "inline" instead of "inline-block" as do all the other browsers.
                        // because this behavior brakes the positioning of the icon, we'll set the "display" property to
                        // "inline-block" before anything else;
                        if (browser.name == 'firefox' && $element.is('input[type="text"]') && $element.css('display') == 'inline')
                            $element.css('display', 'inline-block');

                        // we create a wrapper for the parent element so that we can later position the icon
                        // also, make sure the wrapper inherits some important css properties of the parent element
                        var icon_wrapper = $('<span class="Zebra_DatePicker_Icon_Wrapper"></span>').css({
                            'display': $element.css('display'),
                            'position': $element.css('position') == 'static' ? 'relative' : $element.css('position'),
                            'float': $element.css('float'),
                            'top': $element.css('top'),
                            'right': $element.css('right'),
                            'bottom': $element.css('bottom'),
                            'left': $element.css('left')
                        });

                        // put wrapper around the element
                        // also, make sure we set some important css properties for it
                        $element.wrap(icon_wrapper).css({
                            'position': 'relative',
                            'top': 'auto',
                            'right': 'auto',
                            'bottom': 'auto',
                            'left': 'auto'
                        });

                        // create the actual calendar icon (show a disabled icon if the element is disabled)
                        icon = $('<button type="button" class="Zebra_DatePicker_Icon' + ($element.attr('disabled') == 'disabled' ? ' Zebra_DatePicker_Icon_Disabled' : '') + '">Pick a date</button>');

                        // a reference to the icon, as a global property
                        plugin.icon = icon;

                        // the date picker will open when clicking both the icon and the element the plugin is attached to
                        clickables = icon.add($element);
                        // if calendar icon is not visible, the date picker will open when clicking the element
                    } else
                        clickables = $element;

                    // attach the click event to the clickable elements (icon and/or element)
                    clickables.bind('click', function (e) {
                        e.preventDefault();

                        // if element is not disabled
                        if (!$element.attr('disabled'))
                            // if the date picker is visible, hide it
                            if (datepicker.hasClass('dp_visible'))
                                plugin.hide();
                            else
                                plugin.show();
                    });

                    // if icon exists, inject it into the DOM, right after the parent element (and inside the wrapper)
                    if (undefined !== icon)
                        icon.insertAfter($element);
                }

                // if calendar icon exists
                if (undefined !== icon) {
                    // needed when updating: remove any inline style set previously by library,
                    // so we get the right values below
                    icon.attr('style', '');

                    // if calendar icon is to be placed *inside* the element
                    // add an extra class to the icon
                    if (plugin.settings.inside)
                        icon.addClass('Zebra_DatePicker_Icon_Inside');

                    var element_width = $element.outerWidth(), element_height = $element.outerHeight(), element_margin_left = parseInt($element.css('marginLeft'), 10) || 0, element_margin_top = parseInt($element.css('marginTop'), 10) || 0, icon_width = icon.outerWidth(), icon_height = icon.outerHeight(), icon_margin_left = parseInt(icon.css('marginLeft'), 10) || 0, icon_margin_right = parseInt(icon.css('marginRight'), 10) || 0;

                    // if icon is to be placed *inside* the element
                    // position the icon accordingly
                    if (plugin.settings.inside)
                        icon.css({
                            'top': element_margin_top + ((element_height - icon_height) / 2),
                            'left': element_margin_left + (element_width - icon_width - icon_margin_right)
                        });
                    else
                        icon.css({
                            'top': element_margin_top + ((element_height - icon_height) / 2),
                            'left': element_margin_left + element_width + icon_margin_left
                        });

                    // assume the datepicker is not disabled
                    icon.removeClass(' Zebra_DatePicker_Icon_Disabled');

                    // if element the datepicker is attached to became disabled, disable the calendar icon, too
                    if ($element.attr('disabled') == 'disabled')
                        icon.addClass('Zebra_DatePicker_Icon_Disabled');
                }
            }

            // if the "Today" button is to be shown and it makes sense to be shown
            // (the "days" view is available and "today" is not a disabled date)
            show_select_today = (plugin.settings.show_select_today !== false && $.inArray('days', views) > -1 && !is_disabled(current_system_year, current_system_month, current_system_day) ? plugin.settings.show_select_today : false);

            // if we just needed to recompute the things above, return now
            if (update)
                return;

            // update icon/date picker position on resize
            $(window).bind('resize.Zebra_DatePicker', function () {
                // hide the date picker
                plugin.hide();

                // if the icon is visible, update its position as the parent element might have changed position
                if (icon !== undefined) {
                    // we use timeouts so that we do not call the "update" method on *every* step of the resize event
                    // clear a previously set timeout
                    clearTimeout(timeout);

                    // set timeout again
                    timeout = setTimeout(function () {
                        // update the date picker
                        plugin.update();
                    }, 100);
                }
            });

            // generate the container that will hold everything
            var html = '' + '<div class="Zebra_DatePicker">' + '<table class="dp_header">' + '<tr>' + '<td class="dp_previous">' + plugin.settings.header_navigation[0] + '</td>' + '<td class="dp_caption">&#032;</td>' + '<td class="dp_next">' + plugin.settings.header_navigation[1] + '</td>' + '</tr>' + '</table>' + '<table class="dp_daypicker"></table>' + '<table class="dp_monthpicker"></table>' + '<table class="dp_yearpicker"></table>' + '<table class="dp_footer"><tr>' + '<td class="dp_today"' + (plugin.settings.show_clear_date !== false ? ' style="width:50%"' : '') + '>' + show_select_today + '</td>' + '<td class="dp_clear"' + (show_select_today !== false ? ' style="width:50%"' : '') + '>' + plugin.settings.lang_clear_date + '</td>' + '</tr></table>' + '</div>';

            // create a jQuery object out of the HTML above and create a reference to it
            datepicker = $(html);

            // a reference to the calendar, as a global property
            plugin.datepicker = datepicker;

            // create references to the different parts of the date picker
            header = $('table.dp_header', datepicker);
            daypicker = $('table.dp_daypicker', datepicker);
            monthpicker = $('table.dp_monthpicker', datepicker);
            yearpicker = $('table.dp_yearpicker', datepicker);
            footer = $('table.dp_footer', datepicker);
            selecttoday = $('td.dp_today', footer);
            cleardate = $('td.dp_clear', footer);

            // if date picker is not always visible
            if (!plugin.settings.always_visible)
                // inject the container into the DOM
                plugin.settings.container.append(datepicker);
            else if (!$element.attr('disabled')) {
                // inject the date picker into the designated container element
                plugin.settings.always_visible.append(datepicker);

                // and make it visible right away
                plugin.show();
            }

            // add the mouseover/mousevents to all to the date picker's cells
            // except those that are not selectable
            datepicker.delegate('td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_week_number)', 'mouseover', function () {
                $(this).addClass('dp_hover');
            }).delegate('td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_week_number)', 'mouseout', function () {
                $(this).removeClass('dp_hover');
            });

            // prevent text highlighting for the text in the header
            // (for the case when user keeps clicking the "next" and "previous" buttons)
            disable_text_select($('td', header));

            // event for when clicking the "previous" button
            $('.dp_previous', header).bind('click', function () {
                // if view is "months"
                // decrement year by one
                if (view == 'months')
                    selected_year--;
                else if (view == 'years')
                    selected_year -= 12;
                else if (--selected_month < 0) {
                    // go to the last month of the previous year
                    selected_month = 11;
                    selected_year--;
                }

                // generate the appropriate view
                manage_views();
            });

            // attach a click event to the caption in header
            $('.dp_caption', header).bind('click', function () {
                // if current view is "days", take the user to the next view, depending on the format
                if (view == 'days')
                    view = ($.inArray('months', views) > -1 ? 'months' : ($.inArray('years', views) > -1 ? 'years' : 'days'));
                else if (view == 'months')
                    view = ($.inArray('years', views) > -1 ? 'years' : ($.inArray('days', views) > -1 ? 'days' : 'months'));
                else
                    view = ($.inArray('days', views) > -1 ? 'days' : ($.inArray('months', views) > -1 ? 'months' : 'years'));

                // generate the appropriate view
                manage_views();
            });

            // event for when clicking the "next" button
            $('.dp_next', header).bind('click', function () {
                // if view is "months"
                // increment year by 1
                if (view == 'months')
                    selected_year++;
                else if (view == 'years')
                    selected_year += 12;
                else if (++selected_month == 12) {
                    // go to the first month of the next year
                    selected_month = 0;
                    selected_year++;
                }

                // generate the appropriate view
                manage_views();
            });

            // attach a click event for the cells in the day picker
            daypicker.delegate('td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_week_number)', 'click', function () {
                // if other months are selectable and currently clicked cell contains a class with the cell's date
                if (plugin.settings.select_other_months && null !== (matches = $(this).attr('class').match(/date\_([0-9]{4})(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])/)))
                    // use the stored date
                    select_date(matches[1], parseInt(matches[2]) - 1, matches[3], 'days', $(this));
                else
                    select_date(selected_year, selected_month, to_int($(this).html()), 'days', $(this));
            });

            // attach a click event for the cells in the month picker
            monthpicker.delegate('td:not(.dp_disabled)', 'click', function () {
                // get the month we've clicked on
                var matches = $(this).attr('class').match(/dp\_month\_([0-9]+)/);

                // set the selected month
                selected_month = to_int(matches[1]);

                // if user can select only years and months
                if ($.inArray('days', views) == -1)
                    // put selected date in the element the plugin is attached to, and hide the date picker
                    select_date(selected_year, selected_month, 1, 'months', $(this));
                else {
                    // direct the user to the "days" view
                    view = 'days';

                    // if date picker is always visible
                    // empty the value in the text box the date picker is attached to
                    if (plugin.settings.always_visible)
                        $element.val('');

                    // generate the appropriate view
                    manage_views();
                }
            });

            // attach a click event for the cells in the year picker
            yearpicker.delegate('td:not(.dp_disabled)', 'click', function () {
                // set the selected year
                selected_year = to_int($(this).html());

                // if user can select only years
                if ($.inArray('months', views) == -1)
                    // put selected date in the element the plugin is attached to, and hide the date picker
                    select_date(selected_year, 1, 1, 'years', $(this));
                else {
                    // direct the user to the "months" view
                    view = 'months';

                    // if date picker is always visible
                    // empty the value in the text box the date picker is attached to
                    if (plugin.settings.always_visible)
                        $element.val('');

                    // generate the appropriate view
                    manage_views();
                }
            });

            // function to execute when the "Today" button is clicked
            $(selecttoday).bind('click', function (e) {
                e.preventDefault();

                // select the current date
                select_date(current_system_year, current_system_month, current_system_day, 'days', $('.dp_current', daypicker));

                // if date picker is always visible
                if (plugin.settings.always_visible)
                    // repaint the datepicker so it centers on the currently selected date
                    plugin.show();

                // hide the date picker
                plugin.hide();
            });

            // function to execute when the "Clear" button is clicked
            $(cleardate).bind('click', function (e) {
                e.preventDefault();

                // clear the element's value
                $element.val('');

                // if date picker is not always visible
                if (!plugin.settings.always_visible) {
                    // reset these values
                    default_day = null;
                    default_month = null;
                    default_year = null;
                    selected_month = null;
                    selected_year = null;
                    // if date picker is always visible
                } else {
                    // reset these values
                    default_day = null;
                    default_month = null;
                    default_year = null;

                    // remove the "selected" class from all cells that have it
                    $('td.dp_selected', datepicker).removeClass('dp_selected');
                }

                // hide the date picker
                plugin.hide();

                // if a callback function exists for when clearing a date
                if (plugin.settings.onClear && typeof plugin.settings.onClear == 'function')
                    // execute the callback function and pass as argument the element the plugin is attached to
                    plugin.settings.onClear.call($element, $element);
            });

            // if date picker is not always visible
            if (!plugin.settings.always_visible)
                // bind some events to the document
                $(document).bind({
                    //whenever anything is clicked on the page
                    'mousedown.Zebra_DatePicker': function (e) {
                        // if the date picker is visible
                        if (datepicker.hasClass('dp_visible')) {
                            // if the calendar icon is visible and we clicked it, let the onClick event of the icon to handle the event
                            // (we want it to toggle the date picker)
                            if (plugin.settings.show_icon && $(e.target).get(0) === icon.get(0))
                                return true;

                            // if what's clicked is not inside the date picker
                            // hide the date picker
                            if ($(e.target).parents().filter('.Zebra_DatePicker').length === 0)
                                plugin.hide();
                        }
                    },
                    //whenever a key is pressed on the page
                    'keyup.Zebra_DatePicker': function (e) {
                        // if the date picker is visible
                        // and the pressed key is ESC
                        // hide the date picker
                        if (datepicker.hasClass('dp_visible') && e.which == 27)
                            plugin.hide();
                    }
                });

            // last thing is to pre-render some of the date picker right away
            manage_views();
        };

        /**
        *  Destroys the date picker.
        *
        *  @return void
        */
        plugin.destroy = function () {
            // remove the attached icon (if it exists)...
            if (undefined !== plugin.icon)
                plugin.icon.remove();

            // ...and the calendar
            plugin.datepicker.remove();

            // remove associated event handlers from the document
            $(document).unbind('keyup.Zebra_DatePicker');
            $(document).unbind('mousedown.Zebra_DatePicker');
            $(window).unbind('resize.Zebra_DatePicker');

            // remove association with the element
            $element.removeData('Zebra_DatePicker');
        };

        /**
        *  Hides the date picker.
        *
        *  @return void
        */
        plugin.hide = function () {
            // if date picker is not always visible
            if (!plugin.settings.always_visible) {
                // hide the iFrameShim in Internet Explorer 6
                iframeShim('hide');

                // hide the date picker
                datepicker.removeClass('dp_visible').addClass('dp_hidden');
            }
        };

        /**
        *  Shows the date picker.
        *
        *  @return void
        */
        plugin.show = function () {
            // always show the view defined in settings
            view = plugin.settings.view;

            // get the default date, from the element, and check if it represents a valid date, according to the required format
            var default_date = check_date($element.val() || (plugin.settings.start_date ? plugin.settings.start_date : ''));

            // if the value represents a valid date
            if (default_date != null) {
                // extract the date parts
                // we'll use these to highlight the default date in the date picker and as starting point to
                // what year and month to start the date picker with
                // why separate values? because selected_* will change as user navigates within the date picker
                default_month = default_date.getMonth();
                selected_month = default_date.getMonth();
                default_year = default_date.getFullYear();
                selected_year = default_date.getFullYear();
                default_day = default_date.getDate();

                // if the default date represents a disabled date
                if (is_disabled(default_year, default_month, default_day)) {
                    // if date picker is in "strict" mode, clear the value of the parent element
                    if (plugin.settings.strict)
                        $element.val('');

                    // the calendar will start with the first selectable year/month
                    selected_month = first_selectable_month;
                    selected_year = first_selectable_year;
                }
                // if a default value is not available, or value does not represent a valid date
            } else {
                // the calendar will start with the first selectable year/month
                selected_month = first_selectable_month;
                selected_year = first_selectable_year;
            }

            // generate the appropriate view
            manage_views();

            // if date picker is not always visible and the calendar icon is visible
            if (!plugin.settings.always_visible) {
                // if date picker is to be injected into the <body>
                if (plugin.settings.container.is('body')) {
                    var datepicker_width = datepicker.outerWidth(), datepicker_height = datepicker.outerHeight(), left = (undefined !== icon ? icon.offset().left + icon.outerWidth(true) : $element.offset().left + $element.outerWidth(true)) + plugin.settings.offset[0], top = (undefined !== icon ? icon.offset().top : $element.offset().top) - datepicker_height + plugin.settings.offset[1], window_width = $(window).width(), window_height = $(window).height(), window_scroll_top = $(window).scrollTop(), window_scroll_left = $(window).scrollLeft();

                    if (plugin.settings.default_position == 'below')
                        top = (undefined !== icon ? icon.offset().top : $element.offset().top) + plugin.settings.offset[1];

                    // if date picker is outside the viewport, adjust its position so that it is visible
                    if (left + datepicker_width > window_scroll_left + window_width)
                        left = window_scroll_left + window_width - datepicker_width;
                    if (left < window_scroll_left)
                        left = window_scroll_left;

                    if (top + datepicker_height > window_scroll_top + window_height)
                        top = window_scroll_top + window_height - datepicker_height;
                    if (top < window_scroll_top)
                        top = window_scroll_top;

                    // make the date picker visible
                    datepicker.css({
                        'left': left,
                        'top': top
                    });
                    // if date picker is to be injected into a custom container element
                } else
                    datepicker.css({
                        'left': 0,
                        'top': 0
                    });

                // fade-in the date picker
                // for Internet Explorer < 9 show the date picker instantly or fading alters the font's weight
                datepicker.removeClass('dp_hidden').addClass('dp_visible');

                // show the iFrameShim in Internet Explorer 6
                iframeShim();
                // if date picker is always visible, show it
            } else
                datepicker.removeClass('dp_hidden').addClass('dp_visible');

            // if a callback function exists for when showing the date picker
            if (plugin.settings.onOpen && typeof plugin.settings.onOpen == 'function')
                // execute the callback function and pass as argument the element the plugin is attached to
                plugin.settings.onOpen.call($element, $element);
        };

        /**
        *  Updates the configuration options given as argument
        *
        *  @param  object  values  An object containing any number of configuration options to be updated
        *
        *  @return void
        */
        plugin.update = function (values) {
            // if original direction not saved, save it now
            if (plugin.original_direction)
                plugin.original_direction = plugin.direction;

            // update configuration options
            plugin.settings = $.extend(plugin.settings, values);

            // reinitialize the object with the new options
            init(true);
        };

        /**
        *  Checks if a string represents a valid date according to the format defined by the "format" property.
        *
        *  @param  string  str_date    A string representing a date, formatted accordingly to the "format" property.
        *                              For example, if "format" is "Y-m-d" the string should look like "2011-06-01"
        *
        *  @return Date               Returns a JavaScript Date object if string represents a valid date according
        *                              formatted according to the "format" property, or NULL otherwise.
        *
        *  @access private
        */
        var check_date = function (str_date) {
            // treat argument as a string
            str_date += '';

            // if value is given
            if ($.trim(str_date) !== '') {
                var format = escape_regexp(plugin.settings.format), format_chars = ['d', 'D', 'j', 'l', 'N', 'S', 'w', 'F', 'm', 'M', 'n', 'Y', 'y'], matches = [], regexp = [], position = null, segments = null;

                for (var i = 0; i < format_chars.length; i++)
                    // if character is found in the date's format
                    if ((position = format.indexOf(format_chars[i])) > -1)
                        // save it, alongside the character's position
                        matches.push({ character: format_chars[i], position: position });

                // sort characters defining the date's format based on their position, ascending
                matches.sort(function (a, b) {
                    return a.position - b.position;
                });

                // iterate through the characters defining the date's format
                $.each(matches, function (index, match) {
                    switch (match.character) {
                        case 'd':
                            regexp.push(/0[1-9]|[12][0-9]|3[01]/);
                            break;
                        case 'D':
                            regexp.push(/[a-z]{3}/);
                            break;
                        case 'j':
                            regexp.push(/[1-9]|[12][0-9]|3[01]/);
                            break;
                        case 'l':
                            regexp.push(/[a-z]+/);
                            break;
                        case 'N':
                            regexp.push(/[1-7]/);
                            break;
                        case 'S':
                            regexp.push(/st|nd|rd|th/);
                            break;
                        case 'w':
                            regexp.push(/[0-6]/);
                            break;
                        case 'F':
                            regexp.push(/[a-z]+/);
                            break;
                        case 'm':
                            regexp.push(/0[1-9]|1[012]+/);
                            break;
                        case 'M':
                            regexp.push(/[a-z]{3}/);
                            break;
                        case 'n':
                            regexp.push(/[1-9]|1[012]/);
                            break;
                        case 'Y':
                            regexp.push(/[0-9]{4}/);
                            break;
                        case 'y':
                            regexp.push(/[0-9]{2}/);
                            break;
                    }
                });

                // if we have an array of regular expressions
                if (regexp.length) {
                    // we will replace characters in the date's format in reversed order
                    matches.reverse();

                    // iterate through the characters in date's format
                    $.each(matches, function (index, match) {
                        // replace each character with the appropriate regular expression
                        format = format.replace(match.character, '(' + regexp[regexp.length - index - 1] + ')');
                    });

                    // the final regular expression
                    var finalregexp = new RegExp('^' + format + '$', 'ig');

                    // if regular expression was matched
                    if ((segments = finalregexp.exec(str_date))) {
                        // check if date is a valid date (i.e. there's no February 31)
                        var tmpdate = new Date(), original_day = 1, original_month = tmpdate.getMonth() + 1, original_year = tmpdate.getFullYear(), english_days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], english_months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], iterable, valid = true;

                        // reverse back the characters in the date's format
                        matches.reverse();

                        // iterate through the characters in the date's format
                        $.each(matches, function (index, match) {
                            // if the date is not valid, don't look further
                            if (!valid)
                                return true;

                            switch (match.character) {
                                case 'm':
                                case 'n':
                                    // extract the month from the value entered by the user
                                    original_month = to_int(segments[index + 1]);

                                    break;

                                case 'd':
                                case 'j':
                                    // extract the day from the value entered by the user
                                    original_day = to_int(segments[index + 1]);

                                    break;

                                case 'D':
                                case 'l':
                                case 'F':
                                case 'M':
                                    // if day is given as day name, we'll check against the names in the used language
                                    if (match.character == 'D' || match.character == 'l')
                                        iterable = plugin.settings.days;
                                    else
                                        iterable = plugin.settings.months;

                                    // by default, we assume the day or month was not entered correctly
                                    valid = false;

                                    // iterate through the month/days in the used language
                                    $.each(iterable, function (key, value) {
                                        // if month/day was entered correctly, don't look further
                                        if (valid)
                                            return true;

                                        // if month/day was entered correctly
                                        if (segments[index + 1].toLowerCase() == value.substring(0, (match.character == 'D' || match.character == 'M' ? 3 : value.length)).toLowerCase()) {
                                            switch (match.character) {
                                                case 'D':
                                                    segments[index + 1] = english_days[key].substring(0, 3);
                                                    break;
                                                case 'l':
                                                    segments[index + 1] = english_days[key];
                                                    break;
                                                case 'F':
                                                    segments[index + 1] = english_months[key];
                                                    original_month = key + 1;
                                                    break;
                                                case 'M':
                                                    segments[index + 1] = english_months[key].substring(0, 3);
                                                    original_month = key + 1;
                                                    break;
                                            }

                                            // day/month value is valid
                                            valid = true;
                                        }
                                    });

                                    break;

                                case 'Y':
                                    // extract the year from the value entered by the user
                                    original_year = to_int(segments[index + 1]);

                                    break;

                                case 'y':
                                    // extract the year from the value entered by the user
                                    original_year = parseInt('19' + to_int(segments[index + 1]).toString());

                                    break;
                            }
                        });

                        // if everything is ok so far
                        if (valid) {
                            // generate a Date object using the values entered by the user
                            // (handle also the case when original_month and/or original_day are undefined - i.e date format is "Y-m" or "Y")
                            var date = new Date(original_year, (original_month || 1) - 1, original_day || 1);

                            // if, after that, the date is the same as the date entered by the user
                            if (date.getFullYear() == original_year && date.getDate() == (original_day || 1) && date.getMonth() == ((original_month || 1) - 1))
                                // return the date as JavaScript date object
                                return date;
                        }
                    }
                }

                // if script gets this far, return false as something must've went wrong
                return null;
            }
        };

        /**
        *  Prevents the possibility of selecting text on a given element. Used on the "previous" and "next" buttons
        *  where text might get accidentally selected when user quickly clicks on the buttons.
        *
        *  Code by http://chris-barr.com/index.php/entry/disable_text_selection_with_jquery/
        *
        *  @param  jQuery Element  el  A jQuery element on which to prevents text selection.
        *
        *  @return void
        *
        *  @access private
        */
        var disable_text_select = function (el) {
            // if browser is Firefox
            if (browser.name == 'firefox')
                el.css('MozUserSelect', 'none');
            else if (browser.name == 'explorer')
                el.bind('selectstart', function () {
                    return false;
                });
            else
                el.mousedown(function () {
                    return false;
                });
        };

        /**
        *  Escapes special characters in a string, preparing it for use in a regular expression.
        *
        *  @param  string  str     The string in which special characters should be escaped.
        *
        *  @return string          Returns the string with escaped special characters.
        *
        *  @access private
        */
        var escape_regexp = function (str) {
            // return string with special characters escaped
            return str.replace(/([-.,*+?^${}()|[\]\/\\])/g, '\\$1');
        };

        /**
        *  Formats a JavaScript date object to the format specified by the "format" property.
        *  Code taken from http://electricprism.com/aeron/calendar/
        *
        *  @param  date    date    A valid JavaScript date object
        *
        *  @return string          Returns a string containing the formatted date
        *
        *  @access private
        */
        var format = function (date) {
            var result = '', j = date.getDate(), w = date.getDay(), l = plugin.settings.days[w], n = date.getMonth() + 1, f = plugin.settings.months[n - 1], y = date.getFullYear() + '';

            for (var i = 0; i < plugin.settings.format.length; i++) {
                // extract the current character
                var chr = plugin.settings.format.charAt(i);

                switch (chr) {
                    case 'y':
                        y = y.substr(2);

                    case 'Y':
                        result += y;
                        break;

                    case 'm':
                        n = str_pad(n, 2);

                    case 'n':
                        result += n;
                        break;

                    case 'M':
                        f = ($.isArray(plugin.settings.months_abbr) && undefined !== plugin.settings.months_abbr[n - 1] ? plugin.settings.months_abbr[n - 1] : plugin.settings.months[n - 1].substr(0, 3));

                    case 'F':
                        result += f;
                        break;

                    case 'd':
                        j = str_pad(j, 2);

                    case 'j':
                        result += j;
                        break;

                    case 'D':
                        l = ($.isArray(plugin.settings.days_abbr) && undefined !== plugin.settings.days_abbr[w] ? plugin.settings.days_abbr[w] : plugin.settings.days[w].substr(0, 3));

                    case 'l':
                        result += l;
                        break;

                    case 'N':
                        w++;

                    case 'w':
                        result += w;
                        break;

                    case 'S':
                        if (j % 10 == 1 && j != '11')
                            result += 'st';
                        else if (j % 10 == 2 && j != '12')
                            result += 'nd';
                        else if (j % 10 == 3 && j != '13')
                            result += 'rd';
                        else
                            result += 'th';

                        break;

                    default:
                        result += chr;
                }
            }

            // return formated date
            return result;
        };

        /**
        *  Generates the day picker view, and displays it
        *
        *  @return void
        *
        *  @access private
        */
        var generate_daypicker = function () {
            var days_in_month = new Date(selected_year, selected_month + 1, 0).getDate(), first_day = new Date(selected_year, selected_month, 1).getDay(), days_in_previous_month = new Date(selected_year, selected_month, 0).getDate(), days_from_previous_month = first_day - plugin.settings.first_day_of_week;

            // the final value of how many days are there to be shown from the previous month
            days_from_previous_month = days_from_previous_month < 0 ? 7 + days_from_previous_month : days_from_previous_month;

            // manage header caption and enable/disable navigation buttons if necessary
            manage_header(plugin.settings.header_captions['days']);

            // start generating the HTML
            var html = '<tr>';

            // if a column featuring the number of the week is to be shown
            if (plugin.settings.show_week_number)
                // column title
                html += '<th>' + plugin.settings.show_week_number + '</th>';

            for (var i = 0; i < 7; i++)
                html += '<th>' + ($.isArray(plugin.settings.days_abbr) && undefined !== plugin.settings.days_abbr[(plugin.settings.first_day_of_week + i) % 7] ? plugin.settings.days_abbr[(plugin.settings.first_day_of_week + i) % 7] : plugin.settings.days[(plugin.settings.first_day_of_week + i) % 7].substr(0, 2)) + '</th>';

            html += '</tr><tr>';

            for (i = 0; i < 42; i++) {
                // seven days per row
                if (i > 0 && i % 7 === 0)
                    html += '</tr><tr>';

                // if week number is to be shown
                if (i % 7 === 0 && plugin.settings.show_week_number)
                    // show ISO 8601 week number
                    html += '<td class="dp_week_number">' + getWeekNumber(new Date(selected_year, selected_month, (i - days_from_previous_month + 1))) + '</td>';

                // the number of the day in month
                var day = (i - days_from_previous_month + 1);

                // if dates in previous/next month can be selected, and this is one of those days
                if (plugin.settings.select_other_months && (i < days_from_previous_month || day > days_in_month)) {
                    // use the Date object to normalize the date
                    // for example, 2011 05 33 will be transformed to 2011 06 02
                    var real_date = new Date(selected_year, selected_month, day), real_year = real_date.getFullYear(), real_month = real_date.getMonth(), real_day = real_date.getDate();
                    // extract normalized date parts and merge them
                    //real_date =  real_year + str_pad((real_month + 1).toString(), 2) + str_pad(real_day.toString(), 2);
                    //TODO: above line is never used
                }

                // if this is a day from the previous month
                if (i < days_from_previous_month)
                    html += '<td class="' + (plugin.settings.select_other_months && !is_disabled(real_year, real_month, real_day) ? 'dp_not_in_month_selectable date_' + real_date : 'dp_not_in_month') + '">' + (plugin.settings.select_other_months || plugin.settings.show_other_months ? str_pad((days_in_previous_month - days_from_previous_month + i + 1).toString(), plugin.settings.zero_pad ? 2 : 0) : '&nbsp;') + '</td>';
                else if (day > days_in_month)
                    html += '<td class="' + (plugin.settings.select_other_months && !is_disabled(real_year, real_month, real_day) ? 'dp_not_in_month_selectable date_' + real_date : 'dp_not_in_month') + '">' + (plugin.settings.select_other_months || plugin.settings.show_other_months ? str_pad((day - days_in_month).toString(), plugin.settings.zero_pad ? 2 : 0) : '&nbsp;') + '</td>';
                else {
                    var weekday = (plugin.settings.first_day_of_week + i) % 7, class_name = '';

                    // if date needs to be disabled
                    if (is_disabled(selected_year, selected_month, day)) {
                        // if day is in weekend
                        if ($.inArray(weekday, plugin.settings.weekend_days) > -1)
                            class_name = 'dp_weekend_disabled';
                        else
                            class_name += ' dp_disabled';

                        // highlight the current system date
                        if (selected_month == current_system_month && selected_year == current_system_year && current_system_day == day)
                            class_name += ' dp_disabled_current';
                        // if there are no restrictions
                    } else {
                        // if day is in weekend
                        if ($.inArray(weekday, plugin.settings.weekend_days) > -1)
                            class_name = 'dp_weekend';

                        // highlight the currently selected date
                        if (selected_month == default_month && selected_year == default_year && default_day == day)
                            class_name += ' dp_selected';

                        // highlight the current system date
                        if (selected_month == current_system_month && selected_year == current_system_year && current_system_day == day)
                            class_name += ' dp_current';
                    }

                    // print the day of the month
                    html += '<td' + (class_name !== '' ? ' class="' + $.trim(class_name) + '"' : '') + '>' + (plugin.settings.zero_pad ? str_pad(day.toString(), 2) : day.toString()) + '</td>';
                }
            }

            // wrap up generating the day picker
            html += '</tr>';

            // inject the day picker into the DOM
            daypicker.html($(html));

            // if date picker is always visible
            if (plugin.settings.always_visible)
                // cache all the cells
                // (we need them so that we can easily remove the "dp_selected" class from all of them when user selects a date)
                daypicker_cells = $('td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month, .dp_week_number)', daypicker);

            // make the day picker visible
            daypicker.show();
        };

        /**
        *  Generates the month picker view, and displays it
        *
        *  @return void
        *
        *  @access private
        */
        var generate_monthpicker = function () {
            // manage header caption and enable/disable navigation buttons if necessary
            manage_header(plugin.settings.header_captions['months']);

            // start generating the HTML
            var html = '<tr>';

            for (var i = 0; i < 12; i++) {
                // three month per row
                if (i > 0 && i % 3 === 0)
                    html += '</tr><tr>';

                var class_name = 'dp_month_' + i;

                // if month needs to be disabled
                if (is_disabled(selected_year, i))
                    class_name += ' dp_disabled';
                else if (default_month !== false && default_month == i && selected_year == default_year)
                    class_name += ' dp_selected';
                else if (current_system_month == i && current_system_year == selected_year)
                    class_name += ' dp_current';

                // first three letters of the month's name
                html += '<td class="' + $.trim(class_name) + '">' + ($.isArray(plugin.settings.months_abbr) && undefined !== plugin.settings.months_abbr[i] ? plugin.settings.months_abbr[i] : plugin.settings.months[i].substr(0, 3)) + '</td>';
            }

            // wrap up
            html += '</tr>';

            // inject into the DOM
            monthpicker.html($(html));

            // if date picker is always visible
            if (plugin.settings.always_visible)
                // cache all the cells
                // (we need them so that we can easily remove the "dp_selected" class from all of them when user selects a month)
                monthpicker_cells = $('td:not(.dp_disabled)', monthpicker);

            // make the month picker visible
            monthpicker.show();
        };

        /**
        *  Generates the year picker view, and displays it
        *
        *  @return void
        *
        *  @access private
        */
        var generate_yearpicker = function () {
            // manage header caption and enable/disable navigation buttons if necessary
            manage_header(plugin.settings.header_captions['years']);

            // start generating the HTML
            var html = '<tr>';

            for (var i = 0; i < 12; i++) {
                // three years per row
                if (i > 0 && i % 3 === 0)
                    html += '</tr><tr>';

                var class_name = '';

                // if year needs to be disabled
                if (is_disabled(selected_year - 7 + i))
                    class_name += ' dp_disabled';
                else if (default_year && default_year == selected_year - 7 + i)
                    class_name += ' dp_selected';
                else if (current_system_year == (selected_year - 7 + i))
                    class_name += ' dp_current';

                // first three letters of the month's name
                html += '<td' + ($.trim(class_name) !== '' ? ' class="' + $.trim(class_name) + '"' : '') + '>' + (selected_year - 7 + i) + '</td>';
            }

            // wrap up
            html += '</tr>';

            // inject into the DOM
            yearpicker.html($(html));

            // if date picker is always visible
            if (plugin.settings.always_visible)
                // cache all the cells
                // (we need them so that we can easily remove the "dp_selected" class from all of them when user selects a year)
                yearpicker_cells = $('td:not(.dp_disabled)', yearpicker);

            // make the year picker visible
            yearpicker.show();
        };

        /**
        *  Generates an iFrame shim in Internet Explorer 6 so that the date picker appears above select boxes.
        *
        *  @return void
        *
        *  @access private
        */
        var iframeShim = function (action) {
            if (typeof action === "undefined") { action = undefined; }
            // this is necessary only if browser is Internet Explorer 6
            if (browser.name == 'explorer' && browser.version == 6) {
                // if the iFrame was not yet created
                // "undefined" evaluates as FALSE
                if (!shim) {
                    // the iFrame has to have the element's zIndex minus 1
                    var zIndex = to_int(datepicker.css('zIndex')) - 1;

                    // create the iFrame
                    shim = $('<iframe>', {
                        'src': 'javascript:document.write("")',
                        'scrolling': 'no',
                        'frameborder': 0,
                        css: {
                            'zIndex': zIndex,
                            'position': 'absolute',
                            'top': -1000,
                            'left': -1000,
                            'width': datepicker.outerWidth(),
                            'height': datepicker.outerHeight(),
                            'filter': 'progid:DXImageTransform.Microsoft.Alpha(opacity=0)',
                            'display': 'none'
                        }
                    });

                    // inject iFrame into DOM
                    $('body').append(shim);
                }

                switch (action) {
                    case 'hide':
                        // set the iFrame's display property to "none"
                        shim.hide();

                        break;

                    default:
                        // get date picker top and left position
                        var offset = datepicker.offset();

                        // position the iFrame shim right underneath the date picker
                        // and set its display to "block"
                        shim.css({
                            'top': offset.top,
                            'left': offset.left,
                            'display': 'block'
                        });
                }
            }
        };

        /**
        *  Checks if, according to the restrictions of the calendar and/or the values defined by the "disabled_dates"
        *  property, a day, a month or a year needs to be disabled.
        *
        *  @param  integer     year    The year to check
        *  @param  integer     month   The month to check
        *  @param  integer     day     The day to check
        *
        *  @return boolean         Returns TRUE if the given value is not disabled or FALSE otherwise
        *
        *  @access private
        */
        var is_disabled = function (year, month, day) {
            if (typeof year === "undefined") { year = undefined; }
            if (typeof month === "undefined") { month = undefined; }
            if (typeof day === "undefined") { day = undefined; }
            // don't check bogus values
            if ((undefined === year || isNaN(year)) && (undefined === month || isNaN(month)) && (undefined === day || isNaN(day)))
                return false;

            // if calendar has direction restrictions
            if (!(!$.isArray(plugin.settings.direction) && to_int(plugin.settings.direction) === 0)) {
                var now = to_int(str_concat(year.toString(), (typeof month != 'undefined' ? str_pad(month.toString(), 2) : ''), (typeof day != 'undefined' ? str_pad(day.toString(), 2) : ''))), len = (now + '').length;

                // if we're checking days
                if (len == 8 && ((typeof start_date != 'undefined' && now < to_int(str_concat(first_selectable_year, str_pad(first_selectable_month, 2), str_pad(first_selectable_day, 2)))) || (typeof end_date != 'undefined' && now > to_int(str_concat(last_selectable_year, str_pad(last_selectable_month, 2), str_pad(last_selectable_day, 2))))))
                    return true;
                else if (len == 6 && ((typeof start_date != 'undefined' && now < to_int(str_concat(first_selectable_year, str_pad(first_selectable_month, 2)))) || (typeof end_date != 'undefined' && now > to_int(str_concat(last_selectable_year, str_pad(last_selectable_month, 2))))))
                    return true;
                else if (len == 4 && ((typeof start_date != 'undefined' && now < first_selectable_year) || (typeof end_date != 'undefined' && now > last_selectable_year)))
                    return true;
            }

            // if month is given as argument, increment it (as JavaScript uses 0 for January, 1 for February...)
            if (typeof month != 'undefined')
                month = month + 1;

            // by default, we assume the day/month/year is not enabled nor disabled
            var disabled = false, enabled = false;

            // if there are rules for disabling dates
            if (disabled_dates)
                // iterate through the rules for disabling dates
                $.each(disabled_dates, function () {
                    // if the date is to be disabled, don't look any further
                    if (disabled)
                        return;

                    var rule = this;

                    // if the rules apply for the current year
                    if ($.inArray(year, rule[2]) > -1 || $.inArray('*', rule[2]) > -1)
                        // if the rules apply for the current month
                        if ((typeof month != 'undefined' && $.inArray(month, rule[1]) > -1) || $.inArray('*', rule[1]) > -1)
                            // if the rules apply for the current day
                            if ((typeof day != 'undefined' && $.inArray(day, rule[0]) > -1) || $.inArray('*', rule[0]) > -1) {
                                // if day is to be disabled whatever the day
                                // don't look any further
                                if (rule[3] == '*')
                                    return (disabled = true);

                                // get the weekday
                                var weekday = new Date(year, month - 1, day).getDay();

                                // if weekday is to be disabled
                                // don't look any further
                                if ($.inArray(weekday, rule[3]) > -1)
                                    return (disabled = true);
                            }
                });

            // if there are rules that explicitly enable dates
            if (enabled_dates)
                // iterate through the rules for enabling dates
                $.each(enabled_dates, function () {
                    // if the date is to be enabled, don't look any further
                    if (enabled)
                        return;

                    var rule = this;

                    // if the rules apply for the current year
                    if ($.inArray(year, rule[2]) > -1 || $.inArray('*', rule[2]) > -1) {
                        // the year is enabled
                        enabled = true;

                        // if we're also checking months
                        if (typeof month != 'undefined') {
                            // we assume the month is enabled
                            enabled = true;

                            // if the rules apply for the current month
                            if ($.inArray(month, rule[1]) > -1 || $.inArray('*', rule[1]) > -1) {
                                // if we're also checking days
                                if (typeof day != 'undefined') {
                                    // we assume the day is enabled
                                    enabled = true;

                                    // if the rules apply for the current day
                                    if ($.inArray(day, rule[0]) > -1 || $.inArray('*', rule[0]) > -1) {
                                        // if day is to be enabled whatever the day
                                        // don't look any further
                                        if (rule[3] == '*')
                                            return (enabled = true);

                                        // get the weekday
                                        var weekday = new Date(year, month - 1, day).getDay();

                                        // if weekday is to be enabled
                                        // don't look any further
                                        if ($.inArray(weekday, rule[3]) > -1)
                                            return (enabled = true);

                                        // if we get this far, it means the day is not enabled
                                        enabled = false;
                                        // if day is not enabled
                                    } else
                                        enabled = false;
                                }
                                // if month is not enabled
                            } else
                                enabled = false;
                        }
                    }
                });

            // if checked date is enabled, return false
            if (enabled_dates && enabled)
                return false;
            else if (disabled_dates && disabled)
                return true;

            // if script gets this far it means that the day/month/year doesn't need to be disabled
            return false;
        };

        /**
        *  Checks whether a value is an integer number.
        *
        *  @param  mixed   value   Value to check
        *
        *  @return                 Returns TRUE if the value represents an integer number, or FALSE otherwise
        *
        *  @access private
        */
        var is_integer = function (value) {
            // return TRUE if value represents an integer number, or FALSE otherwise
            return (value + '').match(/^\-?[0-9]+$/) ? true : false;
        };

        /**
        *  Sets the caption in the header of the date picker and enables or disables navigation buttons when necessary.
        *
        *  @param  string  caption     String that needs to be displayed in the header
        *
        *  @return void
        *
        *  @access private
        */
        var manage_header = function (caption) {
            // if "selected_month" has a value
            // $.isNumeric is available only from jQuery 1.7 - thanks to birla for the fix!
            if (!isNaN(parseFloat(selected_month)) && isFinite(selected_month))
                caption = caption.replace(/\bm\b|\bn\b|\bF\b|\bM\b/, function (match) {
                    switch (match) {
                        case 'm':
                            return str_pad(selected_month + 1, 2);

                        case 'n':
                            return selected_month + 1;

                        case 'F':
                            return plugin.settings.months[selected_month];

                        case 'M':
                            return ($.isArray(plugin.settings.months_abbr) && undefined !== plugin.settings.months_abbr[selected_month] ? plugin.settings.months_abbr[selected_month] : plugin.settings.months[selected_month].substr(0, 3));

                        default:
                            return match;
                    }
                });

            // if "selected_year" has a value
            // $.isNumeric is available only from jQuery 1.7 - thanks to birla for the fix!
            if (!isNaN(parseFloat(selected_year)) && isFinite(selected_year))
                // replace year-related patterns
                caption = caption.replace(/\bY\b/, selected_year).replace(/\by\b/, (selected_year + '').substr(2)).replace(/\bY1\b/i, selected_year - 7).replace(/\bY2\b/i, selected_year + 4);

            // update the caption in the header
            $('.dp_caption', header).html(caption);
        };

        /**
        *  Shows the appropriate view (days, months or years) according to the current value of the "view" property.
        *
        *  @return void
        *
        *  @access private
        */
        var manage_views = function () {
            // if the day picker was not yet generated
            if (daypicker.text() === '' || view == 'days') {
                // if the day picker was not yet generated
                if (daypicker.text() === '') {
                    // if date picker is not always visible
                    if (!plugin.settings.always_visible)
                        // temporarily set the date picker's left outside of view
                        // so that we can later grab its width and height
                        datepicker.css('left', -1000);

                    // temporarily make the date picker visible
                    // so that we can later grab its width and height
                    datepicker.css('visibility', 'visible');

                    // generate the day picker
                    generate_daypicker();

                    // get the day picker's width and height
                    var width = daypicker.outerWidth(), height = daypicker.outerHeight();

                    // make the month picker have the same size as the day picker
                    monthpicker.css({
                        'width': width,
                        'height': height
                    });

                    // make the year picker have the same size as the day picker
                    yearpicker.css({
                        'width': width,
                        'height': height
                    });

                    // make the header and the footer have the same size as the day picker
                    header.css('width', width);
                    footer.css('width', width);

                    // hide the date picker again
                    datepicker.css('visibility', '').addClass('dp_hidden');
                    // if the day picker was previously generated at least once
                    // generate the day picker
                } else
                    generate_daypicker();

                // hide the year and the month pickers
                monthpicker.hide();
                yearpicker.hide();
                // if the view is "months"
            } else if (view == 'months') {
                // generate the month picker
                generate_monthpicker();

                // hide the day and the year pickers
                daypicker.hide();
                yearpicker.hide();
                // if the view is "years"
            } else if (view == 'years') {
                // generate the year picker
                generate_yearpicker();

                // hide the day and the month pickers
                daypicker.hide();
                monthpicker.hide();
            }

            // if a callback function exists for when navigating through months/years
            if (plugin.settings.onChange && typeof plugin.settings.onChange == 'function' && undefined !== view) {
                // get the "active" elements in the view (ignoring the disabled ones)
                var elements = (view == 'days' ? daypicker.find('td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month)') : (view == 'months' ? monthpicker.find('td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month)') : yearpicker.find('td:not(.dp_disabled, .dp_weekend_disabled, .dp_not_in_month)')));

                // iterate through the active elements
                // and attach a "date" data attribute to each element in the form of
                // YYYY-MM-DD if the view is "days"
                // YYYY-MM if the view is "months"
                // YYYY if the view is "years"
                // so it's easy to identify elements in the list
                elements.each(function () {
                    // if view is "days"
                    if (view == 'days') {
                        // if date is from a next/previous month and is selectable
                        if ($(this).hasClass('dp_not_in_month_selectable')) {
                            // extract date from the attached class
                            var matches = $(this).attr('class').match(/date\_([0-9]{4})(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])/);

                            // attach a "date" data attribute to each element in the form of of YYYY-MM-DD for easily identifying sought elements
                            $(this).data('date', matches[1] + '-' + matches[2] + '-' + matches[3]);
                            // if date is from the currently selected month
                        } else
                            // attach a "date" data attribute to each element in the form of of YYYY-MM-DD for easily identifying sought elements
                            $(this).data('date', selected_year + '-' + str_pad(selected_month + 1, 2) + '-' + str_pad(to_int($(this).text()).toString(), 2));
                        // if view is "months"
                    } else if (view == 'months') {
                        // get the month's number for the element's class
                        var matches = $(this).attr('class').match(/dp\_month\_([0-9]+)/);

                        // attach a "date" data attribute to each element in the form of of YYYY-MM for easily identifying sought elements
                        $(this).data('date', selected_year + '-' + str_pad((to_int(matches[1]) + 1).toString(), 2));
                        // if view is "years"
                    } else
                        // attach a "date" data attribute to each element in the form of of YYYY for easily identifying sought elements
                        $(this).data('date', to_int($(this).text()));
                });

                // execute the callback function and send as arguments the current view, the elements in the view, and
                // the element the plugin is attached to
                plugin.settings.onChange.call($element, view, elements, $element);
            }

            // assume the footer is visible
            footer.show();

            // if the button for clearing a previously selected date needs to be visible all the time,
            // or the "Clear" button needs to be shown only when a date was previously selected, and now it's the case,
            // or the date picker is always visible and the "Clear" button was not explicitly disabled
            if (plugin.settings.show_clear_date === true || (plugin.settings.show_clear_date === 0 && $element.val() !== '') || (plugin.settings.always_visible && plugin.settings.show_clear_date !== false)) {
                // show the "Clear" button
                cleardate.show();

                // if the "Today" button is visible
                if (show_select_today) {
                    // show it, and set it's width to 50% of the available space
                    selecttoday.css('width', '50%');

                    // the "Clear date" button only takes up 50% of the available space
                    cleardate.css('width', '50%');
                    // if the "Today" button is not visible
                } else {
                    // hide the "Today" button
                    selecttoday.hide();

                    // the "Clear date" button takes up 100% of the available space
                    cleardate.css('width', '100%');
                }
                // otherwise
            } else {
                // hide the "Clear" button
                cleardate.hide();

                // if the "Today" button is visible, it will now take up all the available space
                if (show_select_today)
                    selecttoday.show().css('width', '100%');
                else
                    footer.hide();
            }
        };

        /**
        *  Puts the specified date in the element the plugin is attached to, and hides the date picker.
        *
        *  @param  integer     year    The year
        *
        *  @param  integer     month   The month
        *
        *  @param  integer     day     The day
        *
        *  @param  string      view    The view from where the method was called
        *
        *  @param  object      cell    The element that was clicked
        *
        *  @return void
        *
        *  @access private
        */
        var select_date = function (year, month, day, view, cell) {
            var default_date = new Date(year, month, day, 12, 0, 0), view_cells = (view == 'days' ? daypicker_cells : (view == 'months' ? monthpicker_cells : yearpicker_cells)), selected_value = format(default_date);

            // set the currently selected and formated date as the value of the element the plugin is attached to
            $element.val(selected_value);

            // if date picker is always visible
            if (plugin.settings.always_visible) {
                // extract the date parts and reassign values to these variables
                // so that everything will be correctly highlighted
                default_month = default_date.getMonth();
                selected_month = default_date.getMonth();
                default_year = default_date.getFullYear();
                selected_year = default_date.getFullYear();
                default_day = default_date.getDate();

                // remove the "selected" class from all cells in the current view
                view_cells.removeClass('dp_selected');

                // add the "selected" class to the currently selected cell
                cell.addClass('dp_selected');

                // if we're on the "days" view and days from other months are selectable and one of those days was
                // selected, repaint the datepicker so it will take us to the selected month
                if (view == 'days' && cell.hasClass('dp_not_in_month_selectable'))
                    plugin.show();
            }

            // hide the date picker
            plugin.hide();

            // updates value for the date picker whose starting date depends on the selected date (if any)
            update_dependent(default_date);

            // if a callback function exists for when selecting a date
            if (plugin.settings.onSelect && typeof plugin.settings.onSelect == 'function')
                // execute the callback function
                // make "this" inside the callback function refer to the element the date picker is attached to
                plugin.settings.onSelect.call($element, selected_value, year + '-' + str_pad(month + 1, 2) + '-' + str_pad(day, 2), default_date, $element, getWeekNumber(default_date));

            // move focus to the element the plugin is attached to
            $element.focus();
        };

        /**
        *  Concatenates any number of arguments and returns them as string.
        *
        *  @return string  Returns the concatenated values.
        *
        *  @access private
        */
        var str_concat = function () {
            var params = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                params[_i] = arguments[_i + 0];
            }
            var str = '';

            for (var i = 0; i < params.length; i++)
                str += (params[i] + '');

            // return the concatenated values
            return str;
        };

        /**
        *  Left-pad a string to a certain length with zeroes.
        *
        *  @param  string  str     The string to be padded.
        *
        *  @param  integer len     The length to which the string must be padded
        *
        *  @return string          Returns the string left-padded with leading zeroes
        *
        *  @access private
        */
        var str_pad = function (str, len) {
            // make sure argument is a string
            str += '';

            while (str.length < len)
                str = '0' + str;

            // return padded string
            return str;
        };

        /**
        *  Returns the integer representation of a string
        *
        *  @return int     Returns the integer representation of the string given as argument
        *
        *  @access private
        */
        var to_int = function (str) {
            // return the integer representation of the string given as argument
            return parseInt(str, 10);
        };

        /**
        *  Updates the paired date picker (whose starting date depends on the value of the current date picker)
        *
        *  @param  date    date    A JavaScript date object representing the currently selected date
        *
        *  @return void
        *
        *  @access private
        */
        var update_dependent = function (date) {
            // if the pair element exists
            if (plugin.settings.pair) {
                // iterate through the pair elements (as there may be more than just one)
                $.each(plugin.settings.pair, function () {
                    var $pair = $(this);

                    // chances are that in the beginning the pair element doesn't have the Zebra_DatePicker attached to it yet
                    // (as the "start" element is usually created before the "end" element)
                    // so we'll have to rely on "data" to send the starting date to the pair element
                    // therefore, if Zebra_DatePicker is not yet attached
                    if (!($pair.data && $pair.data('Zebra_DatePicker')))
                        // set the starting date like this
                        $pair.data('zdp_reference_date', date);
                    else {
                        // reference the date picker object attached to the other element
                        var dp = $pair.data('Zebra_DatePicker');

                        // update the other date picker's starting date
                        // the value depends on the original value of the "direction" attribute
                        // (also, if the pair date picker does not have a direction, set it to 1)
                        dp.update({
                            'reference_date': date,
                            'direction': dp.settings.direction === 0 ? 1 : dp.settings.direction
                        });

                        // if the other date picker is always visible, update the visuals now
                        if (dp.settings.always_visible)
                            dp.show();
                    }
                });
            }
        };

        /**
        *  Calculate the ISO 8601 week number for a given date.
        *
        *  Code is based on the algorithm at http://www.tondering.dk/claus/cal/week.php#calcweekno
        */
        var getWeekNumber = function (date) {
            var y = date.getFullYear(), m = date.getMonth() + 1, d = date.getDate(), a, b, c, s, e, f, g, n, w;

            // If month jan. or feb.
            if (m < 3) {
                a = y - 1;
                b = (a / 4 | 0) - (a / 100 | 0) + (a / 400 | 0);
                c = ((a - 1) / 4 | 0) - ((a - 1) / 100 | 0) + ((a - 1) / 400 | 0);
                s = b - c;
                e = 0;
                f = d - 1 + 31 * (m - 1);
                // If month mar. through dec.
            } else {
                a = y;
                b = (a / 4 | 0) - (a / 100 | 0) + (a / 400 | 0);
                c = ((a - 1) / 4 | 0) - ((a - 1) / 100 | 0) + ((a - 1) / 400 | 0);
                s = b - c;
                e = s + 1;
                f = d + ((153 * (m - 3) + 2) / 5 | 0) + 58 + s;
            }

            g = (a + b) % 7;

            // ISO Weekday (0 is monday, 1 is tuesday etc.)
            d = (f + g - e) % 7;
            n = f + 3 - d;

            if (n < 0)
                w = 53 - ((g - s) / 5 | 0);
            else if (n > 364 + s)
                w = 1;
            else
                w = (n / 7 | 0) + 1;

            return w;
        };
    };

    $.fn.Zebra_DatePicker = function (options) {
        // iterate through all the elements to which we need to attach the date picker to
        return this.each(function () {
            // if element has a date picker already attached
            if (undefined !== $(this).data('Zebra_DatePicker'))
                // remove the attached date picker
                $(this).data('Zebra_DatePicker').destroy();

            // create an instance of the plugin
            var plugin = new $.Zebra_DatePicker(this, options);

            // save a reference to the newly created object
            $(this).data('Zebra_DatePicker', plugin);
        });
    };
})(jQuery);

// since with jQuery 1.9.0 the $.browser object was removed, we rely on this piece of code from
// http://www.quirksmode.org/js/detect.html to detect the browser
var Browser = (function () {
    function Browser() {
        this.dataBrowser = [
            {
                string: navigator.userAgent,
                subString: 'Firefox',
                identity: 'firefox'
            },
            {
                string: navigator.userAgent,
                subString: 'MSIE',
                identity: 'explorer',
                versionSearch: 'MSIE'
            }
        ];
        this.name = this.searchString(this.dataBrowser) || '';
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || -1;
    }
    Browser.prototype.searchString = function (data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.toLowerCase().indexOf(data[i].string.toLowerCase()) != -1)
                    return data[i].identity;
            } else if (dataProp)
                return data[i].identity;
        }
    };
    Browser.prototype.searchVersion = function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1)
            return;
        return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    };
    return Browser;
})();
;

var browser = new Browser();
//# sourceMappingURL=zebra_datepicker.src.js.map
