"use strict";
var Sound = 0;
var imgLabal = document.getElementById("CatImg");
var ImgPath = "static/assets/imgs/";
var SoundPath = "static/assets/sounds/";
function PlaySound() {
    Sound = randomOutput(0, 2);
    imgLabal.src = ImgPath + String(Sound) + ".png";
    new Audio(SoundPath + "meow" + String(Sound) + ".ogg").play().catch(function (error) {
        console.error("재생 실패:", error);
    });
    //alert("현재 랜덤 숫자: " + Sound);
}
/** min, max 를 이용하여 랜덤 숫자를 출력하는 거 */
function randomOutput(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//# sourceMappingURL=script.js.map