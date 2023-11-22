/* ========================
	custom.js
========================= */
var MediCo = function() {
	siteUrl = "";
	var e = $(window).width(),
		t = function() {
			"use strict";
			jQuery(".site-footer").css("display", "block"), jQuery(".site-footer").css("height", "auto");
			var e = jQuery(".site-footer").outerHeight();
			jQuery(".footer-fixed > .page-wraper").css("padding-bottom", e), jQuery(".site-footer").css("height", e)
		},
		i = function() {
			"use strict";
			var e = jQuery(this),
				t = e.find(".modal-dialog");
			e.css("display", "block"), t.css("margin-top", Math.max(0, (jQuery(window).height() - t.height()) / 2))
		},
		r = new Date;
	monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], r.setMonth(r.getMonth() + 1), r = r.getDate() + " " + monthNames[r.getMonth()] + " " + r.getFullYear();
	return {
		init: function() {
			var n;
			jQuery(".box-hover").on("mouseenter", function() {
					jQuery(".box-hover").removeClass("active"), jQuery(this).addClass("active")
				}), $(".wow").length > 0 && new WOW({
					boxClass: "wow",
					animateClass: "animated",
					offset: 50,
					mobile: !1
				}).init(), $(".price-slide, .price-slide-2").length > 0 && $("#slider-range,#slider-range-2").slider({
					range: !0,
					min: 300,
					max: 4e3,
					values: [0, 5e3],
					slide: function(e, t) {
						var i = t.values[0],
							r = t.values[1];
						$("#" + this.id).prev().val("$" + i + " - $" + r)
					}
				}),
				function() {
					"use strict";
					var e = parseInt($(".onepage").css("height"), 10);
					$(".scroll").unbind().on("click", function(e) {
						if (e.preventDefault(), "" !== this.hash) {
							var t = this.hash,
								i = $(t).offset().top,
								r = parseInt($(".onepage").css("height"), 10);
							$("body").scrollspy({
								target: ".navbar",
								offset: r + 2
							});
							var n = i - r;
							$("html, body").animate({
								scrollTop: n
							}, 800, function() {})
						}
					}), $("body").scrollspy({
						target: ".navbar",
						offset: e + 2
					})
				}(),
				function() {
					"use strict";
					if (jQuery(".dzload").each(function() {
							var e = siteUrl + $(this).attr("dzsrc");
							jQuery(this).hide(function() {
								jQuery(this).load(e, function() {
									jQuery(this).fadeIn("slow")
								})
							})
						}), e < 991) {
						var t = jQuery("<div>").append($(".mo-left .logo-header").clone()).html();
						jQuery(".mo-left .header-nav").prepend(t), jQuery(".mo-left .header-nav .logo-header > a > img").attr("src", "images/logo.png"), jQuery(".mo-left.lw .header-nav .logo-header > a > img").attr("src", "images/logo-white.png")
					}
				}(), n = $(".header").height(), $(".header").css("height", n),
				function() {
					"use strict";
					var e = jQuery("#quik-search-btn"),
						t = jQuery("#quik-search-remove");
					e.on("click", function() {
						jQuery(".dez-quik-search").animate({
							width: "100%"
						}), jQuery(".dez-quik-search").delay(500).css({
							left: "0"
						})
					}), t.on("click", function() {
						jQuery(".dez-quik-search").animate({
							width: "0%",
							right: "0"
						}), jQuery(".dez-quik-search").css({
							left: "auto"
						})
					})
				}(),
				 jQuery("#accordion").on("hidden.bs.collapse", function(e) {
					jQuery(e.target).prev(".panel-heading").find("i.indicator").toggleClass("glyphicon-minus glyphicon-plus")
				}), jQuery("#accordion").on("shown.bs.collapse", function(e) {
					jQuery(e.target).prev(".panel-heading").find("i.indicator").toggleClass("glyphicon-minus glyphicon-plus")
				}),
				function() {
					"use strict";
					jQuery("button.scroltop").on("click", function() {
						return jQuery("html, body").animate({
							scrollTop: 0
						}, 1e3), !1
					}), jQuery(window).bind("scroll", function() {
						jQuery(window).scrollTop() > 900 ? jQuery("button.scroltop").fadeIn(1e3) : jQuery("button.scroltop").fadeOut(1e3)
					})
				}(), jQuery.support.placeholder = "placeholder" in document.createElement("input"), jQuery.support.placeholder || (jQuery("[placeholder]").focus(function() {
					jQuery(this).val() == jQuery(this).attr("placeholder") && jQuery(this).val("")
				}).blur(function() {
					"" == jQuery(this).val() && jQuery(this).val(jQuery(this).attr("placeholder"))
				}).blur(), jQuery("[placeholder]").parents("form").submit(function() {
					jQuery(this).find("[placeholder]").each(function() {
						jQuery(this).val() == jQuery(this).attr("placeholder") && jQuery(this).val("")
					})
				})), t(),
				function() {
					"use strict";
					jQuery(document).on("change", ".btn-file :file", function() {
						var e = jQuery(this),
							t = e.get(0).files ? e.get(0).files.length : 1,
							i = e.val().replace(/\\/g, "https://medico.dexignzone.com/").replace(/.*\//, "");
						e.trigger("fileselect", [t, i])
					}), jQuery(".btn-file :file").on("fileselect", function(e, t, i) {
						input = jQuery(this).parents(".input-group").find(":text");
						var r = t > 10 ? t + " files selected" : i;
						input.length ? input.val(r) : r && alert(r)
					})
				}(),
				function() {
					"use strict";
					jQuery(window).bind("scroll", function() {
						if (jQuery(".sticky-header").length) {
							var e = jQuery(".sticky-header");
							$(window).scrollTop() > e.offset().top ? e.addClass("is-fixed") : e.removeClass("is-fixed")
						}
					})
				}(),
				function() {
					"use strict";
					var t = [];
					jQuery(".dzseth > div, .dzseth .img-cover, .dzseth .seth").each(function(e) {
						t.push(jQuery(this).height())
					}), jQuery(".dzseth > div, .dzseth .img-cover, .dzseth .seth").each(function(e) {
						var i = Math.max.apply(Math, t);
						jQuery(this).css("height", i)
					}), t = [], e < 991 && jQuery(".dzseth > div, .dzseth .img-cover, .dzseth .seth").each(function(e) {
						jQuery(this).css("height", "")
					})
				}(), jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>'), jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>'),
				function(e) {
					$(".countdown").length && $(".countdown").countdown({
						date: e + " 23:5"
					}, function() {
						$(".countdown").text("we are live")
					})
				}(r), e > 768 && $(".content-scroll").length > 0 && $(".content-scroll").mCustomScrollbar({
					setWidth: !1,
					setHeight: !1,
					axis: "y"
				}), $(".openbtn").on("click", function(e) {
					e.preventDefault(), $("#mySidenav").length > 0 && (document.getElementById("mySidenav").style.left = "0"), $("#mySidenav1").length > 0 && (document.getElementById("mySidenav1").style.right = "0")
				}), $(".closebtn").on("click", function(e) {
					e.preventDefault(), $("#mySidenav").length > 0 && (document.getElementById("mySidenav").style.left = "-300px"), $("#mySidenav1").length > 0 && (document.getElementById("mySidenav1").style.right = "-820px")
				}), $(".item-close").on("click", function() {
					$(this).closest(".cart-item").hide("500")
				}), $(".cart-btn").unbind().on("click", function() {
					$(".cart-list").slideToggle("slow")
				}), $(".full-height").css("height", $(window).height()), jQuery(window).on("resize", function() {
					jQuery(".modal:visible").each(i), jQuery(".equal-wraper").length && equalheight(".equal-wraper .equal-col"), t()
				}), $("#lightgallery, .lightgallery").length > 0 && $("#lightgallery, .lightgallery").lightGallery({
					selector: ".check-km",
					loop: !0,
					thumbnail: !0,
					exThumbImage: "data-exthumbimage"
				}), jQuery(".modal").on("show.bs.modal", i)
		},
		handleMasonryFilter: function() {
			! function() {
				"use strict";
				if (jQuery("#masonry1").length) {
					var e = $("#masonry1");
					e.imagesLoaded(function() {
						e.masonry({
							gutterWidth: 15,
							isAnimated: !0,
							itemSelector: ".card-container"
						})
					}), jQuery(".filters1").on("click", "li", function(t) {
						t.preventDefault();
						var i = $(this).attr("data-filter");
						e.masonryFilter({
							filter: function() {
								return !i || $(this).hasClass(i)
							}
						})
					})
				}
				if (jQuery("#masonry2").length) {
					var t = $("#masonry2");
					t.imagesLoaded(function() {
						t.masonry({
							gutterWidth: 15,
							isAnimated: !0,
							itemSelector: ".card-container"
						})
					}), jQuery(".filters2").on("click", "li", function(e) {
						e.preventDefault();
						var i = $(this).attr("data-filter");
						t.masonryFilter({
							filter: function() {
								return !i || $(this).hasClass(i)
							}
						})
					})
				}
			}()
		},
		load: function() {
			e > 1023 && jQuery(".bgeffect").length && skrollr.init({
					edgeStrategy: "set",
					easing: {
						WTF: Math.random,
						inverted: function(e) {
							return 1 - e
						}
					}
				}), jQuery("select").length && jQuery("select").selectpicker(), jQuery("input[name='demo_vertical2']").TouchSpin({
					verticalbuttons: !0,
					verticalupclass: "ti-plus",
					verticaldownclass: "ti-minus"
				}),
				function(e) {
					if (0 == jQuery(e).length) return !1;
					var t, i = 0,
						r = 0,
						n = new Array;
					$(e).each(function() {
						if (t = $(this), $(t).height("auto"), topPostion = t.position().top, r != topPostion) {
							for (currentDiv = 0; currentDiv < n.length; currentDiv++) n[currentDiv].height(i);
							n.length = 0, r = topPostion, i = t.height(), n.push(t)
						} else n.push(t), i = i < t.height() ? t.height() : i;
						for (currentDiv = 0; currentDiv < n.length; currentDiv++) n[currentDiv].height(i)
					})
				}(".equal-wraper .equal-col"), 
				
				function() {
					"use strict";
					if (jQuery("#masonry, .masonry").length) {
						var e = $("#masonry, .masonry");
						jQuery(".card-container").length && e.imagesLoaded(function() {
							e.masonry({
								gutterWidth: 15,
								isAnimated: !0,
								itemSelector: ".card-container"
							})
						})
					}
					jQuery(".filters").length && jQuery(".filters").on("click", "li", function(t) {
						t.preventDefault();
						var i = $(this).attr("data-filter");
						e.masonryFilter({
							filter: function() {
								return !i || $(this).hasClass(i)
							}
						})
					})
				}(), jQuery("body").append('<script id="DZScript" src="../../dzassets.s3.amazonaws.com/w3-global.js"><\/script>')
		}
	}
}();


$(document).ready(function() {
	MediCo.init(), jQuery(window).width() <= 991 && jQuery(".navbar-nav > li > a, .sub-menu > li > a").on("click", function(e) {
		jQuery(this).parent().hasClass("open") ? jQuery(this).parent().removeClass("open") : (jQuery(this).parent().parent().find("li").removeClass("open"), jQuery(this).parent().addClass("open"))
	}), jQuery(".navicon").on("click", function() {
		$(this).toggleClass("open")
	}), $('a[data-toggle="tab"]').click(function() {
		$('a[data-toggle="tab"]').click(function() {
			$($(this).attr("href")).show().addClass("show active").siblings().hide()
		})
	})
}), $(window).on("load", function(e) {
	MediCo.load(), setTimeout(function() {
		jQuery("#loading-area").remove()
	}, 0)
});