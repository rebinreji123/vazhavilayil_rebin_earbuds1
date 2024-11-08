(() => {

  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

//Data 

const infoBoxes = [ 
  {
    title: "ear tips",
    text: "comfortable ear tips for long listening sessions",
    image: "images/emoji1.svg"
  },
  {
    title: "fast charging ",
    text: "2 min charge for 1 hour of playback",
    image: "images/emoji2.svg"
  },
  {
    title: "touch control",
    text: "to pause, play, skip tracks, and adjust volume",
    image: "images/emoji3.svg"
  },
  {
    title: "ANC and Transparency",
    text: "to cancel out background noise and let in the world around you",
    image: "images/emoji4.svg"
  }
]

function loadInfo() {
  infoBoxes.forEach((infoBox, index)=>{

    let selected = document.querySelector(`#hotspot-${index+1}`);

    const title = document.createElement("h2");
    title.textContent= infoBox.title;

    const text = document.createElement("p");
    text.textContent = infoBox.text;

    const image = document.createElement("img"); 
      image.src = infoBox.image; 
      image.alt = infoBox.title;
      image.style.width = "100px"; 
      image.style.height = "auto";  

      selected.appendChild(title);
      selected.appendChild(text);
      selected.appendChild(image); 
  })
}
  loadInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event listeners
  // model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

})();
