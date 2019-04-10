"use strict";

const language = document.querySelector(".user__item--language");
const select = language.querySelector(".user__select");

const planItems = document.querySelectorAll(".plans__item");
const modal = document.querySelector(".modal");
const media = document.querySelector(".media");
const body = document.querySelector(".page");
const width = window.matchMedia("(max-width: 1600px)");
const timer = function(plan) {
  setTimeout(video, 2000, plan);
};

const yearMobile = media.querySelector(".media__yearMobile");
const yearDesktop = media.querySelector(".media__yearDesktop");
const threeMonthsMobile = media.querySelector(".media__threeMonthsMobile");
const threeMonthsDesktop = media.querySelector(".media__threeMonthsDesktop");
const monthMobile = media.querySelector(".media__monthMobile");
const monthDesktop = media.querySelector(".media__monthDesktop");
const threeDayMobile = media.querySelector(".media__threeDayMobile");
const threeDayDesktop = media.querySelector(".media__threeDayDesktop");

function checkWidth(x) { 
  if (x.matches) { 
    return false;
  } else {
    return true;
  }
}

function activatePlan (evt) {
  function video (x) {
    if (plan.classList.contains("plans__item--active")) {
      x.classList.toggle("active");  
    }
    if (x.paused) {
          x.play();
    } else {
        x.pause();
      }
  }
  
  let plan = evt.currentTarget;
  let planLink = plan.querySelector(".plans__link");
  let planPrice = plan.querySelector(".plans__price");
  modal.classList.toggle("modal--active");
  plan.classList.toggle("plans__item--active");
  planLink.classList.toggle("invisible");
  planPrice.classList.toggle("plans__price--pink");

  if (plan.classList.contains("plans__item--oneYear")) {
    if (checkWidth(width)) {
      setTimeout(video, 2000, yearDesktop);
    } else {
      setTimeout(video, 2000, yearMobile);
    }
    body.classList.toggle("page--planYear");
  } else if (plan.classList.contains("plans__item--threeMonths")) {
    if (checkWidth(width)) {
      setTimeout(video, 2000, threeMonthsDesktop);
    } else {
      setTimeout(video, 2000, threeMonthsMobile);
    }
    body.classList.toggle("page--planThreeMonths");
  } else if (plan.classList.contains("plans__item--Month")) {
    if (checkWidth(width)) {
      setTimeout(video, 2000, monthDesktop);
    } else {
      setTimeout(video, 2000, monthMobile);
    }
    body.classList.toggle("page--planMonth");
  } else if (plan.classList.contains("plans__item--threeDay")) {
    if (checkWidth(width)) {
      setTimeout(video, 2000, threeDayDesktop);
    } else {
      setTimeout(video, 2000, threeDayMobile);
    }
    body.classList.toggle("page--planThreeDay");
  }
}

function activatePlanTwo (evt) {
  let plan = evt.currentTarget;
  let planLink = plan.querySelector(".plans__link");
  let planPrice = plan.querySelector(".plans__price");
  modal.classList.toggle("modal--active");
  plan.classList.toggle("plans__item--active");
  planLink.classList.toggle("invisible");
  planPrice.classList.toggle("plans__price--pink");

  if (plan.classList.contains("plans__item--oneYear")) {
    if (checkWidth(width)) {
      if (yearDesktop.paused) {
            yearDesktop.play();
      } else {
          yearDesktop.pause();
        };
      if (yearDesktop.classList.contains("active")) {
        yearDesktop.classList.remove("active");
      }
    } else {
        if (yearMobile.paused) {
              yearMobile.play();
        } else {
            yearMobile.pause();
          }; 
        if (yearMobile.classList.contains("active")) {
          yearMobile.classList.remove("active");
        }
      };
    body.classList.toggle("page--planYear");
  } else if (plan.classList.contains("plans__item--threeMonths")) {
    if (checkWidth(width)) {
      if (threeMonthsDesktop.paused) {
            threeMonthsDesktop.play();
      } else {
          threeMonthsDesktop.pause();
        };
      if (threeMonthsDesktop.classList.contains("active")) {
        threeMonthsDesktop.classList.remove("active");
      }
    } else {
        if (threeMonthsMobile.paused) {
              threeMonthsMobile.play();
        } else {
            threeMonthsMobile.pause();
          }; 
        if (threeMonthsMobile.classList.contains("active")) {
          threeMonthsMobile.classList.remove("active");
        }
      };
    body.classList.toggle("page--planThreeMonths");
  } else if (plan.classList.contains("plans__item--Month")) {
    if (checkWidth(width)) {
      if (monthDesktop.paused) {
            monthDesktop.play();
      } else {
          monthDesktop.pause();
        };
      if (monthDesktop.classList.contains("active")) {
        monthDesktop.classList.remove("active");
      }
    } else {
        if (monthMobile.paused) {
              monthMobile.play();
        } else {
            monthMobile.pause();
          }; 
        if (monthMobile.classList.contains("active")) {
          monthMobile.classList.remove("active");
        }
      };
    body.classList.toggle("page--planMonth");
  } else if (plan.classList.contains("plans__item--threeDay")) {
    if (checkWidth(width)) {
      if (threeDayDesktop.paused) {
            threeDayDesktop.play();
      } else {
          threeDayDesktop.pause();
        };
      if (threeDayDesktop.classList.contains("active")) {
        threeDayDesktop.classList.remove("active");
      }
    } else {
        if (threeDayMobile.paused) {
              threeDayMobile.play();
        } else {
            threeDayMobile.pause();
          }; 
        if (threeDayMobile.classList.contains("active")) {
          threeDayMobile.classList.remove("active");
        }
      };
    body.classList.toggle("page--planThreeDay");
  }
}

//МОБИЛЬНЫЙ ПЛАН ОДИН
function activatePlanMobile (evt) {
  function video (x) {
    if (plan.classList.contains("plans__item--active")) {
      x.classList.toggle("active");  
    }
    if (x.paused) {
          x.play();
    } else {
        x.pause();
      }
  }
  
  let plan = evt.currentTarget;
  let planLink = plan.querySelector(".plans__link");
  let planPrice = plan.querySelector(".plans__price");
  modal.classList.toggle("modal--active");
  plan.classList.toggle("plans__item--active");
  planLink.classList.toggle("invisible");
  planPrice.classList.toggle("plans__price--pink");

  if (plan.classList.contains("plans__item--oneYear")) {
    if (checkWidth(width)) {
      if (yearDesktop.classList.contains("active")) {
        yearDesktop.classList.remove("active");  
      } else {
          setTimeout(video, 2000, yearDesktop);
        }
    } else {
        if (yearMobile.classList.contains("active")) {
          yearMobile.classList.remove("active");  
        } else {
            setTimeout(video, 2000, yearMobile);
          }
      }
    body.classList.toggle("page--planYear");
  } else if (plan.classList.contains("plans__item--threeMonths")) {
    if (checkWidth(width)) {
      if (threeMonthsDesktop.classList.contains("active")) {
        threeMonthsDesktop.classList.remove("active");  
      } else {
          setTimeout(video, 2000, threeMonthsDesktop);
        }
    } else {
        if (threeMonthsMobile.classList.contains("active")) {
          threeMonthsMobile.classList.remove("active");  
        } else {
            setTimeout(video, 2000, threeMonthsMobile);
          }
      }
    body.classList.toggle("page--planThreeMonths");
  } else if (plan.classList.contains("plans__item--Month")) {
    if (checkWidth(width)) {
      if (monthDesktop.classList.contains("active")) {
        monthDesktop.classList.remove("active");  
      } else {
          setTimeout(video, 2000, monthDesktop);
        }
    } else {
        if (monthMobile.classList.contains("active")) {
          monthMobile.classList.remove("active");  
        } else {
            setTimeout(video, 2000, monthMobile);
          }
      }
    body.classList.toggle("page--planMonth");
  } else if (plan.classList.contains("plans__item--threeDay")) {
    if (checkWidth(width)) {
      if (threeDayDesktop.classList.contains("active")) {
        threeDayDesktop.classList.remove("active");  
      } else {
          setTimeout(video, 2000, threeDayDesktop);
        }
    } else {
        if (threeDayMobile.classList.contains("active")) {
          threeDayMobile.classList.remove("active");  
        } else {
            setTimeout(video, 2000, threeDayMobile);
          }
      }
    body.classList.toggle("page--planThreeDay");
  }
}


for (let i = 0; i < planItems.length; i++) {
//  planItems[i].addEventListener("touchend", activatePlanMobile);
  planItems[i].addEventListener("mouseenter", activatePlan);
  planItems[i].addEventListener("mouseleave", activatePlanTwo);
}


//Показать список языков по клику
language.addEventListener("click", function (evt) {
    select.toggleAttribute("hidden");
});
