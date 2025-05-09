let Sound :number = 0;
let imgLabal = document.getElementById("CatImg") as HTMLImageElement;
let ImgPath :string = "static/assets/imgs/";
let SoundPath :string = "static/assets/sounds/";

function PlaySound() :void {
    Sound = randomOutput(0, 2);

    imgLabal.src = ImgPath + String(Sound) + ".png";
    
    new Audio(SoundPath + "meow" + String(Sound) + ".ogg").play().catch(error => {
        console.error("재생 실패:", error);
    });

    //alert("현재 랜덤 숫자: " + Sound);
}

/** min, max 를 이용하여 랜덤 숫자를 출력하는 거 */
function randomOutput(min :number, max :number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
