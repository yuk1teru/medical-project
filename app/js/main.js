(() => {
    const servicesBtn = document.querySelector("[services]");
    const servicesList = document.querySelector("[services-list]");
    const aboutBtn = document.querySelector("[about]");
    const aboutList = document.querySelector("[about-list]");
    const langBtn = document.querySelector("[langBtn]");
    const langList = document.querySelector("[lang-list]");

    const mouseHover = document.querySelector('[hero-trigger]');
    const mouseHoverMove = document.querySelector('[hero-hover]');

    servicesBtn.addEventListener("click", () => {
       
        servicesList.classList.toggle("visibility");
      
    });

     aboutBtn.addEventListener("click", () => {
       
        aboutList.classList.toggle("visibility");
      
     });
    
     langBtn.addEventListener("click", () => {
       
        langList.classList.toggle("visibility");
      
     });
    
    mouseHover.addEventListener("mouseover", () => {
       
        mouseHoverMove.classList.add("hero__left--move-left");
      
    });
     mouseHover.addEventListener("mouseout", () => {
       
        mouseHoverMove.classList.remove("hero__left--move-left");
      
    });
    

   
})();


function slowScroll (id) {
    var offset = 70;
    $('html, body').animate({
        scrollTop: $(id).offset ().top - offset
    }, 500);
    return false;
}