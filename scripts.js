const el = {
    jumbotron: document.getElementsByClassName('jumbotron')[0],
    bgs: [
        document.getElementById('background1'),
        document.getElementById('background2'),
        document.getElementById('background3'),
        document.getElementById('background4'),
    ],
    headers: {
        long: document.getElementsByTagName('h2')[0],
        drive: document.getElementsByTagName('h2')[1],
        home: document.getElementsByTagName('h2')[2],
    },
};

let bgSpeeds = [
    0.8,
    0.6,
    0.4,
    0.2,
];

window.onscroll = function(e) {
    let y = window.scrollY;
    //el.jumbotron.style.backgroundPosition = '0 ' + (y * -0.6) + 'px';

    for (let bg_i = 0; bg_i < el.bgs.length; bg_i++) {
        el.bgs[bg_i].style.backgroundPosition = '0 ' + (-y * bgSpeeds[bg_i]) + 'px';
    }


    /*
    el.headers.long.style.transform = 'translateX(' + (y) + 'px)';

    el.headers.drive.style.transform = 'translateX(' + (-y * 0.8) + 'px)';
    el.headers.drive.style.letterSpacing = (y * 0.2) + 'px';

    el.headers.home.style.transform = 'translateX(' + (y) + 'px)';
    el.headers.home.style.letterSpacing = (y * 0.3) + 'px';
    */

}
