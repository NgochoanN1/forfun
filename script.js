document.addEventListener("DOMContentLoaded", function() {
    const numTexts = 100; 
    createJumpingTexts(numTexts);
});

function createJumpingTexts(numTexts) {
    for (let i = 0; i < numTexts; i++) {
        createJumpingTextWithDelay(i * 200); // 
    }
}

function createJumpingTextWithDelay(delay) {
    setTimeout(function() {
        createJumpingText();
    }, delay);
}

function createJumpingText() {
    const text = document.createElement("div");
    text.textContent = "Lo mà đi ngủ sớm đi !! \n Huyền Xinh <3";
    text.classList.add("jumping-text");
    document.body.appendChild(text);

    
    text.style.left = `${Math.random() * window.innerWidth}px`;
    text.style.top = `${Math.random() * window.innerHeight}px`;

   
    text.addEventListener("animationiteration", function() {
        document.body.removeChild(text);
        createJumpingTextWithDelay(Math.random() * 200); 
    });
}
