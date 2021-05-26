(() => {
  const servicesBtn = document.querySelector("[services-btn]");
  const servicesList = document.querySelector("[services-list]");
  const aboutBtn = document.querySelector("[about]");
  const aboutList = document.querySelector("[about-list]");
  const langBtn = document.querySelector("[langBtn]");
  const langList = document.querySelector("[lang-list]");

  const mouseHover = document.querySelector("[hero-trigger]");
  const mouseHoverMove = document.querySelector("[hero-hover]");

  const callMenuBtn = document.querySelector("[call-menu]");
  const purpleHide = document.querySelector("[purple-hide]");
  const greyHide = document.querySelector("[grey-hide]");
  const blueHide = document.querySelector("[blue-hide]");
  const greenHide = document.querySelector("[green-hide]");

  servicesBtn.addEventListener("click", () => {
    servicesList.classList.toggle("visibility");
  });

  aboutBtn.addEventListener("click", () => {
    aboutList.classList.toggle("visibility");
  });

  langBtn.addEventListener("click", () => {
    langList.classList.toggle("visibility");
  });

  if (mouseHover) {
    mouseHover.addEventListener("mouseover", () => {
      mouseHoverMove.classList.add("hero__left--move-left");
    });

    mouseHover.addEventListener("mouseout", () => {
      mouseHoverMove.classList.remove("hero__left--move-left");
    });
  }

  callMenuBtn.addEventListener("click", () => {
    purpleHide.classList.toggle("call-menu__item--purple-hide");
    greyHide.classList.toggle("call-menu__item--grey-hide");
    blueHide.classList.toggle("call-menu__item--blue-hide");
    greenHide.classList.toggle("call-menu__item--green-hide");
  });

  let containerReports = document.querySelector('[data-ref="reports"]');
  let containerNews = document.querySelector('[data-ref="news"]');

  let config = {
    controls: {
      scope: "local",
    },
  };

  let MixerReports = mixitup(containerReports, config);
  let MixerNews = mixitup(containerNews, config);

  const reportsFilterBtns = document.querySelectorAll("[name=reports-radio]");

  const reportsElements = document.querySelectorAll(".reports__content-item");

  reportsFilterBtns.forEach((elem) => {
    elem.addEventListener("click", elemFilterForSlider);
  });

  function elemFilterForSlider() {
    reportsElements.forEach((elem) => {
      setTimeout(() => {
        const zoomLink = elem.querySelector(".reports__link-popup");
        if (elem.style.display === "none") {
          zoomLink.setAttribute("data-fancybox", "noVision");
        } else {
          zoomLink.setAttribute("data-fancybox", "reports");
        }
      }, 1000);
    });
  }
})();

function slowScroll(id) {
  var offset = 70;
  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - offset,
    },
    500
  );
  return false;
}
