// The transportation's JavaScript
const images = [];
for (let i = 1; i <= 48; i++) {
    const imageNumber = i.toString().padStart(3, '0');
    const imagePath = `./image/transportation/chihiro${imageNumber}.jpg`;
    images.push(imagePath);
}

const frameContainer = document.getElementById('frames-container');

// 創建圖片框架
images.forEach((imagePath) => {
    const frame = document.createElement('div');
    frame.className = 'frame';

    const img = document.createElement('img');
    img.src = imagePath;
    frame.appendChild(img);

    const wheels = document.createElement('div');
    wheels.className = 'wheels';

    for (let i = 0; i < 2; i++) {
        const wheel = document.createElement('div');
        wheel.className = 'wheel';
        wheels.appendChild(wheel);
    }

    frame.addEventListener('click', () => {
        frameContainer.style.animationPlayState = 'paused';
        frameContainer.classList.add('blurred');

        // 創建放大圖片容器
        const enlargedContainer = document.createElement('div');
        enlargedContainer.className = 'enlarged-container';

        const enlargedImg = document.createElement('img');
        enlargedImg.src = img.src;
        enlargedContainer.appendChild(enlargedImg);

        document.body.appendChild(enlargedContainer);

        // 添加點擊事件以恢復動畫和移除放大圖片
        enlargedContainer.addEventListener('click', () => {
            frameContainer.style.animationPlayState = 'running';
            frameContainer.classList.remove('blurred');
            document.body.removeChild(enlargedContainer);
        });
    });

    frame.appendChild(wheels);
    frameContainer.appendChild(frame);
});

$('#mapDialog').dialog({
    autoOpen: false
});

$("#theButtonSet button").click(function(){
    var buttonText = $(this).text();
    console.log(buttonText);
    $(this).toggleClass("btn-light btn-dark");

    var darkButtons = $(".btn-dark");
    var darkButtonTexts = darkButtons.map(function() {
        return $(this).text();
    }).get();
    // console.log("Dark buttons:", darkButtonTexts);

    $("#theMethod tr").each(function() {
        var texts = $(this).find('td').map(function() {
            return $(this).text();
        }).get();

        var total = texts.join(', ');
        var hide = false
        // 看有沒有存在字元
        darkButtonTexts.forEach(function(darkButtonText) {
            if (total.includes(darkButtonText)) {
                hide = true;
            }
        });

        if (hide) {
            $(this).addClass("hide");
        } else {
            $(this).removeClass("hide");
        }
    });
});
$("#theMethod tr").click(function(){
    var start = $(this).find('.start').text(); //起始
    var method = $(this).find('.t').text(); //交通方式
    console.log(start, method)
    
    if(start == "忠孝復興站") {
        $("#mapInTaipei").attr("src","./image/transportation/map_zhongxiao.png")
    } else if(start == "西門站"){
        $("#mapInTaipei").attr("src","./image/transportation/map_ximen.png")
    } else if(start == "松山車站"){
        $("#mapInTaipei").attr("src","./image/transportation/map_songshan.png")
    } else if(start == "台北車站"){
        $("#mapInTaipei").attr("src","./image/transportation/map_taipei.png")
    } 
    $('#mapDialog').dialog('open');
    
    $('#mapContent').text(`You choose the method from ${start} to Jiufen Old Street by ${method}`);
    $('#mapContent').append(". Enjoy your trip!");
    if(start == "忠孝復興站" && method == "客運"){
        $('#mapContent').append('<img src="./image/transportation/1062-bus.jpeg" alt="1062-bus" style="width: 200px;">');
    } else if(start == "西門站" && method == "客運"){
        $('#mapContent').append('<img src="./image/transportation/965-bus.jpeg" alt="965-bus" style="width: 200px;">');
    }

});