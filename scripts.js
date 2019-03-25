let videos = Array.from(document.querySelectorAll('.videos'));

document.querySelector('#boton-watch').addEventListener('click', e => {
    let pos1 = 0;
    for (let j = 0; j < videos.length; j++) {
        if (videos[j].classList.contains('active')) {
            pos1 = j;
        }
    }
    videos.map(video => video.classList.remove('active'));;
    if (pos1 == 2) {
        pos1 = 0;
        videos[pos1].classList.add('active');
    } else {
        pos1++;
        videos[pos1].classList.add('active');
    }

})