let Sound :number = 0;

let imgLabal = document.getElementById("CatImg") as HTMLImageElement;
let NoRainBowBtn = document.getElementById("NoRainBow") as HTMLButtonElement;
let meowBtn = document.getElementById("PlaySoundCat") as HTMLButtonElement;

let MainStyle = document.getElementById("main_style") as HTMLLinkElement;

let ImgPath :string = "static/assets/imgs/";
let SoundPath :string = "static/assets/sounds/";

let isRainbow :boolean = false;

document.addEventListener('selectstart', (event: Event) => {
    event.preventDefault();
});

document.addEventListener('mousedown', (event: Event) => {
    event.preventDefault();
});

document.addEventListener('contextmenu', (event: Event) => {
    event.preventDefault();
});

function PlaySound() :void {
    Sound = randomOutput(0, 2);

    imgLabal.src = ImgPath + String(Sound) + ".png";
    
    new Audio(SoundPath + "meow" + String(Sound) + ".ogg").play().catch(error => {
        console.error("재생 실패:", error);
    });

    //alert("현재 랜덤 숫자: " + Sound);
}

function NoRainBow() {
    if (isRainbow == true) {
        isRainbow = false;

        MainStyle.href = "static/css/main_style.css";
        return;
    }

    isRainbow = true;

    MainStyle.href = "static/css/main_RainBow_style.css";
    return;
}

/** min, max 를 이용하여 랜덤 숫자를 출력하는 거 */
function randomOutput(min :number, max :number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
