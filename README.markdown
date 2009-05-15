# doc-and-win

A jQuery plugin that adds two helper methods to retrieve the window and document objects. When called on an iframe, it returns the iframe's document or window (depending on the method you used). When called on an element, it returns the element's parent document or window. If a document object is passed in, it returns itself or the window it belongs to. If a window object is passed in, it returns the document of the window or itself.

Both the `.doc()` and `.win()` methods return the document or window for each matched element.

## Examples

    $('iframe').doc() // iframe document
    $('iframe').win() // iframe window
    
    // bind event to a tags in iframe
    $('iframe').doc().find('a').click(fn);

    $('iframe').doc().find('a').doc() // iframe document

    $('p').doc() // return parent document
    $('p').win() // return parent window

    $(document).doc() // return document
    $(document).win() // return document.defaultView || document.parentWindow

    $(window).doc() // return window.document
    $(window).win() // return window

## License

The doc-and-win plugin is dual licensed *(just like jQuery)* under the [MIT](http://www.opensource.org/licenses/mit-license.php) and [GPL](http://www.opensource.org/licenses/gpl-license.php) licenses.

Copyright (c) 2009 [Brandon Aaron](http://brandonaaron.net)