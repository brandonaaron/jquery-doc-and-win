(function($) {

$.fn.extend({
	doc: function() {
		return docAndWin(this, true);
	},
	
	win: function() {
		return docAndWin(this, false);
	}
});

var docAndWin = function(collection, doc) {
	return collection.map(function(i, elem) {
		return jQuery.nodeName(elem, "iframe") ?
			(doc ? elem.contentDocument || elem.contentWindow.document : elem.contentWindow) :
			elem.ownerDocument ?
				(doc ? elem.ownerDocument : elem.ownerDocument.defaultView || elem.ownerDocument.parentWindow) :
				jQuery.nodeName(elem, "#document") ?
					(doc ? elem : elem.defaultView || elem.parentWindow) :
					("scrollTo" in elem && elem.document) ?
						(doc ? elem.document : elem) :
						null;
	});
};

})(jQuery);