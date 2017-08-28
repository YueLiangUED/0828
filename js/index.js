(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //按钮效果
    window.setInterval(function () {
        $('#btn').animate({
            width: '14rem',
            height: '4rem',
        });
        $('#btn').animate({
            width: '16.6rem',
            height: '4.85rem',
        });
    },500);
});
