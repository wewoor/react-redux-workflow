/**
 * Mini Selector, Dom utils.
 * @author Ziv
 * @param  {[type]} window [description]
 * @return {[type]}        [description]
 */
(function(window) {

    window.$ = function( selector ) {
        return new funcs.init(selector);
    }

    var funcs = $.prototype = {

        init: function( selector ) {
            if (typeof selector == "string") {
                var dom = document.querySelector(selector);
                if (!dom) return null;
                this.context = dom;
            } else if (selector.nodeType) {
                this.context = selector;
            }
            return this;
        },

        addClass: function( cla ) {
            var origin = this.context.className;
            if (cla) {
                this.context.className = origin + " " + cla;
            }
            return this;
        },

        removeClass: function( cla ) {
            var origin = this.context.className;
            if (cla) {
                var newCla = origin.split(" " + cla);
                this.context.className = newCla.toString().replace(",", "");
            }
            return this;
        },

        attr: function( name, value ) { // 元素属性
            var self = this.context;
            if (name !== undefined && value !== undefined) {
                // text与comment nodes元素不可设置属性内容
                if (self.nodeType == 3 || self.nodeType == 8)
                    return undefined;
                self.setAttribute( name, "" + value );
                return this;
            } else if(arguments.length == 1) {
                return self.getAttribute( arguments[0] );
            } else {
                return self.attributes();
            }
        },

        // 移除attr
        removeAttr: function( name ) {
            var self = this.context;
            self.setAttribute(name , "");
            if (self.nodeType == 1)
                self.removeAttribute( name );
            return this;
        },

        css: function( style, value ) {
            var self = this.context;
            if (arguments.length === 2) {
                self.style[style] = value;
                return this;
            } else if (arguments.length === 1) {
                self.style.cssText = getCssText(arguments[0]);
                return this;
            } else {
                return self.style.cssText;
            }
        },

        on: function(evt, listenr) {
            var self = this.context;
            if (self.addEventListener) {
                self.addEventListener(evt, listenr, false);
            } else if (self.attachEvent) {
                self.attachEvent("on" + event, listenr);
            } else {
                self["on" + evt] = listenr;
            }
        },

        next: function(selector) {
            selector = selector.toLowerCase();
            var node = this.context.nextSibling;
            while (node) {
                var nodeName = node.nodeName.toLowerCase();
                if (selector.indexOf("#") > -1) {
                    var id = node.id.toLowerCase();
                    if (id.indexOf(selector) > -1) {
                        return node;
                    }
                } else if (selector.indexOf(".") > -1) {
                    var className = node.className.toLowerCase();
                    if (className.indexOf(selector)) {
                        return node;
                    }
                } else if (nodeName == selector) {
                    return node;
                }
                node = node.nextSibling;
            }
            return null;
        },

        parent(selector) {
            selector = selector.toLowerCase();
            var node = this.context.parentNode;
            while(node) {
                var nodeName = node.nodeName.toLowerCase();
                var className = node.className ? node.className.toLowerCase() : '';
                var id = node.id ? node.id.toLowerCase() : '';
                if ( selector.indexOf("#") > -1 && id) {
                    var nid = selector.replace("#", "");
                    if (nid === id) return node;
                } else if ( selector.indexOf(".") > -1 && className) {
                    var cla = selector.replace(".", "");
                    if (className.indexOf(cla) > -1) return node;
                } else if (nodeName === selector) {
                    return node;
                }
                node = node.parentNode;
            }
            return null;
        },

    };

    funcs.init.prototype = funcs;

    $.trim = function(str) {
        return typeof str === 'string' ? str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') : str;        
    }

    function getCssText(object) {
        var str = "";
        for (var attr in object) {
            str += attr + ":" + object[attr] + ";";
        }
        return str;
    }

})(window);
