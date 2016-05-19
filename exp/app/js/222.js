/*! JailBreak 2015-08-06 */
define(["jquery", "angular"], function (a, b) {
    var c, d, e, f, g, h;
    return c = b.module("myblog"), g = function (b) {
        var c, d, e, f, g, h, i, j, k;
        for (h = {
            title: "",
            type: "",
            tag: "",
            disc: "",
            url: "",
            hide: ""
        }, g = "零 一 二 三 四 五 六 七 八 九 十 十一 十二".split(" "), i = b.split("\n"), c = 0, e = i.length; e > c; c++)f = i[c], j = f.split(":"), d = j[0], k = j[1], d = a.trim(d), k = a.trim(k), h.hasOwnProperty(d) && (h[d] = k);
        return h.date = h.url.split("-"), h.date.month = g[parseInt(h.date[1], 10)], h.date.day = parseInt(h.date[2], 10), h
    }, e = function (a) {
        var b;
        return b = [], a = a.split(/\n[\-=]+/), a.forEach(function (a) {
            return a = g(a), "true" !== a.hide ? b.push(a) : void 0
        }), b
    }, h = function (a) {
        var b;
        return b = [], a.forEach(function (a) {
            return -1 === b.indexOf(a.type) ? b.push(a.type) : void 0
        }), b
    }, f = function (a) {
        var b, c, d, e, f, h, i, j;
        for (b = !1, c = "", j = "", i = a.split("\n"), d = 0, e = i.length; e > d; d++)f = i[d], /[\-=]+/.test(f) && (b = !0), b ? j += "\n" + f : c += "\n" + f + "\n";
        return h = g(c), h.text = j, "true" !== h.hide ? h : void 0
    }, d = function (a, b) {
        var c, d, e, f, g;
        if (b && (g = b), g && a && "all" !== g) {
            for (f = [], d = 0, e = a.length; e > d; d++)c = a[d], c.type === g && f.push(c);
            return f
        }
        return a
    }, c.controller("blog", ["$scope", "$http", "$rootScope", "$timeout", "$location", "$stateParams", function (a, b, c) {
        return b.get("/post/list.md").success(function (b) {
            return a.blogList = a.blogListOrigin = e(b), a.listType = h(a.blogList)
        }), a.percent = "0", c.$on("themeChangeStart", function (b, c) {
            return a.percent = c.fake ? "30" : "0"
        }), c.$on("themeChangeSuccess", function () {
            return a.percent = "100"
        }), c.$on("themeChangeProgress", function (b, c) {
            return a.percent = c.loaded / c.total * 100 + "", console.log(a.percent)
        }), a.themes = [{color: "green", selected: !0}, {color: "blue", selected: !1}, {
            color: "purple",
            selected: !1
        }, {color: "yellow", selected: !1}, {color: "pink", selected: !1}], a.themes.themeClass = "theme-green"
    }]), c.controller("bloglist", ["$rootScope", "$scope", "$http", "$stateParams", function (a, b, c, d) {
        return b.blogtype = a.blogtype = d.type
    }]), c.controller("blogdetail", ["$scope", "$http", "$stateParams", "$timeout", "$location", function (a, b, c, d, e) {
        var g;
        return b.get("/post/" + c.article).success(function (b) {
            return b = f(b), a.title = b.title, a.article = b.text, g(".blog-detail")
        }), g = function (b) {
            var c;
            return c = document.createElement("div"), c.setAttribute("id", e.url()), c.setAttribute("data-thread-key", a.title), c.setAttribute("data-url", e.url()), DUOSHUO.EmbedThread(c), jQuery(b).append(c)
        }
    }])
});