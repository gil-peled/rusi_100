const frames = [
  {
    text: "💖 Welcome to our 100-day love story. A memory of my dear Rusi.",
    image: null
  },
  {
    text: "There was once an ogre and a princess, born into different worlds.",
    image: "ogre.png"
  },
  {
    text: "Yet as fate would have it, they ended up at the same school.",
    image: "couple_at_school.png"
  },
  {
    text: "She was brilliant. He was playful.",
    image: null
  },
  {
    text: "They didn't know each other — but on a trip to a tea plantation, she noticed his smile and loved his enthusiasm.",
    image: "tea.png"
  },
  {
    text: "At the same time, she started to catch his eyes with her focus and brains.",
    image: "admire.png"
  },
  {
    text: "While reaching for Tintin books in the library, their hands brushed for the first time.",
    image: "longing.PNG"
  },
  {
    text: "They started spending hours together, reading side-by-side and playing games.",
    image: null
  },
  {
    text: "Then one day — a fateful day in the basement of a mall — dancing on each other's feet, they fell in love and decided to commit themselves.",
    image: "prom.png"
  },
  {
    text: "",  // montage or soft transition frame
    image: "rusi_student.PNG"
  },
  {
    text: "", // zoom out visual — possibly an illustrated frame
    image: "gil_student.PNG"
  },
  {
    text: "💌 Love Letter:\n\nDear love,\n\nThese 100 days have been a beginning — silly, sweet, and so deeply real. I love you. Here’s to the rest of our lives.",
    image: null
  }
];

let currentIndex = 0;

function renderFrame() {
  const textBox = document.getElementById("frame-text");
  const imageBox = document.getElementById("frame-image");
  
  textBox.innerText = frames[currentIndex].text;

  if (frames[currentIndex].image) {
    imageBox.innerHTML = `<img src="${frames[currentIndex].image}" alt="Story Image"/>`;
  } else {
    imageBox.innerHTML = "";
  }
}

function nextFrame() {
  if (currentIndex < frames.length - 1) {
    currentIndex++;
    renderFrame();
  }
}

function prevFrame() {
  if (currentIndex > 0) {
    currentIndex--;
    renderFrame();
  }
}

window.onload = renderFrame;
