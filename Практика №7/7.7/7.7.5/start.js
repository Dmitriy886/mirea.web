let images = [
    "https://www.hl.co.uk/__data/assets/image/0008/12665645/1000-x-350-1.jpg",
    "https://i.stack.imgur.com/h2s1G.png",
    "https://io.ua/img_aa/large/3834/29/38342950.jpg",
    "https://lutzschmitt.com/thumbs/news/privacy-by-default-video-of-my-talk-at-the-ia-summit-2017/vancouver-rick-schwartz-flickr-cc-by-nc-2-1000x350.jpg",
    "https://images.adventures.is/assets/uploads/2017/12/15153049/Thingvellir-national-park-Iceland-1000x350.jpg"
];

let t;

function start() {
    t = window.setInterval(timer, 2000);
}

function stop() {
    window.clearInterval(t);
}

let img = document.getElementById('img'), counter = 0;

function timer() {
    counter++;
    img.src = images[counter % 5];
}