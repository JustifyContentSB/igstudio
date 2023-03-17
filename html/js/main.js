"use strict";

$(document).ready(function () {
  // Your code here
  reviewsSlider();
  faqShow();
  featuresSider();
  teamSider();
  menuShow();
  animScroll();
});

// Your functions here

function reviewsSlider() {
  var swiper = new Swiper(".reviews__slider", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      clickable: true,
      el: ".reviews__pagination"
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      },
      900: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30
      }
    }
  });
}
function featuresSider() {
  if ($(window).width() < 900) {
    var swiper = new Swiper(".features__slider", {
      spaceBetween: 30,
      pagination: {
        clickable: true,
        el: ".features__pagination"
      }
    });
  }
}
function teamSider() {
  if ($(window).width() <= 500) {
    var swiper = new Swiper(".team__slider", {
      spaceBetween: 30,
      pagination: {
        clickable: true,
        el: ".team__pagination"
      }
    });
  }
}
function menuShow() {
  if ($(window).width() <= 1200) {
    $(".header__burger").on("click", function (e) {
      e.preventDefault();
      $(".header__burger").toggleClass("header__burger--active");
      $(".header__nav").toggleClass("header__nav--active");
    });
  }
}
function faqShow() {
  $(".faq__answer:first").show();
  $(".faq__manage:first").addClass("faq__manage--active");
  $(".faq__manage").on("click", function () {
    var content = $(this).next();
    $(".faq__answer").not(content).slideUp(400);
    $(".faq__manage").not(this).removeClass("faq__manage--active");
    $(this).toggleClass("faq__manage--active");
    content.slideToggle(400);
  });
}
function animScroll() {
  var controller = new ScrollMagic.Controller();
  var revealElements = document.getElementsByClassName("anim-item");
  for (var i = 0; i < revealElements.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: revealElements[i],
      offset: 50,
      triggerHook: 0.9
    }).setClassToggle(revealElements[i], "visible").addTo(controller);
  }
}