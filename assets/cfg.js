seajs.use('skin/skin');

seajs.config({
        //base:'/',
        preload: ['seajs/1.3.1/plugin-combo'],
        alias: {
            'jQuery': 'gallery/jquery/1.8.3/jquery',
            'cookie': 'gallery/cookie/1.3.0/cookie',
            'jsuri':'gallery/jsuri/1.2.2/jsuri'
        },
        charset: function (url) {//��ȡģ���ļ�ʱ��<script> �� <link> ��ǩ�� charset ���ԡ� Ĭ���� utf-8
            return 'utf-8';
        },
        //preload: ['seajs/plugin-debug', 'seajs/plugin-less', 'seajs/plugin-json'],
        debug: true//ֵΪ true ʱ����������ʹ�� console.log ������д���͵�����Ϣ�� Ĭ��Ϊ false, ֻ����ؼ���Ϣ��

        //�����ģ�������·�� ������base·���ľ���·��
        //base·�� Ϊ seajs�ļ�������·���ľ���·�� 
});

// �� jQuery ��¶��ȫ��
seajs.modify('jQuery', function (require, exports) {
    window.jQuery = window.$ = exports
});

 

 

