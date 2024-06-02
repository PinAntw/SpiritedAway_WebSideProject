function foldandshow(num){
    console.log("clamp")
    var cardText = document.getElementById('c' + num);
    if (cardText.classList.contains('expanded')) {
        cardText.classList.remove('expanded');
        cardText.classList.add('clamp');
        this.textContent = '展開閱讀';
    } else {
        cardText.classList.remove('clamp');
        cardText.classList.add('expanded');
        this.textContent = '收起';
    }

}
function start_button(){
    var btn = document.getElementById('btn_start');
    var ctn = document.getElementById('container_start');
    ctn.removeChild(btn);
    
    var vdo1 = document.createElement('video');
    vdo1.controls = false;
    vdo1.style.height = "100%";
    vdo1.style.width = "100%";
    vdo1.autoplay = true;
    var source = document.createElement('source');
    source.src = 'video/epy1.mp4';
    source.type = 'video/mp4'; 
    vdo1.appendChild(source);
    ctn.appendChild(vdo1);


    

    vdo1.addEventListener('ended', function() {
        ctn.removeChild(vdo1);
        var div = document.createElement('div');
        div.id = 'sheetemployee';
        div.style.position = 'relative';
        var img = document.createElement('img');
        img.style.height = '500px';
        img.src = 'image/employee/sheetform.png';
        div.appendChild(img);
                
        var formctn = document.createElement('div');
        formctn.id = 'formctn';
        formctn.style.position = "absolute";
        formctn.style.top = "200px";
        formctn.style.left = "50px";
        formctn.style.height = "100px";
        formctn.style.width = "100px";

        var formEmp = document.createElement('form');
        var textareaEmp = document.createElement('textarea');
        textareaEmp.className = 'vertical-input';
        textareaEmp.style.writingMode = 'vertical-rl';
        textareaEmp.style.width = '2.0em';
        textareaEmp.style.height = '85px';
        textareaEmp.style.resize = 'none';
        textareaEmp.style.backgroundColor = "#F3EBDE";
        textareaEmp.style.fontWeight = "bold";
        textareaEmp.style.letterSpacing = "10px";

        var btn_send = document.createElement('button');
        btn_send.style.marginTop = '1 0px';
        btn_send.style.width = '32px';
        btn_send.style.height = '50px';
        btn_send.innerText = "送出";
        btn_send.style.fontWeight = "bold";
        btn_send.style.color = "white";
        btn_send.style.backgroundColor = "#209EE6";
        btn_send.onclick = function() {
            div.parentNode.removeChild(div);
            sendForm_button(textareaEmp.value);
        };
        formEmp.appendChild(textareaEmp);
        formctn.appendChild(formEmp);
        formctn.appendChild(btn_send);
        div.appendChild(formctn);
        ctn.appendChild(div);

        console.log('video1 end');
    });
}

function sendForm_button(msg){
    var ctn = document.getElementById("container_start")
    console.log("sendBtn Connect",msg);

    var videoContainer = document.createElement('div');
    videoContainer.id = "videoContainer";
    videoContainer.style.position = 'relative';
    videoContainer.style.height = '100%';
    videoContainer.style.width = '100%';
    
    var vdo2 = document.createElement('video');
    vdo2.controls = false;
    vdo2.style.height = "100%";
    vdo2.style.width = "100%";
    vdo2.autoplay = true;
    var source = document.createElement('source');
    source.src = 'video/epy2.mp4';
    source.type = 'video/mp4'; 
    vdo2.appendChild(source);
    videoContainer.appendChild(vdo2);
    ctn.appendChild(videoContainer);


    vdo2.addEventListener('timeupdate', function() {
        if (vdo2.currentTime >= 3.5) {
            vdo2.removeEventListener('timeupdate', arguments.callee);
            var textOverlay = document.createElement('div');
            textOverlay.innerHTML  = msg + "&nbsp;&nbsp; 好奢侈的名字啊 ";
            textOverlay.style.position = 'absolute';
            textOverlay.style.bottom = '25px'; 
            textOverlay.style.left = '35%';
            textOverlay.style.color = 'white'; 
            textOverlay.style.fontSize = '24px'; 
            textOverlay.style.fontWeight = 'bold';
            textOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; 
            textOverlay.style.padding = '10px';
            videoContainer.appendChild(textOverlay);
            
        }
        setTimeout(function() {
            textOverlay.parentNode.removeChild(textOverlay);
            videoContainer.parentNode.removeChild(videoContainer);
            lastStep(msg);
        }, 4000);
    });
}

function lastStep(msg){
var ctn = document.getElementById("container_start")
var div = document.createElement('div');
div.id = 'sheetemployee';
div.style.position = 'relative';
var img = document.createElement('img');
img.style.height = '500px';
img.src = 'image/employee/sheetform.png';
div.appendChild(img);
var formctn = document.createElement('div');
formctn.id = 'formctn';
formctn.style.position = "absolute";
formctn.style.top = "200px";
formctn.style.left = "50px";
formctn.style.height = "100px";
formctn.style.width = "100px";

var formEmp = document.createElement('form');
var textareaEmp = document.createElement('textarea');
textareaEmp.className = 'vertical-input';
textareaEmp.style.writingMode = 'vertical-rl';
textareaEmp.style.width = '2.0em';
textareaEmp.style.height = '85px';
textareaEmp.style.resize = 'none';
textareaEmp.style.backgroundColor = "#F3EBDE";
textareaEmp.style.fontWeight = "bold";
textareaEmp.style.letterSpacing = "10px";
textareaEmp.disabled = true; 
textareaEmp.style.border = 'none';
var msg = msg.slice(-1);
textareaEmp.value = msg;

var btn_send = document.createElement('button');
btn_send.style.marginTop = '150px';
btn_send.style.width = '80px';
btn_send.style.height = '30px';
btn_send.innerText = "完成契約";
btn_send.style.fontWeight = "bold";
btn_send.style.color = "white";
btn_send.style.backgroundColor = "red";
btn_send.onclick = function() {
            div.parentNode.removeChild(div);
            addEmployee(msg);
        };

formEmp.appendChild(textareaEmp);
formctn.appendChild(formEmp);
formctn.appendChild(btn_send);
div.appendChild(formctn);
ctn.appendChild(div);
}

function addEmployee(name){
var co = document.getElementById("employeeadd");
var newCard = document.createElement('div');
newCard.className = 'col-3';
var cardContent = `
<div class="card" style="width: 18rem;">
    <img src="image/employee/boss.png" class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">`+ name + `</h5>
        <p class="card-text">一個沒有名字的人類.</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">資歷: 新人</li>
        <li class="list-group-item">工作: 清掃廁所</li>
    </ul>
</div>
`;
newCard.innerHTML = cardContent;
co.appendChild(newCard);
}