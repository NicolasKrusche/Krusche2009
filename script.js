const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("h1").onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("").map((letter, index) => {
            if(index < iterations) {
                return event.target.dataset.value[index];
            }
            
            return letters[Math.floor(Math.random() * 26)]}).join("");

        if (iterations >= event.target.dataset.value.length) clearInterval(interval);

        iterations += 1 / 3;

    }, 20);
}




const letters2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("h2").onmouseover = event => {
    let iterations2 = 0;

    const interval2 = setInterval(() => {
        event.target.innerText = event.target.innerText.split("").map((letter, index) => {
            if(index < iterations2) {
                return event.target.dataset.value[index];
            }
            
            return letters2[Math.floor(Math.random() * 26)]}).join("");

        if (iterations2 >= event.target.dataset.value.length) clearInterval(interval2);

        iterations2 += 1 / 3;

    }, 20);
}

