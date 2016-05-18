/*! JailBreak 2015-08-06 */
define(["jquery", "angular"], function (a, b) {
    var c;
    return c = b.module("myblog"), c.directive("celAnimate", ["$rootScope", function (b) {
        return {
            restrict: "EA", link: function (c, d) {
                var e, f;
                if (!(a(window).width() < 768))return a(d).addClass("cel-hide"), f = 0, e = function () {
                    var b, c, e;
                    if (!a(d).hasClass("cel-show"))return b = a(window).height(), e = a(window).scrollTop(), c = a(d).offset().top, b >= c - e && a(d).removeClass("cel-hide").addClass("cel-show"), f = 1
                }, e(), a(window).scroll(function () {
                    return f = 0
                }), b.$on("$routeChangeSuccess", function () {
                    return setTimeout(function () {
                        return e()
                    })
                }), setInterval(function () {
                    return 0 === f ? e() : void 0
                }, 200)
            }
        }
    }]), c.directive("cover", function () {
        return {
            restrict: "EA", link: function (b, c) {
                var d;
                return d = function () {
                    var b, d, e, f;
                    return c = a(c), d = c.width(), f = a(window).width(), b = c.height(), e = a(window).height(), c.css("min-width", e * d / b + "px"), e === b ? c.css("left", "-" + (d - f) / 2 + "px") : c.css("left", 0)
                }, d(), window.onresize = function () {
                    return d()
                }
            }
        }
    }), c.directive("changeFont", function () {
        return {
            restrict: "A", link: function (b, c) {
                var d, e, f;
                return d = ["cursive", "-webkit-body", "-webkit-pictograph", "fantasy", "serif"], e = 0, f = {}, a(c).hover(function () {
                    var b, c;
                    return b = this, c = a(".navbar-brand"), f.now = setInterval(a.proxy(function () {
                        return a(c).css("font-family", d[e]), a(b).css("font-family", d[e]), ++e >= 5 ? e = 0 : void 0
                    }), 200)
                }, function () {
                    return clearInterval(f.now)
                })
            }
        }
    }), c.directive("scrollFade", function () {
        return {
            restrict: "A", link: function (b, c) {
                var d, e, f, g;
                if (!(a(window).width() < 768))return d = a(c), e = a(window), f = d.height(), g = d.offset().top, e.scroll(function () {
                    var a, b, c;
                    return c = e.scrollTop(), c > g && 2 * f >= c - g ? (b = (c - g) / (2 * f) + 1, a = 1 - (c - g) / (2 * f), d.css({
                        transform: "scale(" + b + ")",
                        opacity: a
                    })) : void 0
                })
            }
        }
    }), c.directive("drag", function () {
        return {
            restrict: "EA", link: function (b, c) {
                var d;
                return c = a(c), (d = function () {
                    var b, d, e;
                    return e = 0, b = 0, d = 0, c.mousedown(function (f) {
                        return console.log(b), e = 1, b = f.clientX, d = f.clientY, a("body").mousemove(function (d) {
                            var f;
                            return console.log("start2" + e), e ? (f = d.clientX - b, b = d.clientX, c.parent().css("left", "+=" + f + "px"), a(".bk-left").css("width", "+=" + f + "px"), a(".bk-right").css("left", "+=" + f + "px")) : void 0
                        }), a("body").mouseup(function () {
                            return 1 === e ? (e = 0, a("body").unbind("mousemove"), a("body").unbind("mouseup")) : void 0
                        })
                    })
                })()
            }
        }
    }), c.directive("showDetail", function () {
        return {
            restrict: "A", link: function (b, c, d) {
                var e;
                return e = a(".bk-" + d.showDetail), a(c).hover(function () {
                    return a(window).width() > 768 ? (e.addClass("active"), a(".round").not(a(this)).addClass("fadeout")) : void 0
                }, function () {
                    return a(window).width() > 768 ? (e.removeClass("active"), a(".round").not(a(this)).removeClass("fadeout")) : void 0
                })
            }
        }
    }), c.directive("vgGo", function () {
        return {
            restrict: "A", link: function (b, c, d) {
                return a(c).click(function () {
                    return window.location.href = d.vgGo
                })
            }
        }
    }), c.directive("markdown", function () {
        return {
            restrict: "A", scope: {content: "=markdownText"}, link: function (b, c, d) {
                var e, f, g, h;
                return h = d.theme ? d.theme : "zenburn", e = require.toUrl("/app/assets/css/lib/highlight/" + h + ".css"), f = document.createElement("link"), f.type = "text/css", f.rel = "stylesheet", f.href = e, document.getElementsByTagName("head")[0].appendChild(f), g = '<div class="spinner"> <div class="rect1"></div> <div class="rect2"></div> <div class="rect3"></div> <div class="rect4"></div> <div class="rect5"></div> </div>', c.html(g), requirejs(["markdown", "hljs"], function (d, e) {
                    return b.$watch(function () {
                        return b.content
                    }, function (b) {
                        return b ? (c.html(d.toHTML(b)), a(c).find("pre>code").each(function (a, b) {
                            return e.highlightBlock(b)
                        })) : c.html(g)
                    }), b.content ? (c.html(d.toHTML(b.content)), a(c).find("pre>code").each(function (a, b) {
                        return e.highlightBlock(b)
                    })) : c.html(g)
                })
            }
        }
    }), c.directive("themeSwitcher", function () {
        return {
            restrict: "E", scope: {themes: "=themes"}, link: function () {
                return localStorage.getItem("theme") ? void 0 : localStorage.setItem("theme", "green")
            }, controller: ["$scope", "$rootScope", "$timeout", "$http", function (b, c) {
                var d, e, f;
                f = [], e = "1080x1800", a(window).width() < 500 && (e = "500x500xz"), d = {
                    green: "http://gtms01.alicdn.com/tps/i1/TB1I3coIFXXXXaOXpXXxjZKVXXX-1200-675.jpg_" + e + ".jpg",
                    pink: "http://gtms03.alicdn.com/tps/i3/TB1CUj9IFXXXXbNaXXX9l.7UFXX-1920-1080.jpg_" + e + ".jpg",
                    purple: "http://gtms04.alicdn.com/tps/i4/TB1euAmIFXXXXbnXpXX9l.7UFXX-1920-1080.jpg_" + e + ".jpg",
                    blue: "http://gtms01.alicdn.com/tps/i1/TB1jEEuIFXXXXXrXXXX9l.7UFXX-1920-1080.jpg_" + e + ".jpg",
                    yellow: "http://gtms03.alicdn.com/tps/i3/TB1e4EaIFXXXXcuXVXX9l.7UFXX-1920-1080.jpg_" + e + ".jpg"
                }, this.gotChanged = function (e) {
                    var g, h;
                    return g = function () {
                        var d, g, h;
                        return f.forEach(function (a) {
                            return a !== e ? a.selected = !1 : void 0
                        }), b.themes.themeClass = "theme-" + e.color, localStorage.setItem("theme", e.color), e.loaded = !0, d = "url(" + e.url + ")", g = a(".header-background.bg-leave"), h = a(".header-background.bg-enter"), h.removeClass("bg-enter").addClass("bg-leave"), g.removeClass("bg-leave").addClass("bg-enter").css("background-image", d), c.$broadcast("themeChangeSuccess")
                    }, e.loaded ? void g() : (e.img = new Image, window.URL.createObjectURL ? (c.$broadcast("themeChangeStart", {fake: !1}), h = new XMLHttpRequest, h.open("GET", d[e.color]), h.responseType = "blob", h.onreadystatechange = function () {
                        return 4 === h.readyState ? e.url = window.URL.createObjectURL(h.response) : void 0
                    }, h.onprogress = function (a) {
                        return c.$apply(function () {
                            return c.$broadcast("themeChangeProgress", a)
                        })
                    }, h.send()) : (c.$broadcast("themeChangeStart", {fake: !0}), e.img.src = e.url = d[e.color]), h.onload = e.img.onload = g)
                }, this.addThemes = function (a) {
                    return f.push(a)
                }
            }]
        }
    }), c.directive("switcher", ["$rootScope", "$timeout", function () {
        return {
            restrict: "EA",
            template: "<i ng-click=\"toggleTheme()\" class=\"{{theme.selected ? 'active' : ''}} glyphicon glyphicon-sunglasses\"></i>",
            replace: !0,
            transclude: !0,
            require: "^themeSwitcher",
            scope: {theme: "=tm"},
            link: function (a, b, c, d) {
                var e;
                return a.theme.selected = !1, e = localStorage.getItem("theme"), d.addThemes(a.theme), a.toggleTheme = function () {
                    return a.theme.selected = !0, d.gotChanged(a.theme)
                }, e === a.theme.color ? a.toggleTheme() : void 0
            }
        }
    }]), c.directive("progressTool", ["$rootScope", "$timeout", function (a, b) {
        return {
            restrict: "EA",
            replace: !0,
            template: '<div class="progress {{mhide}}"> <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="{{percent}}" aria-valuemin="0" aria-valuemax="100" style="width: {{percent}}%;"> <span class="{{showPercent ? \'\' : \'sr-only\'}}">{{percent}}%</span> </div> </div>',
            scope: {percent: "=percent", showPercent: "=showPercent"},
            link: function (a) {
                return a.mhide = "", a.percent += "", a.$watch(function () {
                    return a.percent
                }, function () {
                    return "100" === a.percent ? (b(function () {
                        return a.percent = "0", a.mhide = "hide"
                    }, 500), b(function () {
                        return a.mhide = ""
                    }, 800)) : void 0
                })
            }
        }
    }])
});