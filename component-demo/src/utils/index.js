
export const enterfullscreen = () => { //进入全屏
    let dom = document.querySelector('.editor');
    //W3C
    if (dom.requestFullscreen) {
        dom.requestFullscreen();
    }
    //FireFox
    else if (dom.mozRequestFullScreen) {
        dom.mozRequestFullScreen();
    }
    //Chrome等
    else if (dom.webkitRequestFullScreen) {
        dom.webkitRequestFullScreen();
    }
    //IE11
    else if (dom.msRequestFullscreen) {
        dom.msRequestFullscreen();
    }
}

export const exitfullscreen = () => { //退出全屏
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}