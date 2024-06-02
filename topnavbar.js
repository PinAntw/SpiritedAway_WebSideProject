
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
            img_container.style.display = 'block';
            img.style.height = '500px';
            img_container.style.height = '500px';
            // news.innerHTML = "員工應徵 / 加入我們吧!" ;
            // news.style.textAlign = "center";
            // news.style.fontSize = "35px";
            // news.style.height = '170px';
            break;
        case 3:
            img.src = 'image/transportation/chihiro047.jpg';
            img_container.style.display = 'block';
            img.style.height = '500px';
            img_container.style.height = '500px';
            news.innerHTML = "員工應徵 / 加入我們吧!" ;
            news.style.textAlign = "center";
            news.style.fontSize = "35px";
            news.style.height = '170px';
            break;
        case 4: 
            img.src = 'image/transportation/chihiro042.jpg';
            img_container.style.display = 'block';
            img.style.height = '500px';
            img_container.style.height = '500px';
            news.innerHTML = "員工應徵 / 加入我們吧!" ;
            news.style.textAlign = "center";
            news.style.fontSize = "35px";
            news.style.height = '170px';
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