// 百度统计
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?41c62e8338d3366d401ad616c607cd06";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

// 百度推送
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

$(document).ready(function() {
  // 集成fancybox, 为文章中所有的img元素添加父元素
  $(".post-content img").each(function () {
      if ($(this).hasClass('nofancybox')) return;

     // $(this).attr("data-fancybox", "gallery"); 直接给img添加data-fancybox会导致点击图片后图片消失
      var element = document.createElement("a");
      $(element).attr("data-fancybox", "gallery");
      $(element).attr("href", $(this).attr("src"));
      $(this).wrap(element);
  });
});