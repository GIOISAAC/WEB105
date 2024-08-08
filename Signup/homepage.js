document.addEventListener("DOMContentLoaded", function() {
    // Get the hero class 

    const hero  = document.querySelector(".hero");
   

    // Get all tab items
    const tabItems = document.querySelectorAll(".tab-items");

    // Define an object to map tab item IDs to video sources
    const ImageSources = {

        "MMOTab": "show-MMO",
        "actionTab": "show-action",
        "FPSTab": "show-FPS",
        "FightingTab": "show-fighting", 
        "adventureTab" : "show-adventure",
        "racingtab" : "show-racing",
        "horrortab" : "show-horror",
        "Sporttab" : "show-sports",
        "battletab" : "show-BattleRoyale",


        


        // Add more tab IDs and corresponding video sources as needed
    };



   


    // Loop through each tab item and add event listeners
    tabItems.forEach(tabItem => {
        tabItem.addEventListener("mouseover", function() {
            // Get the ID of the hovered tab item
            const tabId = tabItem.id;
            
            // Check if the tab ID exists in the videoSources object
            if (ImageSources.hasOwnProperty(tabId)) {
                // Change the video source to the corresponding video
                hero.classList.add(ImageSources[tabId]);

                
            }
        });

        tabItem.addEventListener("mouseout", function() {
            // Change the video source back to the default video
            hero.classList.remove("show-MMO", "show-action", "show-FPS","show-fighting", "show-adventure", "show-racing", "show-horror", "show-sports","show-BattleRoyale",);
            
        });
    });
});





const actionTab = document.getElementById("actionTab");
const popup = document.getElementById("popup");

actionTab.addEventListener("click", (event) => {
  event.preventDefault();
  popup.style.display = "block";
});

document.addEventListener("click", (event) => {
  if (event.target.id !== "popup" && event.target.id !== "actionTab") {
    popup.style.display = "none";
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    popup.style.display = "none";
  }
});


const MMOTab = document.getElementById("MMOTab");
const popup2 = document.getElementById("popup2");

MMOTab.addEventListener("click", (event) => {
  event.preventDefault();
  popup2.style.display = "block";
});

document.addEventListener("click", (event) => {
  if (event.target.id !== "popup2" && event.target.id !== "MMOTab") {
    popup2.style.display = "none";
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    popup2.style.display = "none";
  }
});