$(document).ready(function () {
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  $(".popup").magnificPopup({
    type: "inline",
    mainClass: "mfp-fade",
  });

  $(".drop-menu").click(function (e) {
    e.stopPropagation();
    $(".header-menu-wrap").addClass("open");
    $("body, html").addClass("overflow");
  });

  $(".close").click(function (e) {
    e.stopPropagation();
    $(".header-menu-wrap").removeClass("open");
    $("body, html").removeClass("overflow");
  });

  $(".read").on("click", function () {
    $(this).closest(".item-bottom").find(".hide-info").toggleClass("open");
    $(this).closest(".item-bottom").find(".hide-info").toggleClass("visible");
    $(this).find("svg").toggleClass("rotate");
    if (!$(this).closest(".item-bottom").find(".hide-info").hasClass("open")) {
      $(this).find("span").text("читать");
    } else {
      $(this).find("span").text("Скрыть");
    }
    return false;
  });

  $(".album-btn").on("click", function () {
    $(this).closest(".archive-item").find(".item-bottom").toggleClass("open");
    if (
      !$(this).closest(".archive-item").find(".item-bottom").hasClass("open")
    ) {
      $(this).find("span").text("смотреть альбом");
      $(this).closest(".archive-item").find(".item-top").removeClass("bg");
    } else {
      $(this).find("span").text("свернуть альбом");
      $(this).closest(".archive-item").find(".item-top").addClass("bg");
    }
    return false;
  });

  $(".album-btn").on("click", function () {
    if (
      $(this).closest(".archive-item").find(".item-bottom").hasClass("open")
    ) {
      $(this).find(".img").addClass("after");
      $(this).find(".img").removeClass("before");
    } else {
      $(this).find(".img").addClass("before");
      $(this).find(".img").removeClass("after");
    }
    return false;
  });

  $(".album-btn2").on("click", function () {
    $(this).closest(".poem-item").find(".item-bottom").toggleClass("open");
    if (!$(this).closest(".poem-item").find(".item-bottom").hasClass("open")) {
      $(this).find("span").text("Посмотреть сборник");
      $(this).closest(".poem-item").find(".item-top").removeClass("bg");
    } else {
      $(this).find("span").text("Свернуть сборник");
      $(this).closest(".poem-item").find(".item-top").addClass("bg");
    }
    return false;
  });

  $(".album-btn2").on("click", function () {
    if ($(this).closest(".poem-item").find(".item-bottom").hasClass("open")) {
      $(this).find(".img").addClass("after");
      $(this).find(".img").removeClass("before");
    } else {
      $(this).find(".img").addClass("before");
      $(this).find(".img").removeClass("after");
    }
    return false;
  });

  const image = document.querySelector(".right-img");

  // Create GSAP timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#header",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      invalidateOnRefresh: true,
    },
  });

  // Add animation to move the image left
  tl.to(image, {
    x: "50%", // Move left by 50% of the image width
    ease: "none", // Linear easing
  });

  const image2 = document.querySelector(".left-img");

  // Create GSAP timeline
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#header",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      invalidateOnRefresh: true,
    },
  });

  // Add animation to move the image left
  tl2.to(image2, {
    x: "-50%", // Move left by 50% of the image width
    ease: "none", // Linear easing
  });

  const image3 = document.querySelector(".right-img-mobile");

  // Create GSAP timeline
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#header",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      invalidateOnRefresh: true,
    },
  });

  // Add animation to move the image left
  tl3.to(image3, {
    x: "100%", // Move left by 50% of the image width
    ease: "none", // Linear easing
  });

  const image4 = document.querySelector(".left-img-mobile");

  // Create GSAP timeline
  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#header",
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      invalidateOnRefresh: true,
    },
  });

  // Add animation to move the image left
  tl4.to(image4, {
    x: "-100%", // Move left by 50% of the image width
    ease: "none", // Linear easing
  });

  $(".video-slider").slick({
    dots: true,
    arrows: true,
    infinite: false,
    variableWidth: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $(".video-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".video-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        },
      },
    ],
  });

  window.onload = () => {
    const iframes = document.querySelectorAll("iframe[data-src]");
    setTimeout(() => {
      iframes.forEach((iframe) => {
        iframe.src = iframe.dataset.src;
      });
    }, 2000); // Задержка 2 секунды
  };

  $(document).on("click", ".custom-play-button", function () {
    const iframe = $(this).closest(".video").find(".rutubePlayer")[0];

    console.log("Кнопка нажата"); // Проверка нажатия
    if (iframe) {
      console.log("Iframe найден"); // Проверка наличия iframe
      iframe.contentWindow.postMessage(
        JSON.stringify({ type: "player:play" }),
        "*"
      );

      iframe.contentWindow.postMessage(
        JSON.stringify({ type: "player:unmute" }),
        "*"
      );

      console.log("Попытка скрыть кнопку");
      $(this).hide();
    } else {
      console.log("Iframe не найден");
    }
  });

  const element = document.querySelector('.info-item.new-item');

function toggleActiveClass() {
  if (window.innerWidth <= 767) {
    element.classList.add('active');   // на мобильных добавляем
  } else {
    element.classList.remove('active'); // на десктопе убираем
  }
}

// Запускаем при загрузке страницы
window.addEventListener('load', toggleActiveClass);
// И при изменении размера окна
window.addEventListener('resize', toggleActiveClass);

  document.addEventListener("DOMContentLoaded", function () {
    const iframes = document.querySelectorAll("iframe[data-src]");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const iframe = entry.target;
          iframe.src = iframe.dataset.src;
          observer.unobserve(iframe);
        }
      });
    });

    iframes.forEach((iframe) => observer.observe(iframe));
  });
});
