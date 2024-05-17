
var navitems = document.getElementById("navitems")

function toggle(){
    if(navitems.classList.contains("hidden")){
        navitems.classList.remove("hidden")
    }
    else{
        navitems.classList.add("hidden")
    }

}
document.querySelector('.menubutton').addEventListener('click',toggle);

function handleResize() {
    const menu = document.querySelector(".menubutton");
    if (window.innerWidth < 1000) {
        menu.classList.remove('display');
    } else {
        menu.classList.add("display");
    }
    console.log()
}

// Add an event listener to the window resize event
window.addEventListener("resize", handleResize);

// Call handleResize once on page load to set the initial state
handleResize();

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    var imgselect = event.target
    var altselect = imgselect
	// get the src attribute from that element and 'split' it on the "-"
    var img = imgselect.src.split('-')
    var alt = altselect.alt
    console.log(alt)
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    var fullimg = img[0] + "-full.jpeg"	
    // insert the viewerTemplate into the top of the body element
    document.querySelector('body').insertAdjacentHTML("afterbegin", viewerTemplate(fullimg,alt))


	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    document.querySelector('.close-viewer').addEventListener('click',() =>{
        document.querySelector(".viewer").remove()
    })
  }
document.querySelector('.gallery').addEventListener("click",viewHandler)