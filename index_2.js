var app = document.getElementById('app');
var clocks = [];

var btnAddMore = document.createElement('button');
btnAddMore.classList.add('control');
btnAddMore.innerHTML = 'Add';

btnAddMore.addEventListener('click', () => {
    var clock = new Clock();
    clocks.push(clock);
    app.appendChild(clock.render());
})

var btnStartAll = document.createElement('button');
btnStartAll.classList.add('control');
btnStartAll.classList.add('startAll');
btnStartAll.innerHTML = 'Start All';
btnStartAll.addEventListener('click', () => {
    clocks.forEach(clock => {
        if (clock.checkStart == false) {
            clock.start();
            clock.checkStart = true;
        }

    })
    clocks.forEach(clock => {
        clock.$btnStart.onclick = () => {

        }
    })
})

var title = document.createElement('div');
title.classList.add('title');
title.innerHTML = 'Đồng Hồ Bấm Giờ'

app.appendChild(title);

app.appendChild(btnAddMore);

app.appendChild(btnStartAll);