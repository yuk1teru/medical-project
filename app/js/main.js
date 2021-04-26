(() => {
    const servicesBtn = document.querySelector("[services]");
    const servicesList = document.querySelector("[services-list]");
    const aboutBtn = document.querySelector("[about]");
    const aboutList = document.querySelector("[about-list]");
    const langBtn = document.querySelector("[langBtn]");
    const langList = document.querySelector("[lang-list]");

    servicesBtn.addEventListener("click", () => {
       
        servicesList.classList.toggle("visibility");
      
    });

     aboutBtn.addEventListener("click", () => {
       
        aboutList.classList.toggle("visibility");
      
     });
    
     langBtn.addEventListener("click", () => {
       
        langList.classList.toggle("visibility");
      
    });
    
   
})();