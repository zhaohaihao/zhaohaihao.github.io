// declaraction of document.ready() function.
(function () {
    var ie = !!(window.attachEvent && !window.opera);
    var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
    var fn = [];
    var run = function () {
        for (var i = 0; i < fn.length; i++) fn[i]();
    };
    var d = document;
    d.ready = function (f) {
        if (!ie && !wk && d.addEventListener)
            return d.addEventListener('DOMContentLoaded', f, false);
        if (fn.push(f) > 1) return;
        if (ie)
            (function () {
                try {
                    d.documentElement.doScroll('left');
                    run();
                } catch (err) {
                    setTimeout(arguments.callee, 0);
                }
            })();
        else if (wk)
            var t = setInterval(function () {
                if (/^(loaded|complete)$/.test(d.readyState))
                    clearInterval(t), run();
            }, 0);
    };
})();

function GetUrlRelativePath() {
　　　var url = document.location.toString();
　　　var arrUrl = url.split("//");

　　　var start = arrUrl[1].indexOf("/");
　　　var relUrl = arrUrl[1].substring(start);//stop省略，截取从start开始到结尾的所有字符

　　　if(relUrl.indexOf("?") != -1){
　　　　　relUrl = relUrl.split("?")[0];
　　　}
　　　return relUrl;
}

document.ready(
    // toggleTheme function.
    // this script shouldn't be changed.
    function () {
        var _Blog = window._Blog || {};
        const currentTheme = window.localStorage && window.localStorage.getItem('theme');
        const isDark = currentTheme === 'dark';
        const pageIsRight = GetUrlRelativePath() === '/archives/';
        if (isDark) {
            document.getElementById("switch_default").checked = true;
            // mobile
            // document.getElementById("mobile-toggle-theme").innerText = "· Dark"
            document.getElementById("mobile-toggle-theme").innerHTML = "<i class='iconfont icon-taiyang'></i>"
        } else {
            document.getElementById("switch_default").checked = false;
            // mobile
            // document.getElementById("mobile-toggle-theme").innerText = "· Dark"
            document.getElementById("mobile-toggle-theme").innerHTML = "<i class='iconfont icon-taiyang'></i>"
        }
        _Blog.toggleTheme = function () {
            if (isDark) {
                document.getElementsByTagName('body')[0].classList.add('dark-theme');
                if (pageIsRight) {
                    document.getElementsByClassName('new-meta-item-posts')[0].classList.add('dark-theme');
                }
                // mobile
                // document.getElementById("mobile-toggle-theme").innerText = "· Dark"
                document.getElementById("mobile-toggle-theme").innerHTML = "<i class='iconfont icon-taiyang'></i>"
            } else {
                document.getElementsByTagName('body')[0].classList.remove('dark-theme');
                if (pageIsRight) {
                    document.getElementsByClassName('new-meta-item-posts')[0].classList.remove('dark-theme');
                }
                // mobile
                // document.getElementById("mobile-toggle-theme").innerText = "· Light"
                document.getElementById("mobile-toggle-theme").innerHTML = "<i class='iconfont icon-yueliang'></i>"
            }
            document.getElementsByClassName('toggleBtn')[0].addEventListener('click', () => {
                if (document.getElementsByTagName('body')[0].classList.contains('dark-theme')) {
                    document.getElementsByTagName('body')[0].classList.remove('dark-theme');
                    if (pageIsRight) {
                        document.getElementsByClassName('new-meta-item-posts')[0].classList.remove('dark-theme');
                    }
                } else {
                    document.getElementsByTagName('body')[0].classList.add('dark-theme');
                    if (pageIsRight) {
                        document.getElementsByClassName('new-meta-item-posts')[0].classList.add('dark-theme');
                    }
                }
                window.localStorage &&
                window.localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light',)
            })
            // moblie
            document.getElementById('mobile-toggle-theme').addEventListener('click', () => {
                if (document.getElementsByTagName('body')[0].classList.contains('dark-theme')) {
                    document.getElementsByTagName('body')[0].classList.remove('dark-theme');
                    if (pageIsRight) {
                        document.getElementsByClassName('new-meta-item-posts')[0].classList.remove('dark-theme');
                    }
                    // mobile
                    // document.getElementById("mobile-toggle-theme").innerText = "· Light"
                    document.getElementById("mobile-toggle-theme").innerHTML = "<i class='iconfont icon-yueliang'></i>"
                } else {
                    document.getElementsByTagName('body')[0].classList.add('dark-theme');
                    if (pageIsRight) {
                        document.getElementsByClassName('new-meta-item-posts')[0].classList.add('dark-theme');
                    }
                    // mobile
                    // document.getElementById("mobile-toggle-theme").innerText = "· Dark"
                    document.getElementById("mobile-toggle-theme").innerHTML = "<i class='iconfont icon-taiyang'></i>"
                }
                window.localStorage &&
                window.localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light',)
            })
        };
        _Blog.toggleTheme();

        // ready function.

    }
);