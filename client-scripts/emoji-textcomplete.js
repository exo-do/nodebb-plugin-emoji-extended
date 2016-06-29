! function() {
	var TEXTCOMPLETE_OPTIONS, defaultLists, defaultUsage, exports;
	return TEXTCOMPLETE_OPTIONS = {
		className: "textcomplete textcomplete-emoji",
		zIndex: 12e3
	}, defaultLists = {
		exodo: ["abrazo","elrisas","esdios","facepalm","gaydude","llorona","nono1","roto2","roto2nuse","roto2rie","sisi1","sisi3","vomito","zplatano2","rolleyes","conejito","qmeparto","bluetroll","gey","sherlock","timidos","aidiomio","qtedoy","dale2","zpalomita","lloron","roto2gaydude","nusenuse","flipa2","jajano","sisi2","copa2","aplauso","roto2gay","number1","zpc","sisi","roto2palm","roto2cafe","nono","salu3","salu2","cantarin","babeando","rota2","loco3","sonrositas","campeon2","risukis","mola","qmiedo","loel","secretito","eing","stick","elboinas","roto2qtemeto","mad","cejas","blabla","feliz","nono3","cocinitas","mrgreen","triste","evilgrin","cacturisas","mmmno","qq","aplauso2","misdies","confundio","deal","excited","writer","exoleto","roto1","toloco","ssj","sirdance","ahsisi"],
		grandes: ["monoloco","sinfotos","kotaru","mono","mgalletas","psyduck","rotogalletas","exodin","rotodog","mani","lupie","baila","gayfight","rotoflander"],
		nuevos: ["totalcrazy","lulz","ohnoes","orly","cejitas","jajaein","wat","tantrum","miguitos","simloco","bored","musicon","wtf","heavy","drawer","moonwalk","salido","hyperclap","eaea","periodico","gnomito","boxer","mmm","lolol","rotozzz","ojitos","roto2dios","onusenuse","paraguas","missgreen","thisis","roto2pun"],
		people: ["bowtie", "smile", "laughing", "blush", "smiley", "relaxed", "smirk", "heart_eyes", "kissing_heart", "kissing_closed_eyes", "flushed", "relieved", "satisfied", "grin", "wink", "stuck_out_tongue_winking_eye", "stuck_out_tongue_closed_eyes", "grinning", "kissing", "kissing_smiling_eyes", "stuck_out_tongue", "sleeping", "worried", "frowning", "anguished", "open_mouth", "grimacing", "confused", "hushed", "expressionless", "unamused", "sweat_smile", "sweat", "disappointed_relieved", "weary", "pensive", "disappointed", "confounded", "fearful", "cold_sweat", "persevere", "cry", "sob", "joy", "astonished", "scream", "neckbeard", "tired_face", "angry", "rage", "triumph", "sleepy", "yum", "mask", "sunglasses", "dizzy_face", "imp", "smiling_imp", "neutral_face", "no_mouth", "innocent", "alien", "yellow_heart", "blue_heart", "purple_heart", "heart", "green_heart", "broken_heart", "heartbeat", "heartpulse", "two_hearts", "revolving_hearts", "cupid", "sparkling_heart", "sparkles", "star", "star2", "dizzy", "boom", "collision", "anger", "exclamation", "question", "grey_exclamation", "grey_question", "zzz", "dash", "sweat_drops", "notes", "musical_note", "fire", "hankey", "poop", "shit", "+1", "thumbsup", "-1", "thumbsdown", "ok_hand", "punch", "facepunch", "fist", "v", "wave", "hand", "raised_hand", "open_hands", "point_up", "point_down", "point_left", "point_right", "raised_hands", "pray", "point_up_2", "clap", "muscle", "metal", "fu", "walking", "runner", "running", "couple", "family", "two_men_holding_hands", "two_women_holding_hands", "dancer", "dancers", "ok_woman", "no_good", "information_desk_person", "raising_hand", "bride_with_veil", "person_with_pouting_face", "person_frowning", "bow", "couplekiss", "couple_with_heart", "massage", "haircut", "nail_care", "boy", "girl", "woman", "man", "baby", "older_woman", "older_man", "person_with_blond_hair", "man_with_gua_pi_mao", "man_with_turban", "construction_worker", "cop", "angel", "princess", "smiley_cat", "smile_cat", "heart_eyes_cat", "kissing_cat", "smirk_cat", "scream_cat", "crying_cat_face", "joy_cat", "pouting_cat", "japanese_ogre", "japanese_goblin", "see_no_evil", "hear_no_evil", "speak_no_evil", "guardsman", "skull", "feet", "lips", "kiss", "droplet", "ear", "eyes", "nose", "tongue", "love_letter", "bust_in_silhouette", "busts_in_silhouette", "speech_balloon", "thought_balloon", "feelsgood", "finnadie", "goberserk", "godmode", "hurtrealbad", "rage1", "rage2", "rage3", "rage4", "suspect", "trollface"],
		nature: ["sunny", "umbrella", "cloud", "snowflake", "snowman", "zap", "cyclone", "foggy", "ocean", "cat", "dog", "mouse", "hamster", "rabbit", "wolf", "frog", "tiger", "koala", "bear", "pig", "pig_nose", "cow", "boar", "monkey_face", "monkey", "horse", "racehorse", "camel", "sheep", "elephant", "panda_face", "snake", "bird", "baby_chick", "hatched_chick", "hatching_chick", "chicken", "penguin", "turtle", "bug", "honeybee", "ant", "beetle", "snail", "octopus", "tropical_fish", "fish", "whale", "whale2", "dolphin", "cow2", "ram", "rat", "water_buffalo", "tiger2", "rabbit2", "dragon", "goat", "rooster", "dog2", "pig2", "mouse2", "ox", "dragon_face", "blowfish", "crocodile", "dromedary_camel", "leopard", "cat2", "poodle", "paw_prints", "bouquet", "cherry_blossom", "tulip", "four_leaf_clover", "rose", "sunflower", "hibiscus", "maple_leaf", "leaves", "fallen_leaf", "herb", "mushroom", "cactus", "palm_tree", "evergreen_tree", "deciduous_tree", "chestnut", "seedling", "blossom", "ear_of_rice", "shell", "globe_with_meridians", "sun_with_face", "full_moon_with_face", "new_moon_with_face", "new_moon", "waxing_crescent_moon", "first_quarter_moon", "waxing_gibbous_moon", "full_moon", "waning_gibbous_moon", "last_quarter_moon", "waning_crescent_moon", "last_quarter_moon_with_face", "first_quarter_moon_with_face", "moon", "earth_africa", "earth_americas", "earth_asia", "volcano", "milky_way", "partly_sunny", "octocat", "squirrel"],
		objects: ["bamboo", "gift_heart", "dolls", "school_satchel", "mortar_board", "flags", "fireworks", "sparkler", "wind_chime", "rice_scene", "jack_o_lantern", "ghost", "santa", "christmas_tree", "gift", "bell", "no_bell", "tanabata_tree", "tada", "confetti_ball", "balloon", "crystal_ball", "cd", "dvd", "floppy_disk", "camera", "video_camera", "movie_camera", "computer", "tv", "iphone", "phone", "telephone", "telephone_receiver", "pager", "fax", "minidisc", "vhs", "sound", "speaker", "mute", "loudspeaker", "mega", "hourglass", "hourglass_flowing_sand", "alarm_clock", "watch", "radio", "satellite", "loop", "mag", "mag_right", "unlock", "lock", "lock_with_ink_pen", "closed_lock_with_key", "key", "bulb", "flashlight", "high_brightness", "low_brightness", "electric_plug", "battery", "calling", "email", "mailbox", "postbox", "bath", "bathtub", "shower", "toilet", "wrench", "nut_and_bolt", "hammer", "seat", "moneybag", "yen", "dollar", "pound", "euro", "credit_card", "money_with_wings", "inbox_tray", "outbox_tray", "envelope", "incoming_envelope", "postal_horn", "mailbox_closed", "mailbox_with_mail", "mailbox_with_no_mail", "door", "smoking", "bomb", "gun", "hocho", "pill", "syringe", "page_facing_up", "page_with_curl", "bookmark_tabs", "bar_chart", "chart_with_upwards_trend", "chart_with_downwards_trend", "scroll", "clipboard", "calendar", "date", "card_index", "file_folder", "open_file_folder", "scissors", "pushpin", "paperclip", "black_nib", "pencil2", "straight_ruler", "triangular_ruler", "closed_book", "green_book", "blue_book", "orange_book", "notebook", "notebook_with_decorative_cover", "ledger", "books", "bookmark", "name_badge", "microscope", "telescope", "newspaper", "football", "basketball", "soccer", "baseball", "tennis", "8ball", "rugby_football", "bowling", "golf", "mountain_bicyclist", "bicyclist", "horse_racing", "snowboarder", "swimmer", "surfer", "ski", "spades", "hearts", "clubs", "diamonds", "gem", "ring", "trophy", "musical_score", "musical_keyboard", "violin", "space_invader", "video_game", "black_joker", "flower_playing_cards", "game_die", "dart", "mahjong", "clapper", "memo", "pencil", "book", "art", "microphone", "headphones", "trumpet", "saxophone", "guitar", "shoe", "sandal", "high_heel", "lipstick", "boot", "shirt", "tshirt", "necktie", "womans_clothes", "dress", "running_shirt_with_sash", "jeans", "kimono", "bikini", "ribbon", "tophat", "crown", "womans_hat", "mans_shoe", "closed_umbrella", "briefcase", "handbag", "pouch", "purse", "eyeglasses", "fishing_pole_and_fish", "coffee", "tea", "sake", "baby_bottle", "beer", "beers", "cocktail", "tropical_drink", "wine_glass", "fork_and_knife", "pizza", "hamburger", "fries", "poultry_leg", "meat_on_bone", "spaghetti", "curry", "fried_shrimp", "bento", "sushi", "fish_cake", "rice_ball", "rice_cracker", "rice", "ramen", "stew", "oden", "dango", "egg", "bread", "doughnut", "custard", "icecream", "ice_cream", "shaved_ice", "birthday", "cake", "cookie", "chocolate_bar", "candy", "lollipop", "honey_pot", "apple", "green_apple", "tangerine", "lemon", "cherries", "grapes", "watermelon", "strawberry", "peach", "melon", "banana", "pear", "pineapple", "sweet_potato", "eggplant", "tomato", "corn"],
		places: ["house", "house_with_garden", "school", "office", "post_office", "hospital", "bank", "convenience_store", "love_hotel", "hotel", "wedding", "church", "department_store", "european_post_office", "city_sunrise", "city_sunset", "japanese_castle", "european_castle", "tent", "factory", "tokyo_tower", "japan", "mount_fuji", "sunrise_over_mountains", "sunrise", "stars", "statue_of_liberty", "bridge_at_night", "carousel_horse", "rainbow", "ferris_wheel", "fountain", "roller_coaster", "ship", "speedboat", "boat", "sailboat", "rowboat", "anchor", "rocket", "airplane", "helicopter", "steam_locomotive", "tram", "mountain_railway", "bike", "aerial_tramway", "suspension_railway", "mountain_cableway", "tractor", "blue_car", "oncoming_automobile", "car", "red_car", "taxi", "oncoming_taxi", "articulated_lorry", "bus", "oncoming_bus", "rotating_light", "police_car", "oncoming_police_car", "fire_engine", "ambulance", "minibus", "truck", "train", "station", "train2", "bullettrain_front", "bullettrain_side", "light_rail", "monorail", "railway_car", "trolleybus", "ticket", "fuelpump", "vertical_traffic_light", "traffic_light", "warning", "construction", "beginner", "atm", "slot_machine", "busstop", "barber", "hotsprings", "checkered_flag", "crossed_flags", "izakaya_lantern", "moyai", "circus_tent", "performing_arts", "round_pushpin", "triangular_flag_on_post", "jp", "kr", "cn", "us", "fr", "es", "it", "ru", "gb", "uk", "de"],
		symbols: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "keycap_ten", "1234", "zero", "hash", "symbols", "arrow_backward", "arrow_down", "arrow_forward", "arrow_left", "capital_abcd", "abcd", "abc", "arrow_lower_left", "arrow_lower_right", "arrow_right", "arrow_up", "arrow_upper_left", "arrow_upper_right", "arrow_double_down", "arrow_double_up", "arrow_down_small", "arrow_heading_down", "arrow_heading_up", "leftwards_arrow_with_hook", "arrow_right_hook", "left_right_arrow", "arrow_up_down", "arrow_up_small", "arrows_clockwise", "arrows_counterclockwise", "rewind", "fast_forward", "information_source", "ok", "twisted_rightwards_arrows", "repeat", "repeat_one", "new", "top", "up", "cool", "free", "ng", "cinema", "koko", "signal_strength", "u5272", "u5408", "u55b6", "u6307", "u6708", "u6709", "u6e80", "u7121", "u7533", "u7a7a", "u7981", "sa", "restroom", "mens", "womens", "baby_symbol", "no_smoking", "parking", "wheelchair", "metro", "baggage_claim", "accept", "wc", "potable_water", "put_litter_in_its_place", "secret", "congratulations", "m", "passport_control", "left_luggage", "customs", "ideograph_advantage", "cl", "sos", "id", "no_entry_sign", "underage", "no_mobile_phones", "do_not_litter", "no_bicycles", "no_pedestrians", "children_crossing", "no_entry", "eight_spoked_asterisk", "eight_pointed_black_star", "heart_decoration", "vs", "vibration_mode", "mobile_phone_off", "chart", "currency_exchange", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpius", "sagittarius", "capricorn", "aquarius", "pisces", "ophiuchus", "six_pointed_star", "negative_squared_cross_mark", "a", "b", "ab", "o2", "diamond_shape_with_a_dot_inside", "recycle", "end", "on", "soon", "clock1", "clock130", "clock10", "clock1030", "clock11", "clock1130", "clock12", "clock1230", "clock2", "clock230", "clock3", "clock330", "clock4", "clock430", "clock5", "clock530", "clock6", "clock630", "clock7", "clock730", "clock8", "clock830", "clock9", "clock930", "heavy_dollar_sign", "copyright", "registered", "tm", "x", "heavy_exclamation_mark", "bangbang", "interrobang", "o", "heavy_multiplication_x", "heavy_plus_sign", "heavy_minus_sign", "heavy_division_sign", "white_flower", "100", "heavy_check_mark", "ballot_box_with_check", "radio_button", "link", "curly_loop", "wavy_dash", "part_alternation_mark", "trident", "white_large_square", "white_check_mark", "black_square_button", "white_square_button", "black_circle", "white_circle", "red_circle", "large_blue_circle", "large_blue_diamond", "large_orange_diamond", "small_blue_diamond", "small_orange_diamond", "small_red_triangle", "small_red_triangle_down", "shipit"]
	}, defaultUsage = !0, exports = window.emojiExtended = {
		addCompletion: function(object, cb) {
			return this.ready.then(function(addTextComplete) {
				return addTextComplete(object, cb)
			}, cb), null
		},
		updated: !1,
		path: RELATIVE_PATH + "/plugins/nodebb-plugin-emoji-extended/images/",
		getPath: function(name) {
			return null != name ? "" + this.path + encodeURIComponent(name.toLowerCase()) + ".gif" : this.path
		},
		list: [],
		ready: $.Deferred()
	}, $(document).ready(function() {
		return socket.emit("modules.emojiExtended", null, function(err, data) {
			var codeInListRegex, completePrefix, emojiSize, emojiTextCompleteData, isBlockCodeContext, isInlineCodeContext, isSmileyContext, maxCount, minChars, style, zoom;
			return null != err ? (console.error("Error while initializing emoji-extended."), console.error(err), exports.ready.reject(err)) : (defaultUsage = data.settings.fileSystemAccess, exports.list = data.list, exports.version = data.version, exports.updated = !0, $(window).trigger("emoji-extended:updated", exports), maxCount = data.settings.completion.maxCount, minChars = data.settings.completion.minChars, completePrefix = data.settings.completion.prefix, zoom = data.settings.zoom, emojiSize = 20, zoom > 0 && (zoom > 512 && (zoom = 512), style += ".emoji:hover {\n  width: " + zoom + "px;\n  height: " + zoom + "px;\n  margin: " + -(zoom - emojiSize) / 2 + "px;\n  z-index: " + zoom + ";\n}\n.categories>li .content img.emoji:hover {\n  width: " + zoom + "px;\n  height: " + zoom + "px;\n  margin-right: " + -(zoom - emojiSize) / 2 + "px;\n}"), $("head").append(style + "\n</style>"), isInlineCodeContext = function(line) {
				var begin, beginSize, char, currentSize, escaped, i, ignoreSince, len, since;
				for (beginSize = 0, currentSize = 0, escaped = !1, begin = !0, since = "", ignoreSince = /^\s+`*$/, i = 0, len = line.length; len > i; i++) char = line[i], "`" !== char || escaped && begin || ignoreSince.test(since) ? currentSize === beginSize && beginSize ? (beginSize = currentSize = 0, begin = !0, since = "") : (begin && beginSize && (begin = !1), since += char, currentSize = 0) : begin ? beginSize++ : (currentSize++, since += char), escaped = "\\" === char;
				return beginSize
			}, codeInListRegex = function(indent) {
				return 3 === indent ? /^( {8}\s|( {0,3}\t){2}\s| {0,3}\t {4}\s| {4,7}\t\s)/ : new RegExp("^( {" + (indent + 6) + "}|( {0,3}\\t){2}| {0,3}\\t( {0," + (indent + 2) + "})| {4,7}\\t)")
			}, isBlockCodeContext = function(lines) {
				var code, codeInList, codeR, empty, emptyR, i, l, len, line, list, listR, prevEmpty;
				for (list = !1, code = !1, prevEmpty = !0, emptyR = /^\s*$/, listR = /^( {0,3})[\+*-]\s/, codeR = /^ {4,}| {0,3}\t/, codeInList = null, i = 0, len = lines.length; len > i; i++) line = lines[i], empty = emptyR.test(line), list = list && !(prevEmpty && empty), (l = line.match(listR)) && (list = !0, codeInList = codeInListRegex(l[1].length)), code = list && codeInList.test(line) || !list && (prevEmpty || code) && codeR.test(line), prevEmpty = empty;
				return code
			}, isSmileyContext = function(term) {
				var lines;
				return lines = term.match(/^.*$/gm), !(isInlineCodeContext(lines[lines.length - 1]) || isBlockCodeContext(lines))
			}, emojiTextCompleteData = {
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
					//return "<img class='emoji emoji-extended' src='" + exports.getPath(value) + "' /> " + value
      			  	return "<div><img class='emoji emoji-extended img-responsive' src='" + exports.getPath(value) + "' /></div> <span>:" + value + ":</span>"
				},
				maxCount: maxCount,
				index: 1
			}, exports.ready.resolve.call(exports, function(object, cb) {
				return object instanceof $ || (object = $(object)), object.data("emoji-extended-added") ? void("function" == typeof cb && cb(new Error("Already added"))) : (object.data("emoji-extended-added", "1"), object.textcomplete([emojiTextCompleteData], TEXTCOMPLETE_OPTIONS), "function" == typeof cb ? cb() : void 0)
			}))
		})
	}), $(window).on("action:composer.loaded", function(ignored, data) {
		return exports.addCompletion($("#cmp-uuid-" + data.post_uuid + " textarea.write"))
	}), $(window).on("action:chat.loaded", function(ignored, modal) {
		return exports.addCompletion($("#chat-message-input", modal))
	}), $(window).trigger("emoji-extended:initialized", exports), exports.ready.then(function() {
		var lists;
		return lists = defaultUsage ? defaultLists : {
			smileys: exports.list
		}, require(["composer/formatting", "composer/controls"], function(formatting, controls) {
			return formatting.addButtonDispatch("emoji-extended", function(area, sS, sE) {
				var activeLink, currentTabItem, dialog, getLink, getTabItem, items, key, modalContent, modalTabContent, modalTabPanel, modalTabs, setActive;
				activeLink = null, getLink = function(value) {
					var link;
					return link = $("<a class='emoji-link' title='" + value + "'></a>"), link.html("<img class='emoji emoji-extended img-responsive' src='" + exports.getPath(value) + "' />&nbsp;:" + value + ":"), link.click(function() {
						return dialog.modal("hide"), controls.updateTextareaSelection(area, sE, sE), controls.insertIntoTextarea(area, ":" + value + ": "), controls.updateTextareaSelection(area, sS === sE ? sE + 3 + value.length : sS, sE + 3 + value.length)
					})
				}, getTabItem = function(value, items) {
					var firstUpper, li, link;
					return firstUpper = value[0].toUpperCase() + value.substring(1), link = $('<a role="tab">' + firstUpper + "</a>"), li = $("<li class='emoji-tab'></li>").append(link), link.click(function() {
						return setActive(li, items)
					}), li
				}, setActive = function(li, items) {
					var i, item, len, results;
					if (li !== activeLink && (null != activeLink && "function" == typeof activeLink.removeClass && activeLink.removeClass("active"), activeLink = null != li && "function" == typeof li.addClass ? li.addClass("active") : void 0, modalTabPanel.html(""), null != items)) {
						for (results = [], i = 0, len = items.length; len > i; i++) item = items[i], results.push(modalTabPanel.append(getLink(item)));
						return results
					}
				}, modalContent = $('<div role="tabpanel"></div>'), modalTabs = $('<ul class="nav nav-tabs" role="tablist"></ul>'), modalTabContent = $('<div class="tab-content"></div>'), modalTabPanel = $('<div role="tabpanel" class="tab-pane active"></div>').appendTo(modalTabContent);
				for (key in lists) items = lists[key], currentTabItem = getTabItem(key, items), modalTabs.append(currentTabItem), null == activeLink && setActive(currentTabItem, items);
				return modalContent.append(modalTabs), modalContent.append(modalTabContent), dialog = bootbox.dialog({
					title: "Emoji Extended " + (exports.version || ""),
					message: modalContent,
					onEscape: function() {}
				}), dialog.addClass("emoji-dialog")
			})
		})
	})
}();
