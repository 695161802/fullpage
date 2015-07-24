/**
 * Created by qi on 2015/7/23.
 */
var $$ = document.querySelectorAll().bind(document);

function bindTouch(el) {
    'use strict';

    //��ҳ�·����һ����¼�
    var startPos = {},
        endPos = {};

    el.addEventListener('touchstart', function (event) {
        // ��ʼ�� x,y ֵ����ֹ���һ�κ���ּ� move �¼�
        startPos = {};
        endPos = {};
        event.preventDefault();
        var touch = event.touches[0];
        startPos.x = touch.pageX;
        startPos.y = touch.pageY;
    }, false);

    el.addEventListener('touchmove', function (event) {
        event.preventDefault();
        var touch = event.touches[0];
        endPos.x = touch.pageX;
        endPos.y = touch.pageY;
    }, false);

    el.addEventListener('touchend', function (event) {
        event.preventDefault();
        var min = startPos.x - endPos.x;

        if (min > 10 && Math.abs(startPos.y - endPos.y) < 30) {

        } else if (min < -10 && Math.abs(startPos.y - endPos.y) < 30) {

        }

    }, false);

}
