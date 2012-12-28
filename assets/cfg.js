seajs.use('skin/skin');

seajs.config({
        //base:'/',
        preload: ['seajs/1.3.1/plugin-combo'],
        alias: {
            'jQuery': 'gallery/jquery/1.8.3/jquery',
            'cookie': 'gallery/cookie/1.3.0/cookie',
            'jsuri':'gallery/jsuri/1.2.2/jsuri'
        },
        charset: function (url) {//获取模块文件时，<script> 或 <link> 标签的 charset 属性。 默认是 utf-8
            return 'utf-8';
        },
        //preload: ['seajs/plugin-debug', 'seajs/plugin-less', 'seajs/plugin-json'],
        debug: true//值为 true 时，加载器会使用 console.log 输出所有错误和调试信息。 默认为 false, 只输出关键信息。

        //插件、模块的引用路径 都基于base路径的绝对路径
        //base路径 为 seajs文件夹所在路径的绝对路径 
});

// 将 jQuery 暴露到全局
seajs.modify('jQuery', function (require, exports) {
    window.jQuery = window.$ = exports
});

 

 

