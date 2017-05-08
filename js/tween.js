
var Log = function(){};

Log.prototype.l = function(msg) {
    console.log(msg);
}

var log = new Log();

var demo1 = function() {
    var w = $("#w-demo1");
    log.l(w);
    new TWEEN.Tween(w.position).to({x: -400}, 3000).repeat(Infinity).start();
    let i = 0;
    function animation() {
        requestAnimationFrame(animation);
        TWEEN.update();
        log.l(i);
        i++;
    }
    //animation();
}

demo1();

