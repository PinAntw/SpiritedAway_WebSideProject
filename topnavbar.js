
function loadNavbar() {
    fetch('topnavbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('topnavbar').innerHTML = data;
            handlePageContent();
        });
    fetch('floatbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('float_nav_container').innerHTML = html;
            var navbar = document.getElementById('float_nav');
            navbar.style.visibility = 'hidden';
            navbar.style.opacity = 0;
            var links = navbar.getElementsByTagName('a');
            for (var i = 0; i < links.length; i++) {
                links[i].style.color = 'black';
            }
            addScrollListener();
            setImg();
        });
}
function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function handlePageContent() {
    let pageNumber = getQueryParam('page');
    let contentDiv = document.getElementById('content');
    switch (pageNumber) {
        case '2':
            contentDiv.innerHTML = '<h1>美食街</h1><p>這是美食街的內容。</p>';
            break;
        case '3':
            contentDiv.innerHTML = '<h1>應徵員工</h1><p>這是應徵員工的內容。</p>';
            break;
        case '4':
            contentDiv.innerHTML = '<h1>交通資訊</h1><p>這是交通資訊的內容。</p>';
            break;
        case '5':
            contentDiv.innerHTML = '<h1>場館介紹</h1><p>這是場館介紹的內容。</p>';
            break;
        default:
            contentDiv.innerHTML = '';
            break;
    }
}

function setPageNum(pageNumber){
    localStorage.setItem('pageNumber', pageNumber);
}

function setImg(){
    var img = document.getElementById('homepage_image');
    var img_container = document.getElementById('homepage_container');
    var news = document.getElementById('news');
    var pageNumber = parseInt(localStorage.getItem('pageNumber'));
    switch(pageNumber){
        case 1:
            img.src = 'image/homepage/tangWu2.jpg';
            break;
        case 2:
            img.src = 'image/homepage/jiouFen.jpg';
            break;
        case 3:
            img.src = 'image/homepage/spring1.jpg';
            img_container.style.display = 'block';
            img.style.height = '500px';
            img_container.style.height = '500px';
            news.innerHTML = "員工應徵 / 加入我們吧!" ;
            news.style.textAlign = "center";
            news.style.fontSize = "35px";
            news.style.height = '170px';
            
            break;
        case 4: 
            img.src = 'image/homepage/spring2.jpg';
            break; 
        default:
            img.src = 'image/homepage/spring3.jpg';
            break; 

    }

}

function addScrollListener() {
    var navbar = document.getElementById('float_nav');
    var news = document.getElementById('news');

    window.addEventListener('scroll', function() {
        if (window.scrollY > news.offsetTop) {
            navbar.style.opacity = 1;
            navbar.style.visibility = 'visible';
            navbar.style.position = 'fixed';
            navbar.style.zIndex = 2020;
            console.log("scroll succeed");
        } else {
            navbar.style.visibility = 'hidden';
            navbar.style.opacity = 0;
            console.log("scroll none");
        }
        var pageNumber = localStorage.getItem('pageNumber');
        console.log("現在第幾頁",pageNumber);
    });
}

document.addEventListener('DOMContentLoaded', loadNavbar);