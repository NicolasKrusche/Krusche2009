//h1 Letters effect

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

//h2 Letters effect

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




// trailer effect

const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {

  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  
  const keyframes = {
    transform:
    `translate(${x}px, ${y}px)
    scale(${interacting ? 8 : 1})`
  }
  

  trailer.animate(keyframes, {
    duration: 800,
    fill: "forwards"
  })
}

const getTrailerContent = (type) => {
  switch(type) {
      case "video":
        return "↗";
    default:
      return "▶︎";
  }
}


window.onmousemove = e => {
    
  const interactable = e.target.closest(".interactable");

  const interacting = interactable !== null;
  
  animateTrailer(e, interacting);
  
  const icon = document.getElementById("trailer-icon");
  
  trailer.dataset.type = interacting ? interactable.dataset.type : "";
  
  if(interacting) {
    icon.innerHTML = getTrailerContent(interactable.dataset.type);
  }
}