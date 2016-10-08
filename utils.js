/*
* Remove ALL the listeners bound to  a DOM
*/

function removeAllEventListeners(dom) {
	var o = getEventListeners(dom);
	if (Object.keys(o).length != 0) {
		for (var p in o) {
			var event = o[p];
			if (event.length) {
				for (var i = 0; i < event.length; i++) {
					var handler = event[i];
					if (handler.listener)
						dom.removeEventListener(p, handler.listener);
				}
			}
		}
	}
}