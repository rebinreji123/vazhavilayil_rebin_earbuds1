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
      image: "images/earbud.jpg"
    },
    {
      title: "touch control",
      text: "to pause, play, skip tracks, and adjust volume",
      image: "images/earbud.jpg"
    },
    {
      title: "ANC and Transparency",
      text: "to cancel out background noise and let in the world around you",
      image: "images/earbud.jpg"
    }
  ]

function loadInfo() {
    infoBoxes.forEach((infoBox, index)=>{
  
      let selected = document.querySelector(`#hotspot-${index+1}`);
  
      const title = document.createElement("h2");
      title.textContent= infoBox.title;
  
      const text = document.createElement("p");
      text.textContent = infoBox.text;
  
      selected.appendChild(title);
      selected.appendChild(text);
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
