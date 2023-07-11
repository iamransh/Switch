let btn = document.getElementsByTagName("button")[0];
btn.addEventListener('click', function (e) {
    document.body.classList.toggle("body");
    document.body.classList.toggle("body1");
    document.getElementsByTagName('button')[0].classList.toggle("button");
    document.getElementsByTagName('button')[0].classList.toggle("button1");
    document.getElementsByTagName('div')[0].classList.toggle("btn");
    document.getElementsByTagName('div')[0].classList.toggle("btn1");
    document.getElementsByTagName('div')[1].classList.toggle("act");
    document.getElementsByTagName('div')[1].classList.toggle("act1");
})


