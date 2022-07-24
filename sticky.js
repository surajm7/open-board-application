const body = document.querySelector("body");
document.querySelector(".Sticky").addEventListener("click",function(){
    console.log("hii")
    createSticky()
})
function createSticky() {
  const writingPad = createBox();
  const textarea = document.createElement("textarea");
  writingPad.appendChild(textarea);
}


// to create createBox for image ,sticky
function createBox(){
    const stickyPad = document.createElement("div");
    const navBar = document.createElement("div");
    const writingPad = document.createElement("div");
    const minimize = document.createElement("div");
    const close = document.createElement("div");
    stickyPad.setAttribute("class", "sticky-pad");
    navBar.setAttribute("class", "nav");
    writingPad.setAttribute("class", "writing-pad");
    close.setAttribute("class", "close");
    minimize.setAttribute("class", "minimize");
    navBar.appendChild(minimize);
    navBar.appendChild(close);
    stickyPad.appendChild(navBar);
    stickyPad.appendChild(writingPad);
    body.appendChild(stickyPad);
    // create sticky
    close.addEventListener("click", function() {
      stickyPad.remove();
    });
  
    let isMinimized = false;
    minimize.addEventListener("click", function() {
      isMinimized == false
        ? (writingPad.style.display = "none")
        : (writingPad.style.display = "block");
      isMinimized = !isMinimized;
    });
    let initialX = null;
    let initialY = null;
    let isStickyDown = false;
  
    // added move sticky logic
    navBar.addEventListener("mousedown", function(e) {
      initialX = e.clientX;
      initialY = e.clientY;
      isStickyDown = true;
    });
  
    navBar.addEventListener("mousemove", function(e) {
      if (isStickyDown == true) {
        let finalX = e.clientX;
        let finalY = e.clientY;
  
        let diffX = finalX - initialX;
        let diffY = finalY - initialY;
  
        let { top, left } = stickyPad.getBoundingClientRect();
  
        stickyPad.style.top = top + diffY + "px";
        stickyPad.style.left = left + diffX + "px";
  
        initialX = finalX;
        initialY = finalY;
      }
    });
    // sticky => mouseup
    navBar.addEventListener("mouseup", function() {
      isStickyDown = false;
    });
    // pointer => moved off sticky
    navBar.addEventListener("mouseleave", function() {
      isStickyDown = false;
    });
    document.body.appendChild(stickyPad);
    return writingPad;
  
  }
  
  
  
  
  
  
  
  