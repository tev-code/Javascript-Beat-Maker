window.addEventListener('load', () =>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "lightcoral",
        "lightgreen",
        "lightpink",
        "lightyellow",
        "lightsalmon",
        "lightseagreen"
    ];


pads.forEach((pad, index) => {
    pad.addEventListener("click", function(){
        sounds[index].currentTime = 0;
        sounds[index].play();

        createBubbles(index);
    });
});

const createBubbles = index => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationed', function(){
        visual.removeChild(this);
    });
};

});