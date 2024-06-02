// The food court's JavaScript
function pacmanAnimation(callback) {
    const pacman = document.getElementById('pacman');
    const pacmanMouth = document.getElementById('pacmanMouth');
    const pacmanFood = document.getElementById('pacmanFood');

    pacman.style.display = 'block';
    pacmanMouth.style.animationPlayState = 'running';
    pacmanFood.style.animationPlayState = 'running';

    setTimeout(() => {
        pacmanMouth.style.animationPlayState = 'paused';
        pacmanFood.style.animationPlayState = 'paused';
        pacman.style.display = 'none';
        if (callback) callback();
    }, 3000); 
}

function highlightArea(event, area) {
    var frame = document.getElementById('info-iframe');
    frame.style.display = 'none';

    event.preventDefault(); // 一開始不要打開連結

    document.querySelectorAll('.highlight').forEach(temp => temp.remove());

    const coords = area.coords.split(',').map(coord => parseInt(coord));

    const highlight = document.createElement('div');
    highlight.classList.add('highlight');
    
    const [x1, y1, x2, y2] = coords;
    highlight.style.left = `${x1}px`;
    highlight.style.top = `${y1}px`;
    highlight.style.width = `${x2 - x1}px`;
    highlight.style.height = `${y2 - y1}px`;
    
    const img = document.getElementById('main-image');
    const imgRect = img.getBoundingClientRect();
    highlight.style.left = `${imgRect.left + window.scrollX + coords[0]}px`;
    highlight.style.top = `${imgRect.top + window.scrollY + coords[1]}px`;

    document.body.appendChild(highlight);

    var storeName = area.alt + '.html'
    console.log(storeName)
    pacmanAnimation(() => {
        const iframe = document.getElementById('info-iframe');
        iframe.style.display = 'block';
        iframe.src = './foodDescription/' + storeName;
    });
}