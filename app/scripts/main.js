$(function() {
  
  function pathPrepare ($el) {
    var lineLength = $el[0].getTotalLength();
    $el.css("stroke-dasharray", lineLength);
    $el.css("stroke-dashoffset", lineLength);
  }

  var $elements = [
    {item: $('path.have1'), time: 0.35},
    {item: $('path.have2'), time: 0.1},
    {item: $('path.have3'), time: 0.12},
    {item: $('path.have4'), time: 0.25},
    {item: $('path.have5'), time: 0.1},
    {item: $('path.have6'), time: 0.11},

    {item: $('path.color1'), time: 0.1 },
    {item: $('path.color2'), time: 0.1 },
    {item: $('path.color3'), time: 0.1 },
    {item: $('path.color4'), time: 0.1 },
    {item: $('path.color5'), time: 0.1 },
    {item: $('path.color6'), time: 0.1 },
    {item: $('path.color7'), time: 0.1 },
    {item: $('path.color8'), time: 0.1 },
    {item: $('path.color9'), time: 0.1 },
    {item: $('path.color10'), time: 0.1 },
    {item: $('path.color11'), time: 0.1 },
    {item: $('path.color12'), time: 0.1 },
    {item: $('path.color13'), time: 0.1 },
    {item: $('path.color14'), time: 0.1 },
    {item: $('path.color15'), time: 0.1 },
    {item: $('path.color16'), time: 0.1 },
    {item: $('path.color17'), time: 0.1 },
    {item: $('path.color18'), time: 0.1 },
    {item: $('path.color19'), time: 0.1 },
    {item: $('path.color20'), time: 0.1 },
    {item: $('path.color21'), time: 0.1 },
    {item: $('path.color22'), time: 0.1 },

    {item: $('path.christmas1'), time: 1.71 },
    {item: $('path.christmas2'), time: 0.3 },
    {item: $('path.christmas3'), time: 0.06 },
    {item: $('path.christmas4'), time: 0.5 },
    {item: $('path.christmas5'), time: 0.045 },
    {item: $('path.christmas6'), time: 0.08 },
  ];

  // init controller
  var controller = new ScrollMagic.Controller();
  var tween = new TimelineMax();

  for (var i = 0, len = $elements.length; i < len; i++) {
    pathPrepare($elements[i].item);
    tween.to($elements[i].item, $elements[i].time, {strokeDashoffset: 0, ease:Linear.easeNone});
  }

  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
    .setTween(tween)
    .addTo(controller);

});
