define('na/test', function (require, exports, module) {
    /*define('标识符',[预加载模块],function(require, exports[,module]){})
    */
    var $ = require("jQuery");
    console.log(require.resolve("jQuery"));
    module.exports = {
        show: function (s) {
            $("p").html(s);
        },
        alert: function (msg) {
            alert(msg);
        }
    }
});

