! function() {
    var defaultLists, defaultUsage, exports;
    return defaultLists = {
        General: ["abrazo","elrisas","esdios","facepalm","gaydude","llorona","loco4","nono1","roto2","roto2nuse","roto2rie","sisi1","sisi3","monoloco","mani","vomiton","sinfotos","zplatano2","rolleyes","conejito","qmeparto","trolldeltesoro","gey","sherlock","rolleye","timidos","kotaru","xmnl","qtedoy","baila","mono","dale2","zpalomita","lloron","roto2gaydude","nusenuse","flipa","jajano","sisi2","copa2","aplauso","roto2gay","number1","zpc","sisi","roto2palm","roto2cafe","nono","saludo","hello","cantarin","psyduck","babeando","rota2","loco3","omg","campeon2","risukis","lupie","mola","roto4","rotoflanders","qmiedo","loel","susurro","shit","eing","mgalletas","palo","exodin","elboinas","roto2qtemeto","mad"]
    }, defaultUsage = !0, exports = window.emojiExtended = {
        addCompletion: function(object, cb) {
            return this.ready.then(function(addTextComplete) {
                return addTextComplete(object, cb)
            }, cb), null
        },
        updated: !1,
        path: "" + RELATIVE_PATH + "/plugins/nodebb-plugin-exodo-emojis/images/",
        getPath: function(name) {
            return null != name ? "" + this.path + encodeURIComponent(name.toLowerCase()) + ".gif" : this.path
        },
        list: [],
        ready: $.Deferred()
    }, $(document).ready(function() {
        return socket.emit("modules.emojiExtended", null, function(err, data) {
            var codeInListRegex, completePrefix, emojiSize, isBlockCodeContext, isInlineCodeContext, isSmileyContext, maxCount, minChars, style, zoom;
            return null != err ? (console.error("Error while initializing emoji-extended."), console.error(err), exports.ready.reject(err)) : (defaultUsage = data.settings.fileSystemAccess, exports.list = data.list, exports.version = data.version, exports.updated = !0, $(window).trigger("emoji-extended:updated", exports), maxCount = data.settings.completion.maxCount, minChars = data.settings.completion.minChars, completePrefix = data.settings.completion.prefix, zoom = data.settings.zoom, emojiSize = 20, style = '<style type="text/css">\n  .emoji {\n    width: auto;\n    height: auto;\n    transition: z-index,margin,width,height;\n    transition-timing-function: ease-in-out;\n    transition-duration: 0.2s;\n    transition-delay: 0.2s;\n    z-index: 0;\n  }', zoom > 0 && (zoom > 512 && (zoom = 512), style += ".emoji:hover {\n  z-index: " + zoom + ";\n}"), $("head").append(style + "\n</style>"), isInlineCodeContext = function(line) {
                var begin, beginSize, char, currentSize, escaped, ignoreSince, since, _i, _len;
                for (beginSize = 0, currentSize = 0, escaped = !1, begin = !0, since = "", ignoreSince = /^\s+`*$/, _i = 0, _len = line.length; _len > _i; _i++) char = line[_i], "`" !== char || escaped && begin || ignoreSince.test(since) ? currentSize === beginSize && beginSize ? (beginSize = currentSize = 0, begin = !0, since = "") : (begin && beginSize && (begin = !1), since += char, currentSize = 0) : begin ? beginSize++ : (currentSize++, since += char), escaped = "\\" === char;
                return beginSize
            }, codeInListRegex = function(indent) {
                return 3 === indent ? /^( {8}\s|( {0,3}\t){2}\s| {0,3}\t {4}\s| {4,7}\t\s)/ : new RegExp("^( {" + (indent + 6) + "}|( {0,3}\\t){2}| {0,3}\\t( {0," + (indent + 2) + "})| {4,7}\\t)")
            }, isBlockCodeContext = function(lines) {
                var code, codeInList, codeR, empty, emptyR, l, line, list, listR, prevEmpty, _i, _len;
                for (list = !1, code = !1, prevEmpty = !0, emptyR = /^\s*$/, listR = /^( {0,3})[\+*-]\s/, codeR = /^ {4,}| {0,3}\t/, codeInList = null, _i = 0, _len = lines.length; _len > _i; _i++) line = lines[_i], empty = emptyR.test(line), list = list && !(prevEmpty && empty), (l = line.match(listR)) && (list = !0, codeInList = codeInListRegex(l[1].length)), code = list && codeInList.test(line) || !list && (prevEmpty || code) && codeR.test(line), prevEmpty = empty;
                return code
            }, isSmileyContext = function(term) {
                var lines;
                return lines = term.match(/^.*$/gm), !(isInlineCodeContext(lines[lines.length - 1]) || isBlockCodeContext(lines))
            }, exports.ready.resolve.call(exports, function(object, cb) {
                return object instanceof $ || (object = $(object)), object.data("emoji-extended-added") ? void("function" == typeof cb && cb(new Error("Already added"))) : (object.data("emoji-extended-added", "1"), object.textcomplete([{
                    match: new RegExp("^((([\\s\\S]*)(" + completePrefix + ")):[\\w\\d+-]{" + minChars + ",})$", "i"),
                    search: function(term, callback) {
                        var regexp, smileyPrefix;
                        return isSmileyContext(term) ? (smileyPrefix = term.match(/:([\w\d\+-]*)$/)[1], regexp = new RegExp("^" + smileyPrefix.replace(/\+/g, "\\+"), "i"), callback($.grep(exports.list, function(emoji) {
                            return regexp.test(emoji)
                        }))) : void callback([])
                    },
                    replace: function(value) {
                        return "$2:" + value.toLowerCase() + ": "
                    },
                    template: function(value) {
                        return "<img class='emoji emoji-extended img-responsive' src='" + exports.getPath(value) + "' /> " + value
                    },
                    maxCount: maxCount,
                    index: 1
                }]), object.closest(".textcomplete-wrapper").css("height", "100%").find("textarea").css("height", "100%"), "function" == typeof cb ? cb() : void 0)
            }))
        })
    }), $(window).on("action:composer.loaded", function(ignored, data) {
        return exports.addCompletion($("#cmp-uuid-" + data.post_uuid + " .write"))
    }), $(window).on("action:chat.loaded", function(ignored, modal) {
        return exports.addCompletion($("#chat-message-input", modal))
    }), $(window).trigger("emoji-extended:initialized", exports), exports.ready.then(function() {
        var lists;
        return lists = defaultUsage ? defaultLists : {
            smileys: exports.list
        }, require(["composer", "composer/controls"], function(composer, controls) {
            return composer.addButton("fa fa-smile-o", function(area, sS, sE) {
                var dialog, dialogContent, first, getLink, item, items, key, _i, _len;
                getLink = function(value) {
                    var link;
                    return link = $("<a class='emoji-link' title='" + value + "'></a>"), link.html("<img class='emoji emoji-extended img-responsive' src='" + exports.getPath(value) + "' />"), link.click(function() {
                        return dialog.modal("hide"), controls.updateTextareaSelection(area, sE, sE), controls.insertIntoTextarea(area, ":" + value + ": "), controls.updateTextareaSelection(area, sS === sE ? sE + 3 + value.length : sS, sE + 3 + value.length)
                    })
                }, dialogContent = $("<p></p>"), first = !0;
                for (key in lists) {
                    for (items = lists[key], first || dialogContent.append("<hr />"), dialogContent.append("<h5>" + key + "</h5>"), _i = 0, _len = items.length; _len > _i; _i++) item = items[_i], dialogContent.append(getLink(item));
                    first = !1
                }
                return dialog = bootbox.dialog({
                    title: "Emoticonos",
                    message: dialogContent,
                    onEscape: function() {}
                }), dialog.addClass("emoji-dialog")
            })
        })
    })
}();