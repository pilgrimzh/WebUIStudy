define('na/grid', function (require, exports, module) { //jQuery 1.8.2+
    var $ = require('jQuery');
    //require('skin/skin.js');                        //加载样式
    var settings = {};
    var tableObj, selAllObj, selOneObjs, containerObj;

    module.exports = {
        toggleVal: function () {
            var array = containerObj.val().split(','); //储存选中数据的键值
            var selarr = [];                                //存储本页所有数据的键值
            selOneObjs.each(function (i) {
                var key = $(this).parent().parent().find("td:eq(" + settings.index + ")").text();
                selarr.push({ id: $.trim(key), checked: $(this).attr("checked") });
            });
            array = $.grep(array, function (val, i) {
                for (var p in selarr) {
                    if (p.id == val) return false;  //剔除 所有 本页的键值
                }
            });
            $.each(selarr, function (i, val) {      //添加本页选中的键值
                if (val.checked) array.push(val.id);
            });
            containerObj.val(array.join(','));
        },
        bindTr: function () {
            var trObjs = tableObj.find("tr:not(:first)");
            var c = settings.css;
            trObjs.click(function () {
                if ($.isFunction(settings.rowClick))
                    settings.rowClick($(this));
            });

            if (!c.apply) return;

            trObjs.filter(":odd").attr("class", c.odd).data("alter", c.odd);
            trObjs.filter(":even").attr("class", c.even).data("alter", c.even);

            trObjs.mouseover(function () {
                if (!$(this).find(":checkbox")[0].checked) {
                    $(this).attr("class", c.over);
                }
            }).mouseout(function () {
                if (!$(this).find(":checkbox")[0].checked) {
                    $(this).attr("class", $(this).data("alter"));
                } else {
                    $(this).attr("class", c.selected);
                }
            });
        },
        bindOne: function () {
            selOneObjs.click(this.toggleVal);
            selOneObjs.change(function () {
                var tr = $(this).parent().parent();
                if (this.checked && settings.css.apply) {
                    tr.attr("class", settings.css.selected);
                } else {
                    tr.attr("class", tr.data("alter"));
                }
            });
        },

        bindAll: function (selector) {
            var tv = this.toggleVal;
            selAllObj.click(function () {//是否全选
                selOneObjs.attr({ checked: this.checked });
                tv();
            });
            if ($.type(selector) === "string") {
                $(selector).click(selAllObj.click);
            }
        },

        init: function () { //初始化控件事件
            var sets = settings;
            tableObj = $(sets.table);
            selAllObj = tableObj.find(":checkbox:first");
            selOneObjs = tableObj.find(":checkbox:not(:first)");
            if (sets.selAll.length > 0) {
                selAllObj = $(sets.selAll);
                selOneObjs = tableObj.find(":checkbox:not(" + sets.selAll + ")");
            }
            containerObj = $(sets.container);
            this.bindOne();
            this.bindAll();
            this.bindTr();
        }, //end init

        config: function (options) {
            settings = $.extend(true, {}, {
                table: '#tableid',              //表格 的选择器
                selAll: '#selectAll',           //全选 按钮的选择器
                index: 1,                       //保存 编号值的所在行的索引列
                container: '#keys',             //储存每行的数据主键的容器(一般为input控件) 选择器
                css: {
                    apply: true,
                    over: "over",               //鼠标移上去的效果
                    even: "even",               //表格本身奇数行的效果
                    odd: "odd",                 //表格偶数行的效果
                    selected: "selected"        //选中行效果
                },
                rowClick: null                  //用户自定义处理 行点击事件
            }, options);
            this.init();
        } //end config
    }; //end grid
});